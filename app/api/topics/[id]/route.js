/* API-Endpunkt zur Aktualisierung und Abfrage von Themen

   Dieses Modul stellt HTTP-Anfragemethoden (PUT und GET) für die Aktualisierung und Abfrage von 
   Themen in der Datenbank bereit. Die PUT-Methode ermöglicht die Aktualisierung eines vorhandenen 
   Themas, indem sie die ID des Themas sowie die neuen Titel- und Beschreibungsdaten aus der 
   Anfrage verwendet. Die GET-Methode ermöglicht die Abfrage eines einzelnen Themas anhand seiner 
   ID.

   Beide Methoden verwenden die "connectMongoDB"-Funktion, um eine Verbindung zur MongoDB-Datenbank 
   herzustellen, und das Mongoose-Modell "Topic" zur Datenverarbeitung.

   Autor: Oliver Hees - 28.10.2023
*/
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
