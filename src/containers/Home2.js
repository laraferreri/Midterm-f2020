import React, { useState, useEffect } from "react";
import axios from "axios";

function Home2() {
    const [gifParam, setGifParam] = useState();
    const apiKey2 = 'b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ5';
    const search = "https://api.giphy.com/v1/gifs/search?";
    
        useEffect(() => {
            axios
            .get(`https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ&limit=25&offset=0`
            )

            .then(function (response){
                return response.json();
            })
            .catch(function(error){
                console.warn(error);
            })
        }, [gifParam]);
    
   

    const response = await fetch
    const data = await response.json

    return data;
}

export default Home2;