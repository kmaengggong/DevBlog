"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="">
            <ul className="flex">
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Home</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/about">About</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
}