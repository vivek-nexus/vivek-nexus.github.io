import { navDetails } from "@/constants/navDetails"
import { ActiveSection, useGlobalStore } from "@/stores/GlobalStore"
import { Space_Mono } from "next/font/google"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: "700"
})


export function NavItem({ alphabet }: { alphabet: ActiveSection }) {
    const key = useRef<HTMLAnchorElement>(null)
    const router = useRouter()
    const activeSection = useGlobalStore(state => state.activeSection)

    function isModifierKeyPressed(keyboardEvent: KeyboardEvent) {
        return (keyboardEvent.altKey || keyboardEvent.ctrlKey || keyboardEvent.metaKey || keyboardEvent.shiftKey)
    }


    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (!isModifierKeyPressed(event)) {
                const pressedKey = event.key.toUpperCase() as ActiveSection
                if (pressedKey.toLocaleUpperCase() === alphabet) {
                    key.current?.click()
                    key.current?.setAttribute("data-pressed", "true")
                    setTimeout(() => {
                        key.current?.removeAttribute("data-pressed")
                    }, 200)
                }
            }
        }

        document.addEventListener("keydown", handleKeyPress)

        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [router])

    return (
        <li>
            <a
                ref={key}
                href={navDetails[alphabet].URI} target={alphabet === "R" ? "_blank" : undefined}
                className="group w-14 md:w-20 h-14 md:h-20 flex flex-col gap-1 justify-center items-center"
            >
                {/* https://codepen.io/gymbry/pen/KWwepx */}
                <kbd
                    className={`relative group-active:top-[0.2em] group-data-[pressed=true]:top-[0.2em] border border-white2 w-5 h-5 rounded text-xs font-bold ${spaceMono.className} flex justify-center items-center transition-all duration-200 delay-100 ${activeSection === alphabet ? `bg-white2 text-black1` : `bg-transparent text-white2`}`}
                >
                    {alphabet.toLocaleUpperCase()}
                </kbd>
                <span className="hidden md:block">{navDetails[alphabet].text}</span>
            </a>
        </li>
    )
}