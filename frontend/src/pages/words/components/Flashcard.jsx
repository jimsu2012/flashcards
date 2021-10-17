import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../constants/constants'

export default function FlashcardComponent({id}) {
    const url = [baseUrl, 'api', 'flashcards', id].join('/');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flashcard, setFlashcard] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            (result) => {
                setIsLoaded(true);
                setFlashcard(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url])

    if (error) {
        return <div>Error:</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!flashcard) {
        return <div>Flashcard not found</div>
    }
    return (
        <div className="flashcard-container">
            <p className="flashcard-term">{flashcard.term}</p>
            <p className="flashcard-definition">{flashcard.definition}</p>
        </div>
    )
}