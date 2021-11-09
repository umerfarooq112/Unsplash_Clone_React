import InputDropdown from "../utils/InputDropdown";

const Hero = (props) => {

    const showSearchDiv = () => 
    {
        document.getElementById("myDropdown2").classList.add("input-show");
    }
    

    return ( 
        <>
            <section className="Hero-Section-Div">
                <div className="hero-section">
                    <div className="hero-div-img">
                    </div>

                    <div className="hero-div-text">
                        <h1 className="hero-div-h1">Unsplash</h1>
                        <h5 className="hero-div-text1">The internet’s source of <a href="" className="hero-div-text1-a">freely-usable
                                images </a> </h5>
                        <h5 className="hero-div-text2"> Powered by creators everywhere.</h5>
                
                        <div className="hero-input-div hero-input-dropdown" onClick={showSearchDiv}>
                            <i className="fa fa-search hero-icon-1 "></i>
                            <input type="text" name="input" id="hero-input" placeholder="Search Free High resolution photos" />
                            <i className="fa fa-camera hero-icon-2"></i>

                        </div>


                        <InputDropdown />


                        <div className="hero-trending-div">
                            <div>
                                Trending:
                            </div>
                            <div> flower, wallpapers, backgrounds, happy, love</div>
                        </div>
                    </div>
                    <div className="bottom-hero-div">
                        <div className="bottom-hero-div-section">
                            <div className="bottom-div-1">
                                Photo of the Day <span style={{color: "rgb(153, 153, 153)"}}>by</span> Nolan di Mario
                            </div>
                            <div className="bottom-div-2">
                                <span style={{color: "rgb(153, 153, 153)"}}>Read More About the </span>Unsplash Licence
                            </div>
                            <div className="bottom-div-3" style={{opacity: "0.7"}}>
                                <div>
                                    <img src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt="" />
                                </div>
                                <div className="hero-space">
                                    Create Your Website today
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;