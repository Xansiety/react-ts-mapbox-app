import { createContext } from 'react';
import { Map } from 'mapbox-gl';

export interface IMapContextProps {
  isMapReady: boolean;
  map?: Map;
  // methods
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>;
}

export const MapContext = createContext({} as IMapContextProps);
