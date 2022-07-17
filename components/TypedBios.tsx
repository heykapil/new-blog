import React from 'react'
import Typed from 'typed.js'
// import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    //   shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in <b className="font-medium">Ahmedabad, India.</b>
          {/* <Twemoji emoji="india-flag" /> */}
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Mathura</b> city.
        </li>
        <li>
        I'm passionate about maths and occasionally coding.
        </li>
        <li>I'm a learner and reader.</li>
        <li>
          I'm currently working on <b className="font-medium">Fractional-order dynamical systems</b>
          .
        </li>
        <li>I'm focusing on epidemiology now.</li>
        <li>I work mostly with Caputo , Atangana-Baleanu derivatives.</li>
        <li>I'm also interested in Linear Algebra, Harmonic Analysis and Numerical Methods.</li>
        <li>
          I'm a tea person. 
          {/* <Twemoji emoji="coffee" /> */}
        </li>
        <li>
          I'm a sport-guy. I love cricket, football and kabaddi.
          {/*<span className="ml-1">
            <Twemoji emoji="volleyball" />
          </span> */}
        </li>
        <li>I love watching cricket.
            {/* <Twemoji emoji="cricket" /></li> */}
        </li>
         <li> I love listening flute and guitar.
          {/* <Twemoji emoji="guitar" /> */}
        </li>
        <li>I love punjabi music.
        </li>
        <li>
          I love playing video games. 
          {/* <Twemoji emoji="video-game" /> */}
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios