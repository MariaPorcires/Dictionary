import './Meaning.css'

function Meaning(props) {
  const synonymFormated = props.synonym.join(', ')
 
     return(
         <section className="meaning__definition">
             <p>{props.meaning}</p>
             <p><u>Definition:</u> {props.definition}</p>
             {props.definition.example && <p><u>Example:</u> {props.definition.example}</p>}
             {synonymFormated && <p><u>Synonyms:</u> {synonymFormated} </p>}
            
         </section>
     )
 }
 
 export default Meaning