import queryString from 'query-string';
import { CharityInterface, CharityGetQueryInterface } from 'interfaces/charity';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCharities = async (query?: CharityGetQueryInterface): Promise<PaginatedInterface<CharityInterface>> => {
  return fetcher('/api/charities', {}, query);
};

export const createCharity = async (charity: CharityInterface) => {
  return fetcher('/api/charities', { method: 'POST', body: JSON.stringify(charity) });
};

export const updateCharityById = async (id: string, charity: CharityInterface) => {
  return fetcher(`/api/charities/${id}`, { method: 'PUT', body: JSON.stringify(charity) });
};

export const getCharityById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/charities/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCharityById = async (id: string) => {
  return fetcher(`/api/charities/${id}`, { method: 'DELETE' });
};
