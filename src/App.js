import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Particles from 'react-particles-js'
import { appdata } from './AppData.js'

const App = () => {
  return (
    <div>
      <div className='App'>
        <WelcomeScreen/>
        <Section header={appdata.work.header} subsections={appdata.work.subsections} id='workSection'/>
        <Section header={appdata.education.header} subsections={appdata.education.subsections} id='educationSection'/>
        <Section header={appdata.projects.header} subsections={appdata.projects.subsections} id='projectsSection'/>
        <Footer/>
        <Background/>
      </div>
    </div>
  );
}

const Background = () => {
  return (
    <Particles
      className='Background'
      params={{
        "particles": {
          "number": {
              "value": 50,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 10,
              "random": true
          },
          "move": {
              "direction": "bottom",
              "out_mode": "out",
              "bounce": false,
              "speed": 1,
          },
          "line_linked": {
              "enable": false
          },
          "shape": {
            "type": [
              "triangle"
            ]
          },
        }
      }}
    />
  );
}

const WelcomeScreen = () => {
  const [atTop, setAtTop] = useState(true)
  const variants = {
    atTop: {},
    notAtTop: {},
  }

  const handleScroll = () => {
    setAtTop(window.pageYOffset === 0)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={atTop ? "atTop" : "notAtTop"}
      variants={variants}
      className='WelcomeScreenWrapper'
      id='welcomeScreen'
    >
      <div className='WelcomeScreen'>
        <WelcomeScreenPhoto/>
        <WelcomeScreenNoteCard/>
        <WelcomeScreenDownArrow/>
      </div>
    </motion.div>
  );
}

const WelcomeScreenPhoto = () => {
  const variants = {
    atTop: {
      opacity: 1,
      boxShadow: '-10px 20px 20px #141414'
    },
    notAtTop: {
      opacity: 0.5,
      scale: .8,
      boxShadow: '0px 10px 10px #141414'
    }
  }

  return (
    <motion.img
      className='WelcomePhoto'
      src={appdata.welcome.image}
      onMouseOver={e => e.currentTarget.src = appdata.welcome.imageHover}
      onMouseOut={e => e.currentTarget.src = appdata.welcome.image}
      alt='welcome'
      variants={variants}
    />
  );
}

const WelcomeScreenNoteCard = () => {
  const variants = {
    atTop: {
      opacity: 1,
      boxShadow: '-10px 20px 20px #141414'
    },
    notAtTop: {
      opacity: 0.5,
      scale: .8,
      boxShadow: '0px 10px 10px #141414'
    },
  }

  return (
    <motion.div className='NoteCard' variants={variants}>
      <NoteCardText header={appdata.welcome.header} details={appdata.welcome.details} buttons={appdata.welcome.buttons}/>
    </motion.div>
  );
}

const WelcomeScreenDownArrow = () => {
  const variants = {
    atTop: {
      opacity: [1, 0],
      transition : {
        repeat: Infinity,
        repeatType: "reverse",
        duration: .5
      }
    },
    notAtTop: { opacity: 0 },
  }

  return (
    <motion.img
      className='DownArrow'
      src={appdata.welcome.downArrowImage}
      alt='down-arrow'
      variants={variants}
      onClick={() => document.getElementById('workSection').scrollIntoView({ behavior: 'smooth', block: 'start' })}
    />
  );
}

const Section = (props) => {
  let subsections = []
  if (props.subsections) {
    subsections = props.subsections.map((subsection, index) =>
      <Entry
        src={subsection.image}
        header={subsection.header}
        details={subsection.details}
        buttons={subsection.buttons}
        key={index}
      />
    )
  }

  return (
    <div className='Section' id={props.id}>
      <SectionHeader text={props.header}/>
      { subsections }
    </div>
  );
}

const SectionHeader = (props) => {
  const [scrollKeyFrames, setScrollKeyFrames] = useState([null, null, null, null])
  const ref = useRef()

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const rect = ref.current.getBoundingClientRect()
    const globalRectTop = rect.top + scrollTop
    const globalRectCenter = globalRectTop + rect.height / 2
    const globalRectCenterOffset = globalRectCenter - window.innerHeight / 2

    setScrollKeyFrames([globalRectCenterOffset - 1.3*(window.innerHeight / 2),
      globalRectCenterOffset - 0.5*(window.innerHeight / 2),
      globalRectCenterOffset + 0.9*(window.innerHeight / 2),
      globalRectCenterOffset + 1.2*(window.innerHeight / 2)])
  }

  useEffect(() => {
    window.addEventListener('load', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('load', handleScroll);
    };
  }, []);

  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, scrollKeyFrames, [0.5, 1, 1, 1])
  const opacity = useTransform(scrollY, scrollKeyFrames, [0, 1, 1, 1])
  const borderRadius = useTransform(scrollY, scrollKeyFrames, ['100px', '10px', '10px', '10px'])
  const boxShadow = useTransform(scrollY, scrollKeyFrames,
    ['0px 10px 10px #141414', '0px 10px 10px #141414', '0px 10px 10px #141414', '0px 10px 10px #141414'])

  return (
    <div ref={ref} className='SectionHeaderWrapper'>
      <motion.div className='SectionHeader' style={{ scale, opacity, borderRadius, boxShadow }}>
        <div>
          { props.text }
        </div>
      </motion.div>
    </div>
  );
}

const Entry = (props) => {
  return (
    <div className='Subsection'>
      <EntryImage src={props.src} />
      <NoteCard
        header={props.header}
        details={props.details}
        buttons={props.buttons}
      />
    </div>
  );
}

