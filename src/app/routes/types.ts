import { ComponentType } from 'react';

export type RouteEntry = {
	path: string;
	identifier: string;
	component: ComponentType;
	exact?: boolean;
};
