import React, { useState } from 'react'

function Click() {

    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count + 1);
    }
    function removeOne(){
        setCount(count - 1);
    }
  return (
    <section>
        <p>
            Vous avez cliqué {count} fois !
        </p>
        <button onClick={addOne}>Mythe</button>
        <p>Ou</p>
        <button onClick={removeOne}>Realité</button>

        
    </section>
  )
}

export default Click