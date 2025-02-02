import { AnimatePresence, motion } from "motion/react"

export function LeftBrain({ isAnimationComplete }: { isAnimationComplete: boolean }) {
    return (
        <svg width="200" height="289" viewBox="0 0 200 289" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_883_452)">
                <g filter="url(#filter0_b_883_452)">
                    <path d="M195.796 223.451C198.333 214.301 199.148 203.14 199.169 191.22L197.334 63.7203C195.898 33.5284 189.739 8.12107 168.474 3.09531C131.978 -5.52973 98.5943 3.09531 55.2481 38.7917C11.2193 66.4703 -11.6557 143.345 5.96927 187.22C19.7462 221.516 33.0899 229.105 48.6989 230.715C53.4629 263.24 84.4375 288.345 121.939 288.345C162.188 288.345 194.919 259.425 195.796 223.451Z" fill="url(#paint0_radial_883_452)" fillOpacity="0.8" />
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
                            <g filter="url(#filter1_d_883_452)">
                                <path d="M50 231C50 231 72.5816 228.842 86.5 233.5C99.3954 237.816 116 252 116 252" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter2_d_883_452)">
                                <path d="M66 82.5C66 82.5 76.0672 95.3906 78 110C79.5015 121.35 71.5576 129.948 74 142.5C78.0666 163.4 110.5 183 110.5 183" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter3_d_883_452)">
                                <path d="M72 142C72 142 59.1923 151.408 47 152C39.5888 152.36 22 146 22 146" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter4_d_883_452)">
                                <path d="M134 70C134 70 157.624 77.5261 164.5 90C169.103 98.3512 169.16 104.465 169 114C168.795 126.175 160.5 144 160.5 144" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter5_d_883_452)">
                                <path d="M140.5 221.5C140.5 221.5 161.236 234.465 176 234.5C183.737 234.519 194.5 231.5 194.5 231.5" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter6_d_883_452)">
                                <path d="M89.5 45.0001C89.5 45.0001 110.105 34.3189 124.5 32.0001C136.259 30.1059 155 32.0001 155 32.0001" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <g filter="url(#filter7_d_883_452)">
                                <path d="M136 30.5C136 30.5 136.967 22.0455 140.5 18.5C143.397 15.5919 150 14 150 14" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                        </motion.g>}
                </AnimatePresence>
            </g>
            <defs>
                <filter id="filter0_b_883_452" x="-48" y="-48" width="295.17" height="384.345" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="24" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_883_452" result="shape" />
                </filter>
                <filter id="filter1_d_883_452" x="30.5" y="211.001" width="105" height="60.499" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter2_d_883_452" x="46.5" y="63" width="83.5005" height="139.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter3_d_883_452" x="2.49951" y="122.5" width="89.0005" height="49.0146" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter4_d_883_452" x="114.5" y="50.4998" width="74.0435" height="113" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter5_d_883_452" x="121" y="202" width="93" height="52.0002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter6_d_883_452" x="70" y="11.6582" width="104.5" height="52.842" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <filter id="filter7_d_883_452" x="116.5" y="-5.50024" width="53" height="55.5002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_883_452" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_452" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_883_452" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(179.134 138.635) rotate(180) scale(165.295 134.549)">
                    <stop stopColor="#D89B5F" />
                    <stop offset="1" stopColor="#992109" />
                </radialGradient>
                <clipPath id="clip0_883_452">
                    <rect width="199.169" height="288.345" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}