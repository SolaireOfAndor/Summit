"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Property Loading Error</h2>
      <p className="text-muted-foreground mb-6">{error.message}</p>
      <Button asChild>
        <Link href="/properties">Back to Properties</Link>
      </Button>
    </div>
  )
}

