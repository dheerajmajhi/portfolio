import React, { useContext } from "react";
import Intro from "./intro/intro";
import About from "./About/about";
import ProductList from "./ProductList/productList";
import Contact from "./Contact/contact";
import Toggle from "./Toggle/toggle";
import { ThemeContext } from "../Context";

const App=()=>{
    const theme = useContext(ThemeContext);
    const darkmode= theme.state.darkmode;
    return (
        <div style={{backgroundColor: darkmode?"#222":"white" ,color:darkmode && "white"}}>
            <Toggle/>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    );
}
export default App;