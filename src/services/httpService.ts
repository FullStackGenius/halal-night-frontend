import apiClient from "./apiClient";

export const http = {
  get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    const res = await apiClient.get<T>(url, { params });
    return res.data;
  },

  post: async <T>(url: string, data?: any): Promise<T> => {
    const res = await apiClient.post<T>(url, data);
    return res.data;
  },

  put: async <T>(url: string, data?: any): Promise<T> => {
    const res = await apiClient.put<T>(url, data);
    return res.data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const res = await apiClient.delete<T>(url);
    return res.data;
  },
};
