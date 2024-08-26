const {aVeryBigSum} = require('./aVeryBigSum')


// Utils

const generateRandomArray = () => {
	const result = [];
	for (let i = 0; i < 10; i++) {
		result.push(Math.floor(Math.random() * 10 ** 10));
	}
	return result;
};

const sumArray = arr => {
	return arr.reduce((sum, element) => sum + element, 0);
};


describe('aVeryBigSum', () => {
	const arr = generateRandomArray();
	const result = sumArray(arr);

	it('adds the integers on an array', () => {
		expect(aVeryBigSum(arr)).toBe(result);
	});
});