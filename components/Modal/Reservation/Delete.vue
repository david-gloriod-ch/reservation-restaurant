<template>
	<div>
		<div class="modal fade" id="modal-delete-reservation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Supprimer la réservation</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p>Êtes-vous sûr de vouloir supprimer la réservation du {{ reservation.date }}</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="_confirm">Supprimer</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { tReservation } from '~/types/reservation';

const emit = defineEmits(['confirm']);

const { reservation } = defineProps({
	reservation: {
		type: Object as PropType<tReservation>,
		required: true
	}
});

function _confirm() {
	emit('confirm');
}

</script>