export interface Credentials {
    email: string;
    password: string;
  }
  
  export interface Tokens {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string;
    RefreshToken: string;
    TokenType: string;
  }
  
  export interface AuthResponse {
    message: string;
    tokens: Tokens;
  }

  export interface RegisterData {
    name: string;
    email: string;
    password_hash: string;
    role: string;
    cellphone: string;
  }
  
  export interface RegisterResponse {
    message: string;
    data: {
      name: string;
      email: string;
      role: string;
    };
  }