import { prisma } from "@/libs/prisma";

//COMPONENTS
import { CardGame } from "@/components/CardGame.jsx";

const getGames = async () => {
    const games = await prisma.game.findMany()
    return games;
};

const games = async () => {
    const games = await getGames()

    return (
        <div>
            <h1 className="font-bold text-4xl text-center py-2 md:py-4 md:text-6xl">Games</h1>
            <div className="flex justify-center items-center">
                <section className="grid gap-x-5 px-2 md:grid-cols-3 md:gap-x-20">
                {
                    games.map((game) => (
                        <CardGame key={game.id} game={game} />
                    ))
                }
                </section>
            </div>
            
        </div>
    )
};

export default games;