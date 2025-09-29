export interface LocationPoint {
  latitude: number;
  longitude: number;
  timestamp: number;
}

export interface RouteStop {
  id: string;
  address: string;
  status: 'pending' | 'completed' | 'skipped';
}

export interface DriverRoute {
  id: string;
  name: string;
  stops: RouteStop[];
}

export interface DriverAlert {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'critical';
}
