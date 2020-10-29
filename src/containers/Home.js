import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

const apiKey = '563492ad6f917000010000015390cedee23740efb1d9578d11aaa935';


function Home() {
const [searchParam, setSearchParam] = useState("nature");
const [pexelData, setPexelData] = useState([]);
const [gifData, setGifData] = useState();
const apiKey2 = 'b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ5';
// const search = `https://api.giphy.com/v1/gifs/search?query=${searchParam}&apiKey=${apiKey2}`;

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
// console.log(pexelData);

useEffect(() => {
axios
.get(`https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=${apiKey2}`
)

.then(function (response){
console.log(response);
const data = response
setGifData(data)
})

.catch(function(error){
console.warn(error);
})

}, [gifData]);



return (
    <>
    <Header/>
        <main className= "home">
            <div className= "topics">
            <nav>
                <div onClick= {() => setSearchParam("dogs")}> dogs </div>
                <div onClick= {() => setSearchParam("flower")}> flower </div>
                <div onClick= {() => setSearchParam("house")}> house </div>
                <div onClick= {() => setSearchParam("people")}> people </div>
                <div onClick= {() => setSearchParam("cats")}> cats </div>
                <div onClick= {() => setSearchParam("nature")}> nature </div>
            </nav>
            </div>

            <div className= "text">
                <div className= "description">
                blah blah blah blah
                </div>
                {}
                <div className="info">
                <h2> blah blah blah</h2>
                </div>
                
                <div className= "topic">
                <p>{searchParam}</p>
                </div>

             </div>
        </main>

        {pexelData.map((photo, i) => (
        <div className="Photo" key={i}>

          <img src={photo.url} alt="alt text" />
          <h3>{photo.photographer}</h3>
          <h4>{photo.url}</h4>
          <h5>{photo.id}</h5>
          
        </div>
      ))}
     </>
    );
}
export default Home;