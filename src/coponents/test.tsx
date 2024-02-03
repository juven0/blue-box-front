// import React, { useRef } from 'react';

// function VideoPlayer() {
//   const videoRef = useRef(null);

//   const handleTimeUpdate = () => {
//     // Mettre à jour la position actuelle de la vidéo
//     const currentTime = videoRef.current.currentTime;
//     console.log(`Position actuelle : ${currentTime}`);
//   };

//   const handleProgressClick = (e) => {
//     // Calculer la position de la souris par rapport à la barre de progression
//     const progressBar = e.target;
//     const progressPosition = (e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
    
//     // Définir la position de la vidéo en fonction de la position de la souris
//     const videoDuration = videoRef.current.duration;
//     videoRef.current.currentTime = progressPosition * videoDuration;
//   };

//   return (
//     <div>
//       <video ref={videoRef} controls onTimeUpdate={handleTimeUpdate}>
//         <source src="path/to/video.mp4" type="video/mp4" />
//         <source src="path/to/video.webm" type="video/webm" />
//       </video>
//       <div onClick={handleProgressClick}>
//         <progress value="0" max="100"></progress>
//       </div>
//     </div>
//   );
// }

// export default VideoPlayer;
