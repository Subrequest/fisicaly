import Link from "next/link";
import Surtitle from "@/components/Surtitle";
import Arrow from "@/public/images/arrow.svg";
import Flow from "@/components/Flow";
import LogoFisicalyText from "@/public/images/logo_fisicaly_text.svg";
import LogoFisicaly from "@/public/images/logo_fisicaly_noir_long.svg";
import LogoChateauDucruBeaucaillou from "@/public/images/logo_chateau_ducru-beaucaillou.svg";
import BackgroundGrid from "@/components/BackgroundGrid";
import CheckMark from "@/public/images/checkmark.svg";
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-5 text-primary-black pb-32 lg:pt-32 flex flex-col gap-y-32 relative">
        <BackgroundGrid />
        <section className={"grid grid-cols-12"}>
          <div
            className={
              "col-span-12 lg:col-span-9 border-t-[6px] border-primary-orange p-5 lg:p-8"
            }
          >
            <div className={"font-medium"}>
              <h1 className={"flex flex-col my-8"}>
                <span
                  className={
                    "text-5xl sm:text-6xl font-black mb-3 hyphens-manual md:hyphens-none"
                  }
                >
                  Masseur-kinési&shy;thérapeute & Coach sportif
                </span>
                <span className={"text-primary-orange font-medium text-2xl"}>
                  — diplômé d’État depuis 2020
                </span>
              </h1>
            </div>

            <p className={"pb-12 max-w-xl"}>
              Via Fisicaly, je suis en mesure de vous proposer une prise en
              charge de la prévention et du bien-être de vos employés, en
              utilisant mes compétences dans les domaines de la santé et
              l&apos;entraînement sportif.
            </p>
          </div>

          <div
            className={
              "flex flex-wrap justify-between lg:justify-normal lg:flex-col col-span-12 lg:col-span-3 gap-y-10"
            }
          >
            <LogoFisicaly className={"px-5 lg:px-8 h-16"} />
            <div className={"px-5 lg:px-8"}>
              <div className={"flex flex-col"}>
                <Surtitle className={"text-primary-orange text-sm"}>
                  Email
                </Surtitle>
                <Link
                  prefetch={false}
                  href={"mailto:contact@fisicaly.com"}
                  className={"hover:text-primary-orange duration-150"}
                >
                  contact@fisicaly.com
                </Link>
              </div>
            </div>

            <div className={"flex flex-col px-5 lg:px-8"}>
              <Surtitle className={"text-primary-orange text-sm mb-6"}>
                Références
              </Surtitle>
              <div className={"flex gap-32 text-primary-black/50"}>
                <LogoChateauDucruBeaucaillou className={"fill-current h-32"} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <figure className={"relative object-cover h-96"}>
            <ExportedImage
              fill
              priority
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
              <span
                className={
                  "text-3xl sm:text-4xl font-medium tracking-[0.040em]"
                }
              >
                Hugo Costa
              </span>
            </figcaption>
          </figure>

          <div
            className={
              "grid bg-white border-x border-primary-black/5 grid-cols-1"
            }
          >
            <div className={"p-5 lg:p-8"}>
              <h3 className={"flex flex-col mb-4"}>
                <Surtitle className={"text-primary-orange text-sm"}>
                  Spécialité
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span className={"font-medium text-3xl sm:text-4xl"}>
                  Prévention en entreprise
                </span>
              </h3>
              <p className={"flex flex-col"}>
                <span className={"mb-1"}>
                  Travaillant auprès du secteur viticole depuis plus de 2 ans.
                </span>
                <span className={"text-sm"}>
                  — patientèle, coaching, consultant en prévention
                </span>
              </p>
            </div>

            <div className={"p-5 lg:p-8 bg-primary-black/5"}>
              <h3 className={"flex flex-col mb-4"}>
                <Surtitle className={"text-primary-orange text-sm"}>
                  Objectifs
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span className={"font-medium text-3xl sm:text-4xl"}>
                  Prévenir les troubles des employés
                </span>
                <span>— musculo-squelettiques/psychologiques</span>
              </h3>
              <p>
                J&apos;anime des séances de sport axées sur la prévention et
                team building pour des employés épanouis au sein de leur
                entreprise.
              </p>
            </div>

            <div className={"bg-primary-orange  p-5 lg:p-8"}>
              <h3 className={"flex flex-col"}>
                <Surtitle className={"text-primary-white text-sm"}>
                  Résultats
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <ul>
                  <li
                    className={
                      " font-medium pb-2 border-b mb-2 border-primary-black"
                    }
                  >
                    <span
                      className={
                        "inline-flex justify-start items-start text-3xl sm:text-4xl"
                      }
                    >
                      <Arrow
                        className={"shrink-0 h-3 fill-current mr-2 mt-4"}
                      />
                      Fidéliser les employés
                    </span>
                  </li>
                  <li className={"font-medium flex flex-col"}>
                    <span
                      className={
                        "inline-flex justify-start items-start text-3xl sm:text-4xl"
                      }
                    >
                      <Arrow
                        className={"shrink-0 h-3 fill-current mr-2 mt-4"}
                      />
                      Renforcer leur engagement
                    </span>
                    <span className={"ml-5"}>— sur leur poste de travail</span>
                  </li>
                </ul>
              </h3>
            </div>

            <div className={"bg-primary-black p-5 lg:p-8"}>
              <h3 className={"flex flex-col mb-4 text-primary-white"}>
                <Surtitle className={"text-primary-orange text-sm"}>
                  Bénéfices
                </Surtitle>
                <span className={"sr-only"}> : </span>
                <span className={"font-medium text-3xl sm:text-4xl"}>
                  Augmentation globale des résultats
                </span>
              </h3>
              <p className={"text-primary-white"}>
                Grâce à une baisse de l’absentéisme etd une réduction du
                turnover au sein des équipes.
              </p>
            </div>
          </div>
        </section>

        <section className={"flex flex-col gap-y-16 px-5 lg:px-8"}>
          <h2 className={"flex flex-col"}>
            <span className={"text-5xl sm:text-6xl font-black"}>
              Intervention
            </span>
            <span className={"text-2xl text-primary-black/40"}>
              — Résultats observables dans votre entreprise
            </span>
          </h2>

          <Flow className={"-mx-5 lg:mx-0"} />
        </section>

        <section className={"flex flex-col gap-y-16"}>
          <h2 className={"flex flex-col px-5 lg:px-8"}>
            <span className={"text-5xl sm:text-6xl font-black"}>
              Retours clients
            </span>
            <span className={"text-2xl text-primary-black/40"}>
              — Employés montrant les bénéfices des séances de coaching
            </span>
          </h2>

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
                <Surtitle className={"text-primary-orange text-sm"}>
                  Avis n°0{index + 1}
                </Surtitle>
                <h3 className={"text-3xl font-medium mb-3"}>{item.title}</h3>
                <p>{item.description}</p>
                <footer className={"sr-only"}>
                  <cite>Employé n°{index + 1}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className={"flex flex-col gap-y-16"}>
          <h2 className={"flex flex-col px-5 lg:px-8"}>
            <span className={"text-5xl sm:text-6xl font-black"}>
              Prestations
            </span>
            <span className={"text-2xl text-primary-black/40"}>
              — Grille tarifaire
            </span>
          </h2>

          <div className={"grid md:grid-cols-2 bg-white"}>
            <article
              className={
                "bg-primary-black p-5 lg:p-8 flex flex-col justify-between"
              }
            >
              <div>
                <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                  Audit
                </Surtitle>
                <h3
                  className={
                    "text-primary-white font-medium text-3xl sm:text-4xl mb-4"
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
                  "flex items-center justify-end group text-primary-orange hover:text-primary-white duration-150"
                }
              >
                <Arrow
                  className={
                    "fill-current h-3 mr-2 stroke-[30px] stroke-primary-orange group-hover:stroke-primary-white duration-150"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article
              className={
                "bg-primary-black/5 p-5 lg:p-8 flex flex-col justify-between"
              }
            >
              <div>
                <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                  Séances
                </Surtitle>
                <h3
                  className={
                    "text-primary-black font-medium text-3xl sm:text-4xl mb-4"
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
                  "flex items-center justify-end group text-primary-orange hover:text-primary-black duration-150"
                }
              >
                <Arrow
                  className={
                    "fill-current h-3 mr-2 stroke-[30px] stroke-primary-orange group-hover:stroke-primary-black duration-150"
                  }
                />
                <Surtitle className={"font-black"}>360&nbsp;€&nbsp;HT</Surtitle>
              </Link>
            </article>

            <article
              className={
                "bg-primary-orange p-5 lg:p-8 flex flex-col justify-between"
              }
            >
              <div>
                <Surtitle className={"text-primary-white mb-2 text-sm"}>
                  Prévention
                </Surtitle>
                <h3
                  className={
                    "text-primary-black font-medium text-3xl sm:text-4xl mb-4"
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
                  "flex items-center justify-end group text-primary-white hover:text-primary-black duration-150"
                }
              >
                <Arrow
                  className={
                    "fill-current h-3 mr-2 stroke-[30px] stroke-primary-white group-hover:stroke-primary-black duration-150"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article
              className={
                "p-5 lg:p-8 border-l md:border-l-0 md:border-b border-r bg-white border-primary-black/10 flex flex-col justify-between"
              }
            >
              <div>
                <Surtitle className={"text-primary-orange mb-2 text-sm"}>
                  Formation
                </Surtitle>
                <h3
                  className={
                    "text-primary-black font-medium text-3xl sm:text-4xl mb-4"
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
                  "flex items-center justify-end group text-primary-orange hover:text-primary-black duration-150"
                }
              >
                <Arrow
                  className={
                    "fill-current h-3 mr-2 stroke-[30px] stroke-primary-orange group-hover:stroke-primary-black duration-150"
                  }
                />
                <Surtitle className={"font-black"}>Sur devis</Surtitle>
              </Link>
            </article>

            <article className={"md:col-span-2"}>
              <figure className={"relative aspect-square sm:aspect-video"}>
                <ExportedImage
                  fill
                  src={"/images/weights.jpg"}
                  alt={"Photo de poids de musculation"}
                  className={"object-cover object-center"}
                />
                <figcaption className={"absolute left-0 bottom-0 p-5 lg:p-8"}>
                  <Surtitle className={"text-primary-orange text-sm"}>
                    Conception
                  </Surtitle>
                  <h3 className={"text-primary-white flex flex-col"}>
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
                <div
                  className={
                    "md:col-span-8 p-5 lg:p-8 border-b border-primary-black/5"
                  }
                >
                  <ul className={"space-y-5 mb-9"}>
                    <li className={"flex items-top"}>
                      <CheckMark className={"fill-current h-5 mt-1 mr-2"} />
                      <div className={"flex flex-col"}>
                        <span className={"text-xl"}>
                          Collaboration avec des partenaires
                        </span>
                        <span className={"text-lg"}>
                          — architecte d’intérieur, fournisseurs
                        </span>
                      </div>
                    </li>
                    <li className={"flex items-top"}>
                      <CheckMark className={"fill-current h-5 mt-1 mr-2"} />
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
                    "bg-primary-orange p-5 lg:p-8 flex justify-between flex-col md:col-span-4"
                  }
                >
                  <Surtitle className={"text-primary-white mb-16"}>
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
                        "fill-current text-primary-white h-3 mr-2 stroke-[30px] stroke-primary-white"
                      }
                    />
                    <Surtitle className={"text-primary-white font-black"}>
                      Sur devis
                    </Surtitle>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className={"px-5 lg:px-8"}>
            <Surtitle className={"text-primary-orange mb-2 text-sm"}>
              Exemples déjà menés
            </Surtitle>
            <ul className={"list-disc ml-5 text-xl"}>
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
      <footer className="max-w-screen-lg mx-auto px-5">
        <div className="md:grid-cols-3 bg-primary-black text-primary-white grid">
          <div className={"md:col-span-3 p-5 lg:p-8"}>
            <LogoFisicalyText className={"h-10 text-primary-white"} />
          </div>
          <div className={"p-5 lg:p-8"}>
            <p className={"font-medium [text-wrap:balance]"}>
              Masseur-kinésithérapeute & Coach sportif
            </p>
          </div>
          <div className={"p-5 lg:p-8"}>
            <Link
              prefetch={false}
              href={"mailto:contact@fisicaly.com"}
              className={"hover:text-primary-orange transition duration-150"}
            >
              contact@fisicaly.com
            </Link>
          </div>
          <div className={"p-5 lg:p-8 flex flex-col"}>
            Copyright © Fisicaly, {new Date().getFullYear()}
            <Link
              prefetch={false}
              href={"https://louiscuvelier.com"}
              className={"hover:text-primary-orange transition duration-150"}
            >
              Réalisation Louis Cuvelier
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
