import {create} from 'zustand';

const useStore = create((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
