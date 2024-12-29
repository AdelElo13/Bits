export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

export interface AuthError {
  message: string;
  code: string;
}