import {BrowserRouter, link } from "react-router-dom";


function Menu() {

    return (
        <BrowserRouter>


            <nav>
                <link to="/">Home</link>
                <link to="/Home">Menu</link>
                <link to="/Service">Card</link>

            </nav>
        </BrowserRouter>
    );


}





export default Menu;