import {
  authorInterface,
  generalQuery,
  specificQuery,
} from "../models/interfaces";

export const mapAllItems = (response: any): generalQuery => {
  const author = buildAuthor();
  const firstResults = response.results.slice(0, 4);
  let categories = firstResults.map((category) => {
    return category.category_id;
  });
  // Delete repeated categories
  categories = [...new Set(categories)];
  const results = firstResults.map((result: any) => {
    return {
      id: result.id,
      title: result.title,
      price: {
        // Take the first value in PricesArray
        currency: result.prices.prices[0].currency_id,
        amount: result.prices.prices[0].amount,
        decimals: result.prices.prices[0].decimals || 0,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
      location: result.address.state_name,
    };
  });
  return {
    author,
    categories,
    items: results,
  };
};

export const mapSpecificItem = (response: any): specificQuery => {
  const author = buildAuthor();
  const item = {
    id: response.id,
    title: response.title,
    price: {
      currency: response.currency_id,
      amount: response.price,
      decimals: response.decimals || 0,
    },
    // take the first picture resolution in PicturesArray
    picture: response.pictures[0].secure_url,
    condition: response.condition,
    free_shipping: response.shipping.free_shipping,
    sold_quantity: response.sold_quantity,
    description: response.description,
  };

  return {
    author,
    item,
  };
};

const buildAuthor = (): authorInterface => ({
  name: "Andrés",
  lastname: "Andrade",
});
