import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const DefaultLayout = (props: LayoutProps) => {
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";

  return (
    <div
      className={clsx(
        "flex flex-col bg-gradient-to-b from-[#141e30] to-[#243b55]",
        props.centered && "items-center justify-center"
      )}
    >
      <Head>
        <title>AgentGPT</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@MackGPT_com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MackGPT 🤖" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://agentgpt.reworkd.ai/banner.png" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta property="og:title" content="AgentGPT: Autonomous AI in your browser 🤖" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://agentgpt.reworkd.ai/" />
        <meta property="og:image" content="https://agentgpt.reworkd.ai/banner.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MackGPT" />
        <meta google-site-verification="jB8mvkTK5qNKPnyEcUE1k6T-7zi2dwKQ48-abLSledg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DottedGridBackground className={clsx("min-w-screen min-h-screen", props.className)}>
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
