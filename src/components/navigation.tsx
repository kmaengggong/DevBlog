"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav class="">
            <ul class="flex">
                <li class="mr-6">
                    <Link class="text-blue-500 hover:text-blue-800" href="/">Home</Link>
                </li>
                <li class="mr-6">
                    <Link class="text-blue-500 hover:text-blue-800" href="/about">About</Link>
                </li>
                <li class="mr-6">
                    <Link class="text-blue-500 hover:text-blue-800" href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
}