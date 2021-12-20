import React, { useEffect, useState } from "react";
import "./style.css";
import { Card } from "../Card";


const Main = (props) => {
    const [episodes,setEpisodes] = useState(null);
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setLoader(false)
        const url = 'https://api.sampleapis.com/futurama/episodes';
        fetch(url)
        .then((res)=> res.json())
        .then((response) => {
            console.log(response)
            setEpisodes(response)
            setLoader(true)
        })
    },[])
    return (
        <div className="main-page">
            {/* <iframe width="420" height="315"  src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" title="YouTube video player" frameborder="0" auto allowfullscreen></iframe> */}
            <h1 className="main-title">Home</h1>
            {!loader?<div className='main-loader'>
                <i className="fa fa-spinner fa-pulse fa-10x" />
            </div>: 
            <div className="container-card">
                {episodes.map((data) => <Card key={data.id} {...data}/>)}
            </div>
            }
        </div>
    )
}

export default Main;