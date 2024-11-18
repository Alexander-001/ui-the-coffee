//* User Body params
export interface RegisterInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserService {
  username: string;
  email: string;
  password: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface UsernameService {
  username: string;
}

//* Reponse User Api services
export interface User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
}

export interface UserResponse {
  message: string;
  user: User;
}

export interface LoginResponse {
  message: string;
  token: string;
  username: string;
}

export interface GetUserResponse {
  message: string;
  users: User[];
}
