import './SearchWord.css'
import { useState } from 'react'
import Word from '../Word/Word'

//state för elementen
function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //När man skriver in ord i input och klickar hämtas API
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
    //Resultatet från API returneras i Wordkomponenten.
    const wordElement = data.map((word, index) => {
        return <Word key={index} word={word} />
    })

    return (
        <section className='searchWord'>
            <input className="search__input" type="text" autoComplete='off' id="searchWord" value={word} placeholder='Enter word' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search word</button>
            {/*Visar errormeddelande i webbläsaren om inget skrivits i input eller skrivit ord som inte finns*/}
            {errorMessage && <p>{errorMessage}</p>}
            {wordElement}
        </section>
    )
}

export default SearchWord