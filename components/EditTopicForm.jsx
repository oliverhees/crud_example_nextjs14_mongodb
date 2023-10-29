/* Bearbeiten-Formular für ein Thema

   Diese React-Komponente stellt ein Formular zur Verfügung, mit dem ein vorhandenes Thema bearbeitet 
   werden kann. Es verwendet die "useState"-Hook von React, um Zustände für den Titel und die 
   Beschreibung des Themas zu verwalten. Wenn der Benutzer das Formular absendet, wird ein Fetch-
   Aufruf an die API gesendet, um das Thema zu aktualisieren. Bei Erfolg wird zur Startseite 
   navigiert.

   - Die Funktion "handleSubmit" wird aufgerufen, wenn das Formular abgeschickt wird, um das 
     Aktualisieren des Themas zu bestätigen.
   - Ein Fetch-Aufruf wird verwendet, um die Aktualisierung des Themas über die API durchzuführen.
   - Wenn die Aktualisierung erfolgreich ist, wird zur Startseite navigiert.

   Autor: Oliver Hees - 28.10.2023
*/
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  // Zustände für den neuen Titel und die neue Beschreibung
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  // Zugriff auf den Router
  const router = useRouter();

  // Funktion zur Verarbeitung des Formulars beim Absenden
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch-Aufruf, um das Thema zu aktualisieren
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        // Bei Erfolg die Seite aktualisieren und zur Startseite navigieren
        router.refresh();
        router.push("/");
      } else {
        // Fehlerbehandlung, wenn das Thema nicht aktualisiert werden konnte
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // JSX für das Formular
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Eingabefeld für den neuen Titel */}
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 rounded-full"
        type="text"
        placeholder="Topic Title"
      />
      {/* Eingabefeld für die neue Beschreibung */}
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 rounded-full"
        type="text"
        placeholder="Topic Description"
      />
      {/* Schaltfläche zum Absenden des Formulars */}
      <button className="bg-green-600 font-bold text-white py-3 px-6 rounded-full w-fit">
        Update Topic
      </button>
    </form>
  );
}
