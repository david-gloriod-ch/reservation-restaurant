<template>
	<div>
		<div>
			<Calendar />
		</div>
		<div>
			<ReservationAjouter
				:callback="() => {}"
				@confirm="add"
			/>
		</div>
		<div class="mt-3">
			<ReservationListe
				:reservations="store.reservations"
			/>
		</div>
		<ModalError
			title="Ajout impossible"
			message="La date est déjà réservée"
		/>
		<ModalReservationDelete :reservation="reservation" @confirm="() => store.delete(reservation.id)" />
	</div>
</template>

<script setup lang="ts">
import type { tReservation } from '~/types/reservation';
import { Modal } from '~/enums/modal';
import { DefaultReservation } from '~/types/reservation';

const store = useReservationsStore();

function add(reservation: tReservation) {
	if (store.is_reserved(reservation.date))
		return openModal(Modal.ERROR);
	store.add(reservation);
	reset();
}

const reservation = useState<tReservation>('delete-reservation', () => {return {...DefaultReservation}});

</script>
