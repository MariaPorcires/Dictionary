function Meaning(props) {
  
 
     return(
         <section>
             <p>{props.meaning}</p>
             <p>Definition: {props.definition}</p>
             <p>Synonyms: {props.synonym}</p>
            
         </section>
     )
 }
 
 export default Meaning