import axios from "axios";

const baseURL = "https://server-2-80a59-default-rtdb.europe-west1.firebasedatabase.app";

export const getPageData = (pageName:string) => {
  return axios.get(`${baseURL}/pages/${pageName}.json`);
}

export const savePageData = (pageName:string, pageContent: { title: string; content: string }) => {
  return axios.put(`${baseURL}/pages/${pageName}`, pageContent);
}