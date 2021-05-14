"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapSpecificItem = exports.MapAllItems = exports.MapperStrategy = void 0;
const mappingResponse_1 = require("./mappingResponse");
// Strategy to mapper the response, in a future it
// can be scaled to many other mappers.
class MapperStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    doStrategicMethod(responseService) {
        return this.strategy.doMappingResponse(responseService);
    }
}
exports.MapperStrategy = MapperStrategy;
class MapAllItems {
    constructor() {
        this.doMappingResponse = (responseService) => mappingResponse_1.mapAllItems(responseService);
    }
}
exports.MapAllItems = MapAllItems;
class MapSpecificItem {
    constructor() {
        this.doMappingResponse = (responseService) => mappingResponse_1.mapSpecificItem(responseService);
    }
}
exports.MapSpecificItem = MapSpecificItem;
//# sourceMappingURL=mappingStrategy.js.map