import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

export default function NavBar() {
  const session = {}
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            priority
            src="logo.svg"
            width={115}
            height={43}
            alt="Site Logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {
            NavLinks.map(el => (
              <Link href={el.href} key={el.key}>{el.text}</Link>
            ))
          }
        </ul>
      </div>
      <div>
          {
            session ? (
              <>
              User Photo 
              <Link href='/create-project'>Share Work</Link>
              </>
            ) : (
              <AuthProviders />
            )
          }
      </div>
    </nav>
  );
}
