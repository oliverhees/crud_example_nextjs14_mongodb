/* Löschen-Schaltfläche für ein Thema

   Diese React-Komponente stellt eine Schaltfläche zum Löschen eines Themas dar. Sie verwendet das 
   "HiOutlineTrash"-Symbol aus "react-icons" und zeigt eine Bestätigungsnachricht an, wenn der 
   Benutzer auf die Schaltfläche klickt. Wenn der Benutzer die Löschung bestätigt, wird ein Fetch-
   Aufruf an die API gesendet, um das Thema zu löschen. Wenn die Löschung erfolgreich ist, wird die
   Seite aktualisiert.

   - Die Funktion "removeTopic" wird aufgerufen, wenn auf die Schaltfläche geklickt wird, um das 
     Löschen des Themas zu bestätigen.
   - Die Funktion verwendet "confirm", um eine Bestätigungsnachricht anzuzeigen und die Löschung 
     nur bei Bestätigung auszuführen.
   - Ein Fetch-Aufruf wird verwendet, um das Löschen des Themas über die API durchzuführen.
   - Wenn die Löschung erfolgreich ist, wird die Seite mit "router.refresh()" aktualisiert.

   Autor: Oliver Hees - 28.10.2023
*/
"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  // Funktion zum Löschen eines Themas
  const removeTopic = async () => {
    // Bestätigungsnachricht anzeigen
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      // Fetch-Aufruf zur API, um das Thema zu löschen
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Bei Erfolg die Seite aktualisieren
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      {/* Schaltfläche mit "HiOutlineTrash"-Symbol */}
      <HiOutlineTrash size={24} />
    </button>
  );
}
