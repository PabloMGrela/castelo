export interface GoogleReview {
  name: string;
  text: string;
  rating: number;
  profilePhoto?: string;
  url: string;
  time: number;
}

const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=10613672407578228415";

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured, skipping Google reviews");
    return [];
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews&language=es&key=${encodeURIComponent(apiKey)}`;

  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      console.warn(`Google Places API returned ${res.status}`);
      return [];
    }

    const data = await res.json();
    const reviews = data?.result?.reviews;

    if (!Array.isArray(reviews)) return [];

    return reviews
      .filter((r: { text?: string }) => r.text && r.text.length > 0)
      .map((r: { author_name: string; text: string; rating: number; profile_photo_url?: string; time: number }) => ({
        name: r.author_name,
        text: r.text,
        rating: r.rating,
        profilePhoto: r.profile_photo_url,
        url: GOOGLE_MAPS_URL,
        time: r.time,
      }));
  } catch (err) {
    console.warn("Failed to fetch Google reviews:", err);
    return [];
  }
}
