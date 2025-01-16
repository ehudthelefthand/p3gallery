import { db } from "~/server/db";
import { imageTable } from "~/server/db/schema";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8E0pvaxNWUoTGI326A90Q5eZLJPzaYw7fBdxg",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8vTaR9E1jEUsHtWaCQBomnYwquGSc0OMpe2gI",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8unrBXUfjSBU5ns6rNEFpMzhWy7fboIC9k1HZ",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8L00nhlvS41WlGaXUgROFCYAkKL8IZr2x0Tbh",
];

export default async function HomePage() {
  const images = await db.select().from(imageTable);

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div key={`${image.id}`} className="w-1/4">
            <img className="w-full" src={image.url} alt="mock" />
          </div>
        ))}
      </div>
    </main>
  );
}
