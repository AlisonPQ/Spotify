const BASE_URL = "https://api.spotify.com/v1";

export const fetchClient = async <T>(
  token: string | null,
  url: string | undefined,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: object,
  headers: HeadersInit = {}
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: method,
      headers: {
        "Authorization": token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

