import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
// import Quote from "../components/Quote";

const pictureKey = `18867180-8f7cdb769b5f244e15fa99e70`;
const category= {};

function Home() {
const [pictureData, setPictureData] = useState({});
 
    useEffect(() => {
        axios
        .get(`https://pixabay.com/api/=${pictureKey}&category=${category}`
        )
        .then(function (response){
            setPictureData(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);

console.log("pictureData", pictureData);

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