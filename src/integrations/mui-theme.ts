import { alpha, createTheme } from "@mui/material/styles";

export const theme = createTheme({
	cssVariables: true,
	colorSchemes: {
		dark: {
			palette: {
				text: {
					primary: alpha("#fff", 0.88),
					secondary: alpha("#fff", 0.33),
					disabled: alpha("#fff", 0.22),
				},
				primary: {
					main: "rgb(41, 112, 255)",
					dark: "rgb(0, 78, 235)",
				},
			},
		},
	},

	shape: {
		borderRadius: 12,
	},

	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: () => ({
					textTransform: "uppercase",
				}),
			},
		},

		MuiTextField: {
			defaultProps: {
				variant: "filled",
				fullWidth: true,
			},
		},

		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: () => ({
					"& span.mui-icon": {
						cursor: "pointer",
						color: "inherit",
					},
				}),
				startIcon: () => ({
					"*:nth-of-type(1)": {
						fontSize: "1.5rem",
						color: "inherit",
					},
				}),
				endIcon: {
					"*:nth-of-type(1)": {
						fontSize: "1.5rem",
						color: "inherit",
					},
				},
			},
		},

		MuiFormLabel: {
			styleOverrides: {
				root: {
					textTransform: "uppercase",
				},
			},
		},

		MuiFilledInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					input: {
						borderRadius: theme.shape.borderRadius,

						"&:-webkit-autofill": {
							backgroundColor: theme.vars.palette.background.default,
							transition: "background-color 4000s ease-in-out 0s",
							WebkitBoxShadow: "0 0 0 100px transparent inset",
							BoxShadow: "0 0 0 100px transparent inset",

							"&.Mui-focused": {
								WebkitBoxShadow: `0 0 0 100px ${theme.vars.palette.background.paper} inset`,
							},

							color: "#fff",
						},
					},
					":before": {
						display: "none",
					},
					":after": {
						display: "none",
					},
					borderRadius: theme.shape.borderRadius,
					backgroundColor: theme.vars.palette.background.default,
					borderColor: theme.vars.palette.divider,
					borderWidth: 1,
					borderStyle: "solid",

					"&.Mui-focused": {
						borderColor: theme.vars.palette.background.default,
						backgroundColor: theme.vars.palette.background.default,
					},

					"&.Mui-focused.MuiInputBase-colorPrimary": {
						boxShadow: `0 0 0 2px ${theme.vars.palette.primary.main}`,
					},

					"&.Mui-focused.MuiInputBase-colorError": {
						boxShadow: `0 0 0 2px ${theme.vars.palette.error.main}`,
					},

					transition:
						"border-color 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",

					transitionDuration: "300ms",
				}),
			},
		},
	},

	typography: {
		fontFamily: [
			"Google Sans Flex",
			"Times New Roman",
			"Helvetica",
			"sans-serif",
		].join(","),
		fontWeightRegular: 400,

		h1: {
			fontSize: "2.2rem",
		},

		h2: {
			fontSize: "1.8rem",
		},
		h3: {
			fontSize: "1.6rem",
		},
		h4: {
			fontSize: "1.4rem",
		},
		h5: {
			fontSize: "1.2rem",
		},
		h6: {
			fontSize: "1rem",
		},
		subtitle1: {
			fontSize: "1.3rem",
		},
		subtitle2: {
			fontSize: "1.1rem",
		},
	},
});
