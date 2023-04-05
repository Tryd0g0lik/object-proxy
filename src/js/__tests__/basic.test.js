import sum from '../basic';
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

test('should sum', () => {
	const result = sum([1, 2, 3]);

	expect(result).toBe(6);
});
