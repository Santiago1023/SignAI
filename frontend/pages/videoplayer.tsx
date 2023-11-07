"use client"
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';
import { CldVideoPlayer } from "next-cloudinary";
const videoplayer = () => {
  return (
    // <CldImage
    //     width="600"
    //     height="600"
    //     src="qferzghkxxzkdscwmiq1" alt="imagen cualquiera"
    //   />
 
    // <CldUploadWidget uploadPreset="next-cloudinary-unsigned">
    // {({ open }) => {
    //     function handleOnClick(e) {
    //     e.preventDefault();
    //     open();
    //     }
    //     return (
    //     <button className="button" onClick={handleOnClick}>
    //         Upload an Image
    //     </button>
    //     );
    // }}
    // </CldUploadWidget>
    // <CldVideoPlayer
    //     id="sea-turtle"
    //     width='800'
    //     height='600'
    //     src="samples/sea-turtle"
    //   />
    <>
    <button id="upload_widget" className="cloudinary-button">Upload files</button>

    <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  

    <script type="text/javascript"> 
        var myWidget = cloudinary.createUploadWidget({
        cloudName: 'duha3yo9m', 
        uploadPreset: 'my_preset'}, (error, result) => { 
            if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            }
        }
        )

        document.getElementById("upload_widget").addEventListener("click", function(){
            myWidget.open();
        }, false);
    </script>
    
    </>
  )
}

export default videoplayer