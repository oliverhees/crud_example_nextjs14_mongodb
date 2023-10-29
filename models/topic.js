/* Mongoose-Schema und Modell für Themen (Topics)

   Diese JavaScript-Datei definiert ein Mongoose-Schema und Modell für die Darstellung von 
   Themen (Topics) in einer MongoDB-Datenbank. Das Schema enthält Felder für den Titel und 
   die Beschreibung eines Themas und verwendet die Option "timestamps: true", um automatisch 
   Zeitstempel für die Erstellung und Aktualisierung von Dokumenten hinzuzufügen.

   Das Modell "Topic" wird erstellt, wobei geprüft wird, ob es bereits existiert, um 
   Duplikate zu vermeiden.

   Autor: Oliver Hees - 28.10.2023
*/

import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;
