import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4 md:text-6xl">Welcome to world of Donkey Kong!</h1>
      <div className="flex justify-center items-center pt-5 pl-5 md:pl-0">
                <Image
                src="/img/home.png"
                width={1200}
                height={800}
                alt="HomeDK"
                />
      </div>
    </div>
  );
};