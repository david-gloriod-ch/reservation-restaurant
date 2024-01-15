<template>
	<div>
		<form @submit.prevent="_add">
			<div class="row">
				<div class="col-6">
					<label for="nom">Nom</label>
					<input type="text" id="nom" name="nom" class="form-control" v-model="reservation.name" required />
				</div>
				<div class="col-6">
					<label for="tel">Téléphone</label>
					<input type="tel" id="tel" name="tel" class="form-control" v-model="reservation.tel" required />
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<label for="date">Date</label>
					<input type="date" id="date" name="date" class="form-control" v-model="reservation.date" required />
				</div>
				<div class="col-6">
					<label for="time">Heure</label>
					<input type="time" id="time" name="time" class="form-control" v-model="reservation.time" required />
				</div>
			</div>
			<div class="mt-3">
				<button class="btn btn-primary">Ajouter</button>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import type { tReservation } from '~/types/reservation';
import { DefaultReservation } from '~/types/reservation';

const emit = defineEmits(['confirm']);

const reservation = useState<tReservation>('reservation', () => ({...DefaultReservation}))

function defaultValues()
{
	reservation.value = {...DefaultReservation}
}

function _add() {
	emit('confirm', {...reservation.value});
}

onActivated(() => {
	defaultValues();
});

</script>