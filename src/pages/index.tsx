import Head from "next/head";
import Link from "next/link";
import Nav from "~/components/home/Nav";
import Hero from "~/components/home/Hero";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}
