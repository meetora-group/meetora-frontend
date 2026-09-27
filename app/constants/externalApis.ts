export const CAT_GIF_API_URL = "https://cataas.com/cat/gif";
export const FALLBACK_CAT_GIF_URL =
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";

export async function fetchRandomCatGifUrl(): Promise<string> {
  try {
    const uniqueUrl = `${CAT_GIF_API_URL}?t=${Date.now()}-${Math.random()}`;
    const response = await fetch(uniqueUrl, { cache: "no-store" });

    if (!response.ok) {
      return FALLBACK_CAT_GIF_URL;
    }

    return uniqueUrl;
  } catch {
    return FALLBACK_CAT_GIF_URL;
  }
}
