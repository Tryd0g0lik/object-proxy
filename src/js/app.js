const obj = {
	name: 'мечник',
	health: 10,
	level: 2,
	attack: 80,
	defence: 40,
}
function orderByProps(o, order) {
	const objts = { ...o };
	console.log('objts:' + objts);

	let template = { keys: null, value: null };
	const listObj = [];
	for (let elemKeys in objts.keys) {
		for (let elemValue in objts.values) {
			templete.keys = elemKeys;
			template.value = elemValue;
			listObj.push(template);
		}
	}
	console.log('listObj: ' + listObj);
}
orderByProps(obj, ["name", "level"])