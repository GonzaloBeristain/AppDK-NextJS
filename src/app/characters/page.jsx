import { prisma } from "@/libs/prisma";

//COMPONENTS
import { CardCharacter } from "@/components/Card.jsx";

const getCharacters = async () => {
    const cards = await prisma.card.findMany();
    return cards;
};

const characters = async () => {
    const cards = await getCharacters()
    
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-4xl text-center py-2 md:py-4 md:text-6xl">Characters</h1>
            <div className="flex justify-center items-center">
                <section className="grid gap-x-5 md:grid-cols-3 md:gap-x-20">
                {cards.map((card) => (
                    <CardCharacter key={card.id} card={card} />
                ))}
                </section>
            </div>
        </div>
    )
};

export default characters;