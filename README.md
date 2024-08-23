# Hardcore AI Fitness Coach

## Overview

Welcome to the Hardcore AI Fitness Coach project! This application is a modern, full-stack web app designed to deliver AI-generated fitness workouts to your phone throughout the day. Built with Next.js, TypeScript, React, ChatGPT, Tailwind CSS, Prisma, and Supabase, this project leverages advanced technologies to create a personalized fitness coach experience.

## Features

- **AI-Generated Workouts:** Receive daily fitness routines generated by an AI model.
- **Progressive Web App:** Receive notifications and interact with the app on your phone.
- **User Authentication:** Secure login and user management with Clerk.
- **Database Integration:** Store user data and workout logs with PlanetScale and Prisma.
- **Modern UI:** Styled with Tailwind CSS for a sleek and responsive design.
- **Interactive Chat:** Communicate with the AI coach and get real-time responses.

## Video Demo

[Watch the demo video here](https://www.youtube.com/watch?v=Hqy5vta5t1U) 

## Live Demo

[Try the application live here](https://hardcore-ai-trainer.vercel.app/)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/hardcore-ai-trainer.git
   cd hardcore-ai-trainer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root of the project and add your environment variables:
   ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=

     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
     OPENAI_API_KEY=
   
     APP_SECRET_KEY=
   
     DATABASE_URL=
     DIRECT_URL=
   
     NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
     NEXT_PUBLIC_VAPID_PUBLIC_KEY=
     VAPID_PRIVATE_KEY=
   ```

4. **Run Migrations:**
   ```bash
   npx prisma db push
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to view the app.

## How It Works

### Core Components

- **Next.js & TypeScript:** The application is built using Next.js 14 and TypeScript for type safety and modern web features.
- **React:** Provides the frontend framework for creating interactive user interfaces.
- **Tailwind CSS:** Utilized for styling the application with a responsive and modern design.
- **OpenAI GPT:** Powers the AI fitness coach, generating personalized workout routines and responses.
- **Clerk:** Handles user authentication, managing secure login and registration.
- **Supabase & Prisma:** Manage and store user data and workout logs, with a serverless database for efficient and scalable data storage.

### Workflow

1. **User Interaction:**
   - Users sign up and log in using Clerk for authentication.
   - Once logged in, users interact with the AI coach, which sends them daily workout routines.

2. **AI Workouts:**
   - The AI model, powered by OpenAI, generates personalized workouts based on user preferences and inputs.
   - Workouts are sent to users through push notifications via the Progressive Web App (PWA) features.

3. **Notifications:**
   - The app sends workout reminders and additional tasks throughout the day via browser notifications.

4. **Chat Interaction:**
   - Users can chat with the AI coach, receive responses, and provide feedback on workouts.

5. **Data Management:**
   - User data and workout logs are stored in a Supabase database, accessed and managed using Prisma.

6. **Progressive Web App Features:**
   - The app is configured as a PWA, allowing users to install it on their devices and receive notifications even when the app is not open.

---

Thank you for checking out the Hardcore AI Fitness Coach! Enjoy building and using your new AI-powered fitness companion.
