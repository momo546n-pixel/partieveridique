import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gris-doux py-24 flex items-center justify-center">
        <p className="text-gris-moyen text-center px-4">
          Les prochaines sections arrivent aux etapes suivantes...
        </p>
      </div>
    </main>
  );
}
