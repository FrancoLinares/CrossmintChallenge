import { CANDIDATE_ID, defaultHeaders } from '../constants';
import { HttpMethods, MetaVerseRequest, Request } from '../types';
import { fetchData } from './fetch';

export const createMetaverseRequestData = ({
  coordinates: [row, column],
  method,
  headers = defaultHeaders,
  planet,
}: MetaVerseRequest) => ({
  method: method || HttpMethods.POST,
  headers,
  body: JSON.stringify({
    row,
    column,
    candidateId: CANDIDATE_ID,
  }),
  planet,
});

export const makeRequestsWithDelay = async (
  requests: Request[],
  chunkSize: number,
  delay: number
) => {
  const chunks = Math.ceil(requests.length / chunkSize);
  const responses: object[] = [];

  for (let i = 0; i < chunks; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const chunk = requests.slice(start, end);

    responses.push(
      await Promise.all(
        chunk.map(async request => await fetchData<object>(request))
      )
    );

    if (i < chunks - 1) {
      await new Promise(resolve => setTimeout(resolve, delay)); // Add delay between chunks
    }
  }

  return responses;
};
