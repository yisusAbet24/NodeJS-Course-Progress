interface Body {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

import axios from "axios";
const httpCliente = axios;

export const clienteHttpPlugin = {
  get: async (url: string) => {
    const response = await httpCliente.get(url);
    return response.data;
  },
  post: async (url: string, body: Body) => {},
  put: async (url: string, body: Body) => {},
  delete: async (url: string) => {},
};

/* const httpCliente = fetch;

export const clienteHttpPlugin = {
  get: async (url: string) => {
    const response = await httpCliente(url);
    return await response.json();
  },
}; */
