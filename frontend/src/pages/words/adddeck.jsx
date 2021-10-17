import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../constants/constants'
import "../styles/Deck.css"
import WithSubnavigation from '../signednavbar'

export default function AddDeck() {
    const url = [baseUrl, 'api', 'decks'].join('/');

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                // TBD
            }),
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(
            (result) => {
                // Switch to /deck/:id page for editing
            },
            (error) => {
                setError(error);
            }
        )
    }, [url]);

    if (error) {
        return <div>error</div>;
    }
    return (
        <>
        <WithSubnavigation />
        
        </>
    )
}