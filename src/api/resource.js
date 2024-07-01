import { ENV } from "@/utils";

export class Resource {
  async getAllResources(position) {
    try {
      const filterResources = `filters[position][$eq]=${position}`;
      const populateResources = `&populate[0]=documents&populate[1]=documents.file`;

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.RESOURCES}?${filterResources}${populateResources}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
