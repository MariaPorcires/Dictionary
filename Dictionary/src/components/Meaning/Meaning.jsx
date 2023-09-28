import './Meaning.css'
//Hämtar meanings med props för att kunna skriva ut på sidan.
function Meaning(props) {
  const synonymFormated = props.synonym.join(', ')
 
     return(
         <section className="meaning__definition">
            {/*Här skrivs definition av ordet ut samt exempel och synonymer . Om det saknas synonymer visas det inte på sidan.*/}
             <p>{props.meaning}</p>
             <p><u>Definition:</u> {props.definition}</p>
             {props.definition.example && <p><u>Example:</u> {props.definition.example}</p>}
             {synonymFormated && <p><u>Synonyms:</u> {synonymFormated} </p>}
            
         </section>
     )
 }
 
 export default Meaning