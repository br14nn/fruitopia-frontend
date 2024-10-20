interface IProduct {
  id: number;
  name: string;
  price: number;
  category: "WINTER" | "SUMMER" | "FALL" | "SPRING";
  image: string;
}

interface IFindUserCart {
  id: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    image: string;
    description?: string;
    price: number;
    category: "FALL" | "SPRING" | "SUMMER" | "WINTER";
  };
}
