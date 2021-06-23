import Cards from "./Cards.js"
import Header from "./Header.js"

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <div className="main">
                <Cards/>
            </div>
        </div>
    )
}

export default HomePage