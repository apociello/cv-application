import sunIcon from "../assets/images/sun.svg"

function HomePage(){

    return (
        <div className="home-page-container">
            <header>
                <p>CVStudio</p>
                <button>
                    <img src={sunIcon} width="27" alt="" />
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