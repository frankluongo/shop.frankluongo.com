import { fetchProduct } from "$lib/services/sanity";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const product = await fetchProduct(params.slug);
  if (product) return { product };
  throw error(404, "Not found");
};
