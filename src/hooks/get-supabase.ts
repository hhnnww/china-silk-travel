import { createServerClient } from "@supabase/ssr";
import { parseCookies, setCookie } from "@tanstack/react-start/server";
import type { Database } from "database.types";

export const useSupabase = async () => {
	const supabaseUrl = process.env.SUPABASE_URL as string;
	const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
	return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
		cookies: {
			getAll() {
				return Object.entries(parseCookies()).map(([name, value]) => ({
					name,
					value,
				}));
			},
			setAll(cookies) {
				for (const cookie of cookies) {
					setCookie(cookie.name, cookie.value);
				}
			},
		},
	});
};
