/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import orderByProps from '../app';

describe('app.js file will test', () => {
	const aechDataTest = test.each([
		{
			a: '01',
			b: {
				name: 'мечник',
				health: 10,
				level: 2,
				attack: 80,
				defence: 40,
			},
			c: ['name', 'level'],
			expected: [
				{ keys: 'name', values: 'мечник' },
				{ keys: 'level', values: 2 },
				{ keys: 'attack', values: 80 },
				{ keys: 'defence', values: 40 },
				{ keys: 'health', values: 10 },
			],
		},
		{
			a: '02',
			b: {
				name: 'мечник',
				health: 10,
				level: 2,
				attack: 80,
				defence: 40,
			},
			c: ['level', 'name'],
			expected: [
				{ keys: 'level', values: 2 },
				{ keys: 'name', values: 'мечник' },
				{ keys: 'attack', values: 80 },
				{ keys: 'defence', values: 40 },
				{ keys: 'health', values: 10 },
			],
		},
		{
			a: '03',
			b: {
				name: 'мечник',
				health: 10,
				level: 2,
				attack: 80,
				defence: 40,
			},
			c: ['attack', 'name'],
			expected: [
				{ keys: 'attack', values: 80 },
				{ keys: 'name', values: 'мечник' },
				{ keys: 'defence', values: 40 },
				{ keys: 'health', values: 10 },
				{ keys: 'level', values: 2 },
			],
		},

	]);

	aechDataTest('Test # %s', ({
		a, b, c, expected,
	}) => {
		// console.log(orderByProps(b, c));
		const orderByPropsTest = orderByProps(b, c);
		expect(orderByPropsTest).toEqual(expected);
	});
});
