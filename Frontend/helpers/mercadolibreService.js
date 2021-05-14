import { BASEURL, GET_ALL, GET_BY_ID, PORT } from "../env/enviroments";

const mercadolibreService = async (search, allItems) => {
  const requestUrl = getUrl(allItems);
  const responseUrl = await fetch(requestUrl + search, { method: "GET" });
  const { response } = await responseUrl.json();

  return allItems
    ? { categories: response.categories, items: response.items }
    : { item: response.item };
};

export default mercadolibreService;

const getUrl = (allItems) => {
  const baseUrl = BASEURL + PORT;
  return allItems ? baseUrl + GET_ALL : baseUrl + GET_BY_ID;
};
