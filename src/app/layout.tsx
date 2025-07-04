import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "STEM女性的技术困境",
    description: "STEM女性的技术困境",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <meta name="viewport"
              content="width=1980, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <body
        >
        {children}
        </body>
        </html>
    );
}
