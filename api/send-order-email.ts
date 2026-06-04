import { handleSendOrderEmail } from "../lib/send-order-email-handler";

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, unknown>) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const result = await handleSendOrderEmail(req.body);
  return res.status(result.status).json(result.body);
}
