import axios from "axios";

//@ts-ignore
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data: any) => axiosClient.post("/user-resumes", data);

const GetUserResume = (userEmail: any) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

export default { CreateNewResume, GetUserResume };
