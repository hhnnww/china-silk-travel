import { useTRPC } from "@/trpc/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useAllUtils() {
	return {
		useQuery: useQuery,
		useMutation: useMutation,

		queryClient: useQueryClient(),
		trpc: useTRPC(),
	};
}
