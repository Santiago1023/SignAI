import axios from "axios";
import React from 'react'

const Videos = () => {
    const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        // timeout: 1000,
        headers: { "Content-Type": "application/json" },
      });
    const insertarVideos=async() => {
        console.log('entro al metodo')
        const respuesta = await instance.get("http://127.0.0.1:8000/sign_videos/video/video.mp4")
        // .then(response=>{
        //     console.log(response.data);
        // }).catch(error=>{
        //     console.log(error);
        // })
        console.log('salio al metodo', respuesta);

    }
  return (
    <div>
        hola
        <button onClick={() => insertarVideos()}>llamar el metodo</button>
    </div>
  )
}

export default Videos