/* Liste der Themen (Topics) und Abrufen von Themen über eine API

   Diese React-Komponente stellt eine Liste von Themen dar und ruft Themen über eine API ab.
   Die Themen werden in einer Schleife durchgegangen und für jedes Thema werden ein Titel,
   eine Beschreibung und Schaltflächen zum Entfernen und Bearbeiten angezeigt. Es werden auch
   das "RemoveBtn"-Modul, die "Link"-Komponente von Next.js und das "HiPencilAlt"-Symbol aus 
   "react-icons" verwendet.

   Wichtige Stellen:
   - Die Funktion "getTopics" wird verwendet, um Themen über die API abzurufen.
   - Es wird eine Schleife verwendet, um die Themen anzuzeigen.
   - Das "key"-Attribut wird verwendet, um jedem Thema eine eindeutige ID zuzuweisen.

   Autor: Oliver Hees - 28.10.2023
*/

import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// Funktion zum Abrufen von Themen über die API
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.error("Error loading topics:", error);
  }
};

export default async function TopicsList() {
  // Themen über die API abrufen
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
