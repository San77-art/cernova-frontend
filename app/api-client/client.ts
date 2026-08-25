const API_BASE_URL = "/api";

export const api = {
  async getHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (!response.ok) throw new Error("Erro ao buscar health");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  },

  async getMedicina(endpoint: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/medicina/${endpoint}`);
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar ${endpoint}:`, error);
      throw error;
    }
  },

  async getJuridico(endpoint: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/juridico/${endpoint}`);
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar ${endpoint}:`, error);
      throw error;
    }
  },
};

export default api;
