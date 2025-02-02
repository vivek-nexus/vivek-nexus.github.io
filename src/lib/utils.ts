import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function hexToRgba(variableName: string, opacity: number): string {
    // Get the hex color from the CSS variable
    const hex = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim() // Remove any extra whitespace

    // Ensure the hex value is valid (check if it's a valid hex color)
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        throw new Error(`Invalid hex color value for ${variableName}: ${hex}`)
    }

    // Parse the RGB components from the hex
    const r = parseInt(hex.substring(1, 3), 16)  // Red component
    const g = parseInt(hex.substring(3, 5), 16)  // Green component
    const b = parseInt(hex.substring(5, 7), 16)  // Blue component

    // Return the RGBA color string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
