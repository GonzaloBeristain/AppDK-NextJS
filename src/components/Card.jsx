"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const CardCharacter = ({card}) => {
    const router = useRouter();

    return (
        <div key={card.id} className="text-center md:py-5 md:w-96 hover:cursor-pointer hover:bg-green-900 rounded" onClick={()=>router.push(`/characters/${card.id}`)}>
            <section className="flex justify-center items-center pt-2">
                <Image className="w-72 h-80" src={card.image} alt="CharacterIMG" width={290} height={300} />
            </section>
            <h1 className="font-bold text-yellow-600 text-3xl md:text-5xl py-3">{card.name}</h1>
        </div>
    )
};