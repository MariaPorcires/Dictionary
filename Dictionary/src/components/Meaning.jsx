import './Meaning.css'

function Meaning(props) {
  
 
     return(
         <section className="meaning__definition">
             <p>{props.meaning}</p>
             <p>Definition: {props.definition}</p>
             <p>Synonyms: {props.synonym}</p>
            
         </section>
     )
 }
 
 export default Meaning