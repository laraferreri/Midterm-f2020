import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

// import Quote from "../components/Quote";

// const API = `563492ad6f917000010000015390cedee23740efb1d9578d11aaa935`;

function Home() {
const [searchParam, setSearchParam] = useState("nature");
const apiKey = ('563492ad6f917000010000015390cedee23740efb1d9578d11aaa935');

    useEffect(() => {
        axios
        .get(`https://api.pexels.com/v1/search?query=${"searchParam"}`,
        {
            params: {
                headers: {
                    'Authorization': apiKey
        }
            }
                }   
                    )

        .then(function (response){
            setSearchParam(response);
        })
        .catch(function(error){
            console.warn(error);
        })
    }, []);

console.log("searchParam", searchParam);

return (
    <>
    <Header/>
        <main className= "home">
            <div className= "description">
                <p> On this page you will be able to generate a series of random images and quotes to display a mood board!</p>
            </div>
            <div className="info">
            <h2> The mood of this board is {} </h2>
             </div>
        </main>
    </>
);

}
export default Home;