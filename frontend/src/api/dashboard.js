import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class DashboardProvider extends HttpRequest {

  async getData() {
    try {
      const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/dashboard/");        
      return data;
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }  
}