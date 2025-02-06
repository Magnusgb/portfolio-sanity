import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage";

export default function HeroBanner({ data }: { data: any }) {
  if (!data || !data.image?.asset?._ref) {
    return (
      <div>
        <p>Fejl fra backend</p>
      </div>
    );
  }

  return (
    <section>
      <Image
        src={urlFor(data.image).url()} 
        alt={data.heading}
        width={1220}
        height={1080}
      />
      <div>
        <h1>{data.heading}</h1>
        <p>{data.subheading}</p>
        <a
          href={data.buttonUrl}>
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}
