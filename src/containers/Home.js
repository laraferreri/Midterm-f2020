import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

const apiKey = '563492ad6f917000010000015390cedee23740efb1d9578d11aaa935';
const apiKey2 = 'b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ5';


function Home() {
const [searchParam, setSearchParam] = useState("nature");
const [pexelData, setPexelData] = useState([]);
const [GifData, setGifData] = useState([]);

useEffect(() => {
    axios
    .get(`https://api.pexels.com/v1/search?query=${searchParam}&apiKey=${apiKey}`,
    {
            headers: {
                'Authorization': apiKey
    }
        }
    )
    .then(function (response){
        const data = response.data.photos
        setPexelData(data)
        
    })
    .catch(function(error){
        console.warn(error);
    })
}, [searchParam]);


useEffect(() => {
axios
.get(`https://api.giphy.com/v1/gifs/query=${searchParam}?api_key=${apiKey2}`)

.then(function (response){
console.log(response);
const data2 = response
setGifData(data2)
})

.catch(function(error){
console.warn(error);
})

}, [searchParam]);


return (
    <>
    <Header/>
        
        <main className= "home">
                <div onClick= {() => setSearchParam("dogs")}> dogs </div>
                <div onClick= {() => setSearchParam("flower")}> flower </div>
                <div onClick= {() => setSearchParam("house")}> house </div>
                <div onClick= {() => setSearchParam("people")}> people </div>
                <div onClick= {() => setSearchParam("cats")}> cats </div>
                <div onClick= {() => setSearchParam("nature")}> nature </div>
        </main>

        <div className="info">

        {pexelData.map((photo, i) => (
        <div className="Photo" key={i}>
          <h3>{photo.photographer}</h3>
          <h4><a href={photo.url}> Click here for Image!</a></h4>
          <h5> photo id number:{photo.id}</h5>
        </div>
      ))}
      </div>
     </>
    );
}
export default Home;