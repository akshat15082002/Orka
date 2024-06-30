import './Footer.css';

function Footer(){
    return(
        <>
        <hr className='horiz'/>
        <div id="footer">

        <div className="col col1">
            <h3>Orka</h3>
            <p>Made with <span  style={{color: '#BA6573'}}>❤</span></p>
        </div>

        <div className="col col2">
            <p>Adavita Soni</p>
            <div className="social">
                <a href="https://codepen.io/Juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
                <a href="https://twitter.com/juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
                <a href="https://youtube.com/@juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
            </div>
        </div>

        <div className="col col3">
            <p>Aakshat Jindal</p>
            <div className="social">
                <a href="https://codepen.io/Juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
                <a href="https://twitter.com/juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
                <a href="https://youtube.com/@juxtopposed" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
            </div>
        </div>

        </div>
        </>
    )
}

export default Footer;