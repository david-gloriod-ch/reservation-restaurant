export type tReservation = {
	id: string,
	date: string;
	name: string;
	tel: string;
	time: string;
}

export const DefaultReservation: tReservation = {
	id: '',
	date: new Date().toISOString().substring(0, 10),
	name: '',
	tel: '',
	time: new Date().toISOString().substring(11, 16),
}
