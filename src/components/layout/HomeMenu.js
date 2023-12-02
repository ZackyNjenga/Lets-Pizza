import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="relative">
                <div className="h-50  w-50 absolute">
                    <Image src="/pizzasalad.png" alt="salad"
                           layout={'fill'}
                           objectFit={'contain'}/>
                </div>
                <div className="h-50 absolute">
                    <Image src="/dalad.jpeg" alt="salad"
                           layout={'fill'}
                           objectFit={'contain'}/>
                </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-600 leading-4 font-semibold">Check Out</h3>
                <h2 className="text-pink-700 font-bold text-4xl italic"> Menu</h2>
            </div>
        </section>
    );
}
