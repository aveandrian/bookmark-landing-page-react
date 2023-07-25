import './App.css'
import Navbar from './components/Navbar'
import TabsComponent from './components/TabsComponent'
import ExtensionComponent from './components/ExtensionComponent'
import FAQ from './components/FAQ'
import {ReactComponent as FooterLogo} from './assets/logo-bookmark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function App() {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')

  function handleChange(e){
    setError(null)
    setEmail(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(email == '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
      return setError("Whoops, make sure it's an email")
  }

  return (
    <> 
    <Navbar />
    <section className='header'>
      <div className='header-bg'></div>
      <div className='header-content'>
        <h1 className='header-title'>A Simple Bookmark Manager</h1>
        <p className='header-text'>
          A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='header-buttons-wrapper'>
          <button className='get-it-btn chrome'>Get it on Chrome</button>
          <button className='get-it-btn firefox'>Get it on Firefox</button>
        </div>
      </div>
      <img className='header-img' src='/images/illustration-hero.svg'/>
    </section>
    <section className='tabs-section'>
      <div className='tabs-section-bg'></div>
      <h1 className='tabs-section-title'>Features</h1>
      <p className='tabs-section-text'>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
      <TabsComponent />
    </section>
    <section className='extension-section'>
      <h1 className='extension-section-title'>Download the extension</h1>
      <p className='extension-section-text'>
        We've got more browsers in the pipeline. Please do let us know if you've 
        got a favourite you'd like us to prioritize.
      </p>
      <ExtensionComponent />
    </section>
    <section className='faq-section'>
      <h1 className='faq-section-title'>Frequently Asked Questions</h1>
      <p className='faq-section-text'>
        Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.
      </p>
      <FAQ />
      <button className="faq-btn">More info</button>
    </section>
    <section className='signup-section'>
      <p className='signup-stat'>35,000+ already joined</p>
      <h1 className='signup-title'>Stay up-to-date with what we’re doing</h1>
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className='input-wrapper'>

          <input className={`email-input ${error ? "input-error" : ""}`} placeholder='Enter your email address' value={email} onChange={handleChange}/>
          {error && <FontAwesomeIcon icon={faCircleExclamation} className='error-icon' size='2xl'/>}
          {error && <p className='error'>{error}</p>}
        </div>
        <button type='submit' className={`submit-btn ${error ? "btn-error" : ""}`}>Contact Us</button>
      </form>

    </section>
    <footer>
      <div className='footer-content'>
        <FooterLogo className='footer-logo' />
        <a>Features</a>
        <a>Pricing</a>
        <a>Contact</a>
        <div className='socials'>
          <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} size="xl" className="social-icon" />
        </div>
      </div>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </p>
    </footer>
    </>
  )
}

export default App
