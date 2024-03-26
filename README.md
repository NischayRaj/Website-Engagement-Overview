
# Website Engagement Overview


This project is a Website Engagement Overview application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a dashboard to visualize website engagement metrics such as page views, bounce rate, and average session duration.


## Features

**Backend Features**

RESTful API Endpoints: The backend implements a set of RESTful API endpoints for fetching, updating, and deleting metrics data.

Error Handling and Validation: Robust error handling and data validation mechanisms are implemented to ensure the reliability and integrity of the data.

MongoDB Integration: The backend seamlessly integrates with MongoDB, a NoSQL database, for efficient data storage and retrieval.


**Frontend Features**

Interactive Dashboard: The frontend provides an interactive dashboard that displays website engagement metrics in the form of charts and graphs which they can sort by date.

Data Visualization Components: The frontend includes components for visualizing website engagement metrics using popular charting libraries such as Chart.js. These components support various types of charts including bar charts, pie charts, and line charts, allowing users to visualize data in different formats.

Responsive Design: The frontend is designed to be responsive, ensuring optimal user experience across different devices and screen sizes. 

## Tech Stack

- **Backend Framework**: Node.js,  Express.js, MongoDB

- **Frontend Framework**: React, React Router, Material-UI, Chart.js, Axios


## Installation

```bash
git clone https://github.com/NischayRaj/Website-Engagement-Overview.git
```

**Frontend -**
```bash 
cd client
npm build vite
npm install
npm run dev
```

**Set up environment variables**

```bash
PORT=5000
MONGODB_URI=your-mongodb-uri
```

**Backend -**
```bash 
cd server
npm install
nodemon src/index.js 
```
  


## API Endpoints

### Metrics CRUD Operations

- **Add Metric**

  `POST /api/metrics`

  Allows users to add a new metric. Requires details such as page views, bounce rate, and average session duration.

- **Update Metric**

  `PUT /api/metrics/:id`

  Enables admin to update an existing metric's details by its ID.

- **Delete Metric**

  `DELETE /api/metrics/:id`

  Permits admin to delete a metrics by its ID.

- **List Metrics**

  `GET /api/metrics`

  Lists all movies. Supports filtering by genre, releaseYear, or director through query parameters.

## Running Tests

Testing
- Metrics CRUD: Use Postman to test adding, updating, deleting, and listing movies.



