import './navBar.scss'
import star from '../../assets/material icon/history_toggle_off_FILL0_wght400_GRAD0_opsz48.svg';
import home from '../../assets/material icon/home_FILL0_wght400_GRAD0_opsz48.svg';
import images from '../../assets/material icon/image_FILL0_wght400_GRAD0_opsz48.svg';
import code from '../../assets/material icon/terminal_FILL0_wght400_GRAD0_opsz48.svg';
import doc from '../../assets/material icon/description_FILL0_wght400_GRAD0_opsz48.svg';
import video from '../../assets/material icon/slideshow_FILL0_wght400_GRAD0_opsz48.svg';
import directory from '../../assets/material icon/folder_FILL0_wght400_GRAD0_opsz48.svg'
import sentiment from '../../assets/material icon/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48.svg'
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import  { changeMode } from '../../redux/actions/mode.action';
import { loadAllFiles } from '../../redux/actions/allFiles.action';
import { loadVisible } from '../../redux/actions/visible.action';
import { initExplore, loadExplore } from '../../redux/actions/explore.action';
import blueBox from '../../assets/boxblue.png';

function NavBar(): JSX.Element {
    const navigationElement: NavigationItem[] = [
        {
            type:'image',
            icon: images,
        },
        {
            type:'doc',
            icon: doc,
        },
        {
            type:'video',
            icon: video,
        },
        {
            type:'audio',
            icon: sentiment,
        },
    ];
    const dispatch: Dispatch<any> = useDispatch();
    const mode = useSelector((state:any) => state.modeReducer);
    const updateMode = (newMode: string): void => {
        dispatch(changeMode(newMode));
    }
    const homeFiles = useSelector((state: any)=> state.loadAllFiles)

    const loadNewCategorie = async (type: string) => {
        const localFiles= await homeFiles.find(function (item: any){
            return item.categorie === type;
        })
        if (localFiles){
        }else{
            await dispatch(loadAllFiles(type))
        }
    }
    const changeVisible = async (type: string) =>{
        const recentFile= await homeFiles.find(function (item: any){
            return item.categorie === type;
        })
        await dispatch(loadVisible(recentFile))
    }
    const recent = useSelector((state: any) => state.pushRecentFile)
    const loadRecent =async (data: any)=>{
       
        await dispatch(loadVisible(data))
    }
    return (
        <div className="navBar">
            <div className="logo">
                <img src={blueBox}/>
            </div>
            <ul>
            <li className={ 'home' === mode ? 'active-li':'' }>
                <div className={ 'home' === mode ? 'div-active navItem':'navItem' } onClick={()=>{
                    updateMode('home')}} >
                    <div className="icon">
                        <img src={home} alt=""  />
                    </div>
                    <label className={ 'home' === mode ? 'label-acvtive':'' }>home</label>
                </div>
            </li>
                    {
                        navigationElement.map((element : NavigationItem): any => {
                            return (
                                <li key={element.type} className={ element.type === mode ? 'active-li':'' }>
                                    <div className={ element.type === mode ? 'div-active navItem':'navItem' } onClick={()=>{
                                        updateMode(element.type);
                                        loadNewCategorie(element.type).then(()=>{
                                            changeVisible(element.type)
                                        });
                                        
                                    }} >
                                        <div className="icon">
                                            <img src={element.icon} alt=""  />
                                        </div>
                                        <label className={ element.type === mode ? 'label-acvtive':'' }>{element.type}</label>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li className={ 'explore' === mode ? 'active-li':'' }>
                        <div className={ 'explore' === mode ? 'div-active navItem':'navItem' } onClick={()=>{
                            updateMode('explore')
                            dispatch(initExplore())}} >
                            <div className="icon">
                                <img src={directory} alt=""  />
                            </div>
                            <label className={ 'explore' === mode ? 'label-acvtive':'' }>explore</label>
                         </div>
                    </li>
                   <li className={ 'star' === mode ? 'active-li':'' }>
                        <div className={ 'star' === mode ? 'div-active navItem':'navItem' } onClick={()=>{
                            updateMode('star')}} >
                            <div className="icon">
                                <img src={star} alt=""  />
                            </div>
                            <label className={ 'star' === mode ? 'label-acvtive':'' }>recent</label>
                         </div>
                    </li>
            </ul>
        </div>
    )
}

export default NavBar