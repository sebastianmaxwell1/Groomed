import { createTheme } from "@material-ui/core"; 
import { grey } from "@material-ui/core/colors"; 
export const theme = createTheme({  
    palette: {    
        primary: {      
            main: grey[500],      
            light: grey[300],      
            dark: grey[700],    
        },    
        secondary: {      
            main: grey[700],      
            light: grey[500],    
        },
    }
})