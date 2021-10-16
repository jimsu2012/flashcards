import React from 'react'
import WithSubnavigation from './signednavbar'
import Card from './components/card'
import Deck from './components/deck'
import { Box, Text } from '@chakra-ui/react'
import axios from "axios"

const deck_url = "https://flashcards-mhacks-14.herokuapp.com/api/decks?format=json"

export function getDataFromDeck() {
    fetch(deck_url, {
        method: 'GET',
        credentials: 'same-origin'
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
       return  {
            error: err
        }
    })
}

export default function Viewcards() {


     const data =  getDataFromDeck()
     console.log(data)
        

    const Decks = [
        { deckName: 'Revolutionary War', id: 0, stars: 1 },
        
        { deckName: 'Bones in the Body', id: 1, stars: 0 },
        
        { deckName: 'Biochemical Engineering', id: 2, stars: 4 }
    ]

    return (
        <>
            <WithSubnavigation />
            <Box padding={"10rem"} flexDirection={"column"}>
                {Decks.map((i, k) => {
                    return <Deck name={i.deckName} routeId={i.id} stars={i.stars}  />
                })}
            </Box>
        </>
    )
}
