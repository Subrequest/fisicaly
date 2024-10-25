import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import SvgLogoFisicalyText from "@/assets/svgs/__generated__/LogoFisicalyText";
import { Montserrat } from "next/font/google";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const TomatoGroteskFont = localFont({
  src: [
    {
      path: "../../public/fonts/tomato-grotesk-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tomato-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tomato-grotesk-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/tomato-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/tomato-grotesk-black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/tomato-grotesk-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${TomatoGroteskFont.variable} ${MontserratFont.variable} bg-primary-white/10 font-primary antialiased`}
      >
        <hr className={"border-t-8 border-primary-orange"} />
        {children}
        <footer className="bg-primary-black py-8">
          <div className={"mx-auto max-w-screen-lg px-5"}>
            <div className="grid gap-8 px-5 text-primary-white md:grid-cols-3 lg:px-8">
              <div className={"md:col-span-3"}>
                <SvgLogoFisicalyText className={"h-10 text-primary-white"} />
              </div>
              <p className={"font-medium [text-wrap:balance]"}>
                Masseur-kinésithérapeute & Coach sportif
              </p>
              <div>
                <Link
                  prefetch={false}
                  href={"mailto:contact@fisicaly.com"}
                  className={
                    "transition duration-150 hover:text-primary-orange"
                  }
                >
                  contact@fisicaly.com
                </Link>
              </div>
              <div className={"flex flex-col"}>
                Copyright © Fisicaly, {new Date().getFullYear()}
                <Link
                  prefetch={false}
                  href={"https://subrequest.com"}
                  className={
                    "transition duration-150 hover:text-primary-orange"
                  }
                >
                  Réalisation Subrequest
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
