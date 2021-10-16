import axios from "axios"

const deck_url = "https://flashcards-mhacks-14.herokuapp.com/api/decks"

export async function getDataFromDeck() {
    await axios.get(deck_url)
        .then(res => {
            return res.data()
        })
        .catch(err => {
            return {
                error: err
            }
        })
    
}