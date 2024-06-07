import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return (
    <>
      <NavBar />

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
    </>
  );
};

export default Home;
