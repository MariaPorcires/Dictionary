function Phonetic(props) {
   
//ena phoentic(uttalet) behöver inte visas
    return(
        <section>
        <p>{props.text}</p>
        <audio controls>
                  <source src={props.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
       
    </section>
    )
}

export default Phonetic