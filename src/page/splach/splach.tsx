import './splach.scss';
import logo from '../../assets/boxblue.png';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';

function Splach(): JSX.Element {
    let navigate: NavigateFunction = useNavigate()
    setTimeout(()=>{
       navigate('/home')
    },4000)

    return(
        <div className="splach">
            <div className='splachIcon'>
                <img src={logo}></img>
            </div>
            <div className="name">
                <label><span>blue</span>box</label><span className='dote'>.</span>
            </div>
        </div>
    )
}

export default Splach;