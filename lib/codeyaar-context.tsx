"use client";

import * as React from "react";

interface YaarCtxValue {
  lessonTitle?: string;
  pathTitle?: string;
  selectedCode?: string;
  setContext: (v: { lessonTitle?: string; pathTitle?: string }) => void;
  setSelectedCode: (code: string | undefined) => void;
}

const YaarContext = React.createContext<YaarCtxValue | null>(null);

export function YaarContextProvider({ children }: { children: React.ReactNode }) {
  const [ctx, setCtx] = React.useState<{ lessonTitle?: string; pathTitle?: string }>({});
  const [selectedCode, setSelectedCode] = React.useState<string | undefined>(undefined);
  const setContext = React.useCallback((v: { lessonTitle?: string; pathTitle?: string }) => {
    setCtx(v);
  }, []);
  return (
    <YaarContext.Provider value={{ ...ctx, selectedCode, setContext, setSelectedCode }}>
      {children}
    </YaarContext.Provider>
  );
}

export function useYaarContext() {
  const ctx = React.useContext(YaarContext);
  if (!ctx) throw new Error("useYaarContext must be used inside YaarContextProvider");
  return ctx;
}

// Convenience hook for lesson/path pages: call once with what the student is viewing.
export function useSetYaarContext(v: { lessonTitle?: string; pathTitle?: string }) {
  const { setContext } = useYaarContext();
  React.useEffect(() => {
    setContext(v);
    return () => setContext({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v.lessonTitle, v.pathTitle]);
}

// Playgrounds call this on Monaco selection change so CodeYaar can see what
// the student highlighted when in Explain/Debug/Review mode. Cleared on
// unmount so a stale selection from a closed playground doesn't linger.
export function useSetSelectedCode() {
  const { setSelectedCode } = useYaarContext();
  React.useEffect(() => {
    return () => setSelectedCode(undefined);
  }, [setSelectedCode]);
  return setSelectedCode;
}
