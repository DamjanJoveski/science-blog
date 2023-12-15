import {HeroSection} from "./HeroSection.jsx";
import {FactSection} from "./FactSection.jsx";
export const Home = ({fact}) => {
    return (
        <>
            <HeroSection/>
            <FactSection fact={fact}/>
        </>
    )
}