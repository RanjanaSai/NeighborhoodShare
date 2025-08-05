Tech Stack
 Frontend
React 18 with Vite

React Router DOM for navigation

Lucide Icons, TailwindCSS, and shadcn/ui for UI

Sonner for toast notifications

Axios for API requests


Backend
Node.js with Express

Body-Parser and CORS

In-memory data storage (no DB — temporary storage)

Setup Instructions
 Prerequisites
Node.js (v18+ recommended)

npm or yarn

1. Clone the Repo


git clone https://github.com/Ranjanasai/NeighborShare.git
cd NeighborShare

2.Install Dependencies
# Install frontend packages
cd frontend
npm install

# Install backend packages
cd ../backend
npm install

3. Run the App

# Start backend
cd backend
node server.js

# Start frontend (in a new terminal)
cd ../frontend
npm run dev
Frontend: http://localhost:5173

Backend: http://localhost:5000

API Documentation
Base URL:

http://localhost:5000/api

Endpoints:
GET /api/items
Returns the full list of available items.

GET /api/items/:id
Returns a single item by ID.

Response:

json
Copy
Edit
{
  "id": "itm001",
  "name": "Cordless Drill",
  "description": "...",
  "category": "Tools",
  "owner": "Alice Johnson",
  "condition": "Good",
  "available": true,
  "image": "...",
  "borrowedBy": null
}
POST /api/add-item
Adds a new item.

Body (JSON):

{
  "id": "itm123",
  "name": "Book",
  "description": "Hardcover fiction novel",
  "category": "Books",
  "owner": "Your Name",
  "condition": "Like New",
  "image": "https://example.com/image.jpg",
  "available": true,
  "borrowedBy": null
}
 
Features
Add new items with full details

View all items on the homepage

Click on an item to see its full details

“Request to Borrow” button (mocked for now)

Dynamic availability status

Responsive, clean UI using TailwindCSS and shadcn

# Known Issues
Issue	Description
 .In-memory storage	Items are lost when the server restarts. No persistent DB yet.
 .No authentication	Anyone can add/request items; no user system implemented yet.
 .Mocked borrowing	The “Request to Borrow” button does not update the backend (mock only).
. Location support	Optional location field is present, but not used in maps or filters.

# To Do 
 Replace mock request button with real borrow logic

 Add persistent storage (MongoDB etc.)

 Implement user login (Auth)

 Add "My Items" and "My Requests" views

 Deploy on Vercel/Render

