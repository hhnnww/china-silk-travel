import { createFormHook } from "@tanstack/react-form";
import { Select, SubscribeButton, TextArea, TextField } from "./form-component";
import { fieldContext, formContext } from "./form-context";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		Select,
		TextArea,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
