import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ghzl2oef",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});