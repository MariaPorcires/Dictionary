function Meaning(props) {
 console.log('synonym', props.synonym);
  
 
     return(
         <section>
             <p>{props.meaning}</p>
             <p>{props.definition}</p>
             <p>{props.synonym}</p>
            
         </section>
     )
 }
 
 export default Meaning