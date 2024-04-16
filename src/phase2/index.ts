import {
  CoordinatesMap,
  HttpMethods,
  Matrix,
  PLANET,
  PLANETS,
  Request,
} from '../types';
import {
  createMetaverseRequestData,
  makeRequestsWithDelay,
} from '../utils/request';

/**
 * Returns a map of coordinates for each planet in the given matrix.
 * This matrix is given by Crossmint API - Phase 2 Goal
 *
 * @param {string[][]} matrix - The matrix containing the planets.
 * @return {CoordinatesMap} - A map of coordinates for each planet.
 */
const getMapCoordinatesOfGivenMatrix = (matrix: string[][]) => {
  const mapOfCoordinates: CoordinatesMap = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // Avoid 'SPACE' elements - no planet
      if (matrix[i][j] === PLANET.EMPTY) continue;

      if (!mapOfCoordinates[matrix[i][j]]) {
        mapOfCoordinates[matrix[i][j]] = [];
      }
      mapOfCoordinates[matrix[i][j]].push([i, j]);
    }
  }

  return mapOfCoordinates;
};

/**
 * Creates an array of metaverse requests based on the given map of coordinates.
 *
 * @param {CoordinatesMap} mapOfCoordinates - The map of coordinates representing the metaverse.
 * @return {Request[]} An array of metaverse requests.
 */
export const createMetaverseRequestDataPhase2 = (
  mapOfCoordinates: CoordinatesMap
) => {
  const allRequest: Request[] = [];

  // Loop through the map of coordinates to create requests with specific data
  Object.entries(mapOfCoordinates).forEach(([key, value]) => {
    // Separate Planet name from Direction/Color
    const keySplitted = key.split('_');
    const planet = keySplitted.length > 1 ? keySplitted[1] : keySplitted[0];

    const additionalData: Record<string, string> = {};

    // Add additional data for each planet if needed
    if (planet === PLANET.COMETH && keySplitted.length > 1)
      additionalData['direction'] = keySplitted[0].toLocaleLowerCase();
    if (planet === PLANET.SOLOON && keySplitted.length > 1)
      additionalData['color'] = keySplitted[0].toLocaleLowerCase();

    // Create request for each coordinates
    allRequest.push(
      ...value.map(coordinates =>
        createMetaverseRequestData({
          coordinates,
          method: HttpMethods.POST,
          planet: `${planet}s`.toLowerCase() as PLANETS,
          additionalData,
        })
      )
    );
  });

  return allRequest;
};

/**
 * Creates a list of requests to the API for each planet in the metaverse phase 2.
 *
 * @return {Request[]} An array of metaverse requests.
 */
export const createPlanets = (matrix: Matrix) => {
  // Create matrix to get coordinates
  const coordinates = getMapCoordinatesOfGivenMatrix(matrix);

  // Create metaverse phase 2 - Planets - generate requests to API
  const requests = createMetaverseRequestDataPhase2(coordinates);

  return requests;
};

/**
 * Creates metaverse phase 2 by making API requests for planets.
 *
 * @return {Promise} An array of metaverse requests with delay.
 */
export const createMetaversePhase2 = async (matrix: Matrix) => {
  // Create Planets requests to make API requests
  const metaverseRequests = createPlanets(matrix);

  // Make requests to API with delay
  return await makeRequestsWithDelay(metaverseRequests);
};
