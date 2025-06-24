import { customAlphabet } from "nanoid";
import { lowercase, numbers, uppercase } from "nanoid-dictionary";

export const makeNanoid = (length?: number) => {
	const nanoid = customAlphabet(
		lowercase + uppercase + numbers,
		length ? length : 21,
	);
	return nanoid();
};
