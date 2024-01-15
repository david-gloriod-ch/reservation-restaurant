<template>
	<div class="row">
		<Reservation
			v-for="(reservation, index) in reservations"
			:reservation="reservation"
			class="ms-3 mt-3"
		/>
	</div>
</template>

<script setup lang="ts">
import type { tReservation } from '~/types/reservation';


const { reservations } = defineProps({
	reservations: {
		type: Array as PropType<tReservation[]>,
		required: true
	}
});

</script>