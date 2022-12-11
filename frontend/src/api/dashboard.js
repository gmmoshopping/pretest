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
  
  async getGroupByProvince(){
    try{
      const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}`+"/dashboardgroupbyprovince/");
      return data;
    }catch (error) {
      return { statusCode: error.response.status };
    }
  }

  async getSave(payload) {
    try {
      const { data } = await axios.post(
        `${process.env.VUE_APP_ENDPOINT}` + "/addDashboard/",
        payload
      );
      return data;
    } catch (error) {
      return { statusCode: error };
    }
  } 

  async getUpdate(id,payload){
    try {
      const { data } = await axios.put(`${process.env.VUE_APP_ENDPOINT}` + "/updateDashboard/"+ id,payload);          
      return data;
    } catch (error) {
      return { statusCode: error.response.status };
    }        
  } 

  async getSearch(id) {
    try {
      const { data } = await axios.get(`${process.env.VUE_APP_ENDPOINT}` + "/dashboard/code/"+id);        
      return data;
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }   

  async getDelete(id) {
    try {
      const { data } = await axios.delete(`${process.env.VUE_APP_ENDPOINT}` + "/deleteDashboard/"+id);        
      return data;
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }  

}