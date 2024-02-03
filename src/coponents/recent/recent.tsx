import { useSelector } from 'react-redux';
import './recent.scss'
import Item from '../item/item';

function Recent(): JSX.Element {
    const recentItem = useSelector((state: any) => state.pushRecentFile)
    return (
        <div className="recent">
            {
                recentItem[0] !== undefined ? recentItem.map((element: any)=>{
                    return <Item file = {element}/>
                }):null
            }
        </div>
    )
}

export default Recent;