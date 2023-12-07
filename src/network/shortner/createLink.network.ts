import { API_KEY, BACKEND_URL } from '@/utils/constansts';

type ResponseType = {
  id: string;
  alias: string;
  url: string;
  short_url: string;
};

export async function createLinkNetwork(url: string): Promise<ResponseType | undefined> {
  const apiUrl = `${BACKEND_URL}/api/v1/links`;
  const apiKey = API_KEY;

  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${apiKey}`,
  });

  const options = {
    method: 'POST',
    headers,
    body: new URLSearchParams({
      url,
    }),
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as ResponseType;
  } catch (error) {
    console.error('Error:', error);

    // Rethrow error
    throw new Error((error as Error).message);
  }
}
