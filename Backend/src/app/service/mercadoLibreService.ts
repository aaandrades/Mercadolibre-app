import axios from "axios";
import { generalQuery } from "../models/interfaces";
import {
  MERCADOLIBRE_BASE_URL,
  MERCADOLIBRE_GET_ALL_METHOD,
  MERCADOLIBRE_GET_ITEM_METHOD,
  MERCADOLIBRE_GET_ITEM_DESCRIPTION_METHOD,
  MERCADOLIBRE_GET_ITEM_CATEGORY_METHOD,
} from "../utils/Constants";

import {
  MapperStrategy,
  MapAllItems,
  MapSpecificItem,
} from "../mapping/mappingStrategy";

export const mercadoLibreService = async (
  search: string,
  flow: boolean
): Promise<any> =>
  flow ? await getAllItems(search) : await orchestrateGetItem(search);

const getAllItems = async (request: any): Promise<any> => {
  const URL = MERCADOLIBRE_BASE_URL + MERCADOLIBRE_GET_ALL_METHOD + request;
  try {
    const initialResponse = await axios.get(encodeURI(URL));
    const mapperStrategy = new MapperStrategy(new MapAllItems());
    const response = await mapperStrategy.doStrategicMethod(
      initialResponse.data
    );
    return populateCategories(response);
  } catch (error) {
    return error.response?.data
      ? {
          status: error.response.data?.status,
          message: error.response.data?.message,
        }
      : {
          status: "409",
          message: "There was an internal error, please try agan",
        };
  }
};

const orchestrateGetItem = async (request: any): Promise<any> => {
  const URL_ITEM =
    MERCADOLIBRE_BASE_URL + MERCADOLIBRE_GET_ITEM_METHOD + request;

  try {
    const initialResponse = await axios.get(encodeURI(URL_ITEM));
    let { id } = initialResponse.data;
    const URL_DESCRIPTION = MERCADOLIBRE_BASE_URL + MERCADOLIBRE_GET_ITEM_METHOD + id + MERCADOLIBRE_GET_ITEM_DESCRIPTION_METHOD;

    const responseDescription: any = await axios.get(
      encodeURI(URL_DESCRIPTION)
    );
    const response = initialResponse.data;
    response.description = responseDescription.data.plain_text;
    const mapperStrategy = new MapperStrategy(new MapSpecificItem());
    return await mapperStrategy.doStrategicMethod(response);

  } catch (error) {
    return error.response?.data
      ? {
          status: error.response.data?.status,
          message: error.response.data?.error,
        }
      : {
          status: "409",
          message: "There was an internal error, please try agan",
        };
  }
};

// Get the category_id and return the name consulting the service
const populateCategories = async (request: generalQuery) => {
  const newCategories = await Promise.all(
    request.categories.map(async (category) => await getCategories(category))
  );
  request.categories = newCategories;
  return request;
};

// Consume the service to get the category name
const getCategories = async (request: string): Promise<any> => {
  const URL = MERCADOLIBRE_BASE_URL + MERCADOLIBRE_GET_ITEM_CATEGORY_METHOD + request;
  try {
    const { data: response } = await axios.get(encodeURI(URL));
    return response.name;
  } catch (error) {
    return request;
  }
};
