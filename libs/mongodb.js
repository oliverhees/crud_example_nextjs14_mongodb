/* Verbindung zur MongoDB herstellen

   Diese JavaScript-Datei definiert eine Funktion zum Herstellen der Verbindung zur MongoDB-
   Datenbank mithilfe des Mongoose-Frameworks. Die Funktion verwendet die in der Umgebungsvariable 
   "MONGODB_URI" angegebene Verbindungs-URL und zeigt eine Meldung in der Konsole an, wenn die 
   Verbindung erfolgreich hergestellt wurde, oder gibt einen Fehler aus, wenn die Verbindung 
   fehlschlägt.

   Autor: Oliver Hees - 28.10.2023
*/

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
