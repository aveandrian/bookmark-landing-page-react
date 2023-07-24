import '../styles/ExtensionComponent.css'

const extensionsData = [
    {
        id: 0,
        logo: '/images/logo-chrome.svg',
        name: "Chrome",
        version: '62'
    },
    {
        id: 1,
        logo: '/images/logo-firefox.svg',
        name: "Firefox",
        version: '55'
    },
    {
        id: 2,
        logo: '/images/logo-opera.svg',
        name: "Opera",
        version: '46'
    }
];

export default function ExtensionComponent(){
    return (
        <div className='extension-cards-wrapper'>
            {extensionsData.map((extension, i) => (
                <div key={extension.id} className='extension-card' style={{marginTop: `calc(5vh * ${i})`}}>
                    <img className='browser-logo' src={extension.logo}/>
                    <h1 className='browser-name'>Add to {extension.name}</h1>
                    <p className='browser-version'>Minimum version {extension.version}</p>
                    <button className='install-btn'>Add & Install Extension</button>
                </div>
            ))}
        </div>
    )
        
}