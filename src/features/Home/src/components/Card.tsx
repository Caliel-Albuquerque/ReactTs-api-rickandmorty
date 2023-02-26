import React from "react";
import "./../assets/card.css"

import DivStatus from "../assets/styles/statusLife.styles";
import { Link } from "react-router-dom";

type persona = {
    name: string;
    id: number;
    image: string
    status: string
    species: string
}



export function Card(props: persona) {
    return (
        <div  >
            <Link to={`/details/${props.id}`} style={{textDecoration: 'none'}}>

                <div key={props.id} className="card-contain">

                    <img src={props.image} alt="" />
                    <div className="card-content">
                        <h1>{props.name}</h1>
                        <div className="card-status">
                            <DivStatus status={props.status}></DivStatus>
                            <h3>{props.status}</h3>
                            <h3>{props.species}</h3>
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    )
}