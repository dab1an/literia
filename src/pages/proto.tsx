import { Gi3DMeeple } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import FbCard from "../components/fbCard";
import OgLangCard from "~/components/ogLangCard";
import UserTranCard from "~/components/userTranCard";
import { UserInputBar } from "~/components/userInputBar";
import { useStyleRegistry } from "styled-jsx";
import { useState } from "react";

export default function Proto() {
  const [translation, setTranslation] = useState<string[]>([]);
  const [fbMsg, setFbMsg] = useState<string[]>([]);
  const [langSentence, setLangSentence] = useState("");
  const [improvements, setImprovements] = useState<[]>([]);

  // async function getLang() {
  //   const res = await fetch("/api/ai/sentenceCreation", {
  //     method: "POST",
  //     body: JSON.stringify({ sentence_lang: "Spanish" }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   const data = await res.json();
  //   setLangSentence(data);
  // }

  const addTranslation = (translation: string) => {
    //adding new translation to existing array
    setTranslation((prevTranslation) => [...prevTranslation, translation]);
    processTranslation(translation);
  };

  const addFbMsg = (fbMsg: string) => {
    //adding new translation to existing array
    setFbMsg((prevFbMsg) => [...prevFbMsg, fbMsg]);
  };

  // const addImprovements = (improvements: []) => {
  //   setImprovements((prevImprovements) => [...prevImprovements, improvements]);
  // }

  async function processTranslation(translation: string) {
    const res = await fetch("/api/ai/translationFeedback", {
      method: "POST",
      body: JSON.stringify({
        original_lang: "Spanish",
        translated_lang: "English",
        original_sentence:
          "Oración de ejemplo utilizada con el fin de probar la interfaz de usuario",
        translated_sentence: translation,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    addFbMsg(data.feedback);
  }

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
          {translation.map((translation, index) => (
            <UserTranCard key={index} translation={translation} />
          ))}

          {fbMsg.map((fbMsg, index) => (
            <FbCard
              key={index}
              fbMsg={fbMsg}
              skills={["Placeholder", "Array"]}
            />
          ))}
        </div>

        {/*passing addTranslation as prop to UserInputBar, when oTR is called, addTranslation is invoked*/}
        <UserInputBar onTranslationReceived={addTranslation} />
      </div>
    </div>
  );
}
