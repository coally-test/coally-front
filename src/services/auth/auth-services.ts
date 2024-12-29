import { COALLY_API, IBaseResponse } from "@/config/fetch";
import { IUser } from "@/interfaces/IUser";
import { IBodyLogin, IBodyRegister, ILoginResponse } from "./auth-types";
import { ENDPOINTS } from "@/constants/endpoints";


export const loginServices = async (body: IBodyLogin): Promise<ILoginResponse> => {
    const { data } = await COALLY_API.POST<IBaseResponse<ILoginResponse>>({ endpoint: ENDPOINTS.AUTH.LOGIN, body })

    return data
}

export const registerServices = async (body: IBodyRegister) => {
    const { data } = await COALLY_API.POST<IBaseResponse<IUser>>({ endpoint: ENDPOINTS.AUTH.REGISTER, body })

    return data
}