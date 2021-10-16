import React from 'react'
import WithSubnavigation from './signednavbar'
import Card from './components/card'
import { Box } from '@chakra-ui/react'

export default function viewcards() {

    const Words = [
        { term: 'Term1', word: 'asdfasdfadsf', id: 1 },
        
        { term: 'Term2', word: 'Meaning2', id: 2 },
        
        { term: 'Term3', word: 'Meaning3', id: 1 }
    ]

    return (
        <>
            <WithSubnavigation />
            <Box padding={"10rem"} >
                {Words.map((i, k) => {
                    return <Card term={i.term} meaning={i.word} routeId={i.id} />
                })}
            </Box>
        </>
    )
}
