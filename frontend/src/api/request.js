import axios from "axios";
import { v4 as uuid } from "uuid";

class HttpRequest {
  constructor(url = `${process.env.VUE_APP_SERVICE_URL}`) {    
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: 120000,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        'x-request-id': uuid(),
      },
    });

    this.axiosInstance.interceptors.request.use(
      function(config) {
        return config;
      },
      function(err) {
        return new Promise(function() {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            store.dispatch("auth/unauthorized");
          }
          throw err;
        });
      }
    );
    
    this.axiosInstance.interceptors.response.use(
      function(response) {        
        response.status;     
        return response;
      },
      function(error) {              
        if (error.response.status === 401) {
          store.dispatch("auth/unauthorized");
        }
        return Promise.reject(error);
      }
    );
  }

  setHeader(header) {    
    this.axiosInstance.defaults.headers.common = header;
    this.axiosInstance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  get(methodName, data) {
    return this.axiosInstance.get(methodName, {
      params: data,
    })
  }

  create(methodName, data) {
    return this.axiosInstance.post(methodName, data);
  }

  update(methodName, data) {
    return this.axiosInstance.put(methodName, data);
  }

  delete(methodName, param, data) {
    return this.axiosInstance.delete(methodName, {
      params: param,
      data: data,
    });
  }

  request(type, url, data, config) {
    let promise = null;
    switch (type) {
      case "GET":
        promise = axios.get(url, { params: data });
        break;
      case "POST":
        promise = axios.post(url, data, config);
        break;
      case "PUT":
        promise = axios.put(url, data);
        break;
      case "DELETE":
        promise = axios.delete(url, data);
        break;
      default:
        promise = axios(config);
        break;
    }
    return promise;
  }
}

export default HttpRequest;