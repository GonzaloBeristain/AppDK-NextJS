"use client";
import { useRouter } from "next/navigation";


export const CardCharacter = ({card}) => {
    const router = useRouter();

    return (
        <div key={card.id} className="text-center md:py-5 md:w-96 hover:cursor-pointer hover:bg-green-900 rounded" onClick={()=>router.push(`/characters/${card.id}`)}>
            <section className="flex justify-center items-center pt-2">
                <img className="w-72 h-80" src={card.image} alt="CharacterIMG"/>
            </section>
            <h1 className="font-bold text-yellow-600 text-3xl md:text-5xl py-3">{card.name}</h1>
        </div>
    )
};