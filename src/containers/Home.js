import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

// import Quote from "../components/Quote";

// const API = `563492ad6f917000010000015390cedee23740efb1d9578d11aaa935`;

function Home() {
const [searchParam, setSearchParam] = useState("nature");
const apiKey = '563492ad6f917000010000015390cedee23740efb1d9578d11aaa935';

    useEffect(() => {
        axios
        .get(`https://api.pexels.com/v1/search?query=${searchParam}`,
        {
            params: {
                headers: {
                    'Authorization': apiKey
        }
            }
                }   
        )
        .then(function (response){
            const newSearchParam = response.searchParam
            setSearchParam(newSearchParam);
        })
        .catch(function(error){
            console.warn(error);
        })
    }, [searchParam]);


return (
    <>
    <Header/>
        <main className= "home">
            <div className= "text">
                <div className= "description">
                On this page you will be able to generate a series of random images and quotes to display a mood board!
                </div>
                
                <div className="info">
                <h2> The mood of this board is</h2>
                </div>
                
                <div className= "searchBar">
                <input type= "text" placeholder="search.."> </input>
                
                </div>
                
                <div className= "topic">
                <p>{searchParam}</p>
                </div>

             </div>
        </main>
    </>
);

}
export default Home;