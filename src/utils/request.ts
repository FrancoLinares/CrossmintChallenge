import {
  CANDIDATE_ID,
  CHUNK_SIZE,
  REQUEST_DELAY,
  defaultHeaders,
} from '../constants';
import { HttpMethods, MetaVerseRequest, Request } from '../types';
import { fetchData } from './fetch';

export const createMetaverseRequestData = ({
  coordinates: [row, column],
  method,
  headers = defaultHeaders,
  planet,
  additionalData = {},
}: MetaVerseRequest) => ({
  method: method || HttpMethods.POST,
  headers,
  body: JSON.stringify({
    row,
    column,
    candidateId: CANDIDATE_ID,
    ...additionalData,
  }),
  path: planet,
});

export const makeRequestsWithDelay = async (
  requests: Request[],
  chunkSize: number | undefined = CHUNK_SIZE,
  delay: number | undefined = REQUEST_DELAY
) => {
  const chunks = Math.ceil(requests.length / chunkSize);
  const responses: object[] = [];

  for (let i = 0; i < chunks; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const chunk = requests.slice(start, end);

    responses.push(
      await Promise.all(
        chunk.map(
          async request => await fetchData<object>(request.path, request)
        )
      )
    );

    if (i < chunks - 1) {
      await new Promise(resolve => setTimeout(resolve, delay)); // Add delay between chunks
    }
  }

  return responses;
};
