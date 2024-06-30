import './HomeSection4.css'
import CountUp from 'react-countup';



function HomeSection4(){
    return(
        <div className='section-features'>
                <div className="service-section">
                    <div className="icon-box">
                        <p className="service-title">
                        <CountUp 
                            start={0}
                            end={16}
                            duration={2}
                            redraw={true}
                            enableScrollSpy={true}
                        /> 
                        </p>
                        <p className="service-para">Programming Languages Supported</p>
                    </div>

                    <div className="icon-box">
                        <p className="service-title">
                        <CountUp 
                            start={0}
                            end={100}
                            duration={2}
                            redraw={true}
                            enableScrollSpy={true}
                        />
                        </p>
                        <p className="service-para">Unique Account Sign-in</p>
                    </div>

                </div>

                <div className='divsec4imgcomp'>
                    <img src='./section4img.png' />
                </div>
        </div>
)
}

export default HomeSection4;