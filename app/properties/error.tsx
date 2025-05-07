"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PropertiesError({ error }: { error: Error }) {
  return (
    <div className="container py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8">
        We encountered an error while loading the properties.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
} 