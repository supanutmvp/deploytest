import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Vercel from "../../public/vercel.svg";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">Nangrong Hospital</h3>
          {/* <p>i'm your father <Link href="/movies" className="text-blue-700 hover:text-blue-600">go to Movie Page</Link></p>
          <div className="flex justify-center my-10">
            <Image className="invert" src={Vercel} width={300} height={300} alt="Vercel Logo"/>
          </div> */}
          <div className="grid grid-cols-3 p-3">
            <div className="col-span-1 flex justify-end pr-4 ">
              <Image
                src="https://i.pinimg.com/236x/37/9d/5e/379d5e41e1f2a89a810ee47a62ee0ff6.jpg"
                width={400}
                height={400}
                alt="test"
                unoptimized
              />
            </div>
            <div className="col-span-1 drop-shadow-xl">
              our project has `@next/font` installed as a dependency, please use
              the built-in `next/font` instead. The `@next/font` package will be
              removed in Next.js 14. You can migrate by running `npx
              @next/codemod@latest built-in-next-font .`. Read more:
              https://nextjs.org/docs/messages/built-in-next-font Jrrrrr
            </div>
            <div className="col-span-1 drop-shadow-xl">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlfL-KxGQJ9OUMKZY7A4QB5jVv7U6ALwjEQ&s"
                width={400}
                height={400}
                alg="test"
                unoptimized
              />
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
