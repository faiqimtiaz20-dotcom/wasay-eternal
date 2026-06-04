const { handleSendOrderEmail } = require("../lib/send-order-email-handler.cjs");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    const result = await handleSendOrderEmail(req.body);
    return res.status(result.status).json(result.body);
  } catch (err) {
    console.error("[api/send-order-email] Unhandled error:", err);
    return res.status(500).json({
      success: false,
      error: "Server error processing order email.",
    });
  }
};
