import Header from "./components/header"
import Hero from "./components/hero";


export default function Home() {
  return (
    <>
      <div className="h-screen bg-Blue-900">
          <div className="homeBackground h-screen mx-auto max-w-[1440px]  relative transitionPage">
            <Header />
            <Hero />
          </div>
      </div>
    </>
  );
}
