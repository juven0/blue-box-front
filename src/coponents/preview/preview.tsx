import { useDispatch, useSelector } from 'react-redux'
import './preview.scss'
import { iconFilter } from '../../functions/iconFIlter'
import add from '../../assets/material icon/add_FILL0_wght400_GRAD0_opsz48.svg'
import { Dispatch } from 'redux'
import { previewShow } from '../../redux/actions/previewShow.action';
import download from '../../assets/material icon/download_FILL0_wght400_GRAD0_opsz48.svg'
import axios from 'axios'

function Preview(): JSX.Element {
    const dispatch: Dispatch = useDispatch()
    const previewFile = useSelector((state: any) => state.loadPreview)
    const previewShowData = useSelector((state: any ) => state.previenShowReducer)
    const hidenPreview = ()=>{
        dispatch(previewShow(false))
    }
    const downloadFile = async (path: string, name: string) =>{
        const response = await fetch(`http://localhost:4554/files/download?path=${path}`);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = name;
        link.type = 'application/octet-stream'; // type MIME pour un fichier binaire sans type spécifique
        link.click();
        URL.revokeObjectURL(objectUrl);
        // axios.get(`http://localhost:4554/files/download?path=${path}`)
        // .then((res: any)=> {
        //      const blob  = new Blob([res.data] )
        //      const objectUrl = URL.createObjectURL(blob);
        //     const link = document.createElement('a');
        //     link.href = objectUrl;
        //     link.download = name;
        //     link.type = 'application/octet-stream';
        //     link.click();
        //     URL.revokeObjectURL(objectUrl);
        // })
    }
    return (
        <div className={previewShowData == true? "preview show-preview": "preview not-show-preview"}>
                    <div className="closePreview" onClick={()=>{dispatch(previewShow(false))} }>
                        <img src={add} />
                    </div>
                    <h2>File preview</h2>
                    <div className="view">
                        {
                            previewFile.extension == 'mp3'? 
                            <>
                                <audio src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} controls></audio>
                            </>: previewFile.extension == 'mp4'?
                            <>
                                <video controls >
                                    <source  src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} type='video/mp4'/>
                                </video>
                            </>: previewFile.extension == 'jpg'?
                            <>
                                <img src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} />
                            </> : previewFile.extension =='jpeg'?
                            <>
                                <img src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} />
                            </>: previewFile.extension == 'webp'?
                            <>
                                <img src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} />
                            </> : previewFile.extension == 'gif'?
                            <>
                                <img src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} />
                            </> : previewFile.extension == 'png'?
                            <>
                                <img src={`http://localhost:4554/files/stream?path=${previewFile.pathe}`} />
                            </> :
                            <>
                                <img src={iconFilter(previewFile.extension)} />
                            </>
                        }
                        
                    </div>
                    <div className="description ">
                        <p>name: <label>{previewFile.name}</label></p>
                        <p>path: <label>{previewFile.pathe}</label></p>
                        
                    </div>
                    <div className="download" onClick={()=>downloadFile(previewFile.pathe, previewFile.name)}>
                        <div className="icon">
                            <img src={download} />
                        </div>
                        <label>Download</label>
                    </div>
                </div>
    )
}

export default Preview;