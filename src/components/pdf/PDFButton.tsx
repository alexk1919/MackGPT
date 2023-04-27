import WindowButton from "../WindowButton";
import { FaFilePdf } from "react-icons/fa";
import { pdf } from "@react-pdf/renderer";
import React, { memo } from "react";
import type { Message } from "../../types/agentTypes";
import { MESSAGE_TYPE_GOAL, MESSAGE_TYPE_TASK } from "../../types/agentTypes";

import { useTranslation } from "react-i18next";

const PDFButton = ({
  messages,
  name,
}: {
  messages: Message[];
  name: string;
}) => {
  const { t } = useTranslation(); // Destructure the translation function from the hook
  const content = getContent(messages, t); // Pass the translation function as an argument

  const downloadPDF = async () => {
    const MyDocument = (await import("./MyDocument")).default as React.FC<{
      content: string;
    }>;

    const blob = await pdf(<MyDocument content={content} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MackGPT-Agent.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <WindowButton
        delay={0.2}
        onClick={() => {
          downloadPDF().catch(console.error);
        }}
        icon={<FaFilePdf size={12} />}
        name="PDF"
      />
    </>
  );
};

const getContent = (messages: Message[], t: (key: string) => string): string => {
  const contentElement = document.createElement("div");

  contentElement.innerHTML = messages
    .map((message) => {
      if (message.type == MESSAGE_TYPE_GOAL) {
        return `${t("Goal: ")}${message.value}`;
      }
      if (message.type == MESSAGE_TYPE_TASK) {
        return `${t("Adding Task: ")}${message.value}`;
      }
      return message.value;
    })
    .join("<br>");

  return contentElement.innerText;
};

export default memo(PDFButton);
