import api from "@/api/axios"
import { EndPoints } from "../api/axios";

export const getProducts = () => api.get(EndPoints.products)

