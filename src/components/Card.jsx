import Image from "next/image";

export const CardCharacter = () => {
    return (
        <div className="text-center w-96 py-2">
            <Image
            src="/img/donkey.png"
            alt="Image"
            width={360}
            height={100}/>
            <h1 className="font-bold text-5xl py-3">Donkey Kong</h1>
        </div>
    )
};