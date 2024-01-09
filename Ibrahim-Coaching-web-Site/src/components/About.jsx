import React from 'react'
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";


const About = () => {
  return (
    <section className="flex items-center -mt-28 lg:mt-40 xl:h-screen font-poppins" id='about'> 
    <div className="flex-1 justify-center  max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="mx-auto px-4 py-10 mt-40 text-center w-full mb-10 lg:w-1/2 lg:mb-0">
            
        <div className="relative">
                        <h1
                            className="absolute -top-20 left-16 lg:text-[100px] text-gray-900 font-bold opacity-5 lg:block hidden">
                            À PROPOS
                        </h1>
                        <h1 className="pl-12 text-3xl font-bold border-l-8 border-indigo-600 lg:text-5xl">
                        Bienvenue sur mon site
                        </h1>
        </div>
        </div>

        <div className="justify-center flex-1 w-full px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2">
                            <img src={img1} alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80" />
                            <img src={img2} alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80" />
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:mt-11">
                            <img src={img3} alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80" />
                            <img src={img4} alt=""
                                className="object-cover w-full rounded-lg h-80" />
                        </div>
                    </div>
                </div>
                
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                <div className="pl-4 mb-6 border-l-4 border-indigo-600 ">
                        <h1 className="mt-2 text-3xl font-black md:text-4xl text-gray-900">
                        Qui suis-je ?
                        </h1>
                    </div>
                    <p className="mb-4 text-base font-semibold leading-7 text-gray-800">
                    Je m'appelle Ibrahim, je manquais beaucoup de confiance en moi, je n'aimais pas mon corps, 
                    mon estime de moi était au plus bas. Je me suis longtemps comparé aux autres, j'étais quelqu'un de gentil, 
                    tellement gentil que je n'osais pas dire non aux autres, je disais oui pour rester gentil et faire plaisir.
                    Sauf qu'être tout gentil et souriant, c'était souvent bien pour les autres et rarement bien pour moi.
                    <br />
                    <br />
                    La situation a duré des années, jusqu'a que je découvre comment le SPORT aide à prendre confiance en soi, 
                    à construire un physique mais surtout un mental d'acier. Aujoud'hui je suis quelqu'un de vrai, quelqu'un qui assume, 
                    qui prend des décisions, et surtout je suis quelqu'un qui inspire les autres.
                    <br />
                    <br />
                    Grâce à mes années de formation et d’expériences,je peux te dire que:

                    </p>
                    <ul className="grid grid-cols-2">
                        <div>
                        <li className="flex items-center mb-4 text-base font-semibold text-gray-800">
                            <span className="mr-3 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Ni ton physique.
                        </li>
                        <li className="flex items-center mb-4 text-base font-semibold text-gray-800">
                            <span className="mr-3 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Ni ton âge.
                        </li>
                        </div>
                        <div>
                        <li className="flex items-center mb-4 text-base font-semibold text-gray-800">
                            <span className="mr-3 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Ni ton sexe.
                        </li>
                        <li className="flex items-center mb-4 text-base font-semibold text-gray-800">
                            <span className="mr-3 text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            Ni tes origines.
                        </li>
                        </div>
                    </ul>

                    <p className="mb-4 text-base font-semibold leading-7 text-gray-800">
                    Ne sont des freins, c'est plutôt une force à exploiter. Avec ma méthode je fais découvrir à mes coachés 
                    leur plein potentiel. Ils se rendent compte qu’une transformation physqiue n’est autre que la conséquence 
                    d'un mode de vie sain, une alimentation équilibrée et gourmande, une routine sportive adaptée et de bonnes 
                    habitudes à adopter.

                    </p>
                    
                </div>
            </div>
        </div>


    </div>
</section>
  )
}

export default About