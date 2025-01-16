const mockURLs = [
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8E0pvaxNWUoTGI326A90Q5eZLJPzaYw7fBdxg",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8vTaR9E1jEUsHtWaCQBomnYwquGSc0OMpe2gI",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8unrBXUfjSBU5ns6rNEFpMzhWy7fboIC9k1HZ",
  "https://kk5ufmcho3.ufs.sh/f/6J4TnvydzIe8L00nhlvS41WlGaXUgROFCYAkKL8IZr2x0Tbh",
];

const mockImages = mockURLs.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/4">
            <img className="w-full" src={image.url} alt="mock" />
          </div>
        ))}
      </div>
    </main>
  );
}
