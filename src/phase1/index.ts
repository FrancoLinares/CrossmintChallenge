import { CHUNK_SIZE, REQUEST_DELAY } from '../constants';
import { HttpMethods, PLANETS } from '../types';
import {
  createMetaverseRequestData,
  makeRequestsWithDelay,
} from '../utils/request';

/**
 * Generates the coordinates of a matrix over X avoiding the corners (2 elements).
 *
 * @param {number} matrixSize - The size of the matrix.
 * @return {number[][]} - An array of coordinates.
 */
export const getCoordinatesOfMatrixOverX = (matrixSize: number): number[][] => {
  const arrayOfCoordinates: number[][] = [];

  for (let i = 2; i < matrixSize - 2; i++) {
    for (let j = 2; j < matrixSize - 2; j++) {
      if (i === j || i + j === matrixSize - 1) {
        arrayOfCoordinates.push([i, j]);
      }
    }
  }

  return arrayOfCoordinates;
};

export const createPolyanets = () => {
  // Metaverse phase 1 matrix size
  const matrixSize = 11;

  // Create matrix to get coordinates
  const coordinates = getCoordinatesOfMatrixOverX(matrixSize);

  // Create metaverse phase 1 - Polyanets - making request to API
  const requests = coordinates.map(coordinates =>
    createMetaverseRequestData({
      coordinates,
      method: HttpMethods.POST,
      planet: PLANETS.POLYANETS,
    })
  );

  return requests;
};

export const createMetaversePhase1 = async () => {
  // Create Polyplants requests to make API requests
  const metaverseRequests = createPolyanets();

  // Make requests to API with delay
  return await makeRequestsWithDelay(
    metaverseRequests,
    CHUNK_SIZE,
    REQUEST_DELAY
  );
};
