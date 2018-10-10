//1. Contains a value
//2. Value is nonempty
//3. Value is exactly 5 characters long
//4. Each character is a number

export const required = value => (value ? undefined : "Field is required");
export const nonEmpty = value =>
	value.trim() !== "" ? undefined : "Field must not be empty";
export const checkLength = value =>
	value.length === 5 ? undefined : "Length of tracking # must be 5 :)";
export const checkChar = value => {
	let strNumberArr = value.split();
	return strNumberArr.forEach(
		strNum =>
			Number(strNum) !== "NaN" ? undefined : "That aint a number brother"
	);
};
