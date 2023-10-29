/* Bearbeiten-Seite für ein Thema

   Diese React-Komponente stellt die Bearbeiten-Seite für ein vorhandenes Thema dar. Sie verwendet die
   "getTopicbyId" -Funktion, um Informationen zu einem bestimmten Thema anhand seiner ID abzurufen.
   Die Base-URL für die API wird aus dem Umgebungsvariablen "process.env.PUBLIC_BASE_URL" geholt.
   Dann werden die erhaltenen Daten (Titel und Beschreibung) an das "EditTopicForm" -Komponente
   weitergegeben, um das Bearbeiten des Themas zu ermöglichen.

   Autor: Oliver Hees - 28.10.2023
*/
import EditTopicForm from "@/components/EditTopicForm";

// Funktion zum Abrufen eines Themas anhand seiner ID
const getTopicbyId = async (id) => {
  // Die Base-URL für die API aus der Umgebungsvariablen "process.env.PUBLIC_BASE_URL" holen
  const base_url = process.env.PUBLIC_BASE_URL;

  try {
    // Fetch-Aufruf, um das Thema anhand seiner ID abzurufen
    const res = await fetch(`${base_url}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      // Fehlerbehandlung, wenn das Thema nicht abgerufen werden konnte
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  // Thema anhand der ID abrufen
  const { topic } = await getTopicbyId(id);
  const { title, description } = topic;

  // EditTopicForm-Komponente mit den abgerufenen Daten aufrufen
  return <EditTopicForm id={id} title={title} description={description} />;
}
