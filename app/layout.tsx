import { Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});
export const metadata: Metadata = {
  title: "KriLya",
  description: "Discover the best cars in Morocco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
