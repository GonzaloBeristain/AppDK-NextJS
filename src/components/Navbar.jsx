import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="bg-red-950 flex px-7">
            <div className="px-7 py-1">
                <Image
                src="/img/dki-nav.png"
                width={53}
                height={50}
                alt="IconDK" />
            </div>
            <div className="container mx-auto flex justify-between items-center py-3 text-red-600">
                <h3 className="font-bold text-md text-center md:text-3xl">
                    <Link href="/">DonkeyKong App</Link>
                </h3>
                <audio className="bg-red-700" controls loop>
                    <source src="/audio/dk2audio.mp3" type="audio/mp3" />
                </audio>
                <ul className="flex gap-x-2 text-sm font-bold md:text-lg">
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