import { createTheme } from "@material-ui/core"; 
import { grey } from "@material-ui/core/colors"; 
export const theme = createTheme({  
    palette: {    
        primary: {      
            main: grey[900],      
            light: grey[900],      
            dark: grey[700],    
        },    
        secondary: {      
            main: grey[700],      
            light: grey[500],    
        },
    }
})