import { fetchProducts } from "$lib/services/sanity";
import { error } from "@sveltejs/kit";

export const load = async () => {
  const products = await fetchProducts();
  if (products) return { products };
  throw error(404, "Not found");
};
