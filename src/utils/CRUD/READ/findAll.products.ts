import axios from "axios";

export default async function findAllProducts() {
  try {
    const { data } = await axios.get("http://localhost:3333/api/products");

    return data;
  } catch (error) {
    console.error(error);
  }
}
