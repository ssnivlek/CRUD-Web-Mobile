import React from "react";
import { useGlobalState } from "../../hooks/globalState";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenu,
  HeaderMenuItem,
} from "carbon-components-react/lib/components/UIShell";

import "./style.css";

import { US, BR, ES } from "country-flag-icons/react/3x2";
const languageIcons = { pt: <BR />, es: <ES />, en: <US /> };

export default function HeaderIcc() {
  const { language, setLanguage } = useGlobalState();

  return (
    <Header aria-label="IBM Innovation Studio">
      <HeaderName href={`/`} prefix="IBM Innovation Studio">
        Example Page
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction>
          <HeaderMenu menuLinkName={languageIcons[language]}>
            {Object.entries(languageIcons).map(([key, value]) => (
              <HeaderMenuItem
                onClick={() => {
                  setLanguage(key);
                  localStorage.setItem("language", key);
                }}
              >
                {value}
                {` ${key.toUpperCase()}`}
              </HeaderMenuItem>
            ))}
          </HeaderMenu>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}
