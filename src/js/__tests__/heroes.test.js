import Hero from '../heroes';


const heroList = test.each([
  /* TODO:[a, b, c]
  *  the 'a' title a string if we would see the Error to the console.
  *  'b' - it is Arry[]-data.
  * 'c' - it's a string. Thach should be see of a answered.
  */

  ['healthy 49', { name: 'Маг1', health: 49 }, 'wounded'],
  ['healthy 51', { name: 'Маг2', health: 51 }, 'healthy'],
  ['healthy 100', { name: 'Маг3', health: 100 }, 'healthy'],
  ['healthy 149', { name: 'Маг4', health: 149 }, 'healthy'],
  ['healthy 1049', { name: 'Маг5', health: 1049 }, 'healthy'],
  ['wounded 51', { name: 'Маг1', health: 51 }, 'healthy'],
  ['wounded 14', { name: 'Маг2', health: 14 }, 'critical'],
  ['wounded 50', { name: 'Маг3', health: 50 }, 'wounded'],
  ['wounded 15', { name: 'Маг4', health: 15 }, 'wounded'],
  ['wounded 30', { name: 'Маг5', health: 30 }, 'wounded'],
  ['critical 15', { name: 'Маг1', health: 15 }, 'wounded'],
  ['critical 14', { name: 'Маг2', health: 14 }, 'critical'],
  ['critical 0', { name: 'Маг3', health: 0 }, 'critical'],
  ['critical -15', { name: 'Маг4', health: -15 }, 'critical'],
  ['critical 1', { name: 'Маг5', health: 1 }, 'critical'],
]);

heroList('test the healtly statuses wich has been equal ==> %s ', (async (a, b, expected) => {
  const testHeroes = await new Hero(b);
  const healtly = await testHeroes.statusHealtly;
  expect(healtly).toBe(expected);
}));

