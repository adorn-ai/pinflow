import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

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
        console.log('Beehiiv response:', JSON.stringify(data, null, 2));
        res.status(response.status).json(data);

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3001, () => {
    console.log('API server running on port 3001');
});