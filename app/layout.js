import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });

const meta = {
  title: "Fisicaly – Masseur-kinésithérapeute & Coach sportif",
  description:
    "Priorisez la santé de vos employés avec Fisicaly. Profitez d'une expertise alliant santé et entraînement sportif pour une meilleure prévention et bien-être au sein de votre entreprise.",
  images: [""],
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
        {children}
      </body>
    </html>
  );
}
