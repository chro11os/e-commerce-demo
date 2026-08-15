# E-Commerce Application Demo

This is my software demo for future job reference made entirely by me using Laravel.

## Overview
A full-stack e-commerce web application built with Laravel, Inertia.js, React, and TypeScript.

## Tech Stack
- Backend: Laravel, PHP 8.5
- Frontend: Inertia.js v3, React, TypeScript
- Styling: Tailwind CSS
- Authentication: Laravel Fortify (Two-Factor Authentication, Passkeys)
- Testing: Pest PHP

## Key Features
- User authentication and security controls
- Two-Factor Authentication (2FA) and Passkey management
- Multi-user team management
- React frontend powered by Inertia.js

## Setup Instructions

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js and npm

### Installation Steps
1. Clone the repository:
   git clone https://github.com/chro11os/e-commerce-demo.git

2. Install PHP dependencies:
   composer install

3. Install Frontend dependencies:
   npm install

4. Configure environment:
   cp .env.example .env
   php artisan key:generate

5. Run database migrations:
   php artisan migrate

6. Start development server:
   php artisan serve
   npm run dev
