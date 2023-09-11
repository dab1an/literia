import { Gi3DMeeple } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import FbCard from "~/components/FbCard";
import OgLangCard from "~/components/OgLangCard";
import UserTranCard from "~/components/UserTranCard";
import { UserInputBar } from "~/components/userInputBar";

export default function Proto() {
  return (
    <div className="flex h-screen w-screen  bg-blue-500">
      <div className="lg: hidden w-[225px] flex-shrink-0 flex-col  items-center justify-between border-r border-r-gray-400 bg-charcoal text-white lg:flex">
        <div className=" mt-2 flex h-7">
          <Gi3DMeeple className="h-full w-full" />
          <span className="text-2xl font-bold">Literia</span>
        </div>
        <div className="flex h-[7%] w-full items-center justify-start gap-4 bg-charcoal pl-5 ">
          <FaUserCircle className="" size={40} />
          <span>User</span>
        </div>
      </div>

      <div w-full></div>

      <div className="flex w-full flex-col ">
        <div className="flex h-[90%] flex-col items-center gap-4 overflow-y-scroll bg-white pb-6 pt-4 scrollbar scrollbar-track-slate-200 scrollbar-thumb-cerulean">
          <OgLangCard sentence=" Example sentence being used for the purpose of testing UI" />

          <UserTranCard
            translation="Oración de ejemplo utilizada con el fin de
              probar la interfaz de usuario"
          />

          <FbCard
            fbMsg="This is an example message"
            skills={["vocab", "punctuation", "grammar"]}
          />
        </div>
        <UserInputBar />
      </div>
    </div>
  );
}
