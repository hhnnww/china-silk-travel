import { MuiIcon } from "@/components/public/mui-icon";
import { useAllUtils } from "@/hooks/use-all-utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
	loader: async ({ context }) => {
		return await context.queryClient.prefetchQuery(
			context.trpc.user.list.queryOptions(),
		);
	},
});

function RouteComponent() {
	const uat = useAllUtils();
	const res = uat.useQuery(uat.trpc.user.list.queryOptions());
	const mutation = uat.useMutation({
		...uat.trpc.user.new.mutationOptions(),
		onSuccess: async () => {
			await uat.queryClient.invalidateQueries({
				queryKey: uat.trpc.user.list.queryKey(),
			});
		},
	});
	return (
		<>
			<Container>
				<Stack p={8} spacing={4}>
					<Box>
						<Button
							onClick={async () => await mutation.mutateAsync()}
							disabled={mutation.isPending}
							variant="contained"
							startIcon={<MuiIcon name="face_2" />}
						>
							新建一个用户
						</Button>
					</Box>
					<Box>
						<TextField label="用户名" />
					</Box>
					<Box>
						<TextField label="密码" />
					</Box>
					<Typography variant="h4">Gemini</Typography>
					<List disablePadding>
						{res?.data?.map((user) => (
							<ListItem
								key={user.id}
								sx={{ mb: 1 }}
								disableGutters
								disablePadding
							>
								<ListItemIcon>
									<MuiIcon name="account_box" size={38} />
								</ListItemIcon>
								<ListItemText secondary={user.create_at.toISOString()}>
									<Typography variant="body1">{user.email}</Typography>
								</ListItemText>
								<Typography>
									<Button
										color="inherit"
										startIcon={<MuiIcon name="tab_inactive" />}
										size="small"
									>
										复制
									</Button>
								</Typography>
							</ListItem>
						))}
					</List>
				</Stack>
			</Container>
		</>
	);
}
