import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import LogoFisicalyText from "@/public/images/logo_fisicaly_text.svg";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const meta = {
  title: "Fisicaly – Masseur-kinésithérapeute & Coach sportif",
  description:
    "Priorisez la santé de vos employés avec Fisicaly. Profitez d'une expertise alliant santé et entraînement sportif pour une meilleure prévention et bien-être au sein de votre entreprise.",
  images: ["images/cover.jpg"],
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: meta.images,
    locale: "en_US",
    type: "website",
    url: new URL("https://fisicaly.com"),
    siteName: meta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: meta.images,
  },
  metadataBase: new URL("https://fisicaly.com"),
  alternates: {
    canonical: "/",
  },
};

const TomatoGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/tomato-grotesk-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tomato-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tomato-grotesk-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/tomato-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/tomato-grotesk-black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/tomato-grotesk-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={"bg-primary-white/10 antialiased font-primary"}>
        <hr className={"border-t-[8px] border-primary-orange"} />
        {children}
        <footer className="bg-primary-black py-8">
          <div className={"max-w-screen-lg mx-auto px-5"}>
            <div className="px-5 lg:px-8 md:grid-cols-3 text-primary-white grid gap-8">
              <div className={"md:col-span-3"}>
                <LogoFisicalyText className={"h-10 text-primary-white"} />
              </div>
              <p className={"font-medium [text-wrap:balance]"}>
                Masseur-kinésithérapeute & Coach sportif
              </p>
              <Link
                prefetch={false}
                href={"mailto:contact@fisicaly.com"}
                className={"hover:text-primary-orange transition duration-150"}
              >
                contact@fisicaly.com
              </Link>
              <div className={"flex flex-col"}>
                Copyright © Fisicaly, {new Date().getFullYear()}
                <Link
                  prefetch={false}
                  href={"https://louiscuvelier.com"}
                  className={
                    "hover:text-primary-orange transition duration-150"
                  }
                >
                  Réalisation Louis Cuvelier
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
