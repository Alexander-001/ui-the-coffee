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

export interface UserEmailResponse {
  message: string;
  successRegister: boolean;
  errorSession: boolean;
}
export interface UserResponse {
  message: string;
  user: User | null;
  errorSession: boolean;
}

export interface LoginResponse {
  message: string;
  token: string;
  username: string;
  errorSession: boolean;
}

export interface GetUserResponse {
  message: string;
  users: User[];
  errorSession: boolean;
}

export interface ErrorReponse {
  error: string;
  message: string;
  status: number;
}

export interface UserRoles {
  roles: {
    id: number;
    username: string;
    email: string;
    roles: Role[];
  };
  errorResponse: boolean;
  message: string;
}

export interface Role {
  id: number;
  name: string;
}
