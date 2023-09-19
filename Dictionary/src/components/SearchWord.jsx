import { useState } from 'react'

function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')

    async function handleClick() {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        /* console.log(data[0].meanings); */

        if(Array.isArray(data) && data.length > 0){
          setData(data)
        } else {
            setData([])
        }
        console.log('ordet är', data);
    }

    return(
        <section>
            <input type="text" id="searchWord" placeholder='search' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search word</button>

            <div>
             {data.map((wordData, index) => (
                <div key={index}>
                    <h3>{wordData.word}</h3>
                    <p>{wordData.phonetic}</p>
                    <h5>Meanings:</h5>
                        <ul>
                            {wordData.meanings.map((meaning, meaningIndex) => (
                             <li key={meaningIndex}>{meaning.meanings}</li>
                         ))}
                        </ul>
                 </div>
                 ))}
            </div>
        </section>
    )
}

export default SearchWord