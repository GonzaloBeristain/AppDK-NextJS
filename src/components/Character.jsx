export const Character = ({character}) => {
    return (
        <div key={character.id} className="text-center md:py-5 md:w-96">
            <section className="flex justify-center items-center pt-2">
                <img className="w-72 h-80" src={character.image} alt="CharacterIMG"/>
            </section>
            <h1 className="font-bold text-yellow-600 text-3xl md:text-5xl py-3">{character.name}</h1>
        </div>
    )
};