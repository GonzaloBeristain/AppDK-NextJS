import Image from "next/image";

export const CardGame = ({game}) => {
    return (
        <div key={game.id} className="text-center md:py-5 md:w-96">
            <section className="flex justify-center items-center">
                <Image className="w-80 h-80 md:w-96 md:h-96 rounded" src={game.image} alt="GameIMG" width={384} height={384} />
            </section>
            <h1 className="text-yellow-600 font-bold text-2xl py-5 md:py-3 md:text-4xl">{game.name}</h1>
        </div>
    )
};