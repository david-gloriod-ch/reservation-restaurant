<template>
	<div>
		<button type="button" id="btn-error" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#modal-error"></button>
		<div class="modal fade" id="modal-error" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p>{{ message }}</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const { title, message } = defineProps({
	title: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}
});

</script>