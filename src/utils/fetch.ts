import { BASE_URL } from '../constants';
import { Request } from '../types';

export const fetchData = async <T>(
  path: string,
  request: Request
): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${path}`, request);

  return await response.json();
};
