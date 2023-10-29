import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

/* API-Endpunkt für die Verwaltung von Themen (Topics)

   Dieses Modul enthält HTTP-Anfragemethoden (POST, GET, DELETE), die für die 
   Erstellung, Abfrage und Löschung von Themen in einer Datenbank verwendet werden. 
   
   - POST-Anfrage: Erstellt ein neues Thema mit Titel und Beschreibung in der 
     Datenbank.
   
   - GET-Anfrage: Ruft alle vorhandenen Themen aus der Datenbank ab und gibt sie als 
     JSON-Antwort zurück.
   
   - DELETE-Anfrage: Löscht ein Thema anhand seiner eindeutigen ID aus der Datenbank.

   Diese Methoden verwenden MongoDB für die Datenbankverbindung und Mongoose-Schemas 
   für die Datenmodellierung. Die Antworten auf die Anfragen sind im JSON-Format 
   verfasst und enthalten entsprechende Statuscodes.

   Autor: Oliver Hees - 28.10.2023

*/

/* Post Request for Topics - Erstellt neue Topics in DB */
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

/* Get Request for Topics - Ruft alle Topics aus DB ab */
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find({});
  return NextResponse.json({ topics });
}

/* Delete Request for Topics - Löscht Topic anhand von id */
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
