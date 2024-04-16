import { BASE_URL, CANDIDATE_ID } from '../constants';
import { HttpMethods } from '../types';

export const fetchData = async <T>(
  path: string,
  request: RequestInit
): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${path}`, request);

  return await response.json();
};

export const fetchCurrentGoal = async () => {
  const response = await fetchData<any>(`map/${CANDIDATE_ID}/goal`, {
    method: HttpMethods.GET,
  });

  return response;
};
