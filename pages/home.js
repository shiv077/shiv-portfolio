import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setpage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router === "/") {
      setpage(true);
    }
  }, [router]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <header className="w-full py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-red-500">SHIV.</div>
        <nav className="hidden md:flex space-x-4 lg:space-x-8 md:justify-between">
          <Link
            href="/"
            className={`hover:underline ${
              page === true
                ? "underline text-red-500"
                : " no-underline text-white "
            } `}
          >
            Home
          </Link>
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Works
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </nav>
        <button className=" hidden md:flex space-x-4 lg:space-x-8 md:justify-between border px-4 py-2">{`Let's talk`}</button>
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
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Works
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <button className="border px-4 py-2">{`Let's talk`}</button>
        </nav>
      )}

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="lg:flex lg:gap-5 sm:block ">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {` HI, I'M ShivaSai.`}
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
              A FullStack <span className="text-red-500">DEVELOPER</span> BASED
              IN <span className="line-through">INDIA</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-white text-black px-6 py-2">
                Got a project?
              </button>
              <button className="border px-6 py-2">{`Let's talk.`}</button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0  h-8    ">
            <Image
              src="/shiv.png"
              alt="ShivaSai"
              width={200}
              height={200}
              className="rounded-2xl w-full mx-auto"
            />
          </div>
        </div>
      </main>

      <footer className="w-full py-4 bg-gray-900">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center space-x-4 lg:space-x-8 text-sm overflow-hidden">
          <h2>Next.js</h2>
          <h2>Tailwind CSS</h2>
          <h2>React.js</h2>
          <h2>Node.js</h2>
          <h2>MongoDB</h2>
          <h2>Development</h2>
        </div>
      </footer>
    </div>
  );
}
