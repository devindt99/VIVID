# Project Title
Holistic Fitness Tracker

## Overview

Holistic Fitness Tracker is a comprehensive app designed for individuals seeking to improve their overall well-being by tracking and analyzing their mood, activity (not limited to exercise), and diet. It encourages users to observe patterns and make informed decisions about their health and lifestyle.

### Problem

In the pursuit of health and wellness, many people find it challenging to understand how different aspects of their lifestyle, such as diet, physical activity, and mood, interconnect. Traditional fitness apps often focus solely on physical activity, neglecting other critical components like diet and emotional well-being.

### User Profile

- Individuals interested in improving their overall health:
    - Those wanting to track not just physical exercise but also diet and mood
    - Users looking for insights into how different lifestyle factors interrelate
    - People interested in setting and achieving personalized health goals

### Features

- As a user, I want to track my mood, activity, and diet daily
- As a user, I want to add custom objects for mood, activity, and diet
- As a user, I want to view overlapping longitudinal data on a Trends page
- As a user, I want to set and update personal health goals

## Implementation

### Tech Stack

- Frontend: React, styled with Sass using the BEM methodology, with Vite for bundling
- Backend: Express server utilizing Knex for querying a MySQL2 database
- CRUD operations are fundamental, enabling GET, POST, PUT, and DELETE requests for comprehensive data management

### APIs

- No external APIs are planned for the initial sprint, focusing on leveraging internal data for insights

### Sitemap

- Home page: Overview of daily tracking and quick access to adding new data
- Trends page: Visualization of longitudinal data through overlapping line graphs
- Goals page: A separate route for setting, viewing, and updating personal health goals
- Custom Tracking: Pages for adding and managing custom mood, activity, and diet objects

### Mockups

#### Home Page
![](home.png)

#### Trends Page
![](trends-page.png)

#### Goals Page
![](goals-page.png)

#### Add Custom Activity
![](add-custom-activity.png)

### Data

![](sql-diagram.png)

### Endpoints

**GET /data**

- Fetch aggregated mood, activity, and diet data

**POST /activity**

- Add a new activity record

**POST /mood**

- Add a new mood record

**POST /diet**

- Add a new diet record

**PUT /goals**

- Update personal health goals

**DELETE /data/:id**

- Delete a specific record by ID

### Auth

- Implement JWT authentication for secure access
- Manage user sessions, storing JWTs locally and clearing them upon logout
- Differentiate UI based on user authentication state

## Roadmap

The development journey includes setting up the client and server environments, defining data models, developing the frontend and backend functionality, and deploying the application. Key milestones encompass the implementation of tracking features, data visualization on the Trends page, and goal management.

## Nice-to-haves

Future enhancements could include:
- Integration with external APIs for additional data insights, such as weather conditions for outdoor activities
- Advanced data analytics for deeper insights into health trends
- Social features to share achievements or compete with friends
- Gamification elements to encourage regular tracking and goal achievement
