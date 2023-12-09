import { PixabayResponse } from "@/types/photos";

export async function fetchImages(
  params?: string,
  searchParams?: string
): Promise<PixabayResponse | undefined> {
  try {
    let url = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}`;

    if (params !== undefined && params !== "") {
      url += `&q=${params}`;
    }

    if (searchParams !== undefined && searchParams !== ""){
      url += `&${searchParams}`;
    }
    // Send a GET request to the provided URL with an Authorization header containing an API key
    const res = await fetch(url);

    // Check if the response status is not okay (HTTP status code >= 400)
    if (!res.ok) {
      console.log("Failed to fetch Images!\n");
      throw new Error("Failed to fetch Images!\n");
    }

    // Parse the JSON response into an ImagesResults object
    const response: PixabayResponse = await res.json();
    return response;
  } catch (error) {
    // Handle any errors that occur during the execution of the function
    if (error instanceof Error) console.log(error.stack);
  }
}
