export interface generalQuery {
  author: authorInterface;
  categories: Array<string>;
  items: itemsInterface;
}

export interface specificQuery {
  author: authorInterface;
  item: itemSpecificInterface;
}

export interface authorInterface {
  name: string;
  lastname: string;
}

interface itemsInterface {
  id: string;
  title: string;
  price: priceInterface;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

interface itemSpecificInterface {
  id: string;
  title: string;
  price: priceInterface;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface priceInterface {
  currency: string;
  amount: number;
  decimals: number;
}
