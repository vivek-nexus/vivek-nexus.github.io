import { AnimatePresence, motion } from "motion/react"

export function RightBrain({ isAnimationComplete }: { isAnimationComplete: boolean }) {
    return (
        <svg width="201" height="289" viewBox="0 0 201 289" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_883_341)">
                <g filter="url(#filter0_b_883_341)">
                    <path d="M4.34273 223.451C1.80553 214.301 0.99057 203.14 0.96875 191.22L2.80443 63.7203C4.24071 33.5284 10.3988 8.12107 31.6646 3.09531C68.1603 -5.52973 101.544 3.09531 144.89 38.7917C188.919 66.4703 211.794 143.345 194.169 187.22C180.392 221.516 167.048 229.105 151.439 230.715C146.675 263.24 115.701 288.345 78.1997 288.345C37.9504 288.345 5.21898 259.425 4.34273 223.451Z" fill="url(#paint0_radial_883_341)" fillOpacity="0.8" />
                </g>
                <AnimatePresence>
                    {!isAnimationComplete &&
                        <motion.g
                            initial={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    ease: "easeOut",
                                    duration: 0.5
                                }
                            }}
                        >
                            <g filter="url(#filter1_d_883_341)">
                                <path d="M150.5 231C150.5 231 127.918 228.842 114 233.5C101.105 237.816 84.5 252 84.5 252" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter2_d_883_341)">
                                <path d="M134.5 82.5C134.5 82.5 124.433 95.3906 122.5 110C120.999 121.35 128.942 129.948 126.5 142.5C122.433 163.4 89.9998 183 89.9998 183" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter3_d_883_341)">
                                <path d="M128.5 142C128.5 142 141.308 151.408 153.5 152C160.911 152.36 178.5 146 178.5 146" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter4_d_883_341)">
                                <path d="M66.5 70C66.5 70 42.8759 77.5261 36 90C31.3966 98.3512 31.3397 104.465 31.5 114C31.7047 126.175 40 144 40 144" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter5_d_883_341)">
                                <path d="M60 221.5C60 221.5 39.2639 234.465 24.5 234.5C16.7631 234.519 6 231.5 6 231.5" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter6_d_883_341)">
                                <path d="M111 45.0001C111 45.0001 90.3952 34.3189 76 32.0001C64.2406 30.1059 45.5 32.0001 45.5 32.0001" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter7_d_883_341)">
                                <path d="M64.5 30.5C64.5 30.5 63.5326 22.0455 60 18.5C57.1025 15.5919 50.5 14 50.5 14" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                        </motion.g>}
                </AnimatePresence>
            </g>
            <defs>
                <filter id="filter0_b_883_341" x="-47.0312" y="-48" width="295.17" height="384.345" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="24" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_883_341" result="shape" />
                </filter>
                <filter id="filter1_d_883_341" x="65" y="211.001" width="105" height="60.499" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter2_d_883_341" x="70.5" y="63" width="83.5" height="139.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter3_d_883_341" x="109" y="122.5" width="89" height="49.0146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter4_d_883_341" x="11.957" y="50.4998" width="74.043" height="113" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter5_d_883_341" x="-13.5" y="202" width="93" height="52.0002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter6_d_883_341" x="26" y="11.6582" width="104.5" height="52.842" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <filter id="filter7_d_883_341" x="31" y="-5.50024" width="53" height="55.5002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_341" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_341" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_883_341" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.0048 138.635) scale(165.295 134.549)">
                    <stop stopColor="#4586AB" />
                    <stop offset="1" stopColor="#06275B" />
                </radialGradient>
                <clipPath id="clip0_883_341">
                    <rect width="199.169" height="288.345" fill="white" transform="translate(0.96875)" />
                </clipPath>
            </defs>
        </svg>
    )
}




