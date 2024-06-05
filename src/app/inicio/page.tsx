"use client";
import {
  DlButton,
  DlIcon,
  DlTag,
  DlIconNamesProp,
} from "@alicorpdigital/dali-react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

const cards = [
  {
    title: "Nivel",
    subtitle: "Explorador",
    icon: "favorite-medal",
  },
  {
    title: "Nota promedio",
    subtitle: "15/20",
    icon: "star",
  },
  {
    title: "Nivel Explorador",
    subtitle: "Progreso: 0%",
    icon: "trend-up",
  },
];

const badges = [
  {
    title: "Explorador",
    subtitle: "Nivel Inicial",
    status: "En progreso",
    icon: "explorer-enabled",
  },
  {
    title: "Aventurero",
    subtitle: "Nivel Intermedio",
    status: "Bloqueado",
    icon: "aventurero-disabled",
  },
  {
    title: "Guía",
    subtitle: "Nivel Avanzado",
    status: "Bloqueado",
    icon: "guia-disabled",
  },
];

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="dl-px-4 dl-mt-4">
      <h4 className="dl-text-base dl-font-semibold dl-mb-4">
        Bienvenido {user?.position}
      </h4>
      <h4 className="dl-text-base dl-font-semibold dl-mb-4">Resumen</h4>
      <ul className="dl-flex dl-flex-wrap dl-gap-2 dl-mb-4">
        {cards.map((card, index) => (
          <li
            className="
              dl-flex dl-items-center dl-border dl-justify-center
              dl-border-solid dl-border-warning-light
              dl-rounded-lg dl-gap-4 dl-px-4 dl-flex-1 dl-h-14
              dl-bg-warning-lightest"
            key={index}
          >
            <DlIcon size="lg" name={card.icon as DlIconNamesProp} />
            <div>
              <p className="dl-text-xs">{card.title}</p>
              <p className="dl-text-sm dl-leading-4 dl-font-semibold">
                {card.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h4 className="dl-text-base dl-font-semibold">Ruta de aprendizaje</h4>
      <p className="dl-text-sm">
        Esta aventura consiste en superar tres niveles de aprendizaje.
      </p>
      <ul className="dl-mt-4 dl-flex dl-flex-col dl-gap-3">
        {badges.map((badge, index) => (
          <li
            key={index}
            style={{ border: "1px solid #DEDEDE" }}
            className="dl-flex dl-rounded-lg dl-flex dl-items-center"
          >
            <figure>
              <Image
                alt="explorer_badge"
                height={164}
                width={132}
                src={`/inicio/${badge.icon}.png`}
              />
            </figure>

            <div className="dl-pl-6 dl-pr-4 dl-py-4 dl-w-full dl-flex dl-flex-col">
              {badge.status !== "Bloqueado" ? (
                <DlTag className="dl-mb-4" variant="orange" size="sm">
                  {badge.status}
                </DlTag>
              ) : (
                <span className="dl-py-1 dl-block dl-px-2 dl-rounded-lg dl-self-start dl-mb-4 dl-text-xs dl-text-neutral-lightest dl-bg-neutral-dark">
                  {badge.status}
                </span>
              )}
              <p
                className="dl-text-sm dl-leading-4"
                style={{ color: "#6C6C6C" }}
              >
                {badge.subtitle}
              </p>
              <span className="dl-mb-3 dl-leading-8 dl-font-semibold dl-text-base">
                {badge.title}
              </span>
              {badge.status !== "Bloqueado" && (
                <DlButton block={true} size="sm">
                  Ingresar
                </DlButton>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
