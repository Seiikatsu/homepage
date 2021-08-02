import { RouteEntry } from './types';

export const ROUTES: RouteEntry[] = [
];

const ROUTES_ID_MAP = new Map<string, string>();
ROUTES.forEach(route => ROUTES_ID_MAP.set(route.identifier, route.path));
export { ROUTES_ID_MAP };
