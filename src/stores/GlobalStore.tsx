import { create } from 'zustand'

export type ActiveSection = "V" | "D" | "E" | "A" | "R"

// Define the types for the store
interface GlobalState {
    showEasterEggMessage: boolean
    tooltipInvokedCount: number
    isTouchDevice: boolean
    activeSection: ActiveSection
    setShowEasterEggMessage: (value: boolean) => void
    setTooltipInvokedCount: (callback: (currentCount: number) => number) => void
    setIsTouchDevice: (isTouchDevice: boolean) => void
    setActiveSection: (activeSection: ActiveSection) => void
}

// Create the Zustand store
export const useGlobalStore = create<GlobalState>((set) => ({
    showEasterEggMessage: false,
    tooltipInvokedCount: 0,
    isTouchDevice: false,
    activeSection: "V",
    setShowEasterEggMessage: (value: boolean) => set({ showEasterEggMessage: value }),
    setTooltipInvokedCount: (callback: (currentCount: number) => number) =>
        set((state) => ({ tooltipInvokedCount: callback(state.tooltipInvokedCount) })),
    setIsTouchDevice: (isTouchDevice: boolean) => set({ isTouchDevice }),
    setActiveSection: (activeSection: ActiveSection) => set({ activeSection }),
}))