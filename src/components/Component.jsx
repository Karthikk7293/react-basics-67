import React, { useEffect, useState } from 'react'

function Component() {
    const [state, setState] = useState(0);
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [unmount, setUnmount] = useState("border")

    useEffect(() => {
        console.log("logged");


        return () => {
            console.log("the component is unmount");
        }

    }, [])

    console.log({ state });


    return (
        <div className={`h-screen w-full border bg-slate-200 ${unmount} `}>
            Component {state}
            <br />
            <button className='border rounded bg-red-600 w-32 py-2 text-white uppercase ' onClick={(() => setUnmount("hidden"))} >change state</button>
        </div>

    )
}

export default Component