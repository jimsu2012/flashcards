import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../constants/constants'

export default function AddFlashcardComponent({deckId, onSubmit}) {
    const url = [baseUrl, 'api', 'flashcards'].join('/');

    const [error, setError] = useState(null);
    const [flashcard, setFlashcard] = useState({deck: deckId});

    const addFlashcard = (e) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(flashcard),
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then((result) => {
            setFlashcard({});
            onSubmit(result);
        }, (error) => {
            setError(error);
        })
        e.preventDefault();
    }

    if (error) {
        return <div>Error: {error}</div>
    } else if (!flashcard) {
        return <div>Flashcard not found</div>
    }
    return (
        <form className="flashcard-container" onSubmit={e => addFlashcard(e)}>
            <input className="flashcard-term" name="term" type="text" value={flashcard.term || ''} onChange={e => setFlashcard({
                ...flashcard,
                term: e.target.value
            })} />
            <input className="flashcard-definition" name="term" type="text" value={flashcard.definition || ''} onChange={e => setFlashcard({
                ...flashcard,
                definition: e.target.value
            })} />
            <input className="flashcard-create" type="button" value="+" />
            <input style={{visibility: 'hidden'}} type="submit" value="Submit" />
        </form>
    )
}