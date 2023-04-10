/* eslint-disable no-unused-vars */
// const { values } = require("core-js/core/array");
const objs = {
	name: 'мечник',
	health: 10,
	level: 2,
	attack: 80,
	defence: 40,
};
const order = ['name', 'level'];

export default function orderByProps(obj, ord) { // Делаем мобильную ф-цию
	const objts = { ...obj }; // делаем копию
	const sortListObject = [];

	for (let i = 0; i < ord.length; i += 1) {
		if (objts[ord[i]]) {
			sortListObject.push({ keys: ord[i], values: objts[ord[i]] });
			delete objts[ord[i]];
		}
	}

	for (const key of Object.keys(objts).sort()) { // сортировка по алфовиту
		sortListObject.push({ keys: key, values: objts[key] }); // создаем список
	}
	return sortListObject;
}
