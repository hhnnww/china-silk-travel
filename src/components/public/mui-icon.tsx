import Box from "@mui/material/Box";

export function MuiIcon(props: { name: string; size?: number }) {
	return (
		<Box
			className="material-symbols-rounded mui-icon"
			sx={{
				fontSize: props.size ? `${props.size}px` : "38px",
				cursor: "default",
				userSelect: "none",
				color: "var(--mui-palette-text-primary)",
			}}
		>
			{props.name}
		</Box>
	);
}
