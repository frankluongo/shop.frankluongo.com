import imageUrlBuilder from "@sanity/image-url";
import { client } from "$lib/services/sanity";

const builder = imageUrlBuilder(client);

export function sanityImage(source) {
  return builder.image(source);
}
