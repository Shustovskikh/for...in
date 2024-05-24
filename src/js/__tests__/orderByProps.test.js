import orderByProps from '../orderByProps';

test('should return sorted properties even if some are missing', () => {
  const obj = { name: 'мечник', health: 10, attack: 80, defence: 40 };
  const order = ['name', 'level', 'missingProp'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, order)).toEqual(expected);
});
