import React from 'react'
import WithSubnavigation from './signednavbar'
import Card from './components/card'
import Deck from './components/deck'
import axios from "axios"
import styles from './assets/view.module.css'

export default function Viewcards() {

    const baseUrl = 'https://flashcards-mhacks-14.herokuapp.com'
    const url = [baseUrl, 'api', 'decks'].join('/');
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [decks, setDecks] = React.useState([]);

    React.useEffect(() => {
        fetch(url).then(res => res.json()).then(
            result => {
                setIsLoaded(true)
                console.log(result)
                setDecks(result)
            },
            error => {
                setIsLoaded(true)
                setError(true)
            }
        )
    }, [url])

    if (error) {
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div className={styles.loader} />
    } else if (!decks) {
        return <div>Deck not found</div>
    }
    return (
        <>
            <WithSubnavigation />
            <div className={styles.wrapper} >
                {decks.map((i, k) => {
                    const { id, title, author_id, description, stars, flashcards } = i
                    return <Deck id={id} title={title} author_id={author_id} description={description} stars={stars} flashcards={flashcards} />
                })}
            </div>
        </>
    )
}
