import { client } from "@/sanity/client"; 
import HeroBanner from "@/components/HeroBanner"; 
import Projekt from "@/components/Projekt";

async function getHeroBanner() {
  const query = `*[_type == "herobanner"][0]`; 
  const data = await client.fetch(query);
  return data;
}

async function getProjekt() {
  const query = `*[_type == "projekter"][0]`; // Henter de første 2 projekter
  const data = await client.fetch(query);
  return data;
}

export default async function HomePage() {
  const heroBanner = await getHeroBanner(); 
  const projekter = await getProjekt();
  
  return (
    <main>
      <h1>Magnus Bomholt</h1>
      <HeroBanner data={heroBanner} />
      <Projekt data={projekter} />
    </main>
  );
}
