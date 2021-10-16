import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../constants/constants'
import FlashcardComponent from './Flashcard'
import "../styles/Deck.css"
import WithSubnavigation from '../signednavbar'

export default function DeckComponent() {
    const { id } = useParams();
    const url = [baseUrl, 'api', 'decks', id].join('/');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            (result) => {
                setIsLoaded(true);
                console.log(result);
                setDeck(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url]);

    if (error) {
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!deck) {
        return <div>Deck not found</div>
    }
    return (
        <div>
            <WithSubnavigation/>
            <div class="deck-info">
                <b className="title">{deck.title}</b>
                <p>Made by {deck.author_id}</p>
                <i>{deck.description}</i>
                <p>{deck.stars}★</p>
            </div>
            <ul>
                <div className="deck-header-container">
                    <p className="deck-header-term">Term</p>
                    <p className="deck-header-definition">Definition</p>
                </div>
                {deck.flashcards && deck.flashcards.map(id => <FlashcardComponent id={id}/>)}
            </ul>
        </div>
    )
}