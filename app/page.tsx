import LandingPage from "./ui/landing_page/landing_page";
import NavBar from "./ui/navbar/navbar";


export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="content p-8">
        <LandingPage/>
    </div>
    </div>
  );
}
