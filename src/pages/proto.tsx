import { Gi3DMeeple } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function Page() {
  return (
    <div className="flex h-screen w-screen bg-blue-500">
      <div className="flex w-[15%] flex-col items-center justify-between  border-r border-r-gray-400 bg-white">
        <div className=" mt-2 flex h-7">
          <Gi3DMeeple className="h-full w-full" />
          <span className="text-2xl font-bold">Literia</span>
        </div>
        <div className="flex h-[7%] w-full items-center justify-center   bg-white">
          <FaUserCircle className="h-full w-full" />
          <span>User</span>
        </div>
      </div>

      <div className="flex w-[85%] flex-col">
        <div className="flex h-[90%] flex-col items-center gap-4 bg-white pt-6">
          <div className=" w-[60%] rounded-md border border-gray-400 p-7 shadow-md">
            <h1>Translate:</h1>
            <h1 className="text-2xl font-bold">
              "Example sentence being used for the purpose of testing UI"
            </h1>
          </div>
          <div className=" w-[60%]">
            <h1 className="text-gray-500">
              Your Translation: Oración de ejemplo utilizada con el fin de
              probar la interfaz de usuario
            </h1>
          </div>

          <div className="flex w-[60%] flex-col gap-2">
            <div className=" flex flex-col border border-gray-400 bg-green-100 p-7 shadow-sm">
              <h1 className="pb-2 text-2xl">
                Feedback: Example feedback being used to rate the users
                translation
              </h1>
              <p className="text-xs">
                What to improve: vocabulary, grammar, punctuation
              </p>
            </div>

            <div className="flex h-9 w-[50%] gap-2 bg-white">
              <div className=" bg-white-500 flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
                <h1>Similair</h1>
              </div>
              <div className=" flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
                <h1>Another</h1>
              </div>
              <div className=" flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
                <h1>Save</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[10%] items-center justify-center border-t border-t-gray-400 bg-white">
          <div className=" h-[60%] w-[90%] rounded-md border border-gray-500"></div>
          {/* <IoMdSend className="ms-1" size="3x" /> */}
        </div>
      </div>
    </div>
  );
}
