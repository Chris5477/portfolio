<<<<<<< HEAD
import TopNavigation from "./TopNavigation"

const Layout = () => {
return(
   <div className="layout">
       <TopNavigation />
       <div></div>
       <div></div>
   </div> 
)
}
export default Layout
=======
import { Paper } from "@mui/material";
import { theme } from "../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import TopNavigation from "./TopNavigation";

const Layout = ({ page }) => {
	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{ backgroundColor: theme.palette.background.paper }}>
				<TopNavigation />
				{page}
			</Paper>
		</ThemeProvider>
	);
};
export default Layout;
>>>>>>> add style navigation bar and home page
