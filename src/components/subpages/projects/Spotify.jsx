import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import ModalSpotify from "./modals/ModalSpotify";

function Spotify() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-20 w-[80%] h-64 md:w-[40%] lg:min-w-[300px] mx-auto flex flex-col items-center justify-around text-center bg-gray-800 rounded-3xl hover:transform hover:scale-95 duration-500">
        <div>
          <h2 className="pb-4 text-xl">Spotify Clone</h2>
          <p>Technologies: Next 13, React, Tailwind, Supabase, PostgreSQL</p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="p-2 border hover:border-purple-500 hover:text-purple-500 rounded-md cursor-pointer"
        >
          Check out
        </button>
      </div>

      <ModalSpotify open={openModal} onClose={() => setOpenModal(false)} />
    </motion.div>
  );
}
export default Spotify;
