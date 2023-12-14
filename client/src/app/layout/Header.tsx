import { DarkMode } from "@mui/icons-material";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: props){
    return(
<AppBar position="static" sx={{mb: 4}}>
    <Toolbar>
<Typography variant="h6">React </Typography>
<Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
</AppBar>
    )
}