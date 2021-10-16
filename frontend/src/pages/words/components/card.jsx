import React from 'react'
import { Container, Grid, Stack, Text, GridItem, Button, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../router/router'
import styles from '../styles/Deck.module.css'
import { StarIcon } from '@chakra-ui/icons'
//id={id} title={title} author_id={author_id} description={description} stars={stars} flashcards={flashcards}

export default function Deck({ id, title, author_id, description, stars, flashcards }) {

    const history = useHistory()

    return (
        <button className={styles.deck} onClick={() => history.push(`/deck/${id}?stars=${stars}&deck=${title}`)} mx={"10"} my={"5"} bg={"blue.600"}>
            <Text className={styles.title}>{title} by {author_id}</Text>
            <Text className={styles.desc}>{description}</Text>
            <Text className={styles.stars}>{stars} <StarIcon /></Text>
        </button>
    )
}
