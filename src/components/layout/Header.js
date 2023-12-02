import Link from "next/link";
export default function  Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl " href="">IT'S PIZZA</Link>
            <nav className="flex text-teal-600 font-semibold gap-7">
                <Link href={''}> Home </Link>
                <Link href={''}> Menu </Link>
                <Link href={''}> About</Link>
                <Link href={''}> Contact</Link>
                <Link href={''} className="bg-boxes rounded-full text-teal-600 px-4 py-2">
                    Log In
                </Link>

            </nav>

        </header>
    );

}