import type { Metadata } from "next"
import { SUSE } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const suse = SUSE({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Vivek G',
  description: 'Opinionated designer + action biased engineer. Currently Senior Product Designer at BrowserStack.',
  icons: "/favicon.ico",
  openGraph: {
    title: 'Vivek G',
    type: 'website',
    url: 'https://viveknexus.com',
    description: 'Opinionated designer + Action biased engineer. Currently Senior Product Designer at BrowserStack.',
    images: [
      {
        url: 'https://viveknexus.com/images/link-preview-1.png',
        secureUrl: 'https://viveknexus.com/images/link-preview-1.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'A graphic indicating fusion of designer half and engineer half of author\'s brain',
      }
    ],
  },


}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script id="mouseflow-script">{`
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/d650c614-2064-44cc-804a-54644c37dd52.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
      `}
      </Script>
      <head>
        <link rel="preload" as="image" href="/images/background-grid.svg" />
      </head>
      <body
        className={`${suse.className} antialiased bg-black1 text-white2`}
      >
        {children}
      </body>
    </html>
  )
}
