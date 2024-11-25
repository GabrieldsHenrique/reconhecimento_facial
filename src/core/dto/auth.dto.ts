export interface LoginDTO {
  email: string;
  password: string;
}

export interface TokensDTO {
  accessToken: string,
  refreshToken:string
}
