import { BASE_URL } from '../constants';
import { Request } from '../types';

export const fetchData = async <T>(request: Request): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${request.path}`, request);

  return await response.json();
};
