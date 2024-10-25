import Link from "next/link";
import Surtitle from "@/components/Surtitle";
import Flow from "@/components/Flow";
import BackgroundGrid from "@/components/BackgroundGrid";
import Heading from "@/components/Heading";
import SvgLogoFisicalyNoir from "@/assets/svgs/__generated__/LogoFisicalyNoir";
import LogoChateauDucruBeaucaillou from "@/assets/svgs/__generated__/LogoChateauDucruBeaucaillou";
import Arrow from "@/assets/svgs/__generated__/Arrow";
import Image from "next/image";
import CheckMark from "@/assets/svgs/__generated__/CheckMark";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex max-w-screen-lg flex-col gap-y-32 px-5 pb-32 text-primary-black">
        <BackgroundGrid />
        <section className={"grid grid-cols-12"}>
          <div className={"col-span-12 pt-5 lg:col-span-9 lg:pt-8"}>
            <SvgLogoFisicalyNoir className={"h-16 px-5 lg:px-8"} />

            <div className={"py-10"}>
              <Heading.H1
                title={`Masseur-kinési&shy;thérapeute & Coach sportif`}
                subtitle={"— diplômé d’État depuis 2020"}
              />
            </div>

            <p className={"max-w-2xl px-5 pb-12 lg:px-8"}>
              Via Fisicaly, je suis en mesure de vous proposer une prise en
              charge de la prévention et du bien-être de vos employés, en
              utilisant mes compétences dans les domaines de la santé et
              l&apos;entraînement sportif.
            </p>
          </div>

          <div
            className={
              "flex flex-col flex-wrap justify-start gap-y-10 p-5 lg:mt-24 lg:justify-normal lg:p-8"
            }
          >
            <div className={"flex flex-col"}>
              <Surtitle className={"text-primary-orange"}>Email</Surtitle>
              <Link
                prefetch={false}
                href={"mailto:contact@fisicaly.com"}
                className={"duration-150 hover:text-primary-orange"}
              >
                contact@fisicaly.com
              </Link>
            </div>

            <div className={"flex flex-col"}>
              <Surtitle className={"mb-6 text-primary-orange"}>
                Références
              </Surtitle>
              <div className={"flex gap-32 text-primary-black/50"}>
                <LogoChateauDucruBeaucaillou className={"h-32 fill-current"} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <figure className={"relative h-96 object-cover"}>
            <Image
              fill
              priority
              src={"/images/hugo_costa.jpg"}
              alt={"Portrait de Hugo Costa"}
              className={"object-cover object-[15%_top]"}
            />
            <figcaption
              className={
                "absolute bottom-0 right-0 flex flex-col bg-primary-orange pb-16 pl-6 pr-20 pt-6"
              }
            >
              <Surtitle className={"text-primary-white"}>
                Fondateur de Fisicaly
              </Surtitle>
              <span
                className={
                  "text-2xl font-medium tracking-[0.040em] sm:text-3xl md:text-4xl"
                }
              >
                Hugo Costa
              </span>
            </figcaption>
          </figure>

          <div
            className={
              "grid grid-cols-1 border-x border-primary-black/5 bg-white"
            }
          >
            <div className={"p-5 lg:p-8"}>
              <div className={"mb-4 flex flex-col"}>
                <Surtitle className={"mb-1 text-primary-orange"}>
                  Spécialité
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span
                  className={"text-2xl font-medium sm:text-3xl md:text-4xl"}
                >
                  Prévention en entreprise
                </span>
              </div>
              <p className={"flex flex-col"}>
                <span className={"mb-1"}>
                  Travaillant auprès du secteur viticole depuis plus de 2 ans.
                </span>
                <span className={"text-sm"}>
                  — patientèle, coaching, consultant en prévention
                </span>
              </p>
            </div>

            <div className={"bg-primary-black/5 p-5 lg:p-8"}>
              <div className={"mb-4 flex flex-col"}>
                <Surtitle className={"mb-1 text-primary-orange"}>
                  Objectifs
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span
                  className={"text-2xl font-medium sm:text-3xl md:text-4xl"}
                >
                  Prévenir les troubles des employés
                </span>
                <span>— musculo-squelettiques et psychologiques</span>
              </div>
              <p>
                J&apos;anime des séances de sport axées sur la prévention et
                team building pour des employés épanouis au sein de leur
                entreprise.
              </p>
            </div>

            <div className={"bg-primary-orange p-5 lg:p-8"}>
              <div className={"flex flex-col"}>
                <Surtitle className={"mb-1 text-primary-white"}>
                  Résultats
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <ul>
                  <li
                    className={
                      "mb-2 border-b border-primary-black pb-2 font-medium"
                    }
                  >
                    <span
                      className={
                        "inline-flex items-start justify-start text-2xl sm:text-3xl md:text-4xl"
                      }
                    >
                      <Arrow
                        className={"mr-2 mt-4 h-3 shrink-0 fill-current"}
                      />
                      Fidéliser les employés
                    </span>
                  </li>
                  <li className={"flex flex-col font-medium"}>
                    <span
                      className={
                        "inline-flex items-start justify-start text-2xl sm:text-3xl md:text-4xl"
                      }
                    >
                      <Arrow
                        className={"mr-2 mt-4 h-3 shrink-0 fill-current"}
                      />
                      Renforcer leur engagement
                    </span>
                    <span className={"ml-5"}>— sur leur poste de travail</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={"bg-primary-black p-5 lg:p-8"}>
              <div className={"mb-4 flex flex-col text-primary-white"}>
                <Surtitle className={"mb-1 text-primary-orange"}>
                  Bénéfices
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span
                  className={"text-2xl font-medium sm:text-3xl md:text-4xl"}
                >
                  Augmentation globale des résultats
                </span>
              </div>
              <p className={"text-primary-white"}>
                Grâce à une baisse de l’absentéisme etd une réduction du
                turnover au sein des équipes.
              </p>
            </div>
          </div>
        </section>

        <section className={"flex flex-col gap-y-16"}>
          <Heading.H2
            title={"Intervention"}
            subtitle={"— Résultats observables dans votre entreprise"}
          />

          <Flow className={"-mx-5 lg:mx-0"} />
        </section>

        <section className={"flex flex-col gap-y-16"}>
          <Heading.H2
            title={"Retours clients"}
            subtitle={
              "— Employés montrant les bénéfices des séances de coaching"
            }
          />

          <div className={"grid sm:grid-cols-2"}>
            {[
              {
                title: "La course",
                description:
                  "Malgré une blessure à la cuisse survenue deux mois auparavant, cet employé a réussi à courir le Marathon de Paris et n'a ressenti que très peu de courbatures. Le suivi spécifique a bien porté ses fruits.",
              },
              {
                title: "Le dos",
                description:
                  "En seulement un mois de séances, cette employée a constaté une di- minution de la douleur de son dos, a retrouvé de la force dans un bras auparavant déficitaire. Elle a même pu reprendre la course à pied.",
              },
              {
                title: "La prévention",
                description:
                  "Un employé a progressé en force grâce aux séances d'entraînement, mais il a rencontré un obstacle à domicile car il n'avait pas suffisamment de poids pour rendre les exercices plus difficiles. Cela soulève la question de savoir s'il existe des effets négatifs liés à la prévention ou non.",
              },
              {
                title: "La motivation",
                description:
                  "Cette employée a repris une activi- té physique régulière, suivi un pro- gramme pour la perte de poids et a finalement pris en charge des pro- blèmes de santé négligés depuis des mois. Un véritable exemple de motivation et de prise en main de sa santé !",
              },
            ].map((item, index) => (
              <blockquote className={"p-5 lg:p-8"} key={index}>
                <Surtitle className={"text-primary-orange"}>
                  Avis n°0{index + 1}
                </Surtitle>
                <h3
                  className={
                    "mb-3 text-2xl font-medium sm:text-3xl md:text-4xl"
                  }
                >
                  {item.title}
                </h3>
                <p>{item.description}</p>
                <footer className={"sr-only"}>
                  <cite>Employé n°{index + 1}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className={"flex flex-col gap-y-16"}>
          <Heading.H2 title={"Prestations"} subtitle={"— Grille tarifaire"} />
          <div className={"grid md:grid-cols-2"}>
            <article
              className={
                "flex flex-col justify-between bg-primary-black p-5 lg:p-8"
              }
            >
              <div>
                <Surtitle className={"mb-2 text-primary-orange"}>
                  Audit
                </Surtitle>
                <h3
                  className={
                    "mb-4 text-2xl font-medium text-primary-white sm:text-3xl md:text-4xl"
                  }
                >
                  Analyse des problématiques liées aux troubles musculo-
                  squelettiques
                </h3>
              </div>
              <Link
                prefetch={false}
                href={
                  "mailto:contact@fisicaly.com?subject=Demande de devis pour de l'Audit"
                }
                className={
                  "group flex items-center justify-end text-primary-orange duration-150 hover:text-primary-white"
                }
              >
                <Arrow
                  className={
                    "mr-2 h-3 fill-current stroke-primary-orange stroke-[30px] duration-150 group-hover:stroke-primary-white"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article
              className={
                "flex flex-col justify-between bg-primary-black/5 p-5 lg:p-8"
              }
            >
              <div>
                <Surtitle className={"text-primary-orange"}>Séances</Surtitle>
                <h3
                  className={
                    "mb-4 text-2xl font-medium text-primary-black sm:text-3xl md:text-4xl"
                  }
                >
                  Séances de sport adaptées aux besoins de l’entreprise
                </h3>
              </div>
              <Link
                prefetch={false}
                href={
                  "mailto:contact@fisicaly.com?subject=Demande de devis pour des Séances"
                }
                className={
                  "group flex items-center justify-end text-primary-orange duration-150 hover:text-primary-black"
                }
              >
                <Arrow
                  className={
                    "mr-2 h-3 fill-current stroke-primary-orange stroke-[30px] duration-150 group-hover:stroke-primary-black"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article
              className={
                "flex flex-col justify-between bg-primary-orange p-5 lg:p-8"
              }
            >
              <div>
                <Surtitle className={"mb-2 text-primary-white"}>
                  Prévention
                </Surtitle>
                <h3
                  className={
                    "mb-4 text-2xl font-medium text-primary-black sm:text-3xl md:text-4xl"
                  }
                >
                  Suivi préventif spécifique/formation des employés
                </h3>
              </div>
              <Link
                prefetch={false}
                href={
                  "mailto:contact@fisicaly.com?subject=Demande de devis pour de la Prévention"
                }
                className={
                  "group flex items-center justify-end text-primary-white duration-150 hover:text-primary-black"
                }
              >
                <Arrow
                  className={
                    "mr-2 h-3 fill-current stroke-primary-white stroke-[30px] duration-150 group-hover:stroke-primary-black"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article
              className={
                "flex flex-col justify-between border-x border-primary-black/10 bg-white p-5 md:border-b md:border-l-0 lg:p-8"
              }
            >
              <div>
                <Surtitle className={"mb-2 text-primary-orange"}>
                  Formation
                </Surtitle>
                <h3
                  className={
                    "mb-4 text-2xl font-medium text-primary-black sm:text-3xl md:text-4xl"
                  }
                >
                  Formation sur les bases de la prévention
                </h3>
              </div>
              <Link
                prefetch={false}
                href={
                  "mailto:contact@fisicaly.com?subject=Demande de devis pour de la Formation"
                }
                className={
                  "group flex items-center justify-end text-primary-orange duration-150 hover:text-primary-black"
                }
              >
                <Arrow
                  className={
                    "mr-2 h-3 fill-current stroke-primary-orange stroke-[30px] duration-150 group-hover:stroke-primary-black"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article className={"md:col-span-2"}>
              <figure className={"relative aspect-square sm:aspect-video"}>
                <Image
                  fill
                  src={"/images/weights.jpg"}
                  alt={"Photo de poids de musculation"}
                  className={"object-cover object-center brightness-75"}
                />
                <figcaption className={"absolute bottom-0 left-0 p-5 lg:p-8"}>
                  <Surtitle className={"text-primary-orange"}>
                    Conception
                  </Surtitle>
                  <h3 className={"flex flex-col text-primary-white"}>
                    <span className={"text-5xl font-medium"}>
                      Conception d&apos;une salle de sport
                    </span>
                    <span>
                      — Équipement complet pour des séances de{" "}
                      <u className={"underline-offset-4"}>8 personnes</u>
                    </span>
                  </h3>
                </figcaption>
              </figure>

              <div className={"grid md:grid-cols-12"}>
                <div className={"order-2 p-5 md:order-1 md:col-span-8 lg:p-8"}>
                  <ul className={"mb-9 space-y-5"}>
                    <li className={"flex items-start"}>
                      <CheckMark className={"mr-2 mt-1 h-5 fill-current"} />
                      <div className={"flex flex-col"}>
                        <span className={"text-xl"}>
                          Collaboration avec des partenaires
                        </span>
                        <span className={"text-lg"}>
                          — architecte d’intérieur, fournisseurs
                        </span>
                      </div>
                    </li>
                    <li className={"flex items-start"}>
                      <CheckMark className={"mr-2 mt-1 h-5 fill-current"} />
                      <div className={"flex flex-col"}>
                        <span className={"text-xl"}>
                          Métré/Agencement/Dossier vues 3D
                        </span>
                        <span className={"text-lg"}>
                          — prix dégressif en fonction de la dimension de la
                          salle
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className={
                    "order-1 flex flex-col justify-between bg-primary-orange p-5 md:order-2 md:col-span-4 lg:p-8"
                  }
                >
                  <Surtitle className={"mb-16 text-primary-white"}>
                    Chiffrage
                  </Surtitle>
                  <Link
                    prefetch={false}
                    href={
                      "mailto:contact@fisicaly.com?subject=Demande de devis pour une Conception de salle de sport"
                    }
                    className={"flex items-center justify-end"}
                  >
                    <Arrow
                      className={
                        "mr-2 h-3 fill-current stroke-primary-white stroke-[30px] text-primary-white"
                      }
                    />
                    <Surtitle className={"font-black text-primary-white"}>
                      Sur devis
                    </Surtitle>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className={"px-5 lg:px-8"}>
            <Surtitle className={"mb-2 text-primary-orange"}>
              Exemples déjà menés
            </Surtitle>
            <ul className={"ml-5 list-disc text-xl"}>
              {[
                "Audit des TMS du milieu viticole et élaboration d’un échauffement pour les vignerons",
                "Conception d’une salle de sport",
                "Séances de sport hebdomadaires de prévention sportive",
                "Suivi personnalisé d'employés pour conseils santé et sur leurs troubles musculo-squelletiques de poste précis",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
