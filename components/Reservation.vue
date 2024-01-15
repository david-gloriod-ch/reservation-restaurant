<template>
	<div class="card" style="width: 18rem;">
		<div class="card-body">
			<p class="card-text">
				<strong>Date</strong>: {{ reservation.date }}<br />
				<strong>Heure</strong>: {{ reservation.time }}<br />
				<strong>Nom</strong>: {{ reservation.name }}<br />
				<strong>Tél</strong>: {{ reservation.tel }}<br />
			</p>
			<button class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#modal-delete-reservation" @click="_delete">Supprimer</button>
		</div>
	</div>
</template>

<script setup lang="ts">

import type { tReservation } from '~/types/reservation';

const { reservation } = defineProps({
	reservation: {
		type: Object as PropType<tReservation>,
		required: true
	}
});

const store = useReservationsStore();

function _delete() {
	useState<tReservation>('delete-reservation', () => reservation);
}

</script>