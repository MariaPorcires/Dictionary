function Meaning(props) {
    //mapa meanings etc eller fler komponenter
    //const {word, phonetic} = props.word
 console.log(props.definition);
  
 console.log(props);
 
     return(
         <section>
             <p>{props.meaning}</p>
             <p>{props.definition}</p>
             
         
         
         </section>
     )
 }
 
 export default Meaning