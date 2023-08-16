import Image from "next/image";
import Link from "next/link";
import Surtitle from "@/components/Surtitle";
import Arrow from "@/public/images/Arrow.svg";
import Flow from "@/components/Flow";
import LogoFisicaly from "@/public/images/logo_fisicaly_noir_long.svg";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto p-5 text-primary-black py-32 grid gap-32">
      <section className={"grid gap-16"}>
        <div className={"grid grid-cols-12 gap-20"}>
          <div className={"col-span-11"}>
            <h1>
              <span className={"sr-only"}>Fisicaly</span>{" "}
              <LogoFisicaly className={"h-16"} />
            </h1>

            <div className={"font-medium"}>
              <h2 className={"flex flex-col mb-8"}>
                <span className={"text-6xl font-black mb-3"}>
                  Masseur-kinésithérapeute
                  <br />& Coach sportif
                </span>
                <span className={"text-primary-orange font-medium text-2xl"}>
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
                  className={"object-cover object-[15%_top]"}
                />
                <figcaption
                  className={
                    "absolute right-0 bottom-0 bg-primary-orange flex flex-col pt-6 pl-6 pr-20 pb-16"
                  }
                >
                  <Surtitle className={"text-sm text-primary-white"}>
                    Fondateur de Fisicaly
                  </Surtitle>
                  <span className={"text-2xl"}>Hugo Costa</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={"flex flex-col gap-8 col-span-1 mt-20"}>
            <div className={"flex flex-col"}>
              <Surtitle className={"text-primary-orange text-sm"}>
                Téléphone
              </Surtitle>
              <Link href={"tel:+33689281818"}>
                06&nbsp;89&nbsp;28&nbsp;18&nbsp;18
              </Link>
            </div>

            <div className={"flex flex-col"}>
              <Surtitle className={"text-primary-orange text-sm"}>
                Email
              </Surtitle>
              <Link href={"mailto:contact@fisicaly.com"}>
                contact@fisicaly.com
              </Link>
            </div>
          </div>
        </div>

        <div className={"grid lg:grid-cols-2"}>
          <div className={"bg-primary-black/10 p-8"}>
            <h4 className={"flex flex-col mb-4"}>
              <Surtitle className={"text-primary-orange text-xs"}>
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
              <Surtitle className={"text-primary-orange text-xs"}>
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
              <Surtitle className={"text-primary-white text-xs"}>
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
              <Surtitle className={"text-primary-orange text-xs"}>
                Bénéfices
              </Surtitle>
              <span className={"sr-only"}> : </span>
              <span className={"font-medium text-2xl"}>
                Augmentation globale des résultats
              </span>
            </h4>
            <p className={"text-primary-white"}>
              Grâce à une baisse de l’absentéisme etd une réduction du turnover
              au sein des équipes.
            </p>
          </div>
        </div>
      </section>

      <section className={""}>
        <h2 className={"flex flex-col mb-12"}>
          <span className={"text-6xl font-black"}>Intervention</span>
          <span className={"text-2xl text-primary-black/40"}>
            — Résultats observables dans votre entreprise
          </span>
        </h2>

        <Flow />
      </section>

      <section className={"grid gap-16"}>
        <h2 className={"flex flex-col"}>
          <span className={"text-6xl font-black"}>Prestations</span>
          <span className={"text-2xl text-primary-black/40"}>
            — Grille tarifaire
          </span>
        </h2>

        <div className={"grid grid-cols-2"}>
          <article
            className={"bg-primary-black p-8 flex flex-col justify-between"}
          >
            <div>
              <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                Audit
              </Surtitle>
              <p className={"text-primary-white font-medium text-4xl mb-4"}>
                Analyse des problématiques liées aux troubles musculo-
                squelettiques
              </p>
            </div>
            <Link
              href={
                "mailto:contact@fisicaly.com?subject=Demande de devis pour de l'Audit"
              }
              className={"flex items-center justify-end"}
            >
              <Arrow
                className={
                  "fill-current text-primary-orange h-3 mr-2 stroke-[30px] stroke-primary-orange"
                }
              />
              <Surtitle className={"text-primary-orange font-black"}>
                Sur devis
              </Surtitle>
            </Link>
          </article>
          <article
            className={"bg-primary-black/10 p-8 flex flex-col justify-between"}
          >
            <div>
              <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                Séances
              </Surtitle>
              <p className={"text-primary-black font-medium text-4xl mb-4"}>
                Séances de sport adaptées aux besoins de l’entreprise
              </p>
            </div>
            <Link
              href={
                "mailto:contact@fisicaly.com?subject=Réserver des séances de sport"
              }
              className={"flex items-center justify-end"}
            >
              <Arrow
                className={
                  "fill-current text-primary-orange h-3 mr-2 stroke-[30px] stroke-primary-orange"
                }
              />
              <Surtitle className={"text-primary-orange font-black text-xl"}>
                360 € HT
              </Surtitle>
            </Link>
          </article>
          <article
            className={"bg-primary-orange p-8 flex flex-col justify-between"}
          >
            <div>
              <Surtitle className={"text-primary-white mb-2 text-sm"}>
                Prévention
              </Surtitle>
              <p className={"text-primary-black font-medium text-4xl mb-4"}>
                Suivi préventif spécifique/formation des employés
              </p>
            </div>
            <Link
              href={
                "mailto:contact@fisicaly.com?subject=Demande de devis pour de la Prévention"
              }
              className={"flex items-center justify-end"}
            >
              <Arrow
                className={
                  "fill-current text-primary-orange h-3 mr-2 stroke-[30px] stroke-primary-orange"
                }
              />
              <Surtitle className={"text-primary-white font-black"}>
                Sur devis
              </Surtitle>
            </Link>
          </article>
          <article
            className={
              "p-8 border-b border-r border-primary-black/10 flex flex-col justify-between"
            }
          >
            <div>
              <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                Formation
              </Surtitle>
              <p className={"text-primary-black font-medium text-4xl mb-4"}>
                Formation sur les bases de la prévention
              </p>
            </div>
            <Link
              href={
                "mailto:contact@fisicaly.com?subject=Demande de devis pour de la Formation"
              }
              className={"flex items-center justify-end"}
            >
              <Arrow
                className={
                  "fill-current text-primary-orange h-3 mr-2 stroke-[30px] stroke-primary-orange"
                }
              />
              <Surtitle className={"text-primary-orange font-black"}>
                Sur devis
              </Surtitle>
            </Link>
          </article>
        </div>

        <div>
          <Surtitle className={"text-primary-orange mb-2 text-xl"}>
            Exemples déjà menés
          </Surtitle>
          <ul className={"list-disc ml-5 text-xl"}>
            {[
              "Audit des TMS du milieu viticole et élaboration d’un échauffement pour les vignerons",
              "Conception d’une salle de sport",
              "Séances de sport hebdomadaires de prévention sportive",
              "Suivi personnalisé d'employés pour conseils santé et sur leurs troubles musculo-squelletiques de poste précis",
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <figure className={"relative object-cover aspect-video"}>
            <Image
              fill
              src={"/images/weights.jpg"}
              alt={"Photo de poids de musculation"}
              className={"object-cover object-center"}
            />
            <figcaption className={"absolute left-0 bottom-0 p-10"}>
              <Surtitle className={"text-primary-orange mb-4 text-sm"}>
                Conception
              </Surtitle>
              <p className={"text-primary-white flex flex-col"}>
                <span className={"text-5xl font-medium"}>
                  Conception d'une salle de sport
                </span>
                <span>
                  — Équipement complet pour des séances de <u>8 personnes</u>
                </span>
              </p>
            </figcaption>
          </figure>

          <div className={"grid grid-cols-12"}>
            <div className={"col-span-8 p-9 p-9"}>
              <ul className={"list-disc ml-5 space-y-5 mb-9"}>
                <li className={""}>
                  <div className={"flex flex-col"}>
                    <span className={"text-xl"}>
                      Collaboration avec des partenaires
                    </span>
                    <span className={"text-lg"}>
                      — architecte d’intérieur, fournisseurs
                    </span>
                  </div>
                </li>
                <li className={""}>
                  <div className={"flex flex-col"}>
                    <span className={"text-xl"}>
                      Métré/Agencement/Dossier vues 3D
                    </span>
                    <span className={"text-lg"}>
                      — prix dégressif en fonction de la dimension de la salle
                    </span>
                  </div>
                </li>
              </ul>

              <Link
                href={
                  "mailto:contact@fisicaly.com?subject=Réserver des séances de sport"
                }
                className={"flex items-center justify-end"}
              >
                <Arrow
                  className={
                    "fill-current text-primary-orange h-3 mr-2 stroke-[30px] stroke-primary-orange"
                  }
                />
                <Surtitle className={"text-primary-orange font-black text-xl"}>
                  20 € HT/m²
                </Surtitle>
              </Link>
            </div>

            <div className={"col-span-4"}>
              <div
                className={
                  "bg-primary-orange p-9 flex justify-between flex-col"
                }
              >
                <Surtitle className={"text-primary-white mb-16"}>
                  Chiffrage
                </Surtitle>
                <Link
                  href={
                    "mailto:contact@fisicaly.com?subject=Demande de devis pour une Conception de salle de sport"
                  }
                  className={"flex items-center justify-end"}
                >
                  <Arrow
                    className={
                      "fill-current text-primary-white h-3 mr-2 stroke-[30px] stroke-primary-white"
                    }
                  />
                  <Surtitle className={"text-primary-white font-black"}>
                    Sur devis
                  </Surtitle>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
