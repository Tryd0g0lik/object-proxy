// const { values } = require("core-js/core/array");
const objs = {
	name: 'мечник',
	health: 10,
	level: 2,
	attack: 80,
	defence: 40,
};
const order = ['name', 'level'];

function orderByProps(obj, ord) { // Делаем мобильную ф-цию
	const objts = { ...obj }; // делаем копию
	const sortListObject = [];

	for (const elem of ord) { // Сортироввка согласно указонного порядка
		for (const [key, value] of Object.entries(objts)) {
			if (elem === String(key)) {
				sortListObject.push({ keys: key, values: value });
				delete objts[elem];
			}
		}
	}

	for (const key of Object.keys(objts).sort()) { // сортировка по алфовиту
		sortListObject.push({ keys: key, values: objts[key] }); // создаем список
	}
	return sortListObject;
}
console.log(orderByProps(objs, order));
