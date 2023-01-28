import {
    API_URL,
    AMOUNT,
    CATEGORY,
    LEVEL
} from './config'

const fetchQuestions = async (object) => {
    const endpoint = `${API_URL}${AMOUNT}${10}${CATEGORY}${object.category}${LEVEL}${object.level}`;
    return await (await fetch(endpoint)).json()
}
export default fetchQuestions;