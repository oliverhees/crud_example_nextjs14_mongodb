/* Hauptseite der Anwendung

   Diese React-Komponente repräsentiert die Hauptseite der Anwendung. Sie importiert die 
   "TopicsList"-Komponente, die wahrscheinlich eine Liste von Themen anzeigt, und rendert 
   sie auf der Hauptseite.

   Autor: Oliver Hees - 28.10.2023
*/

import TopicsList from "@/components/TopicsList";

export default function Home() {
  return <TopicsList />;
}
