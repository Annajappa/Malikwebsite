import Link from "next/link";


export default function Home() {
  return (
    <div className="m-5">
    <Link href="/Main" className="mr-4">Main</Link>
    <Link href="/Blog">Blog</Link>
    </div>
  );
}
