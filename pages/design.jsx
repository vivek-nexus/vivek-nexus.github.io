import DesignProjectCard from "../components/DesignProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import projectCardData from "../constants/project-cards";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";

function Design() {
    return (
        <>
            <Head>
                <title>Design — Vivek</title>
                <meta name="description" content="I am a product designer because..." />
                <link rel="icon" href="/images/face-white-bg.png" />
            </Head>

            <div className="animate__animated animate__fadeIn">

                <NavBar />


                <div className="container px-4 md:px-0">
                    {/* <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>
                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Design generalist consciously, <br />UXer sub-consciously</h2>
                        <p className="text-center">
                            📌 Designers can be so much user centric, as much as the business model allows<br />
                            🎭 Design intentionally. Then test, test, test.
                        </p>
                    </div> */}

                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Recent work</h2>
                        <div className="flex flex-col gap-12 mb-4">
                            {/* {projectCardData.map((item, i) => (<DesignProjectCard key={i} cardNumber={item.cardNumber} />))} */}
                            <DesignProjectCard cardNumber={1} />
                            <DesignProjectCard cardNumber={2} />
                            {/* <DesignProjectCard cardNumber={3} /> */}
                        </div>
                        <p className="text-center"><a href="https://vivek-nexus.medium.com/" target="_blank" className="text-blue-500 font-bold">See more ↗</a></p>
                    </div>

                    <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Community and open source</h2>
                        <div className="flex flex-col gap-12">
                            <DesignProjectCard cardNumber={3} />
                            <DesignProjectCard cardNumber={4} />
                        </div>
                    </div>

                    <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">UI Design + Development Challenges</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <iframe width="100%" className="aspect-video rounded-lg shadow-designProjectCard" src="https://www.youtube.com/embed/Vc0826nKzXU?si=vFyGULUtZltZKy7N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <iframe width="100%" className="aspect-video rounded-lg shadow-designProjectCard" src="https://www.youtube.com/embed/0B8ztZHTSyQ?si=dwqMiNy1yKWkTmlg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <iframe width="100%" className="aspect-video rounded-lg shadow-designProjectCard" src="https://www.youtube.com/embed/JIHhMmOO0Vs?si=iIVn68urJpf0_zSk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <iframe width="100%" className="aspect-video rounded-lg shadow-designProjectCard" src="https://www.youtube.com/embed/5iUes7wM_fE?si=bc7LemYnylvCofP5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>

                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/"><a><Button type="secondary"><span className="material-icons-round mr-1">home</span></Button></a></Link>
                            <Link href="/code"><a><Button type="primary">Code -&gt;</Button></a></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Design;