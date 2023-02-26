import React, { useState, useEffect } from "react";


export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
}

export async function fetchCharacter(page: number): Promise<Character[]> {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await response.json()

    return data.results
}







