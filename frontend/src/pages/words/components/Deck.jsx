import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../constants/constants'
import FlashcardComponent from './Flashcard'
import FlashcardEditableComponent from './FlashcardEditableComponent'
import "../styles/Deck.css"
import WithSubnavigation from '../signednavbar'
import AddFlashcardComponent from './AddFlashcard'

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
                setDeck(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url]);

    const isLoggedIn = () => {
        return localStorage.getItem('token') != '';
    }

    const onAddFlashcardSubmit = (result) => {
        setDeck({
            ...deck,
            flashcards: [
                ...deck.flashcards,
                result.id
            ]
        });
    }
    
    const onFlashcardDelete = (flashcardId) => {
        setDeck({
            ...deck,
            flashcards: deck.flashcards.filter(id => id !== flashcardId)
        });
    }

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
            <div className="deck-info">
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
                {deck.flashcards && deck.flashcards.map(
                    flashcardId => isLoggedIn() ? 
                        <FlashcardEditableComponent id={flashcardId} key={flashcardId} onDelete={onFlashcardDelete}/> :
                        <FlashcardComponent id={flashcardId} key={flashcardId}/>)}
                {isLoggedIn() ? <AddFlashcardComponent deckId={id} onSubmit={onAddFlashcardSubmit}/> : null}
            </ul>
        </div>
    )
}