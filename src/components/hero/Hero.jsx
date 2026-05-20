import HeroButtons from './HeroButtons';
import "./Hero.css"


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_container">
                <h3 className="hero_job">STREAMER TWITCH</h3>
                <h1 className="hero_title">Hello,  my <br/>name  is<br/> Asterion</h1>
                <p className="hero_description">Salut moi c'est Asterion ! Tu veux qu'il te fasse quoi le minautore ?</p>
                <HeroButtons/>
            </div>
            <div className="hero_image">
                <img src="/assets/yellow-bg.png" className="yellow_bg"  alt="yellow bg" />
                <img src="https://yt3.googleusercontent.com/OcaRfoTCWk2O4DmXjFA8Sct8hwTzMpkGxC8OwIssmB5zGjiSO6CsD0Ru0NYzlzdaGJZNLGhl=s900-c-k-c0x00ffffff-no-rj" alt="asterion" width={300}/>
            </div>
        </div>
    )
}

export default Hero;