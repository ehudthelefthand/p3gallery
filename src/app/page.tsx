import { db } from "~/server/db";
import { imageTable } from "~/server/db/schema";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.select().from(imageTable);

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div key={`${image.id}`} className="w-1/4">
            <img className="w-full" src={image.url} alt={`${image.name}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
