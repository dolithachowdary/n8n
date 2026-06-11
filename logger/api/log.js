import { DataAPIClient } from "@datastax/astra-db-ts";

const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
// const db = client.db(process.env.ASTRA_DB_ENDPOINT);
const db = client.db(
    process.env.ASTRA_DB_ENDPOINT,
    {
        keyspace: "logs"
    }
);
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed",
        });
    }

    try {
        const collection = db.collection("webhook_logs");

        await collection.insertOne({
            execution_id: crypto.randomUUID(),
            created_at: new Date(),

            user_message: req.body.user_message || "",
            ai_response: req.body.ai_response || "",

            tool_name: req.body.tool_name || "",
            tool_response: req.body.tool_response || "",

            final_response: req.body.final_response || "",

            status: req.body.status || "SUCCESS",

            error_message: req.body.error_message || "",

            latency_ms: req.body.latency_ms || 0,
        });

        return res.status(200).json({
            success: true,
            message: "Log stored successfully",
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
}