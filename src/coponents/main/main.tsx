import Item from '../item/item';
import './main.scss'
import { iconFilter } from '../../functions/iconFIlter';
import { useSelector } from 'react-redux';

function Main(): JSX.Element {

    const visible = useSelector((state: any)=> state.loadVisible)

    return (
        <div className="main">
            {
                visible.files !== undefined ? visible.files.map((element: any) => {
                    return <Item file = {element}/>
                }):null
            }
        </div>
    )
}

export default Main;