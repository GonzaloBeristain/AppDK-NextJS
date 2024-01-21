import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-4">Welcome to world of Donkey Kong!</h1>
      <div className="flex justify-center items-center">
                <Image
                src="/img/home.jpg"
                width={1200}
                height={800}
                alt="HomeDK"
                />
      </div>
    </div>
  );
};