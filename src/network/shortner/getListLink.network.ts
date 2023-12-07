import { API_KEY, BACKEND_URL } from '@/utils/constansts';

type ResponseDataType = {
  id: string;
  alias: string;
  url: string;
  short_url: string;
};

type ResponseType = {
  data: ResponseDataType[];
};

export async function getListLinkNetwork(): Promise<ResponseType | undefined> {
  const url = `${BACKEND_URL}/api/v1/links`;
  const token = `Bearer ${API_KEY}`;

  const headers = new Headers({
    Authorization: token,
    Accept: 'application/json',
  });

  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as ResponseType;
  } catch (_err) {
    const err = _err as Error;
    console.error('Error:', err);

    // rethrow error
    throw new Error(err.message);
  }
}
