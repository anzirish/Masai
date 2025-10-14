import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[MongoDB] Connected successfully!");
  } catch (error) {
    console.error("[MongoDB] Connection failed:", error.message);
    process.exit(1); // terminaqte broken process
  }

  mongoose.connection.on("error", (err) => {
    console.error("[MongoDB] Error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("[MongoDB] Disconnected");
  });
};
