import Image from "next/image";
import Link from "next/link";
import Surtitle from "@/components/Surtitle";
import Arrow from "@/public/images/Arrow.svg";
import Flow from "@/components/Flow";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto p-5 text-primary-black py-32">
      <section className={"grid gap-16"}>
        <div className={"grid grid-cols-12 gap-20"}>
          <div className={"col-span-10"}>
            <div className={"font-medium"}>
              <h1 className={"text-2xl mb-2"}>Fisicaly</h1>
              <h2 className={"flex flex-col mb-8"}>
                <span className={"text-5xl mb-3"}>
                  Masseur-kinésithérapeute
                  <br />& Coach sportif
                </span>
                <span className={"text-primary-orange text-lg"}>
                  — diplômé d’État depuis 2020
                </span>
              </h2>
            </div>

            <p className={"pb-12 max-w-xl"}>
              Via Fisicaly, je suis en mesure de vous proposer une prise en
              charge de la prévention et du bien-être de vos employés, en
              utilisant mes compétences dans les domaines de la santé et
              l'entraînement sportif.
            </p>

            <div className={"-ml-16"}>
              <figure className={"relative object-cover h-96"}>
                <Image
                  fill
                  src={"/images/hugo_costa.jpg"}
                  alt={"Portrait de Hugo Costa"}
                  className={"object-cover object-[15%_top] object-["}
                />
                <figcaption
                  className={
                    "absolute right-0 bottom-0 bg-primary-orange flex flex-col pt-6 pl-6 pr-20 pb-16"
                  }
                >
                  <Surtitle additionnalClass={"text-sm text-primary-white"}>
                    Fondateur de Fisicaly
                  </Surtitle>
                  <span className={"text-2xl"}>Hugo Costa</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={"flex flex-col gap-8 col-span-2 mt-12"}>
            <div className={"flex flex-col"}>
              <Surtitle additionnalClass={"text-primary-orange text-sm"}>
                Téléphone
              </Surtitle>
              <Link href={"tel:+33689281818"}>
                06&nbsp;89&nbsp;28&nbsp;18&nbsp;18
              </Link>
            </div>

            <div className={"flex flex-col"}>
              <Surtitle additionnalClass={"text-primary-orange text-sm"}>
                Email
              </Surtitle>
              <Link href={"mailto:contact@fisicaly.com"}>
                contact@fisicaly.com
              </Link>
            </div>
          </div>
        </div>

        <div className={"text-6xl flex justify-center"}>
          <Arrow className={"fill-current text-primary-black rotate-90 h-8"} />
        </div>

        <div className={"grid grid-cols-2"}>
          <div class={"bg-primary-black/10 p-8"}>
            <h4 className={"flex flex-col mb-4"}>
              <Surtitle additionnalClass={"text-primary-orange text-xs"}>
                Spécialité
              </Surtitle>
              <span className={"sr-only"}> : </span>
              <span className={"font-medium text-2xl"}>
                Prévention en entreprise
              </span>
            </h4>
            <p className={"flex flex-col"}>
              <span className={"mb-1"}>
                Travaillant auprès du secteur viticole depuis plus de 2 ans.
              </span>
              <span className={"text-sm"}>
                — patientèle, coaching, consultant en prévention
              </span>
            </p>
          </div>

          <div className={"p-8 border-t border-r border-primary-black/10"}>
            <h4 className={"flex flex-col mb-4"}>
              <Surtitle additionnalClass={"text-primary-orange text-xs"}>
                Objectifs
              </Surtitle>
              <span className={"sr-only"}> : </span>
              <span className={"font-medium text-2xl"}>
                Prévenir les troubles des employés
              </span>
              <span>— musculo-squelettiques/psychologiques</span>
            </h4>
            <p>
              J'anime des séances de sport axées sur la prévention et team
              building pour des employés épanouis au sein de leur entreprise.
            </p>
          </div>

          <div className={"bg-primary-orange p-8"}>
            <h4 className={"flex flex-col mb-4"}>
              <Surtitle additionnalClass={"text-primary-white text-xs"}>
                Résultats
              </Surtitle>
              <span className={"sr-only"}> : </span>
              <span
                className={
                  "flex items-center font-medium text-2xl pb-2 border-b mb-2 border-primary-black"
                }
              >
                <Arrow className={"h-3 fill-current mr-1"} /> Fidéliser les
                employés
              </span>
              <span className={"flex items-center font-medium text-2xl"}>
                <Arrow className={"h-3 fill-current mr-1"} /> Renforcer leur
                engagement
              </span>
              <span>— sur leur poste de travail</span>
            </h4>
          </div>

          <div className={"bg-primary-black p-8"}>
            <h4 className={"flex flex-col mb-4 text-primary-white"}>
              <Surtitle additionnalClass={"text-primary-orange text-xs"}>
                Bénéfices
              </Surtitle>
              <span className={"sr-only"}> : </span>
              <span className={"font-medium text-2xl"}>
                Augmentation globale des résultats
              </span>
            </h4>
            <p className={"text-primary-white"}>
              Grâce à une baisse de l’absentéisme et une réduction du turnover
              au sein des équipes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Flow />
      </section>
    </main>
  );
}
