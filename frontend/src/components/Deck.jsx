import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../constants/constants'

export default function DeckComponent() {
    const { id } = useParams();
    const url = [baseUrl, 'api', 'decks', id].join('/');
    console.log(url);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json).then(
            (result) => {
                setIsLoaded(true);
                setDeck(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!deck) {
        return <div>Deck not found</div>
    }
    return (
        <div>
            <h1>{deck.title}</h1>
            <p>Author ID: {deck.author_id}</p>
            <i>{deck.description}</i>
            <b>Stars: {deck.stars}</b>
            <ul>
                {deck.flashcards && deck.flashcards.map(id => <p>{id}</p>)}
            </ul>
        </div>
    )
}