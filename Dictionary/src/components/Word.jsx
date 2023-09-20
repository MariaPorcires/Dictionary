import Meaning from "./Meaning";

function Word(props) {
   //mapa meanings etc eller fler komponenter
   const {word} = props
   const {phonetic, meanings} = word
console.log(word);
console.log(phonetic);
console.log(meanings);
   let meaningElements = [];

   if (meanings) {
       meaningElements = meanings.map((meaning, meaningIndex) => {
           return <Meaning key={meaningIndex} meaning={meaning.partOfSpeech} definition={meaning.definitions[0]?.definition}/>

       })
   }

    return(
        <section>
            <h3>{word.word}</h3>
            <p>{phonetic}</p>
            {meaningElements}
        
        
        </section>
    )
}

export default Word

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