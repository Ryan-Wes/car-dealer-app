# Car Dealer App

![Image 1](./public/1.png)
![Image 2](./public/2.png)
![Image 3](./public/3.png)
![Image 4](./public/4.png)
![Image 5](./public/5.png)
![Image 6](./public/6.png)

<p align="center">
  <img src="./public/mobile2.png" alt="Image 7" width="200" style="padding-right: 200px;" />
  <img src="./public/mobile1.png" alt="Image 8" width="200" />
</p>

## Overview

The **Car Dealer App** is an application developed in Next.js that allows users to filter vehicles by make and year of manufacture. The application uses the National Highway Traffic Safety Administration (NHTSA) API to fetch information about vehicle makes and models.

## Features

- Display a list of vehicle makes.
- Filter vehicles by make and year.
- Dynamic data loading using the API.
- Responsive and modern design using Tailwind CSS.

## Architecture

The application is structured as follows:

- **Pages**: Utilizes the Next.js page structure with dynamic routes to display search results.
- **Components**: Reusable components for displaying vehicle lists and forms.
- **Styling**: Utilizes Tailwind CSS for a clean and responsive design.
- **Data**: The application connects to an external API to fetch data about vehicle makes and models.

## Major Challenges and Solutions

During the development of the **Car Dealer App**, I faced several challenges, including:

### API Integration

**Challenge:** Connecting to and handling data from the NHTSA API presented some difficulties, especially regarding error handling and formatting the received data.  
**Solution:** I used `try/catch` to catch errors during the API call and implemented a loading state to improve the user experience. I also formatted the data as soon as I received it, ensuring that the application was robust.

### Tailwind CSS Implementation

**Challenge:** Learning to use Tailwind CSS to style the application efficiently and responsively was a challenge, as I had never encountered this tool before. The styling did not turn out as well as I expected, but I enjoyed learning something new and promise that with more time, I will become more proficient with this tool.  
**Solution:** I studied the official Tailwind CSS documentation and used pre-styled components as references, in addition to experimenting with different utilities to better understand how they work.

### Development Environment Setup

**Challenge:** Setting up environment variables in Vercel and transitioning from `.env.local` to shared environment variables.  
**Solution:** I created environment variables directly in the Vercel dashboard, ensuring they were used during the build and runtime of the application.

### React Hydration Challenges

**Challenge:** I encountered problems with React hydration errors, which required careful investigation.  
**Solution:** I checked the consistency between server-side rendering and client-side rendering, avoiding the use of dynamic variables that could cause discrepancies.

### Component Styling

**Challenge:** Maintaining visual consistency and a good user experience across different screen sizes.  
**Solution:** I used responsive classes from Tailwind CSS and tested the application on different devices and screen sizes, adjusting the styles as necessary to ensure a smooth user experience.

### Integration with ESLint and Prettier

**Challenge:** I did not implement ESLint and Prettier because I had never used these tools, and as a result, they started breaking my code.  
**Solution:** I will strive to learn both tools as quickly as possible to use them effectively.

## Instructions to Run the Application

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/car-dealer-app.git
   cd car-dealer-app

2. **Vercel:**

   ```bash
   https://car-dealer-c1h2phegn-wryans-projects.vercel.app/
