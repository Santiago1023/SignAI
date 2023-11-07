
// import React, { useRef, useState } from 'react'

// const DragDrop = () => {
//     const [file, setFiles] = useState(null)
//     const inputRef = useRef();
    
//     const handleDragOver = (event) => {
//         event.preventDefault();
//         console.log("dragging over")
//     }

//     const handleDrop = (event) => {
//         event.preventDefault();
//         setFiles(event.dataTransfer.files)
//     }   

//     const handleUpload = () => { };

//     if(file) return (
//         <div className="uploads debug">
//             <ul>
//                 {Array.from(file).map((file, idx) => {
//                     return (
//                         <li key={idx}>
//                             {file.name}
//                         </li>
//                     )}
//                 )}
//             </ul>
//             <div className="actions">
//                 <button onClick={() => setFiles(null)}>Cancelar</button>
//                 <button onClick={handleUpload}>Subir</button>
//             </div>
//         </div>
//     )
//     return (
//         <>
    
//         {!file && (
//             <div className="dropzone mx-auto debug"
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//             >
                
//                 <h1 className="text-center mx-auto">Arrastre y suelte archivos</h1>
//                 <h1 className="my-5">O</h1>

//                 <input 
//                     type="file"
//                     multiple
//                     onChange={(event) => setFiles(event.target.file)}
//                     hidden
//                     ref={inputRef}
//                     className='debug'
//                   />
//                 <button onClick={() => inputRef.current.click()} className='debug'>Seleccione archivos</button>

//             </div>
//         )}
//         </>

//     )
// }

// export default DragDrop


// import React, { useState } from 'react'

// const DragDrop = () => {
//     const [file, setFile] = useState(null);
//   return (
//     <div>
//         <form onSubmit={}>
//             <label htmlFor="">Upload file:</label>
//             <input
//                 type="file"
//                 onChange={(e) => {
//                     setFile(e.target.files[0])
//                 }}
//              />
//              <button>Upload</button>
//         </form>
//     </div>
//   )
// }

// export default DragDrop