import { Character } from "@/components/Character.jsx";
import Link from "next/link";

const getUser = async (id) => {
    const res = await fetch(`http://localhost:3000/api/crud/${id}`);
    const data = await res.json();
    return data;
};

const characterId = async ({ params }) => {
    const character = await getUser(params.id);
    
    return (
        <div >
            <section className="flex justify-center items-center h-[calc(100vh-15rem)]">
                <Character key={character.id} character={character} />
            </section>
            <section className="flex justify-center items-center">
                <Link className="text-3xl font-bold hover:text-yellow-900 text-yellow-700 px-2 " href="/characters">Back</Link>
            </section>
        </div>
    )
};

export default characterId;