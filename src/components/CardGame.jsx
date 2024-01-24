export const CardGame = ({game}) => {
    return (
        <div key={game.id} className="text-center md:py-5 md:w-96">
            <section className="flex justify-center items-center">
                <img className="w-70 h-60" src={game.image} alt="CharacterIMG"/>
            </section>
            <h1 className="text-yellow-600 font-bold text-2xl py-5 md:py-3 md:text-4xl">{game.name}</h1>
        </div>
    )
};