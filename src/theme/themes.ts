const defaultTheme = {
	primary: 'rgba(220,120,95,1)',
	text: 'rgba(241,233,231,1)',
	textSecondary: 'rgba(241,233,231,0.6)',
	textDisabled: 'black',
	textActive: 'lightBlue',
	background: '#2f3136',
	backgroundVariant: '#36393f',
	border: 'rgba(241,233,231,0.15)',
	borderLight: 'rgba(241,233,231,0.05)',
	alert: 'red',
};

export type Theme = typeof defaultTheme;

// preparation for multiple theme support?
export const themes = {
	dark: defaultTheme,
}