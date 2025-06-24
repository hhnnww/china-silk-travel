import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
	"rETTw8sxMWc2Y3GzaASHnt4t6KCunmWncAQNPxrw6bJuhbk55hatE8HWkxTmAWB6u3bjHEjW4GkEBXUAKmUbPMV2arsjfAYVVeGPcJYTkZr52ePQy3cfP6TuySQAjNZzZaDKTUJSHTYfaXnSMtsYsmptnAfv4KDmpyHxuHFZSpnFyQHts4ZzF6SXehMRnNnWuVY44meGkvjHAeetpX8T5RsYUESzknUcbEwR5CYzkNfbjssuEZkR3CaHMKxcNu7P",
);

type payloadType = { email: string; exp: number };

// 创建 JWT
export async function createToken(payload: payloadType) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("2h")
		.sign(secret);
}

// 验证 JWT
export async function verifyToken(token: string) {
	const { payload } = await jwtVerify(token, secret);
	return payload;
}
