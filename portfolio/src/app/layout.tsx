import Image from 'next/image';
import { urlFor } from "@/sanity/sanityImage"; 
import { client } from "@/sanity/client"; 
import Link from 'next/link';
import AnnouncementBar from "@/components/AnnouncementBar";

interface NavigationData {
  logo: {
    asset: {
      url: string;
    };
  };
  altText: string;
  links: {
    title: string;
    url: string;
  }[];
}


export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navigation: NavigationData = await client.fetch(`*[_type == "navigation"][0]`);

  const logoUrl = navigation?.logo?.asset ? urlFor(navigation.logo.asset).url() : null;
  const altText = navigation?.altText || "Standard logo tekst"; 
  const announcement = await client.fetch(`*[_type == "announcementBar"][0]`);


  return (
    <html lang="dk">
      <body>

      {announcement?.isActive && (
        <AnnouncementBar text1={announcement.text1} text2={announcement.text2} interval={announcement.interval} />
      )}
        <nav>
        {logoUrl ? (
          <Image src={logoUrl} width={120} height={80} alt={altText} />
            ) : (
              <span>{altText}</span>
            )}
            <ul>
            {navigation?.links?.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

