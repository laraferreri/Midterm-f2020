import React, { useState, useEffect } from "react";
import axios from "axios";

function Home2() {
    const [gifParam, setGifParam] = useState();
    const apiKey2 = 'b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ5';
    
        useEffect(() => {
            axios
            .get(`https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=b99SVmlnOXbWXBjYOfs1sXuGAyLreZbZ&limit=25&offset=0`,
            {
                params: {
                    headers: {
                        'Authorization': apiKey2
            }
                }
                    }   
            )
            .then(function (response){
                const newGifParam = response.gifParam
                setGifParam(newGifParam);
            })
            .catch(function(error){
                console.warn(error);
            })
        }, [gifParam]);
    }

export default Home2;