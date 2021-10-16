import ajaxPromise from './AjaxPromise';
import { baseUrl } from '../constants/constants';

export const addDeckAction = ({
    deckId, 
    term,
    definition,
    imageUrl,
}) => {
    return ajaxPromise({
        type: 'POST',
        url: `${baseUrl}/api/flashcards`,
        data: {deck: deckId, term, definition, image_url: imageUrl}
    },{
        "Content-Type": "application/json"
    }, 'no-cors')
}