<template>
	<div>
		<div class="list-group col-12 col-md-6 m-auto">
			<div
				v-for="contact in store.contacts"
				:key="contact.id"
				class="list-group-item d-flex justify-content-between align-items-start col-12"
			>
				<div class="col-6 col-md-6 m-auto">
					<NuxtLink :to="`/contacts/${contact.id}`" class="fw-bold">{{ contact.firstname }} {{ contact.lastname }}</NuxtLink>
				</div>
				<div class="col-3 col-md-2 m-auto text-center">
					<span class="badge rounded-pill col-8" :class="`${contact.difference < 0 ? 'bg-danger' : 'bg-primary'}`">{{ contact.difference }}</span>
				</div>
				<div class="col-3 col-md-2 text-right">
					<div class="btn-group">
						<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Action
						</button>
						<ul class="dropdown-menu">
							<li><button class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target="#modal-update-contact" @click="_update(contact)">Modifier</button></li>
							<li><button class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#modal-delete-contact" @click="_delete(contact)">Supprimer</button></li>
						</ul>
					</div>
				</div>
			</div>
			<div
				class="list-group-item d-flex justify-content-between align-items-start"
			>
				<FormContactAdd />
			</div>
		</div>
		<ModalContactEdit
			:contact="store.selected?.contact"
			:confirm="store.execute"
			:callback="store.cancel"
		/>
		<ModalContactDelete
			:contact="store.selected?.contact"
			:confirm="store.execute"
			:callback="store.cancel"
		/>
	</div>
</template>

<script setup lang="ts">

import { type tContactCreation, DefaultContactCreation, type tContact, type tContactUpdate } from '~/types/contact';

const store = useContactStore();

const _update = (_contact: tContact) => { store.select(_contact.id, _contact, 'update'); }
const _delete = (_contact: tContact) => { store.select(_contact.id, _contact, 'delete'); }

onMounted(async () => {
	await store.fetch();
});

</script>