import React, {useRef, useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

    // 1st approach of using gsap with react 
    
    //  useGSAP(() => {
    //     gsap.from(".box",{
    //         x:-300,
    //         opacity:0,
    //         duration:.7,
    //         delay:.3
    //     })
    // })


    // 2nd approach of using gsap animation in react 

    // const boxRef = useRef()

    // useGSAP(() => {
    //     gsap.to(boxRef.current,{
    //         rotate:360,
    //         delay:.6,
    //         duration:1
    //     })
    // })
    

    // 3rd Approach of using gsap animation in react with scope
    // const myRef = useRef()
    // useGSAP(() => {
    //         gsap.from(".box",{
    //         rotate:360,
    //         delay:.6,
    //         duration:1
    //         })
    // },{scope:myRef})


    // using useState hook 

    const[circle , setCircle] = useState(0)

    const random = gsap.utils.random(-500,500,10)

    useGSAP(() => {
        gsap.to(".circle" , {
            x:circle,
            duration:1,
            delay:.4
        })
    } , [circle])


    return (
        <main>
            {/* <div className='box'></div> */}
            {/* <div ref={myRef} className="container">
                <div className="circle"></div>
                <div className="box"></div>
            </div>
            <div className="container1">
                <div className="circle"></div>
                <div className="box"></div>
            </div> */}
            <button onClick={() => {
                setCircle(random)
                console.log(circle);
            }}>Animate</button>
            <div className="circle"></div>
        </main>
    )
}

export default App
