import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config : ThemeConfig ={
    initialColorMode: "dark"
}

const theme =extendTheme({config
,colors:{
    gray:{
        50:"#e7f3fe",
        100:"#bbdaf7",
        200:"#8fc2f1",
        300:"#64abee",
        400:"#4293eb",
        500:"#317ad1",
        600:"#265fa3",
        700:"#1b4473",
        800:"#0d2945",
        900:"#010e18"
    }
}
})

export default theme;