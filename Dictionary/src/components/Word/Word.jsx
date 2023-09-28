import './Word.css'
import Meaning from "../Meaning/Meaning";
import Phonetic from "../Phonetic/Phonetic";

//häntar ord med props för att kunna skriva ut på sidan
function Word(props) {
   const {word} = props
   const {phonetic, meanings, phonetics} = word

   let meaningElements = [];
  //Här loopas meanings ut
   if (meanings) {
       meaningElements = meanings.map((meaning, meaningIndex) => {
           return <Meaning key={meaningIndex} meaning={meaning.partOfSpeech} definition={meaning.definitions[0]?.definition} example={meaning.definitions[0]?.example} synonym={meaning.synonyms} />
       })
   }

   let phoneticElements = [];
   //Här loopas audio ut
   if(phonetics) {
      phoneticElements = phonetics.map((phone, phoneIndex) => {
        return <Phonetic key={phoneIndex} text={phone.text} audio={phone.audio}/> 
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

