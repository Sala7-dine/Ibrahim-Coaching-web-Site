import React from "react";
import { useState } from 'react';
import Modal from "./Modal";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="grid lg:grid-cols-2 gradient lg:mb-40" id="home">

        {/* content in the left */}
        <div className="w-full mt-40 px-5 lg:mt-80 relative">
          <div className="mx-auto max-w-2xl sm:py-34 lg:py-24 lg:ml-20 text-center">
            <div className="text-left lg:absolute p-10 -top-40">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-6xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                3 J O U R S </h1>
              <p className="mt-6 text-wrap leading-loose text-gray-200 font-semibold">
              Fais fondre ces kilos superflus et réveille la confiance qui sommeille en toi. Chaque goutte de sueur est une déclaration de guerre à l'excès, chaque choix alimentaire sain est une victoire sur la stagnation. car chaque étape de cette aventure sculpte un nouveau toi, plus léger, plus fort, plus confiant.                
              </p>
              <div className="mt-5 gap-x-6">
                <button onClick={() => setOpen(true)} className="inline-flex items-center px-4 py-2 font-semibold text-gray-100 bg-transparent border border-white rounded-3xl hover:bg-white hover:text-black">
                  <span>Inscris-toi maintenant</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="w-4 h-4 ml-3 bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                    </path>
                  </svg>
                </button>

              </div>
            </div>
          </div>
        </div>
        {/* vector image in the right */}
        <div className="bg-bgym bg-center bg-no-repeat mt-24 h-full hidden lg:block bg-[length:500px_400px]"></div>


        <svg className="col-span-2" viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
              ></path>
            </g>
          </g>
        </svg>

      </section>

      <Modal open={open} setOpen={setOpen} />





    </>
  )
}


export default Home;







