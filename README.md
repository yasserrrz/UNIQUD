# UNIQUD

UNIQUD is a web application designed to provide a unique and engaging experience for users and administrators. This repository contains the source code and setup instructions to get the project running locally.

## Features

- User and Admin roles
- Simple hard-coded authentication
- Middleware to protect routes
- Interactive UI/UX
- Responsive design
- Dynamic content management

## Technologies Used

- **Framework:** Next.js
- **Styling:** Tailwind CSS, ShadCN
- **Data Handling:** Mock API
- **Authentication:** Simple hard-coded authentication
- **Middleware:** Route protection

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>=16.x)
- npm or yarn

### Steps to Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yasserrrz/UNIQUD.git
   cd UNIQUD
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables: Create a `.env` file in the root directory and add the required environment variables (refer to `.env.example`).

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the app in your browser at:

   ```
   http://localhost:3000
   ```

## Deployment

The app can be deployed to platforms like Vercel or Netlify. Ensure production environment variables are configured correctly before deployment.

## Folder Structure

```
UNIQUD/
├── public/          # Static files
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   ├── middleware/  # Route protection logic
│   ├── utils/       # Helper functions
│   ├── context      # Authcontext for authintications 
├── .env.example     # Environment variable example
├── package.json     # Project dependencies
├── README.md        # Project documentation
└── next.config.js   # Next.js configuration
```

## Contributing

Feel free to submit pull requests or report issues. Contributions are welcome!


## Contact

For any questions or support, please contact [yasserrmohammed44@gmail.com].

