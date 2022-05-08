type ProductProps = {
  id?: number;
  name?: string;
  image?: string;
  coverPhoto?: string;
  featured?: false;
  address?: string;
  createdAt?: string;
  updatedAt?: string;
  year?: number;
  category?: "web";
  shipping?: Shipping;
  price?: string;
  status?: "approved" | " pending" | "rejected";
  rating?: number;
  reviews?: number;
  popularity?: "high" | "medium" | "low";
  brand?: string;
  description?: string;
};

type Children = {
  children: React.ReactNode
};
