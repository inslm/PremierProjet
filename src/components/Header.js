import HomePage from './HomePage.js'
import img from '../imgs/logo.mrc.png'

const Header = () => {
    return (
        <section className="Header">
            <div className="logo">
                <a href={<HomePage/>}>
                    <img src={img}/>
                </a>
            </div>
        </section>
    )
}

export default Header