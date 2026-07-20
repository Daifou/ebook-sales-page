export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/create-checkout' && request.method === 'POST') {
      try {
        const response = await fetch('https://pay.chargily.net/api/v2/checkouts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.CHARGILY_SECRET_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            items: [
              {
                name: 'دليل يوتيوب شورتس',
                amount: 700,
                quantity: 1,
              },
            ],
            currency: 'dzd',
            locale: 'ar',
            success_url: 'https://faydbatma.shop/thankyou',
            failure_url: 'https://faydbatma.shop',
            pass_fees_to_customer: false,
          }),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
