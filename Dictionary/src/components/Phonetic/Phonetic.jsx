import './Phonetic.css'
//Hämtar audio med props för att kunna skriva ut på sidan.
function Phonetic(props) {
   
    return(
        <section className="phonetics">
        <p>{props.text}</p>
        {props.audio && <audio controls className='phonetics__audio' data-testid='audio'>
                  <source src={props.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>}
       
    </section>
    )
}

export default Phonetic