import { useEffect, useRef, useState } from 'react';
import './upload.scss'
import upload from '../../assets/material icon/upload_file_FILL0_wght400_GRAD0_opsz48.svg'
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { FileUploader } from "react-drag-drop-files";
import close from '../../assets/material icon/add_FILL0_wght400_GRAD0_opsz48.svg'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import { uploadShow } from '../../redux/actions/uploadShow';
import LoadAnimation from '../loadAnimation/loadAnimation';

function Upload(): JSX.Element {
    const dispatch: Dispatch = useDispatch();
    const data = new FormData()
    const [files, setmyfiles] = useState(null)
    const [load, setLoad] = useState(false)

    const sendFile = async ()=>{
        if(files){
            data.append('file',files)
            setLoad(true)
            await axios.post('http://localhost:4554/files/upload',data,{
              headers: {
                 'Content-Type': "multipart/form-data" ,
                }
            }).then(()=>{
                setLoad(false)
                dispatch(uploadShow(false))
            })
    }}
    
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
          setmyfiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      })

     const handleChange = (file: any) => {
        setmyfiles(file)
      };
    return (
        <div className="upload">
            <div className="close" onClick={()=> dispatch(uploadShow(false)) }>
                <img src={close} />
            </div>
            <div className="upload-box">
                {
                    load == false ? 
                    <div className="content">
                    <label className='titel'>upload your file</label>
                    <div className="drag">
                        <div className="upload-icon">
                            <div className="icon">
                                <img src={upload} />
                            </div>
                            
                        </div>
                        <FileUploader handleChange={handleChange}
                        name="file"  label='glisser votre fichier' />
                        <div className="input" >
                        </div>
                        <input type="file" name="file" id="input-file" accept='*' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            e.target.files? setmyfiles(e.target.files[0]): null
                        }} />
                    </div>
                    <div className="send-btn" onClick={()=>sendFile()}>
                        send file
                    </div>
                </div>:<>
                    <LoadAnimation />
                    <label className='sending'>sending ...</label>
                </>
                }
            </div>
        </div>
    )
}

export default Upload;