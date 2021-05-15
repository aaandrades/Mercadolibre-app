import { mapAllItems, mapSpecificItem } from '../../src/app/mapping/mappingResponse';
import { initialMapAllItemsMock, initialSpecifictItemMock, mapAllItemsMock, specificItemMock } from '../mocks/Responses';

describe("Mapper tests", () => {
  it("Should transform all items", () => {
    const mapper = mapAllItems(initialMapAllItemsMock);
    expect(mapper).toEqual(mapAllItemsMock);
  });

  it("Should transform just one item", () => {
    const mapper = mapSpecificItem(initialSpecifictItemMock);
    expect(mapper).toEqual(specificItemMock);
  });
});
