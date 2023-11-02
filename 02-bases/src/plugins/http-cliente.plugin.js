import axios from "axios";
const httpCliente = axios;

export const clienteHttpPlugin = {
  get: async (url) => {
    const response = await httpCliente.get(url);
    return response.data;
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

// !FETCH

/*  
export const clienteHttpPlugin = {
    get: async (url) => {
      const response = await httpCliente(url);
      return await response.json();
    },
}; */
