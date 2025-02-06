import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client"; // Importer din Sanity-klient

// Opret en instans af URL-builderen
const builder = imageUrlBuilder(client);

// Funktion til at generere en ImageUrlBuilder
export const urlFor = (source: any) => builder.image(source);
