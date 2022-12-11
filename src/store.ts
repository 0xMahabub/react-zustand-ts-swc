import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IState {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  reset: () => void;
}

export const useStateStore = create(
  devtools(
    persist<IState>(
      (set) => ({
        count: 0,
        increment: (value: number) =>
          set((state) => ({ ...state, count: state.count + value })),
        decrement: (value: number) =>
          set((state) => ({ ...state, count: state.count - value })),
        reset: () => set((state) => ({ ...state, count: 0 })),
      }),
      { name: 'zustand-persist' },
    ),
    { enabled: false },
  ),
);

// const useStore = create(devtools(store, { enabled: false }))
