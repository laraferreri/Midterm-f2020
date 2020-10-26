import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
    useEffect(() => {
        axios
        .get(
            `https://quote-garden.herokuapp.com/api/v2/genres/${}?page=1&limit=10`
        )
        .then()
        .catch()
    }, []);

    return(
        <div>
        <h1>Home: Midterm</h1>
        </div>
    );
}



export default Home;