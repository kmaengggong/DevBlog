import Navigation from "@/components/navigation";
import "../styles/globals.css";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: {
        template: "%s | KmgDev",
        default: "Loading..."
    },
    description: "Dev Blog by kmaengggong"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col h-screen m-5 space-y-5">
                    <Navigation />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}