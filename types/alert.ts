export type tAlert = {
	title: string;
	time?: number;
	id?: string;
	message: string;
}

export const DefaultAlert: tAlert = {
	title: 'Alert',
	time: 5000,
	message: 'This is an alert',
}
