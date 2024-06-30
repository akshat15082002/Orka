import CountUp from 'react-countup';
import './HomeSection2.css';

function HomeSection2(){
    return(
        <div className='second-heading'> 
        <span className='second-number'>
          <CountUp 
              start={0}
              end={16}
              duration={2}
              redraw={true}
              enableScrollSpy={true}
          /> 

        </span>
        Programming Languages Supported
      </div>
    )
}

export default HomeSection2;