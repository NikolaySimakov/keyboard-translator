import axios from 'axios';


async function wordExists(word) {

    // const url = `/w/api.php?action=query&titles=${word.toLowerCase()}&format=json`
    const url = `https://en.wiktionary.org/wiki/${word.toLowerCase()}`;
    return await axios.get(url).then(response => response.status === 200).catch(() => false);

}


export {
    wordExists,
}