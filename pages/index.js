import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimatedName from "@/components/animatedName";
import { Dialog, Transition } from "@headlessui/react";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [page, setpage] = useState("About");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData, "formData>>");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., using an API to send the data.
    alert("Form submitted!");
    setisModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };
  // const router = useRouter();

  // useEffect(() => {
  //   if (router === "/home") {
  //     setpage(true);
  //   }
  // }, [router]);

  const handlePage = (value) => {
    if (value === "About") {
      setpage(value);
    } else if (value === "About") {
      setpage(value);
    } else if (value === "Works") {
      setpage(value);
    } else if (value === "Experience") {
      setpage(value);
    } else if (value === "Skills") {
      setpage(value);
    } else if (value === "Contact") {
      setpage(value);
    }
  };

  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleMouseMove = () => {
    setHovered(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000); // Reset animation after 1 second (duration of the fade-in animation)
    }, 3000); // Trigger animation every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const letters = ["S", "h", "i", "v", "a", "S", "a", "i"];

  const closeModalSuccess = () => {
    setisModalOpen(false);
  };
  const handlePopup = () => {
    setisModalOpen(true);
  };

  return (
    <div
      className="bg-gray-900  text-white min-h-screen flex flex-col items-center"
      // onMouseMove={() => handleMouseMove()}
      // onMouseLeave={() => setHovered(false)}
    >
      <header className="w-full py-4 px-8 flex justify-between items-center bg-gray-800">
        <div className="text-xl font-bold text-red-500">SHIV.</div>
        <nav className="hidden md:flex space-x-4 lg:space-x-8 md:justify-between"></nav>
        <button
          onClick={() => setisModalOpen(true)}
          className=" hidden md:flex space-x-4 lg:space-x-8 md:justify-between hover:bg-white hover:text-gray-900 border px-4 py-2"
        >{`Let's talk`}</button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 py-4">
          <Link
            href=""
            onClick={() => handlePage("Home")}
            className={`hover:underline ${
              page === "Home" ? "underline text-red-500" : "  text-white "
            } `}
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={() => handlePage("About")}
            className={`hover:underline ${
              page === "About" ? "underline text-red-500" : "   text-white "
            } `}
          >
            About
          </Link>
          <Link
            href="/"
            onClick={() => handlePage("Works")}
            className={`hover:underline ${
              page === "Works" ? "underline text-red-500" : "   text-white "
            } `}
          >
            Works
          </Link>
          <Link
            href="/"
            onClick={() => handlePage("Contact")}
            className={`hover:underline ${
              page === "Contact" ? "underline text-red-500" : "   text-white "
            } `}
          >
            Contact
          </Link>
          <button className="border px-6 hover:bg-white hover:text-gray-900">{`Let's talk.`}</button>
        </nav>
      )}

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
        {/* <div className="bg-gray-100 w-[100%] h-10 rotate-45 "></div> */}
        <div>
          <div className="lg:flex lg:gap-5 sm:block ">
            <div className=" ">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 flex">
                {` HI, I'M `}
                {/* <span className="fade-in delay-0">S</span>
                <span className="fade-in delay-1">h</span>
                <span className="fade-in delay-2">i</span>
                <span className="fade-in delay-3">v</span>
                <span className="fade-in delay-4">a</span> */}
                <div className="text-5xl font-bold">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className={`${animate ? "fade-in" : ""} delay-${index}`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
                A FullStack <span className="text-red-500">DEVELOPER</span>{" "}
                BASED IN <span className="line-through">INDIA</span>
              </h2>
              <div className="text-xl md:text-2xl font-medium mb-8 gap-5 flex  ">
                {/* DESIGN  */}

                {/* <div className="text-red-500">✸</div> */}

                <a href="https://www.linkedin.com/in/g-shiva-sai-0b055a25a/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon w-10 bg-white hover:bg-gray-500"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Linkedin</title>
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                </a>
                {/* <div className="text-red-500">✸</div> */}

                <a href="https://www.linkedin.com/in/g-shiva-sai-0b055a25a/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon w-10 bg-white hover:bg-gray-500"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Instagram</title>
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg>
                </a>
                {/* <div className="text-red-500">✸</div> */}

                <a href="https://www.linkedin.com/in/g-shiva-sai-0b055a25a/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon s-ion-icon w-10 bg-white hover:bg-gray-500 hover:text-white"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Github</title>
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                  </svg>
                </a>
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0  ">
                  <a
                    href="mailto:shivaworkmail001@gmail.com"
                    className="bg-gray-700 text-white px-6 border-2 border-white hover:bg-white hover:text-gray-900"
                  >
                    Got a project?
                  </a>
                  <button
                    onClick={() => setisModalOpen(true)}
                    className="border px-6 hover:bg-white hover:text-gray-900"
                  >{`Let's talk.`}</button>
                </div>
              </div>
            </div>
            <div className="  lg:mt-0   border rounded-lg  ">
              <Image
                src="/shiv.png"
                alt="ShivaSai"
                width={200}
                height={200}
                className="rounded-2xl w-96 mx-auto  "
                draggable="false"
              />
            </div>
          </div>
          <div className="hidden md:block py-4 gap-10 w-full bg-black space-x-4 lg:space-x-8 text-sm overflow-hidden">
            {/* <div className=""> */}
            {/* <h2>Next.js</h2>
            <h2>Tailwind CSS</h2>
            <h2>React.js</h2>
            <h2>Node.js</h2>
            <h2>MongoDB</h2>
            <h2>Development</h2> */}
            {/* <Link
              href=""
              onClick={() => handlePage("Home")}
              className={`hover:underline ${
                page === "Home" ? "underline text-red-500" : "  text-white "
              } `}
            >
              Home
            </Link> */}
            <Link
              href="/"
              onClick={() => handlePage("About")}
              className={`hover:underline ${
                page === "About" ? "underline text-red-500" : "   text-white "
              } `}
            >
              About
            </Link>
            <Link
              href="/"
              onClick={() => handlePage("Experience")}
              className={`hover:underline ${
                page === "Experience"
                  ? "underline text-red-500"
                  : "   text-white "
              } `}
            >
              Experience
            </Link>
            <Link
              href="/"
              onClick={() => handlePage("Skills")}
              className={`hover:underline ${
                page === "Skills" ? "underline text-red-500" : "   text-white "
              } `}
            >
              Skills
            </Link>
            <Link
              href="/"
              onClick={() => handlePage("Works")}
              className={`hover:underline ${
                page === "Works" ? "underline text-red-500" : "   text-white "
              } `}
            >
              Works
            </Link>
            <Link
              href="/"
              onClick={() => handlePage("Contact")}
              className={`hover:underline ${
                page === "Contact" ? "underline text-red-500" : "   text-white "
              } `}
            >
              Contact
            </Link>
            {/* </div> */}
          </div>
        </div>
        <Transition.Root show={isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            onClose={closeModalSuccess}
            className="relative z-10"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-white bg-opacity-0 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto mt-14">
              <div className="flex min-h-full items-start justify-end p-4 text-right px-4 py-2 sm:items-start sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="rounded-lg w-96  ">
                    <div className="px-4 ">
                      <div className="rounded-md bg-white p-4 mx-5 my-2">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            {/* <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          /> */}
                          </div>
                          <div className="ml-3">
                            <h3 className="text-md font-semibold text-green-800"></h3>
                            <div className="mt-2 text-sm text-green-700">
                              {/* <p>{sucessMessage}</p> */}
                              <form
                                onSubmit={handleSubmit}
                                className="max-w-xl mx-auto  w-full rounded-md  "
                              >
                                <h2 className="text-2xl font-bold mb-4 ">
                                  Contact Me
                                </h2>
                                <div className="mb-4">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 text-left"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 text-left"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 text-left"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    rows="4"
                                    required
                                  ></textarea>
                                </div>
                                <button
                                  type="submit"
                                  className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Send Message
                                </button>
                              </form>
                            </div>
                            <div className="mt-4 flex items-end"></div>
                          </div>
                        </div>
                        <div className="flex justify-end px-4 ">
                          <button
                            onClick={closeModalSuccess}
                            type="button"
                            className="ml-3 rounded-md bg-red-50 px-2 py-1.5 text-md border border-red-600 font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                          >
                            cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </main>
    </div>
  );
}
