"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercadoLibreService = void 0;
const axios_1 = __importDefault(require("axios"));
const Constants_1 = require("../utils/Constants");
const mappingStrategy_1 = require("../mapping/mappingStrategy");
const mercadoLibreService = async (search, flow) => flow ? await getAllItems(search) : await orchestrateGetItem(search);
exports.mercadoLibreService = mercadoLibreService;
const getAllItems = async (request) => {
    var _a, _b, _c;
    const URL = Constants_1.MERCADOLIBRE_BASE_URL + Constants_1.MERCADOLIBRE_GET_ALL_METHOD + request;
    try {
        const initialResponse = await axios_1.default.get(encodeURI(URL));
        const mapperStrategy = new mappingStrategy_1.MapperStrategy(new mappingStrategy_1.MapAllItems());
        const response = await mapperStrategy.doStrategicMethod(initialResponse.data);
        return populateCategories(response);
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data)
            ? {
                status: (_b = error.response.data) === null || _b === void 0 ? void 0 : _b.status,
                message: (_c = error.response.data) === null || _c === void 0 ? void 0 : _c.message,
            }
            : {
                status: "409",
                message: "There was an internal error, please try agan",
            };
    }
};
const orchestrateGetItem = async (request) => {
    var _a, _b, _c;
    const URL_ITEM = Constants_1.MERCADOLIBRE_BASE_URL + Constants_1.MERCADOLIBRE_GET_ITEM_METHOD + request;
    try {
        const initialResponse = await axios_1.default.get(encodeURI(URL_ITEM));
        let { id } = initialResponse.data;
        const URL_DESCRIPTION = Constants_1.MERCADOLIBRE_BASE_URL + Constants_1.MERCADOLIBRE_GET_ITEM_METHOD + id + Constants_1.MERCADOLIBRE_GET_ITEM_DESCRIPTION_METHOD;
        const responseDescription = await axios_1.default.get(encodeURI(URL_DESCRIPTION));
        const response = initialResponse.data;
        response.description = responseDescription.data.plain_text;
        const mapperStrategy = new mappingStrategy_1.MapperStrategy(new mappingStrategy_1.MapSpecificItem());
        return await mapperStrategy.doStrategicMethod(response);
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data)
            ? {
                status: (_b = error.response.data) === null || _b === void 0 ? void 0 : _b.status,
                message: (_c = error.response.data) === null || _c === void 0 ? void 0 : _c.error,
            }
            : {
                status: "409",
                message: "There was an internal error, please try agan",
            };
    }
};
// Get the category_id and return the name consulting the service
const populateCategories = async (request) => {
    const newCategories = await Promise.all(request.categories.map(async (category) => await getCategories(category)));
    request.categories = newCategories;
    return request;
};
// Consume the service to get the category name
const getCategories = async (request) => {
    const URL = Constants_1.MERCADOLIBRE_BASE_URL + Constants_1.MERCADOLIBRE_GET_ITEM_CATEGORY_METHOD + request;
    try {
        const { data: response } = await axios_1.default.get(encodeURI(URL));
        return response.name;
    }
    catch (error) {
        return request;
    }
};
//# sourceMappingURL=mercadoLibreService.js.map