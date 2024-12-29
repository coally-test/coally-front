import { COALLY_API, IBaseResponse } from "@/config/fetch";
import { IUser } from "@/interfaces/IUser";
import { IBodyLogin, IBodyRegister, ILoginResponse } from "./auth-types";


export const loginServices = async (body: IBodyLogin): Promise<ILoginResponse> => {
    const { data } = await COALLY_API.POST<IBaseResponse<ILoginResponse>>({ endpoint: 'auth/login', body })

    return data
}

export const registerServices = async (body: IBodyRegister) => {
    const { data } = await COALLY_API.POST<IBaseResponse<IUser>>({ endpoint: 'auth/register', body })

    return data
}