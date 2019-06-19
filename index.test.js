const validate = require("./index");

test('validates source number test set', () => {
	expect(validate("AZ123456")).toBe(true);
	expect(validate("az123456")).toBe(true);
	expect(validate("aZ123456")).toBe(true);
	expect(validate("1Z123456")).toBe(false);
	expect(validate("12345678")).toBe(false);
	expect(validate("cd34567e")).toBe(false);
	expect(validate("cd34567")).toBe(false);
});
