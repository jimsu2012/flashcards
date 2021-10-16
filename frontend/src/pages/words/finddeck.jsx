import React from 'react'
import { useParams, useLocation } from 'react-router'
import WithSubnavigation from './signednavbar'
import Card from './components/card'
import { Heading } from '@chakra-ui/react'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function FindDeck() {

    

    let query = useQuery()
    const stars = query.get("stars")
    const nameofDeck = query.get("deck")

    const Words = [
        [
            { term: 'Term1', word: 'asdfasdfadsf', id: 1 },

            { term: 'Term2', word: 'Masdfasdfeaning2', id: 1 },

            { term: 'Term3', word: 'Meanasdfasdfing3', id: 1 }
        ],
        [
            { term: 'Term1', word: 'asdfasdasdfasdffadsf', id: 1 },

            { term: 'Term2', word: 'Meaniasdfsdfng2', id: 1 },

            { term: 'Term3', word: 'Meanisdfsdfng3', id: 1 }
        ], 
        [
            { term: 'Term1', word: 'asdfasdfasdfasdfadsf', id: 1 },

            { term: 'Term2', word: 'Meaningasdfsdf2', id: 1 },

            { term: 'Term3', word: 'Measdfsdfning3', id: 1 }
        ],
    ]


    const params = useParams()
    const id = params.id

    return (
        <>
            <WithSubnavigation />
            <Heading>{nameofDeck} with {stars} stars</Heading> 
            {Words[id].map((i, k) => {
                return <Card term={i.term} meaning={i.word} stars={stars} />
            })}
        </>
    )
}
