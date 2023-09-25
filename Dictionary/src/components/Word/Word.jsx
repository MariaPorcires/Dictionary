import './Word.css'
import Meaning from "../Meaning/Meaning";
import Phonetic from "../Phonetic/Phonetic";

function Word(props) {
   const {word} = props
   const {phonetic, meanings, phonetics} = word

   let meaningElements = [];
  
   if (meanings) {
       meaningElements = meanings.map((meaning, meaningIndex) => {
           return <Meaning key={meaningIndex} meaning={meaning.partOfSpeech} definition={meaning.definitions[0]?.definition} synonym={meaning.synonyms} />
       })
   }

   let phoneticElements = [];

   if(phonetics) {
      phoneticElements = phonetics.map((phone, phoneIndex) => {
        return <Phonetic key={phoneIndex} text={phone.text} audio={phone.audio}/> //lägg till conditional rendering ifall audio inte finns
      })
   }

    return(
        <section className="word">
            <h2 className='word__title'>{word.word}</h2>
            <p className='word__phonetic'>{phonetic}</p>
            {meaningElements}
            {phoneticElements}
        
        </section>
    )
}

export default Word

