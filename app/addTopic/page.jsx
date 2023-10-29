/* Hinzufügen eines neuen Themas (Topic)

   Diese React-Komponente stellt ein Formular zur Verfügung, mit dem ein neues Thema mit Titel und 
   Beschreibung hinzugefügt werden kann. Es verwendet die "useState"-Hook von React, um Zustände 
   für den Titel und die Beschreibung des Themas zu verwalten, und die "useRouter"-Hook von 
   Next.js, um die Navigation zu steuern.

   - Zustände für den Titel und die Beschreibung werden mit "useState" initialisiert.
   - Das "useRouter"-Hook wird verwendet, um auf die Router-Instanz zuzugreifen.
   - Die Funktion "handleSubmit" wird aufgerufen, wenn das Formular abgeschickt wird, um ein neues 
     Thema über die API hinzuzufügen. Sie validiert, ob Titel und Beschreibung vorhanden sind, und 
     zeigt bei Fehlern eine Meldung an.
   - Ein Fetch-Aufruf wird verwendet, um die Daten an die API zu senden, und bei Erfolg wird zur 
     Startseite navigiert.
   - Das Formular verwendet "onChange" -Handler, um die Eingabe in den Textfeldern zu erfassen, 
     und "value", um die Werte aus den Zuständen anzuzeigen.

   Autor: Oliver Hees - 28.10.2023
*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addTopic() {
  // Zustände für den Titel und die Beschreibung
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Zugriff auf den Router
  const router = useRouter();

  // Funktion zur Verarbeitung des Formulars beim Absenden
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      // Überprüfung, ob Titel und Beschreibung vorhanden sind
      alert("Title and Description are required");
      return;
    }

    try {
      // Fetch-Aufruf, um ein neues Thema hinzuzufügen
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        // Bei Erfolg zur Startseite navigieren
        router.push("/");
      } else {
        // Fehlerbehandlung, wenn das Thema nicht erstellt werden konnte
        throw new Error("Filed to create topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // JSX für das Formular
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Eingabefeld für den Titel */}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 rounded-full"
        type="text"
        placeholder="Topic Title"
      />
      {/* Eingabefeld für die Beschreibung */}
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 rounded-full"
        type="text"
        placeholder="Topic Description"
      />
      {/* Schaltfläche zum Absenden des Formulars */}
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 rounded-full w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
