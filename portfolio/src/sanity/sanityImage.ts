import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client"; // din sanity client

// Opret en instans af URL-builderen
const builder = imageUrlBuilder(client);

// Funktion til at hente billede URL
export const urlFor = (source: any) => builder.image(source).url();
