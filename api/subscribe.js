import cors from 'cors';

const corsMiddleware = cors({ origin: '*' });

export default async function handler(req, res) {
  corsMiddleware(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { email } = req.body;

      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email required' });
      }

      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.VITE_PUBLIC_BEEHIIV_PUB_ID}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.VITE_PUBLIC_BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: true,
            send_welcome_email: false,
            double_opt_override: "off",
            utm_source: "landing_page",
            utm_medium: "waitlist_form",
            utm_campaign: "pinflow_launch",
            automation_ids: [process.env.VITE_PUBLIC_BEEHIIV_AUT_ID],
          }),
        }
      );

      const data = await response.json();
      res.status(response.status).json(data);

    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
}