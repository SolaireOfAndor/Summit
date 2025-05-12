import { useParams } from "next/navigation"

export default function PropertySlugPage() {
  const params = useParams();
  const slug = params?.slug || "[slug]";
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Property: {slug}</h1>
      <p className="text-lg text-muted-foreground">This is the dynamic property page for <span className="font-mono">{slug}</span>.</p>
    </main>
  )
}

