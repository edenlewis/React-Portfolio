import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';

function Portfolio(){
    return( 
        <div className="cont">
        <a href="https://github.com/tannernd/PropPlanner"><img src={one} alt="imgOne" className='img'/></a> 
        <a href="https://github.com/JBailey007/muscle-munch"><img src={two} alt="imgTwo" className='img'/></a> 
        <a href="https://github.com/edenlewis/Parent-Connect"><img src={three} alt="imgThree" className='img'/></a> 
        <a href="https://github.com/tannernd/PropPlanner"><img src={four} alt="imgFour" className='img'/></a> 
        </div>
    )
}
export default Portfolio