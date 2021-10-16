import React from 'react'
import { Container, Grid, Stack, Text, GridItem, Button, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../router/router'
import styles from '../assets/deck.module.css'
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

// <Grid backgroundColor={"blue.600"} borderRadius={20} color={"white"} padding={4} templateColumns={"repeat(10, 1fr)"} marginY={5} >
//     <GridItem colSpan={5} >
//         <Text fontWeight={"bold"} >{name}</Text>
//     </GridItem>
//     <GridItem colStart={7} colEnd={9}>
//         <Text>{stars} <StarIcon /></Text>
//     </GridItem>
// </Grid>
//
//<>
        //     <Button justifyContent={"flex-start"} width={"100%"} onClick={() => history.push(`/deck/${routeId}?stars=${stars}&deck=${name}`)} mx={"10"} my={"5"} bg={"blue.600"} color={"white"} padding={"5"} >
                    
        //         <Text paddingRight={"70%"} fontWeight={"bold"} >{name}</Text>
        //         <Stack
        //             flex={{ base: 1, md: 0 }}
        //             justify={'flex-end'}
        //             direction={'row'}
        //             spacing={6}>
        //             <Text justifyContent={"end"} >{stars}</Text>
        //         </Stack>
        //     </Button>
        // </>