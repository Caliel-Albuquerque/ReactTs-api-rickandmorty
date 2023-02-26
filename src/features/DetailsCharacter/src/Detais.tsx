import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Character } from "../../../services/Api";
import DivStatus from "../../Home/src/assets/styles/statusLife.styles";

import { AiOutlineArrowLeft } from "react-icons/ai";

import './assets/Details.css'

type Params = {
    id: string;
}


export function Details() {

    const { id } = useParams<Params>();

    const [character, setCharacter] = useState<Character>();

    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setCharacter(data)

        }

        fetchData();
    }, [])


    return (
        <div className="container">

            
            <a href="/"><AiOutlineArrowLeft className="icon" /></a>
            

            <div className="containerDetail">


                <div className="characterDetail">

                    <img src={character?.image} alt="" />

                    <div className="contentDetail">
                        <h1>{character?.name}</h1>
                        <div className="card-status">
                            <DivStatus status={character?.status}></DivStatus>
                            <h3>{character?.status}</h3>
                            <h3>{character?.species}</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}