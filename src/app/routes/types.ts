import {RouteObject} from "react-router";

export type RouteEntry = RouteObject & {
	identifier: string;
};
