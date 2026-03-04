import { createContext, useContext, useState, ReactNode } from "react";

interface WaitlistContextType {
  count: number;
  incrementCount: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(53);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <WaitlistContext.Provider value={{ count, incrementCount }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
