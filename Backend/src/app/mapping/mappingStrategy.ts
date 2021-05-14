import { mapAllItems, mapSpecificItem } from "./mappingResponse";

// Strategy to mapper the response, in a future it
// can be scaled to many other mappers.
export class MapperStrategy {
  private strategy: StrategyMapping;

  constructor(strategy: StrategyMapping) {
    this.strategy = strategy;
  }

  setStrategy(strategy: StrategyMapping) {
    this.strategy = strategy;
  }

  doStrategicMethod(responseService) {
    return this.strategy.doMappingResponse(responseService);
  }
}

export class MapAllItems {
  public doMappingResponse = (responseService: Object) =>
    mapAllItems(responseService);
}

export class MapSpecificItem implements StrategyMapping {
  public doMappingResponse = (responseService: Object) =>
    mapSpecificItem(responseService);
}

interface StrategyMapping {
  doMappingResponse(name: Object): any;
}
