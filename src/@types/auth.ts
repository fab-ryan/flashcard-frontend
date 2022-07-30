
export interface Auth {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;

}
export interface login {
    email: string;
    password: string;
}
export interface register {
    email: string;
    password: string;
    confirmPassword: string;
    lastName: string;
    firstName: string;
    username: string;

}
export type LoginMutation = {
    login: login[]
}
export type categoryArray = any[] | any;