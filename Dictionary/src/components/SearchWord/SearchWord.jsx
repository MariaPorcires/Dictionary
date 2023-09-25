import './SearchWord.css'
import { useState } from 'react'
import Word from '../Word/Word'

function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleClick() {
        if(word.trim() === '') {
            setErrorMessage('Please Enter A Word To Search');
      return;
        }
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()

        if (Array.isArray(data) && data.length > 0) {
            setData(data)
            setErrorMessage('');
        } else {
            setData([]);
            setErrorMessage('No Definitions Found');
        }
        setWord('');
    }

    const wordElement = data.map((word, index) => {
        return <Word key={index} word={word} />
    })

    return (
        <section className='searchWord'>
            <input className="search__input" type="text" autoComplete='off' id="searchWord" value={word} placeholder='Enter word' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search word</button>
            {errorMessage && <p>{errorMessage}</p>}
            {wordElement}
        </section>
    )
}

export default SearchWord