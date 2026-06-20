import sunIcon from "../assets/images/sun.svg"
import moonIcon from "../assets/images/moon.svg"
function HomePage({darkMode, setDarkMode}){

    const icon = darkMode ? moonIcon : sunIcon;

    function toggleDarkMode(){
        setDarkMode(!darkMode);
        document.documentElement.className = darkMode ? 'dark' : 'light'
    }

    return (
        <div className="home-page-container">
            <header>
                <p>CVStudio</p>
                <button onClick={() => toggleDarkMode()}>
                    <img src={icon} width="21" alt="" />
                </button>
            </header>

            <div className="home-info">
                <h1>Build Your Professional CV in Minutes</h1>
                <p>Fill in your details, we handle the rest.</p>
                <button>Create CV</button>
            </div>
            
        </div>
    )
}

export default HomePage