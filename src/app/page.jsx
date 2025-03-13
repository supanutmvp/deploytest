import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Vercel from "../../public/vercel.svg"
import Footer from "./components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">MoviePartner HomePage</h3>
          <p>i'm your father <Link href="/movies" className="text-blue-700 hover:text-blue-600">go to Movie Page</Link></p>
          <div className="flex justify-center my-10">
            <Image className="invert" src={Vercel} width={300} height={300} alt="Vercel Logo"/>
          </div>
        </div>
        <Footer/>
      </Container>
    </main>
  );
}
