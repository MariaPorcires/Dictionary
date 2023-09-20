import './SearchWord.css'
import { useState } from 'react'
import Word from './Word'

function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleClick() {
        if(word.trim() === '') {
            setErrorMessage('Please enter a word to search');
      return;
        }
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        console.log(data);

        if (Array.isArray(data) && data.length > 0) {
            setData(data)
            setErrorMessage('');
        } else {
            setData([]);
            setErrorMessage('No Definitions Found.');
        }
        setWord('');
        console.log('ordet är', data);
    }

    const wordElement = data.map((word, index) => {
        return <Word key={index} word={word} />
    })

    return (
        <section>
            <input className="search__input" type="text" id="searchWord" value={word} placeholder='Your word' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search</button>
            {errorMessage && <p>{errorMessage}</p>}
            {wordElement}
        </section>
    )
}

export default SearchWord