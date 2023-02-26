import React, { useEffect, useState } from "react";
import "./assets/home.css"

import { Card } from "./components/Card";
import Button from "./assets/styles/button.styles";
import { fetchCharacter, Character } from "../../../services/Api";

export function Home() {

    const [character, setCharacter] = useState<Character[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetchCharacter(page);
            setCharacter(data)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        fetchData();
    }, [page])

    const handleNextPage = () => {
        let count: number = page + 1;

        setPage(count);

    }

    const handlePrevPage = () => {
        if (page > 1) {
            let prev: number = page - 1;
            setPage(prev)
        }

    }

    return (
        <div>

            <div className="main">

                {character.map(characterItem => (
                    <Card
                        name={characterItem.name}
                        image={characterItem.image}
                        status={characterItem.status}
                        species={characterItem.species}
                        id={characterItem.id}
                    />
                ))}



            </div>



            <div className="containerButtons">

                <Button page={page} onClick={handlePrevPage}>
                    Previous
                </Button>

                <button onClick={handleNextPage}>Next</button>
            </div>

        </div>
    )
}