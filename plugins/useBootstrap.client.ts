import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin((nuxtApp: any) => {
	nuxtApp.provide('bootstrap', bootstrap);
	const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
	dataSpyList.forEach(dataSpyEl => {
		bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
	})
})
