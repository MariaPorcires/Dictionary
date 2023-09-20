import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Word(props) {
   const {word} = props
   const {phonetic, meanings, phonetics} = word
   

   let meaningElements = [];
  
   if (meanings) {
       meaningElements = meanings.map((meaning, meaningIndex) => {
           return <Meaning key={meaningIndex} meaning={meaning.partOfSpeech} definition={meaning.definitions[0]?.definition} synonym={meaning.synonyms[0]?.synonym} />
       })
   }

   let phoneticElements = [];

   if(phonetics) {
      phoneticElements = phonetics.map((phone, phoneIndex) => {
        return <Phonetic key={phoneIndex} text={phone.text} audio={phone.audio}/>
      })
   }

    return(
        <section>
            <h2>{word.word}</h2>
            <p>{phonetic}</p>
            {meaningElements}
            {phoneticElements}
        
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