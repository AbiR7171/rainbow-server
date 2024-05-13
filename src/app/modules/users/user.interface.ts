export type TUser = {
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword?: string,
    email: string,
    number: string,
    image?: string,
    role ? : "user" | "admin"
}