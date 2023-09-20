function Meaning(props) {
 console.log('synonym', props.synonym);
  
 
     return(
         <section>
             <p>{props.meaning}</p>
             <p>Definition: {props.definition}</p>
             <p>Synonyms: {props.synonym}</p>
            
         </section>
     )
 }
 
 export default Meaning