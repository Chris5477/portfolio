import { Paper } from "@mui/material";
import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import TopNavigation from "./TopNavigation";


const Layout = ({ page }) => {
	console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{ width: "100%", minHeight : "100vh", height:"auto" }}>
				<TopNavigation />
				{page}
			</Paper>
		</ThemeProvider>
	);
};
export default Layout;
