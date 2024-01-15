<template>
	<table class="table table-dark table-striped-columns">
		<thead>
			<tr>
				<th scope="col" colspan="7" class="text-center">Réservation restaurant janvier 2024</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">Lundi</th>
				<th scope="row">Mardi</th>
				<th scope="row">Mercredi</th>
				<th scope="row">Jeudi</th>
				<th scope="row">Vendredi</th>
				<th scope="row">Samedi</th>
				<th scope="row">Dimanche</th>
			</tr>
			<tr class="table-light">
				<td :class="_getBackground('2024-01-01')" @click="_selectDate('2024-01-01')">1</td>
				<td :class="_getBackground('2024-01-02')" @click="_selectDate('2024-01-02')">2</td>
				<td :class="_getBackground('2024-01-03')" @click="_selectDate('2024-01-03')">3</td>
				<td :class="_getBackground('2024-01-04')" @click="_selectDate('2024-01-04')">4</td>
				<td :class="_getBackground('2024-01-05')" @click="_selectDate('2024-01-05')">5</td>
				<td :class="_getBackground('2024-01-06')" @click="_selectDate('2024-01-06')">6</td>
				<td :class="_getBackground('2024-01-07')" @click="_selectDate('2024-01-07')">7</td>
			</tr>
			<tr class="table-light">
				<td :class="_getBackground('2024-01-08')" @click="_selectDate('2024-01-08')">8</td>
				<td :class="_getBackground('2024-01-09')" @click="_selectDate('2024-01-09')">9</td>
				<td :class="_getBackground('2024-01-10')" @click="_selectDate('2024-01-10')">10</td>
				<td :class="_getBackground('2024-01-11')" @click="_selectDate('2024-01-11')">11</td>
				<td :class="_getBackground('2024-01-12')" @click="_selectDate('2024-01-12')">12</td>
				<td :class="_getBackground('2024-01-13')" @click="_selectDate('2024-01-13')">13</td>
				<td :class="_getBackground('2024-01-14')" @click="_selectDate('2024-01-14')">14</td>
			</tr>
			<tr class="table-light">
				<td :class="_getBackground('2024-01-15')" @click="_selectDate('2024-01-15')">15</td>
				<td :class="_getBackground('2024-01-16')" @click="_selectDate('2024-01-16')">16</td>
				<td :class="_getBackground('2024-01-17')" @click="_selectDate('2024-01-17')">17</td>
				<td :class="_getBackground('2024-01-18')" @click="_selectDate('2024-01-18')">18</td>
				<td :class="_getBackground('2024-01-19')" @click="_selectDate('2024-01-19')">19</td>
				<td :class="_getBackground('2024-01-20')" @click="_selectDate('2024-01-20')">20</td>
				<td :class="_getBackground('2024-01-21')" @click="_selectDate('2024-01-21')">21</td>
			</tr>
			<tr class="table-light">
				<td :class="_getBackground('2024-01-22')" @click="_selectDate('2024-01-22')">22</td>
				<td :class="_getBackground('2024-01-23')" @click="_selectDate('2024-01-23')">23</td>
				<td :class="_getBackground('2024-01-24')" @click="_selectDate('2024-01-24')">24</td>
				<td :class="_getBackground('2024-01-25')" @click="_selectDate('2024-01-25')">25</td>
				<td :class="_getBackground('2024-01-26')" @click="_selectDate('2024-01-26')">26</td>
				<td :class="_getBackground('2024-01-27')" @click="_selectDate('2024-01-27')">27</td>
				<td :class="_getBackground('2024-01-28')" @click="_selectDate('2024-01-28')">28</td>
			</tr>
			<tr class="table-light">
				<td :class="_getBackground('2024-01-29')" @click="_selectDate('2024-01-29')">29</td>
				<td :class="_getBackground('2024-01-30')" @click="_selectDate('2024-01-30')">30</td>
				<td :class="_getBackground('2024-01-31')" @click="_selectDate('2024-01-31')">31</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">

import { Modal } from '~/enums/modal';

const store = useReservationsStore();

function _getBackground(date: string)
{
	if (store.is_reserved(date))
		return 'table-danger';
	if (isSelectedDate(date))
		return 'table-primary';
	return 'table-light';
}

function _selectDate(date: string)
{
	if (store.is_reserved(date))
		return openModal(Modal.ERROR);
	setDate(date);
}

</script>

<style scoped>

td[class^="table-"] {
	cursor: pointer;
}

</style>