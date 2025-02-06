import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage";

export default function Projekter({ data }: { data: any }) {
  // Log data for at se, hvad vi modtager
  console.log("Projekter data:", data);

  // Hvis der ikke er projekter
  if (!data || data.length === 0) {
    return (
      <div>
        <p>Fejl fra backend - Ingen projekter fundet</p>
      </div>
    );
  }

  return (
    <section>
      {data.map((project: any, index: number) => {
        // Tjek om projektet har billeder
        if (!project?.images?.[0]?.asset?._ref) {
          return (
            <div key={index}>
              <p>Fejl - Billede mangler for projekt: {project.heading}</p>
            </div>
          );
        }

        // Hent billede URL
        const imageUrl = urlFor(project.images[0]).url();

        // Hent de andre nødvendige data
        const heading = project.heading || "Ingen titel";
        const subheading = project.subheading || "Ingen undertekst";
        const details = project.details?.[0]?.children?.[0]?.text || "Ingen detaljer";

        return (
          <div key={project._id}>
            <Image
              src={imageUrl}
              alt={heading}
              width={1220}
              height={1080}
            />
            <div>
              <h1>{heading}</h1>
              <h2>{subheading}</h2>
              <p>{details}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
