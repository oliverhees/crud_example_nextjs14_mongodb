/* Navigationsleiste (Navbar) der Anwendung

   Diese React-Komponente stellt die Navigationsleiste der Anwendung dar. Sie verwendet die
   "Link" -Komponente aus Next.js, um auf verschiedene Seiten der Anwendung zu verlinken. 
   Die Navigationsleiste enthält Links zur Startseite (CRUD Test Installation) und zur Seite 
   "Add Topic", die es den Benutzern ermöglichen, zu navigieren.

   Autor: Oliver Hees - 28.10.2023
*/

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        {" "}
        CRUD Test Installation{" "}
      </Link>
      <Link className="bg-white p-2 rounded-full" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
