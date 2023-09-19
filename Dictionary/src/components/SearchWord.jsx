import { useState } from 'react'
import Word from './Word'

function SearchWord() {
    const [data, setData] = useState([])
    const [word, setWord] = useState('')

    async function handleClick() {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        console.log(data); 

        if(Array.isArray(data) && data.length > 0){
          setData(data)
        } else {
            setData([])
        }
        console.log('ordet är', data);
    }

    const wordElement = data.map((word, index) => {
        return <Word key={index} word={word} />
    })

   
        
    return(
        <section>
            <input type="text" id="searchWord" placeholder='search' onChange={(event) => setWord(event.target.value)}></input>
            <button onClick={handleClick}>Search word</button>
            {wordElement}
        </section>
    )
}

export default SearchWord

{/* <div>
{data.map((wordData, index) => (
   <div key={index}>
       <h3>{wordData.word}</h3>
       <p>{wordData.phonetic}</p>
       <h5>Meanings:</h5>
           <ul>
               {wordData.meanings.map((meaning, meaningIndex) => (
                <li key={meaningIndex}>{meaning.partOfSpeech}{meaning.definition}</li> 
            ))}
           </ul>
    </div>
    ))}
</div> */}