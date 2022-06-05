import React, { useEffect } from "react";
import "carbon-components/css/carbon-components.min.css";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks/globalState";
import { socket } from "../../services/socket";
import texts from "../../helpers/languagesConfig";

import "./style.css";

export default function Dashboard() {
  const { language, setLanguage } = useGlobalState();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("@portal-de-demos/language");
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  // uncomment this if you want to use socket
  // useEffect(() => {

  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });
  // }, []);

  return (
    <div id="content">
      <Header />
      <main>
        <h2>{texts[language].welcome}</h2>
      </main>
    </div>
  );
}
