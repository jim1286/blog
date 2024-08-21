export interface ApiResponse {
  status: number;
  statusText: string;
  data?: any;
}

export interface ErrorResponse {
  data: {
    code: number;
    status: number;
    message: string;
  };
}

export interface CustomWindow extends Window {
  _env_: any;
}
