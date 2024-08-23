interface IProduct {
  id: number;
  name: string;
  price: number;
  category: "WINTER" | "SUMMER" | "FALL" | "SPRING";
  image: string;
}
