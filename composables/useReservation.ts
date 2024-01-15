import type { tReservation } from "~/types/reservation";
import { DefaultReservation } from "~/types/reservation";

export function setDate(date: string) {
	const state = useState<tReservation>('reservation');
	state.value.date = date;
}

export function isSelectedDate(date: string) {
	const state = useState<tReservation>('reservation');
	if (!state.value)
		return false;
	return state.value.date === date;
}

export function reset() {
	const state = useState<tReservation>('reservation');
	state.value = {...DefaultReservation};
}
