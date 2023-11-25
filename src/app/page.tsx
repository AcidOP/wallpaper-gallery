import Image from "next/image";
import { headers } from 'next/headers';
import { Suspense } from "react";

const Homepage = async () => {
  const headerList = headers();
  // http for dev server, https for production
  const protocol = headerList.get('x-forwarded-proto');
  // localhost for dev server, domain name for production
  const hostname = headerList.get('host');

  const url = `${protocol}://${hostname}/api/images`;
  const res = await fetch(url, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const images: string[] = await res.json();

  return (
    <div className="m-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      <Suspense fallback={<div>Loading...</div>}>
      {
        images.map(image => {
          return (
            <Image
              src={`/images/${image}`}
              alt={image}
              key={image}
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-video w-full hover:cursor-pointer"
            />
          )
        })
      }
      </Suspense>
    </div>
  )
}

export default Homepage