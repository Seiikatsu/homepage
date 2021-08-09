const defaultTheme = {
	primary: '#4169E1',
	text: '#EEE',
	textSecondary: '#999',
	background: '#141414',
	backgroundVariant: '#36393F',
	border: 'rgba(241,233,231,0.15)',
	borderVariant: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof defaultTheme;

// preparation for multiple theme support?
export const themes = {
	dark: defaultTheme,
}