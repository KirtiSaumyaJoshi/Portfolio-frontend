import Link from "next/link";


export default function Navbar() {
return (
<nav className="w-full py-4 px-6 shadow-md bg-white flex justify-between items-center">
<div className="text-xl font-bold">Kirti Saumya Joshi</div>


<div className="flex gap-6 text-sm font-medium">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
</div>
</nav>
);
}