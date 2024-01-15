import { defineStore } from "pinia";
import { DefaultReservation, type tReservation } from "~/types/reservation";

type reservationsStore = {
	_reservations: tReservation[];
}

export const useReservationsStore = defineStore({
	id: 'reservation',
	state: (): reservationsStore => ({
		_reservations: [],
	}),
	getters: {
		reservations: (state: reservationsStore) => state._reservations,
	},
	actions: {
		add(reservation: tReservation) {
			reservation.id = `${ Math.random().toString(36) }`
			this._reservations.push(reservation);
		},
		delete(id: string) {
			const index = this.reservations.findIndex((reservation: tReservation) => reservation.id === id);
			this._reservations.splice(index, 1);
		},
		update(id: string, reservation: tReservation) {
			const index = this.reservations.findIndex((reservation: tReservation) => reservation.id === id);
			this._reservations[index] = reservation;
		},
		is_reserved(date: string) {
			return this.reservations.find((reservation: tReservation) => {
				return reservation.date === date;
			});
		},
		clear() {
			this._reservations = [];
		}
	},
});
