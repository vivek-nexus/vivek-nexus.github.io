import { useGlobalStore } from "@/stores/GlobalStore"
import { useEffect } from "react"

export function useIsTouchDevice() {
    const { setIsTouchDevice } = useGlobalStore()

    useEffect(() => {
        // Create a media query to check if the device supports touch
        const mediaQuery = window.matchMedia("(pointer: coarse)")

        // Set the initial state based on the media query result
        setIsTouchDevice(mediaQuery.matches)

        // Define a listener to update the state if the media query changes
        function handleMediaChange(event: MediaQueryListEvent) {
            setIsTouchDevice(event.matches)
        }

        // Add the listener
        mediaQuery.addEventListener("change", handleMediaChange)

        // Clean up the listener on component unmount
        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange)
        }
    }, [])
}