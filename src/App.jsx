import './App.css'
import Navbar from './components/Navbar'
import TabsComponent from './components/TabsComponent'
import ExtensionComponent from './components/ExtensionComponent'

function App() {

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
  
    Frequently Asked Questions
    
    Here are some of our FAQs. If you have any other questions you’d like 
    answered please feel free to email us.
  
    {/* <!-- Question 1 --> */}
    What is Bookmark?
  
    {/* <!-- Answer 1 --> */}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
  
    {/* <!-- Question 2 --> */}
    How can I request a new browser?
  
    {/* <!-- Answer 2 --> */}
    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
  
    {/* <!-- Question 3 --> */}
    Is there a mobile app?
  
    {/* <!-- Answer 3 --> */}
    Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
    sollicitudin ex et ultricies bibendum.
  
    {/* <!-- Question 4 --> */}
    What about other Chromium browsers?
  
    {/* <!-- Answer 4 --> */}
    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
    vitae neque eget nisl gravida pellentesque non ut velit.
  
    More Info
  
    35,000+ already joined
  
    Stay up-to-date with what we’re doing
  
    Contact Us
  
    Features
    Pricing
    Contact
    
    <footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </p>
    </footer>
    </>
  )
}

export default App
