import { ConfigProfile } from "@/components/config-profile/ConfigProfile";
import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import TagPosition from "@/components/tag-position/TagPosition";



// import DragDrop from "@/components/drag-drop/DragDrop";

function Components() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="p-10">
      <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={false}>
          <FormUpdateCredentialUser setShowModal={setShowModal} />
        </Modal>
      )}
      <ConfigProfile />
      <TagPosition />

      <video width={1200} controls>
        <source src="http://localhost:8000/sign_videos/video/video.mp4" type="video/mp4"/>
      </video>
      {/* <DragDrop/> */}

      
    </main>
  );
}

export default Components;
