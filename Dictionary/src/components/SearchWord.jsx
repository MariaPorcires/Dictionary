import { useState } from 'react'

function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')

    async function handleClick() {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        console.log(data);

        setData()
        console.log('ordet är', word);
    }

    return(
        <section>
            <input type="text" id="searchWord" placeholder='search' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search word</button>
        </section>
    )
}

export default SearchWord