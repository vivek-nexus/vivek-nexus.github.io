"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Greeting } from "@/components/Greeting"
import { Hero } from "@/components/hero"
import { Design } from "@/components/design"
import { Contact } from "@/components/Contact"
import { Engineering } from "@/components/engineering"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonails"
import { Nav } from "@/components/nav"
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showGreeting, setShowGreeting] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [userIp, setUserIp] = useState("<getting your ip address>")

  let hideGreetingTimeout: NodeJS.Timeout
  let showHeroTimeout: NodeJS.Timeout
  let showPageTimeout: NodeJS.Timeout
  let scrollToAnchorTimeout: NodeJS.Timeout

  useIsTouchDevice()

  useEffect(() => {
    fetch("https://render-express-server-q222.onrender.com/ip")
      .then((response) => {
        response.text()
          .then((text) => {
            setUserIp(text)
            setShowGreeting(true)
          })
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
        hideGreetingTimeout = setTimeout(() => {
          setShowGreeting(false)
        }, 3500)

        showHeroTimeout = setTimeout(() => {
          setShowHero(true)
        }, 4550)

        showPageTimeout = setTimeout(() => {
          setShowPage(true)
        }, 7500)

        scrollToAnchorTimeout = setTimeout(() => {
          const hash = window.location.hash
          if (hash) {
            document.querySelector(hash)?.scrollIntoView()
          }
        }, 7700)
      })

    return (() => {
      clearTimeout(hideGreetingTimeout)
      clearTimeout(showHeroTimeout)
      clearTimeout(showPageTimeout)
      clearTimeout(scrollToAnchorTimeout)
    })
  }, [])

  return (
    <>
      <div className="p-2 fixed left-0 top-0 focus-within:z-50 -translate-x-[1000px] focus-within:translate-x-0">
        <button
          className="mr-2 p-2 bg-black1 rounded-md border border-white2/50"
          onClick={() => {
            document.querySelector<HTMLElement>(".design-value-card")?.focus()
          }}
        >
          Skip to main content {!showPage && `(Main content available after opening animations)`}
        </button>
        <button
          className="mr-2 p-2 bg-black1 rounded-md border border-white2/50"
          onClick={() => {
            document.querySelector<HTMLElement>("nav a")?.focus()
          }}
        >
          Skip to navigation {!showPage && `(Navigation available after opening animations)`}
        </button>
      </div>
      {isLoading &&
        <div className="w-dvw h-dvh flex justify-center items-center">
          {/* https://github.com/n3r4zzurr0/svg-spinners */}
          <img src="/icons/loader.svg" alt="" className="w-12 h-auto" />
        </div>
      }
      {showHero && <Nav />}
      <main>
        <AnimatePresence>
          {showGreeting && <Greeting userIp={userIp} />}
        </AnimatePresence>
        {showHero && <Hero />}
        {showPage &&
          <>
            <Design />
            <Engineering />
            <About />
            <Testimonials />
            <Contact />
          </>
        }
      </main>
    </>
  )
}
