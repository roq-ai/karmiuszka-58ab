import axios from 'axios';
import queryString from 'query-string';
import { PillowInterface, PillowGetQueryInterface } from 'interfaces/pillow';
import { GetQueryInterface } from '../../interfaces';

export const getPillows = async (query?: PillowGetQueryInterface) => {
  const response = await axios.get(`/api/pillows${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPillow = async (pillow: PillowInterface) => {
  const response = await axios.post('/api/pillows', pillow);
  return response.data;
};

export const updatePillowById = async (id: string, pillow: PillowInterface) => {
  const response = await axios.put(`/api/pillows/${id}`, pillow);
  return response.data;
};

export const getPillowById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pillows/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePillowById = async (id: string) => {
  const response = await axios.delete(`/api/pillows/${id}`);
  return response.data;
};
