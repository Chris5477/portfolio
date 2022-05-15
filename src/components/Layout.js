import { Paper } from "@mui/material";
import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import TopNavigation from "./TopNavigation";
import bg from "../assets/pictures/bg-project.png";

const Layout = ({ page }) => {
	console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{ width: "100%", height: "100vh", backgroundImage: `url(${bg})` }}>
				<TopNavigation />
				{page}
			</Paper>
		</ThemeProvider>
	);
};
export default Layout;
