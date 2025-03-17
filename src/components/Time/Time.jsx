import React, { useEffect, useState } from 'react'
import './Time.css'
import jojo from "../../assets/Images/za-warudo.gif"


function Time() {

    const [time, setTime] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if(time < 10){
            const interval = setInterval(addOneTime, 1000);
            return () => {
                clearInterval(interval);
            };
        }      
    }, [time]);
       function addOneTime(){
        setTime(time + 1);
        if(time === 9){
            setIsComplete(true);

            const body = document.querySelector('body');
            body.classList.remove('default-color');
            body.classList.add('alt-color');
        }
       }
    
  return (
    <section className={isComplete ? 'completed-section' : 'white'}>
            <p className={isComplete ? 'completed-text' : 'blue'}>
                Nbr d'abonnée : {time}
                {isComplete && " (En gros ta pas de buzz)"}
            </p>
            
            <img 
  src={isComplete ? jojo : ""} 
  alt={isComplete ? "Za Warudo" : ""}
  
/>

{isComplete && (
    <>
    <p className='completed-text'>Ceci est une autre méthode pour faire la condition if</p>
    </>
)}
        </section>
  )
}

export default Time