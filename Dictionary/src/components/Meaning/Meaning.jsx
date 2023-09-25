import './Meaning.css'

function Meaning(props) {
  
 
     return(
         <section className="meaning__definition">
             <p>{props.meaning}</p>
             <p><u>Definition:</u> {props.definition}</p>
             <p><u>Example:</u> {props.definition.example}</p>
             <p><u>Synonyms:</u> {props.synonym} </p>
            
         </section>
     )
 }
 
 export default Meaning