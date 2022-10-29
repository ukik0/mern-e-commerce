import {Navbar} from "../Components/Navbar";
import {Announcement} from "../Components/Announcement";
import {Slider} from "../Components/Slider";
import {Categories} from "../Components/Categories";
import {Products} from "../Components/Products";
import {Newsletter} from "../Components/Newsletter";
import {Footer} from "../Components/Footer";


export function HomePage() {
    return (
        <>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
}