import { ENV, authFetch } from "@/utils";

export class Home {
  async getHomeData() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.INICIO}?populate=*`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
