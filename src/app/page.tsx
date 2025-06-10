import Link from "next/link";
import Main from "./Main/page";
import Blog from "./Blog/page"


export default function Home() {
  return (
    <>
    <Link href="/Main">Main</Link>
    <Link href="/Blog">Blog</Link>
    </>
  );
}
