import React from "react";
import { useTranslation } from "next-i18next";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({ show, close }: { show: boolean; close: () => void }) {
  const [t] = useTranslation();
  return (
    <Dialog header={`${t("WELCOME_TO_AGENT_GPT", { ns: "help" })} 🤖`} isShown={show} close={close}>
      <div>
        <p>
          <strong>AgentGPT</strong> {t("INTRODUCING_AGENTGPT", { ns: "help" })}
        </p>
        {/* <div>
          {t("TO_LEARN_MORE_ABOUT_AGENTGPT", {
            ns: "help",
          })}
          <a
            href="https://docs.reworkd.ai"
            className="text-sky-500"
          >
            {t("AGENTGPT_DOCUMENTATION", { ns: "help" })}
          </a>
          <br />
          <p className="mt-2">{t("FOLLOW_THE_JOURNEY", { ns: "help" })}</p>
        </div> */}
        {/* <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() => window.open("https://discord.gg/jdSBAnmdnY", "_blank")}
          >
            <FaDiscord size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open(
                "https://twitter.com/mackgpt_com",
                "_blank"
              )
            }
          >
            <FaTwitter size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() => window.open("https://github.com/alexk1919/MackGPT", "_blank")}
          >
            <FaGithub size={30} />
          </div>
        </div>
        <div
          className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
          onClick={() =>
            window.open("https://github.com/alexk1919/mackgpt", "_blank")
          }
        >
          <FaGithub size={30} /> MackGPT
        </div>*/}
      </div>

    </Dialog >
  );
}
