export interface IProduct {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  qty:         number;
  subtotal:    number;
  rating:      Rating;
}

export interface Rating {
  rate:  number;
  count: number;
}