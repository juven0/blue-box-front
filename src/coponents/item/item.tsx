import './item.scss'
import icon from '../../assets/icons/image.png'
import { iconFilter } from '../../functions/iconFIlter';
import { myFile } from '../../interfaces/myFile.interface';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { pushRecentFile } from '../../redux/actions/recent.action';
import { loadExplore } from '../../redux/actions/explore.action';
import { loadPreview } from '../../redux/actions/preview.action';
import { changeMode } from '../../redux/actions/mode.action';
import { previewShow } from '../../redux/actions/previewShow.action';

function Item( props ): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch()
    const recent = useSelector((state: any)=> state.pushRecentFile)
    const addRecent = (data: myFile) => {
        dispatch(pushRecentFile(data));
    }
    return (
        <div className="item">
            <div className="icon" onClick={()=> {
                if(props.file.type == 'directory'){
                    dispatch(loadExplore(props.file.pathe))
                    dispatch(changeMode('explore'))
                } else {
                    dispatch(previewShow(true))
                    dispatch(loadPreview(props.file))
                }
                addRecent(props.file)
                }}>
                <img src={iconFilter(props.file.extension)} />
            </div>
            <div className="info">
                <p>{props.file.name}</p>
            </div>
        </div>
    )
}

export default Item;