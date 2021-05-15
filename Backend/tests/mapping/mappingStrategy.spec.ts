import {
  mapAllItemsMock,
  specificItemMock,
  initialMapAllItemsMock,
  initialSpecifictItemMock,
} from "../mocks/Responses";

import {
  MapperStrategy,
  MapAllItems,
  MapSpecificItem,
} from "../../src/app/mapping/mappingStrategy";

describe("Mapper Strategy tests", () => {
  it("should transform when its all items", async () => {
    const mapperStrategy = new MapperStrategy(new MapAllItems());
    const mapper = mapperStrategy.doStrategicMethod(initialMapAllItemsMock);
    expect(mapper).toEqual(mapAllItemsMock);
  });

  it("should transform when its specifict item", async () => {
    const mapperStrategy = new MapperStrategy(new MapSpecificItem());
    const mapper = mapperStrategy.doStrategicMethod(initialSpecifictItemMock);
    expect(mapper).toEqual(specificItemMock);
  });
});
