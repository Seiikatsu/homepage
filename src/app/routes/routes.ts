import {RouteEntry} from './types';
import {IndexPage} from "../pages/IndexPage";

export const ROUTES: RouteEntry[] = [
	{
		path: '/',
		identifier: 'index',
		component: IndexPage,
	}
];

const ROUTES_ID_MAP = new Map<string, string>();
ROUTES.forEach(route => ROUTES_ID_MAP.set(route.identifier, route.path));
export { ROUTES_ID_MAP };
