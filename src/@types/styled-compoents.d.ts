import 'styled-components';
import { Theme } from '../theme/themes';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
