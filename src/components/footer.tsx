import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <Link href="/">KmgDev</Link>
                </span>
            </div>
        </footer>
    );
}