const EntryImage = (props) => {
  const [scrollKeyFrames, setScrollKeyFrames] = useState([null, null, null, null])
  const ref = useRef()

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const rect = ref.current.getBoundingClientRect()
    const globalRectTop = rect.top + scrollTop
    const globalRectCenter = globalRectTop + rect.height / 2
    const globalRectCenterOffset = globalRectCenter - window.innerHeight / 2

    setScrollKeyFrames([globalRectCenterOffset - 1.3*(window.innerHeight / 2),
      globalRectCenterOffset - 0.5*(window.innerHeight / 2),
      globalRectCenterOffset + 0.9*(window.innerHeight / 2),
      globalRectCenterOffset + 1.2*(window.innerHeight / 2)])
  }

  useEffect(() => {
    window.addEventListener('load', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('load', handleScroll);
    };
  }, []);

  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, scrollKeyFrames, [0.5, 1, 1, 1])
  const x = useTransform(scrollY, scrollKeyFrames, [-200, 0, 0, 0])
  const y = useTransform(scrollY, scrollKeyFrames, [200, 0, 0, 0])
  const rotateX = useTransform(scrollY, scrollKeyFrames, [90, 0, 0, 0])
  const opacity = useTransform(scrollY, scrollKeyFrames, [0, 1, 1, 0])
  const rotateY = useTransform(scrollY, scrollKeyFrames, [90, 0, 0, 0])
  const borderRadius = useTransform(scrollY, scrollKeyFrames, ['100%', '10%', '10%', '10%'])
  const boxShadow = useTransform(scrollY, scrollKeyFrames,
    ['-10px 20px 20px #141414', '-10px 20px 20px #141414', '-10px 20px 20px #141414', '0px 10px 10px #141414'])

  return (
    <div ref={ref}>
      <motion.img className='EntryImage' src={props.src} style={{ scale, opacity, x, y, rotateY, rotateX, borderRadius, boxShadow }}/>
    </div>
  );
}

const NoteCard = (props) => {
  const [scrollKeyFrames, setScrollKeyFrames] = useState([null, null, null, null])
  const ref = useRef()

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const rect = ref.current.getBoundingClientRect()
    const globalRectTop = rect.top + scrollTop
    const globalRectCenter = globalRectTop + rect.height / 2
    const globalRectCenterOffset = globalRectCenter - window.innerHeight / 2

    setScrollKeyFrames([globalRectCenterOffset - 1.3*(window.innerHeight / 2),
      globalRectCenterOffset - 0.5*(window.innerHeight / 2),
      globalRectCenterOffset + 0.9*(window.innerHeight / 2),
      globalRectCenterOffset + 1.2*(window.innerHeight / 2)])
  }

  useEffect(() => {
    window.addEventListener('load', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('load', handleScroll);
    };
  }, []);

  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, scrollKeyFrames, [1, 1, 1, 1])
  const x = useTransform(scrollY, scrollKeyFrames, [200, 0, 0, 0])
  const y = useTransform(scrollY, scrollKeyFrames, [200, 0, 0, 0])
  const rotateX = useTransform(scrollY, scrollKeyFrames, [90, 0, 0, 0])
  const rotateY = useTransform(scrollY, scrollKeyFrames, [-20, 0, 0, 0])
  const opacity = useTransform(scrollY, scrollKeyFrames, [0, 1, 1, 0])
  const boxShadow = useTransform(scrollY, scrollKeyFrames,
    ['-10px 20px 20px #141414', '-10px 20px 20px #141414', '-10px 20px 20px #141414', '0px 10px 10px #141414'])

  return (
    <div className='NoteCardWrapper' ref={ref}>
      <motion.div className='NoteCard' style={{ scale, opacity, x, y, rotateX, rotateY, boxShadow }}>
        <NoteCardText header={props.header} details={props.details} buttons={props.buttons}/>
      </motion.div>
    </div>
  )
}

const NoteCardText = (props) => {
  let buttons = []
  if (props.buttons) {
    buttons = props.buttons.map((button, index) => <Button label={button.label} onClick={button.onClick} key={index}/>)
  }

  return (
    <div className='NoteCardText'>
      <div className='NoteCardHeader'>
        { props.header }
      </div>
      <div className='NoteCardDetails'>
        { props.details }
      </div>
      <div className='Buttons'>
        { buttons }
      </div>
    </div>
  )
}

const Button = (props) => {
  const variants = {
    tap: {
      scale: 0.9,
      backgroundColor: '#1e1e1e',
      color: '#bfbfbf',
      cursor: 'pointer',
      boxShadow: '-2px 5px 5px #141414',
      transition: {
        duration: 0.05
      }
    },
    hover: {
      y: 3,
      backgroundColor: '#262626',
      color: '#ffffff',
      transition: {
        duration: 0.1
      },
      cursor: 'pointer',
      boxShadow: '-5px 10px 10px #141414'
    },
  }

  return (
    <motion.button
      className='Button'
      onClick={props.onClick}
      whileHover='hover'
      whileTap='tap'
      variants={variants}
    >
      { props.label }
    </motion.button>
  );
}

const Footer = () => {
  return (
    <div className='Footer'>
      <Button label='Back' onClick={() => document.getElementById('welcomeScreen').scrollIntoView({ behavior: 'smooth', block: 'start' })}/>
    </div>
  );
}

// function useOnScreen(ref) {
//   const [isIntersecting, setIntersecting] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIntersecting(entry.isIntersecting)
//     )
//     observer.observe(ref.current)
//     return () => { observer.disconnect() }
//   }, [ref])

//   return isIntersecting
// }

export default App;