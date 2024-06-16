import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Home = () => {
  const [openAddEditModal, setOpenAddEditmodal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  //get user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  return (
    <>
      <NavBar userInfo={userInfo} />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting on 7th"
            date="3rd Aor 2024"
            content="bskdfg  sbdfy gfiyas usfiskhfk gfyasdfkh fsfbks sfh gf hgfia hgnkjhg hoergj eou hgiueht kouewrhtieoir oengoierhg rgouerg eroihge80rgoer"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditmodal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditmodal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
