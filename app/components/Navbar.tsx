import Link from "next/link";

export default function Navbar() {
return (
<nav className="w-full py-4 px-52 shadow-md bg-white flex justify-between items-center">
    <Link href="/" className="">
        <h2 className="">KSJ</h2>      
    </Link>
    <div className="flex gap-6 text-sm font-medium">       
        <Link href="/about" className="title">About</Link>
        <Link href="/contact" className="title">Contact</Link>
    </div>
</nav>
);
}