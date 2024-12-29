import { Fetchify } from "@jmfetchify/fetchify";

const COALLY_API = Fetchify.create({ baseURL: import.meta.env.VITE_BASE_URL })

export interface IBaseResponse<T> {
    data: T
}

export { COALLY_API }