import React from 'react'
import { useParams } from 'react-router'
import WithSubnavigation from './signednavbar'

export default function FindDeck() {

    const Words = [
        { term: 'Term1', word: 'asdfasdfadsf', id: 1 },

        { term: 'Term2', word: 'Meaning2', id: 1 },

        { term: 'Term3', word: 'Meaning3', id: 1 }
    ]

    const params = useParams()
    const id = params.id
    const termtoword = a => a

    return (
        <>
            <WithSubnavigation />
            {id}
        </>
    )
}
