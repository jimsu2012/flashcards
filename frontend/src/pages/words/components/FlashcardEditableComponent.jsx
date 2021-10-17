import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../constants/constants'

export default function FlashcardEditableComponent({id, onDelete}) {
    const url = [baseUrl, 'api', 'flashcards', id].join('/');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flashcard, setFlashcard] = useState({});

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            (result) => {
                setIsLoaded(true);
                setFlashcard(result)
            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);
            }
        );
    }, [url])

    const updateFlashcard = (e) => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(flashcard),
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then((result) => {
            console.log('result', result);
        }, (error) => {
            setError(error);
        });
        e.preventDefault();
    }

    const deleteFlashcard = () => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(
            res => {
                if (res.status === 204) {
                    onDelete(id);
                } else {
                    console.log("res is,", res);
                    return res.json();
                }
            }
        ).then((result) => {
            console.log('result', result);
        }, (error) => {
            console.log('error', error);
        });
    }

    if (error) {
        return <div>Error: {error}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!flashcard) {
        return <div>Flashcard not found</div>
    }
    return (
        <form className="flashcard-container" onSubmit={e => updateFlashcard(e)}>
            <input className="flashcard-term" name="term" type="text" value={flashcard.term || ''} onChange={e => setFlashcard({
                ...flashcard,
                term: e.target.value
            })} />
            <input className="flashcard-definition" name="term" type="text" value={flashcard.definition || ''} onChange={e => setFlashcard({
                ...flashcard,
                definition: e.target.value
            })} />
            <input className="flashcard-delete" type="button" value="X" onClick={deleteFlashcard} />
            <input style={{visibility: 'hidden'}} type="submit" value="Submit" />
        </form>
    )
}