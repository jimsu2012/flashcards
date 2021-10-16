import React, { useEffect, useState } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Container, Grid, Stack, Text, GridItem, Button, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../router/router'
import { baseUrl } from '../../../constants/constants'

export default function FlashcardComponent({id}) {
    const history = useHistory();

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
                setFlashcard(error);
            }
        )
    }, [url])

    if (error) {
        return <div>Error: {error}</div>
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