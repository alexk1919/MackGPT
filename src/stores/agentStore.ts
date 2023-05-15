import { createSelectors } from "./helpers";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type AutonomousAgent from "../components/AutonomousAgent";
import type { AgentMode, AgentPlaybackControl } from "../types/agentTypes";
import { AGENT_PAUSE, AUTOMATIC_MODE } from "../types/agentTypes";
import { env } from "../env/client.mjs";

const resetters: (() => void)[] = [];

const initialAgentState = {
  agent: null,
  isAgentStopped: true,
  isAgentPaused: undefined,
};

interface AgentSlice {
  agent: AutonomousAgent | null;
  isAgentStopped: boolean;
  isAgentPaused: boolean | undefined;
  agentMode: AgentMode;
  updateAgentMode: (agentMode: AgentMode) => void;
  updateIsAgentPaused: (agentPlaybackControl: AgentPlaybackControl) => void;
  updateIsAgentStopped: () => void;
  isWebSearchEnabled: boolean;
  setIsWebSearchEnabled: (isWebSearchEnabled: boolean) => void;
  setAgent: (newAgent: AutonomousAgent | null) => void;
}

const createAgentSlice: StateCreator<AgentSlice> = (set, get) => {
  resetters.push(() => set(initialAgentState));
  return {
    ...initialAgentState,
    isWebSearchEnabled: env.NEXT_PUBLIC_WEB_SEARCH_ENABLED,
    agentMode: AUTOMATIC_MODE,
    updateAgentMode: (agentMode) => {
      set(() => ({
        agentMode,
      }));
    },
    updateIsAgentPaused: (agentPlaybackControl) => {
      set(() => ({
        isAgentPaused: agentPlaybackControl === AGENT_PAUSE,
      }));
    },
    updateIsAgentStopped: () => {
      set((state) => ({
        isAgentStopped: !state.agent?.isRunning,
      }));
    },
    setIsWebSearchEnabled: (isWebSearchEnabled) => {
      set(() => ({
        isWebSearchEnabled,
      }));
    },
    setAgent: (newAgent) => {
      set(() => ({
        agent: newAgent,
      }));

      if (get().agent === null) {
        resetAllAgentSlices();
      }
    },
  };
};

const agentStore = create<AgentSlice>()(
  persist(
    (...a) => ({
      ...createAgentSlice(...a),
    }),
    {
      name: "agent-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        agentMode: state.agentMode,
        // isWebSearchEnabled: state.isWebSearchEnabled
      }),
    }
  )
);

export const useAgentStore = createSelectors(agentStore);

export const resetAllAgentSlices = () => resetters.forEach((resetter) => resetter());
