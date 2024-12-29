import { IUser } from "@/interfaces/IUser"

export type IBodyLogin = {
    identifier: string,
    password: string
}

export type IBodyRegister = {
    username: string,
    password: string
    email: string
}

export type ILoginResponse = {
    user: IUser,
    token: string
}