import { defineStore } from "pinia";
import { DefaultAlert, type tAlert } from "~/types/alert";

type alertStore = {
	_alerts: tAlert[];
}

export const useAlertStore = defineStore({
	id: 'alert',
	state: (): alertStore => ({
		_alerts: [],
	}),
	getters: {
		alerts: (state: alertStore) => state._alerts,
	},
	actions: {
		add(alert: tAlert) {
			if (!alert.time)
				alert.time = DefaultAlert.time;
			alert.id = `${ Math.random().toString(36) }`
			this.alerts.push(alert);
		},
		remove(id: string) {
			const index = this.alerts.findIndex((alert: tAlert) => alert.id === id);
			this._alerts.splice(index, 1);
		},
		update(id: string, alert: tAlert) {
			const index = this.alerts.findIndex((alert: tAlert) => alert.id === id);
			this._alerts[index] = alert;
		},
		clear() {
			this._alerts = [];
		}
	},
});
