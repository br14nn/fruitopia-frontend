interface IProduct {
  id: number;
  name: string;
  price: number;
  category: "WINTER" | "SUMMER" | "FALL" | "SPRING";
  image: string;
}

interface ICreateUser {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
}
