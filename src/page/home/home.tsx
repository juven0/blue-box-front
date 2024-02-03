import { useDispatch, useSelector } from 'react-redux';
import Header from '../../coponents/header/header';
import NavBar from '../../coponents/navBar/navBar';
import './home.scss'
import { Dispatch } from 'redux';
import { getFiles } from '../../redux/actions/files.action';
import Main from '../../coponents/main/main';
import { changeMode } from '../../redux/actions/mode.action';
import { loadAllFiles } from '../../redux/actions/allFiles.action';
import Recent from '../../coponents/recent/recent';
import HomeComponent from '../../coponents/home/homeComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Explore from '../../coponents/explore/explor';
import image from '../../assets/icons/image.png'
import { iconFilter } from '../../functions/iconFIlter';
import Upload from '../../coponents/upload/upload';
import Preview from '../../coponents/preview/preview';


function Home(): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch();
    const [homeDte, sethomeDte] = useState(null)
    //const files = dispatch(getFiles('/media/eddy'));
    const mode = useSelector((state: any) => state. modeReducer)
    const view = (mode: string): JSX.Element => {
        if(mode == 'star'){
            return <Recent/>
        } else if (mode == 'home') {
            return <HomeComponent />
        } else if(mode == 'explore'){
            return <Explore />
        } else {
            return <Main />
        }
    }
    const previewFile = useSelector((state: any) => state.loadPreview)
    const previewShow = useSelector((state: any ) => state.previenShowReducer)
    const showUpload = useSelector((state: any)=> state.uploadShowReducer)

    return (
        <div className="home">
            <div className="navigation">
                <NavBar/>
            </div>
            <div className={previewShow == true?"container container-min" :"container container-max" }>
                <Header />
                {
                    view(mode)
                }
            </div>
            {
                previewFile.name !== undefined ? 
                    <Preview />
                :null
            }
            {
                showUpload == true ? <Upload /> : null
            }
        </div>
    )
}

export default Home;