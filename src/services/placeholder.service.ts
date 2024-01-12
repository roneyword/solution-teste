const baseURL = "https://jsonplaceholder.typicode.com";

export const API = async (route: string) => {
  try {
    const response = await fetch(`${baseURL}/${route}`);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Erro na chamada da API:", error);
    throw error;
  }
};