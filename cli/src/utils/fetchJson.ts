export async function fetchJson<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${url}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Unable to fetch registry.`, {
      cause: error,
    });
  }
}
