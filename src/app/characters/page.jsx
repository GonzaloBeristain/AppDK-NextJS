import { CardCharacter } from "@/components/Card.jsx";

const characters = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-6xl text-center py-4">Characters</h1>
            <CardCharacter />
        </div>
    )
};

export default characters;