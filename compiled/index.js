import express from "express";
import { logger } from "./utils/createLogger.js";
import { connectToDb } from "./db/client.js";
import { createTables } from "./utils/createTables.js";
const d = logger("src/index.ts");
const app = express();
const startServer = async () => {
    var _a;
    try {
        await connectToDb();
        await createTables();
        app.get("/", (req, res) => {
            res.send("Hello world, This is Mahesh");
        });
        const PORT = (_a = process.env.SERVERPORT) !== null && _a !== void 0 ? _a : 3000;
        app.listen(PORT, () => {
            d(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        d("Error starting the server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map