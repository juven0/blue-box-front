import { Dispatch } from 'redux';
import './explore.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../item/item';
import { loadExplore } from '../../redux/actions/explore.action';
import back from '../../assets/material icon/undo_FILL0_wght400_GRAD0_opsz48.svg'

function Explore(): JSX.Element {
    const [actualyPath, setactualyPath] = useState(['init'])
    const dispatch : Dispatch = useDispatch();
    const files = useSelector((state: any) => state.loadExplore)
    const getPath = (path: string): string => {
        let element  = path.split('/')
        element.pop()
        return element.join(' > ')
    }

    const previewPath = (path : string) => {
        let element  = path.split('/')
        element.pop()
        element.pop()
        return element.join('/')
    }
    
    return (
        <div className="explore">
            <div className="header">
                <div className='button' onClick={()=>{
                    dispatch(loadExplore(previewPath(files[0].pathe)))
                }}>
                    <img src={back} />
                </div>
            <div className="actu-path">
                {
                     files[0] !==  undefined ? getPath(files[0].pathe) : null
                }
            </div>
            </div>
            
            <div className="explore-element">
                {
                    files[0] !==  undefined ? files.map((element: any) => {
                        return <Item file = {element}/>
                    }):null
                }
            </div>
        </div>
    )
}

export  default Explore; 