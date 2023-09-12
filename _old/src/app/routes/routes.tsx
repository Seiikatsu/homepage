import {useRoutes} from "react-router";
import {IndexPage} from "../pages/IndexPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {RouteEntry} from './types';

const ROUTES: RouteEntry[] = [
	{
		path: '/',
		identifier: 'index',
		element: <IndexPage/>,
	},
	{
		identifier: 'notFound',
		element: <NotFoundPage/>,
	}
];

export function AppRoutes() {
	return useRoutes(ROUTES);
}
