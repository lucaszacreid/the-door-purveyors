import { NextResponse } from 'next/server'

interface NominatimResult {
  display_name: string
  address: {
    house_number?: string
    road?: string
    neighbourhood?: string
    suburb?: string
    village?: string
    town?: string
    city?: string
    county?: string
    state_district?: string
    state?: string
    postcode?: string
  }
}

function formatSuggestion(item: NominatimResult): string {
  const a = item.address
  const parts: string[] = []

  const place = a.city || a.town || a.village || a.suburb || a.neighbourhood
  if (place) parts.push(place)

  const region = a.county || a.state_district
  if (region && region !== place) parts.push(region)

  if (a.postcode) parts.push(a.postcode)

  return parts.length > 0 ? parts.join(', ') : item.display_name.split(',').slice(0, 3).join(',').trim()
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')?.trim()

  if (!q || q.length < 2) {
    return NextResponse.json({ suggestions: [] })
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&countrycodes=gb&format=json&limit=8&addressdetails=1`
    const res = await fetch(url, {
      headers: { 'User-Agent': 'TheDoorPurveyors/1.0 (contact@thedoorpurveyors.co.uk)' },
      next: { revalidate: 60 },
    })

    if (!res.ok) return NextResponse.json({ suggestions: [] })

    const data: NominatimResult[] = await res.json()

    const suggestions = Array.from(
      new Set(data.map(formatSuggestion).filter(Boolean))
    ).slice(0, 6)

    return NextResponse.json({ suggestions })
  } catch {
    return NextResponse.json({ suggestions: [] })
  }
}
