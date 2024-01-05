import { useState  , Fragment , useRef} from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Folder from "../assets/Folder.png";
import Chart_fill from "../assets/Chart_fill.png";
import Chat from "../assets/Chat.png";
import Chart from "../assets/Chart.png";
import SettingIC from "../assets/Setting.png";
import User from "../assets/User.png";
import Setting from "./Setting";
import { useAuth } from "../AuthContext/AuthContext";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Statistics from "./Statistics";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleLogOut = async () => {
    try {
      setError("");
      await logOut();
      navigate('/login');
    } catch {
      setError("Faild to log Out");
    }
  }


  const Menus = [
    { title: "Web Site", src: Folder, to: "/" },
    { title: "Dashboard", src: Chart_fill, to: "Statistics" },
    { title: "Content", src: Chat, to: "Content" },
    { title: "Analytics", src: Chart, gap: true, to: "Analytics" },
    { title: "Setting", src: SettingIC, to: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className="min-[1024px]:w-72 md:w-56 bg-indigo-900 h-screen p-5 pt-8 fixed duration-300  w-20"
      >
        <div className="flex gap-x-4 items-center justify-center">
          <img
            src={logo}
            className="w-10 h-10 cursor-pointer duration-500"
          />
        </div>
        <ul className="pt-10">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-indigo-700 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white-300"
                } `}
            >
              <img src={Menu.src} />
              <span className="max-[1024px]:hidden md:inline-flex origin-left duration-200">
                {Menu.title}
              </span>
            </Link>

          ))}

          <button
            className="flex mt-48 w-full rounded-md p-2 cursor-pointer hover:bg-indigo-700 text-gray-300 text-sm items-center gap-x-4"
            onClick={handleLogOut}
          >
            <img src={User} />
            <span className="max-[1024px]:hidden md:inline-flex origin-left duration-200">
              Log Out
            </span>
          </button>
        </ul>


      </div>
      <div className="h-screen flex-1 p-15 min-[1024px]:ml-72 md:ml-56 ml-20 transition-all duration-300 ease-in-out">

      {error && 
      <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex gap-4 sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-5 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {error}
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      }


     <Routes>
        <Route path="Statistics" element={<Statistics />} />
      </Routes>

      <Routes>
        <Route path="Setting" element={<Setting />} />
      </Routes>


      

      </div>
    </div>
  );
};
export default Dashboard;