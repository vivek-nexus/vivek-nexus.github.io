import { testimonials } from "@/constants/testimonials"
import { TestimonialCard } from "./TestimonialCard"
import Confetti from 'react-confetti'

export function Testimonials() {
    return (
        <section id="testimonials" className="relative">
            <Confetti
                opacity={0.5}
                numberOfPieces={25}
                className="w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
            />
            <div
                className="rounded-md flex flex-col items-center justify-center relative overflow-hidden bg-contain bg-center bg-opacity-10"
            >
                <TestimonialCard
                    items={testimonials}
                    direction="left"
                    speed="fast"
                    className="pt-6 md:pt-24 pb-24 md:pb-48"
                />
            </div>
        </section>
    )
}