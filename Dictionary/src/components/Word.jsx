function Word(props) {
   //mapa meanings etc
   const {word, phonetic} = props.word

    return(
        <section>
        <h3>{word}</h3>
        <p>{phonetic}</p>

        
        
        </section>
    )
}

export default Word