import { PUBLIC_SANITY_ID, PUBLIC_SANITY_DATA } from "$env/static/public";
import { createClient } from "@sanity/client";
import groq from "groq";

export const client = createClient({
  projectId: PUBLIC_SANITY_ID,
  dataset: PUBLIC_SANITY_DATA,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-12-05", // date of setup
});

export async function fetchProduct(slug) {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      brand->,
      description,
      images,
      originalPrice,
      price,
      slug,
      thumbnail,
      title,
      url
    }`,
    {
      slug,
    }
  );
}

export async function fetchProducts() {
  return await client.fetch(
    groq`*[_type == "product" && defined(slug.current)]{
      brand->,
      _id,
      price,
      slug,
      thumbnail,
      title
    }`
  );
}
