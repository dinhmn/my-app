import { useState } from "react";
import "./App.css";
import ModalAdvance from "./components/modal/ModalAdvance";
import ModalBase from "./components/modal/ModalBase";
import TooltipAdvance from "./components/TooltipAdvance";

function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400 "
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400 mx-3"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          ducimus, amet at optio dolores doloremque facilis ratione quaerat
          error, facere provident nobis non iste necessitatibus nihil dolorum
          alias deleniti eos.
        </div>
      </ModalBase>
      <ModalAdvance
        visible={openModal}
        onClose={() => setOpenModal(false)}
        header="Welcome Back!"
        bodyClassName="w-full max-w-[400px]"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
            id="password"
          />
        </div>
        <button className="w-full p-4 font-semibold text-base text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvance>
      <div className="inline-block ml-5">
        <TooltipAdvance title="Tool tip">This is the tooltip</TooltipAdvance>
      </div>
    </div>
  );
}

export default App;
