# Mock WordPress App

This project is a mock WordPress application created to demonstrate the integration with the beehiiv newsletter platform, simulating the functionalities needed to migrate content and subscribers from Substack to beehiiv and synchronize user data and subscription management between WordPress, beehiiv, and Stripe.

## Features

- Custom WordPress Site (Mock)
- RSS Feed for Content Syndication
- Signup Integration with Google Analytics
- Webhooks for Subscription Management
- Community Features for Subscribers
- SEO Optimization with Canonical URLs and `robots.txt`

## Setup

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/mock-wordpress-app.git
cd mock-wordpress-app
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Create a .env file**:
```bash
BEEHIIV_API_KEY=your_beehiiv_api_key
BEEHIIV_PUBLICATION_ID=your_beehiiv_publication_id
```

4. **Start the server**:
```bash 
npm start # start react app
npm run backend # start express backend
```
