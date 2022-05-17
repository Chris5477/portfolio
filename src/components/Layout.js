import { Paper } from "@mui/material";
import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import TopNavigation from "./TopNavigation";

const Layout = ({ page }) => {
	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{backgroundColor : theme.palette.background.paper}} >
				<TopNavigation />
				{page}
			</Paper>
		</ThemeProvider>
	);
};
export default Layout;
