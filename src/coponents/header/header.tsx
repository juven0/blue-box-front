import './header.scss'
import search from '../../assets/material icon/search_FILL0_wght400_GRAD0_opsz48.svg'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { uploadShow } from '../../redux/actions/uploadShow';
import { useState } from 'react';
import axios from 'axios';
import { loadExplore, setExploreState } from '../../redux/actions/explore.action';
import { changeMode } from '../../redux/actions/mode.action';

function Header(): JSX.Element {
    const [searchData, setsearchData] = useState('')
    const dispatch: Dispatch = useDispatch();
    const uploadPge = () =>{
        dispatch(uploadShow(true))
    }
    const brutPath  = useSelector((state: any)=> state.loadExplore)
    const getPath = (brutPath: any)=> {
        let path = brutPath[0].pathe.split('/')
        path.pop()
       return path.join('/')
    }
    return (
        <div className="header">
            <div className="content">
                <div className="name"><label><span>blue</span>box</label><span className='dote'>.</span></div>
                <div className="search-bar">
                   <input 
                   type="text"
                    name=""
                    id=""
                    placeholder='search file'
                    value={searchData}
                    onChange={(e: any)=> setsearchData(e.target.value)} />
                   <div className="search-icon" onClick={()=> {
                        dispatch(setExploreState(searchData, getPath(brutPath)))
                        dispatch(changeMode('explore'))
                   }}>
                    <img src={search} />
                   </div>
                </div>
                <div className="sendfile" onClick={()=> uploadPge()}>
                    <label>Send</label>
                </div>
            </div>
        </div>
    )
}

export default Header;