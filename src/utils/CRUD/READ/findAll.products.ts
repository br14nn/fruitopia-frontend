import axios from "axios";

export default async function findAllProducts(
  keyword?: string,
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL" | "",
  orderPriceBy?: "asc" | "desc" | "",
) {
  try {
    const { data } = await axios.get(
      `http://localhost:3333/api/products?${keyword && `keyword=${keyword}&`}${category && `category=${category}&`}${orderPriceBy && `order-price-by=${orderPriceBy}&`}`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}
