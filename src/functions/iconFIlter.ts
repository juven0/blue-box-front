import video from '../assets/icons/video-player.png'
import image from '../assets/icons/image.png'
import folder from '../assets/icons/folder.png'
import music from '../assets/icons/music.png'
import pdf from '../assets/icons/pdf.png'
import zip from '../assets/icons/zip-folder.png'
import doc from '../assets/icons/doc.png'
import code from '../assets/icons/folder (1).png'
import unknown from '../assets/icons/unknown-mail.png'

export const iconFilter = (extension: string): any => {
    const extVideo = ['mp4' , 'mov' , 'wav']
    const extAudio = ['mp3']
    const extImage = ['jpg' , 'jpeg' , 'webp' , 'gif' , 'png' , 'svg']
    const extFolder = ['folder']
    const extZip = ['zip' , 'rar' , 'tar']
    const extDoc = ['docx' , 'exle' , 'pptx']
    const extPdf = ['pdf']
    const extCode = ['js','css', 'html', 'xml', 'json', 'ts', 'py', 'rb', 'java', 'cpp', 'c', 'h', 'cs', 'php', 'sql',]
   
    if( extAudio.includes(extension) ) {
        return music
    } else if ( extVideo.includes(extension) ) {
        return video
    } else if ( extImage.includes(extension) ) {
        return image
    } else if ( extFolder.includes(extension) ) {
        return folder
    } else if ( extZip.includes(extension) ) {
        return zip
    } else if ( extDoc.includes(extension) ) {
        return doc
    } else if (extPdf.includes(extension)){
        return pdf
    } else if(extCode.includes(extension)){
        return code
    } else if(extension == null){
        return folder
    } else {
        return unknown
    }
}