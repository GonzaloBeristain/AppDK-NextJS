import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="bg-red-950 flex md:px-7">
            <div className="hidden md:px-7 md:py-1 md:block">
                <Image
                src="/img/dki-nav.png"
                width={53}
                height={50}
                alt="IconDK" />
            </div>
            <div className="container mx-auto flex justify-between items-center py-3 text-red-600">
                <Link className="md:flex md:justify-center md:items-center" href="/">
                    <Image width={300} height={300} className="md:w-40 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Donkeykong-logo1.svg/1200px-Donkeykong-logo1.svg.png" alt="img"/>
                    <h1 className="font-bold text-md text-center text-red-600 border rounded border-yellow-400 md:text-3xl px-1">APP</h1>
                </Link>
                <audio className="bg-red-700 hidden sm:block" controls loop>
                    <source src="/audio/dk2audio.mp3" type="audio/mp3" />
                </audio>
                <ul className="flex pr-1 text-sm font-bold md:text-lg md:gap-x-2 md:pr-0">
                    <li className="hover:bg-red-900 rounded px-2">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:bg-red-900 rounded px-2">
                        <Link href="/history">History</Link>
                    </li>
                    <li className="hover:bg-red-900 rounded px-2">
                        <Link href="/games">Games</Link>
                    </li>
                    <li className="bg-yellow-500 px-2  hover:bg-yellow-600 rounded">
                        <Link href="/characters">Characters</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};