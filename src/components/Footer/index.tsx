import React from "react";
import pokeball from "../../assets/pokeball.png"
import {

    Part01,
    Part02,
    Part03,
} from "./style";

const Footer: React.FC = () => {
    return (
        <>
            <Part01>ArpiaMon
            <img src = {pokeball}></img>
            </Part01>

            <Part02>Allan, Pedro, Yan</Part02>

            <Part03> 
                <img src = "https://avatars.githubusercontent.com/u/78707603?v=4"/>
                <img src = "https://avatars.githubusercontent.com/u/49965332?v=4"/>
                <img src = "https://avatars.githubusercontent.com/u/57848392?v=4" />
            </Part03>
        </>
    );
};

export default Footer;