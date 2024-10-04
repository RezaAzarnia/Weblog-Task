# Blog Test Project

## Overview
A simple blog application where users can log in to view and interact with blog posts. After logging in, users are redirected to the posts page, which fetches and displays six blog posts using `react-query`. Each post is clickable, leading to a detailed view.

## Features
- **Login Page**: Requires username (`admin`) and password (`admin`).
- **Posts Page**: Displays six posts fetched with `react-query`. Unauthorized users are blocked from access.
- **Post Details Page**: Shows the full content of a selected post, fetched using `react-query`.
- **Protected Routes**: Only accessible with a valid JWT token stored in cookies.
- **Styled with Tailwind CSS**: Ensures a modern and responsive design.
- **SEO Best Practices**: Optimized for search engines with proper meta tags and semantic HTML.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog-test-project
   npm install
   npm run dev
```
