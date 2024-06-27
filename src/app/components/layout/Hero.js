import Image from "next/image";
import Right from "./icons/right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better <br />
          with a<span className="text-primary"> Burger </span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          Indulge in the ultimate comfort food experience with our mouthwatering
          burgers!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase items-center flex gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative" style={{ width: "100%", height: "300px" }}>
        <Image src="/pizza.png" layout="fill" objectFit="contain" alt="Pizza" />
      </div>
    </section>
  );
}
