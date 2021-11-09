const InputDropdown = () => {
    return ( 
        <>
            <div id="myDropdown2" className="dropdown-content2">
                <div className="button-labels">

                    <p>Recent Searches <span>Clear</span></p>
                </div>
                <div className="dropdown-btns">
                    <button className="drop-btn">portrait</button>
                    <button className="drop-btn">Arab people</button>
                    <button className="drop-btn">person</button>
                    <button className="drop-btn">avatar</button>
                </div>
                <div className="button-labels">
                    <p>Trending Searches </p>
                </div>
                <div className="dropdown-btns">
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> portrait</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> Arab people</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> person</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> avatar</button>
                </div>
                <div className="button-labels">
                    <p>Trending Topics</p>
                </div>
                <div className="dropdown-btn-divs">
                    <div className="img-text-div">
                        <img src="/images/hero-img.jpeg" className="btn-img" alt="" />
                        <p>Nature</p>
                    </div>
                    <div className="img-text-div">
                        <img src="/images/img-1-1.jpg" className="btn-img" alt="" />
                        <p>Hello world</p>
                    </div>
                    <div className="img-text-div">
                        <img src="/images/img-1-2.jpg" className="btn-img" alt="" />
                        <p>Hello world</p>
                    </div>
                </div>
                <div className="button-labels">
                    <p>Trending Searches </p>
                </div>
                <div className="dropdown-btns">
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> portrait</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> Arab people</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> person</button>
                    <button className="drop-btn"> <i className="fa fa-line-chart"></i> avatar</button>
                </div>
            </div>
        </>
     );
}
 
export default InputDropdown;