type Shipping = "free" | "paid";

export type ProductProps = {
  id: number;
  name: string;
  image: string;
  coverPhoto: string;
  featured: false;
  address: string;
  createdAt: string;
  updatedAt: string;
  year: number;
  category: "web";
  shipping: Shipping;
  price: string;
  status: "approved" | " pending" | "rejected";
  rating: number;
  reviews: number;
  popularity: "high" | "medium" | "low";
  brand: string;
};

export type Product = {
  products: ProductProps[];
};

export default ProductProps;
