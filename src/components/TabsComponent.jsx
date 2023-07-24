import { useState } from "react"
import '../styles/TabsComponent.css'

const tabInfo = [
    {
        img: '/images/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        img: '/images/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        img: '/images/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },

]

export default function TabsComponent(){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const selectedDividerStyles = {
        transform: 'translateX(calc(100% *2))'
    }
    return (
        <>
            <div className="tab-name-wrapper">
                <div className={`tab-name ${selectedIndex == 0 ? "active"  :""}`} onClick={()=>setSelectedIndex(0)}>Simple Bookmarking</div>
                <div className={`tab-name ${selectedIndex == 1 ? "active"  :""}`} onClick={()=>setSelectedIndex(1)}>Speedy Searching</div>
                <div className={`tab-name ${selectedIndex == 2 ? "active"  :""}`} onClick={()=>setSelectedIndex(2)}>Easy Sharing</div>
            </div>
            <div className="divider">
                <div className="selected-divider" style={{transform: `translateX(calc(100% * ${selectedIndex}))`}}></div>
            </div>
            <div className="tab-content">
                <img className="tab-img" src={tabInfo[selectedIndex].img} />
                <div className="tab-content-description">
                    <h1 className="tab-content-title">{tabInfo[selectedIndex].title}</h1>
                    <p className="tab-content-text">{tabInfo[selectedIndex].text}</p>
                    <button className="tab-content-btn">More info</button>
                </div>
            </div>
        </>
    )
}