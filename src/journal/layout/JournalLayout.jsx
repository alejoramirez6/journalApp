import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 280;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display: "flex" }}>
        {/* NAVBAR */}
        <NavBar drawerWidth= { drawerWidth }/>

        <SideBar drawerWidth= { drawerWidth }/>

        {/* SIDEBAR */}

        <Box 
            component='main'
            sx={ { flexGrow:1, p:3 }}
        >
            <Toolbar />
            { children }

        </Box>






    </Box>
  )
}
