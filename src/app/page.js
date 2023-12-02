import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/layout/HomeMenu";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <HomeMenu/>
        </>
    )
}