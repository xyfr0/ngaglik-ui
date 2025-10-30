import type { Route } from "./+types/home";
import Navbar  from "../components/navbar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <Navbar/>
    <div id="home-content">      
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      
    </div>
    </>    
  )
}
