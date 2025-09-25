# Feastly - Food App

Welcome to Feastly, a modern food discovery and ordering application built entirely with React and Manifest.

This application allows users to sign up, browse a list of restaurants, and if they have the 'owner' role, add their own restaurants to the platform.

## Core Features

- **User Authentication**: Secure sign-up and login for customers and restaurant owners.
- **Restaurant Management**: Authenticated users can create, view, update, and delete their own restaurant listings.
- **Dynamic Content**: Restaurant and menu item images are handled by Manifest's built-in file storage.
- **Role-Based Access**: Clear separation of permissions between regular users and administrators, all managed by Manifest policies.
- **Auto-Generated Admin Panel**: A complete administrative interface is available at `/admin` for managing all data.

## Tech Stack

- **Backend**: Manifest (YAML-based configuration)
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **SDK**: `@mnfst/sdk` for all backend interactions

## Getting Started

Follow the setup guide to get the application running locally.
