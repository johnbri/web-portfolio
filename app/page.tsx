import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Switch } from '@headlessui/react'


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>

    </main>
  );
}
