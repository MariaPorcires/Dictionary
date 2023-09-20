function Meaning(props) {
    //mapa meanings etc eller fler komponenter
    //const {word, phonetic} = props.word
 console.log('synonym', props.synonym);
  
 console.log(props);
 
     return(
         <section>
             <p>{props.meaning}</p>
             <p>{props.definition}</p>
             <p>{props.synonym}</p>
            
         </section>
     )
 }
 
 export default Meaning