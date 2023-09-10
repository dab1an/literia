import { Gi3DMeeple } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import FbCard from "~/components/fbCard";
import OgLangCard from "~/components/OgLangCard";
import UserTranCard from "~/components/UserTranCard";

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
        <div className="flex h-[10%] items-center justify-center border-t border-t-gray-400 bg-white">
          <div className=" h-[60%] w-[90%] rounded-md border border-gray-500"></div>
        </div>
      </div>
    </div>
  );
}
