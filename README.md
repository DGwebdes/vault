
# Dielan's Vault

Dielan's Vault is a personal blog application designed to document and share insights, adventures, and knowledge in a well-organized and visually appealing format. The project leverages modern web technologies, including React for the frontend, Node.js for the backend, and Contentful as the Content Management System (CMS). The application is hosted on Render and GitHub Pages for seamless accessibility.

---

## **Features**

### **Frontend**

- Built with **React**.
- Utilizes **React Router** for seamless page navigation.
- Dynamic components for fetching and displaying blog posts.
- Rich text content rendering using **@contentful/rich-text-react-renderer**.

### **Backend**

- Powered by **Node.js** with the **Express** framework.
- Interfaces with Contentful’s API to retrieve blog posts.
- Exposes RESTful API endpoints for frontend data requests.

### **CMS**

- Blog content is managed using **Contentful**.
- Supports fields for title, post image, content, author, and publish date.

### **Hosting**

- **Frontend**: Deployed on **GitHub Pages**.
- **Backend**: Hosted on **Render** for scalable server management.

---

## **Technologies Used**

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.
- **@contentful/rich-text-react-renderer**: For rendering rich text content.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **Contentful JavaScript SDK**: For integrating with the Contentful CMS.
- **Cors**: Middleware for handling cross-origin resource sharing.
- **Dotenv**: For managing environment variables.

### Hosting

- **GitHub Pages**: Static file hosting for the frontend.
- **Render**: Hosting for the Node.js server.

---

## **Project Structure**

### Frontend Config

- **App.jsx**: Configures the routes and layout of the application.
- **Components**:
  - `Header`: Provides site-wide navigation.
  - `Homepage`: Displays a list of blog posts with brief details.
  - `Post`: Shows detailed content for a specific post.
- **Pages**:
  - `Homepage`: The main landing page displaying all blog posts.
- **Styles**: Includes custom CSS for styling the components.

### Backend Config

- **Express Server**:
  - Connects to the Contentful API.
  - Exposes endpoints:
    - `/api/posts`: Retrieves a list of all blog posts.
    - `/api/posts/:postId`: Retrieves details of a specific post by ID.
- **Environment Variables**: Uses a `.env` file to store sensitive credentials such as the Contentful API keys and space ID.

### CMS

- Managed on Contentful.
- Blog posts are structured with fields for title, image, content (rich text), author, and publish date.

---

## **Setup Instructions**

### Prerequisites

- Node.js and npm installed on your system.
- Contentful account with a space set up.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend Setup

1. Navigate to the backend directory (if applicable):

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   SPACE=your_contentful_space_id
   ACCESS_TOKEN=your_contentful_access_token
   PORT=3000 # or any preferred port
   ```

4. Start the server:

   ```bash
   node server.js
   ```

   The backend will run on `http://localhost:3000`.

### 3. Frontend Setup

1. Navigate to the frontend directory (if applicable):

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### 4. Deployment

- **Backend**:
  1. Push the backend code to a GitHub repository.
  2. Deploy the server to Render by connecting the repository and configuring the environment variables.
- **Frontend**:
  1. Build the React application:

     ```bash
     npm run build
     ```

  2. Deploy the `build` folder to GitHub Pages or your preferred static hosting provider.

---

## **API Endpoints**

### `GET /api/posts`

- **Description**: Fetches all blog posts.
- **Response**:

  ```json
  [
    {
      "sys": { "id": "postId" },
      "fields": {
        "title": "Post Title",
        "postImage": { "fields": { "file": { "url": "image_url" } } },
        "publishDate": "YYYY-MM-DD",
        ...
      }
    }
  ]
  ```

### `GET /api/posts/:postId`

- **Description**: Fetches detailed data for a specific post by ID.
- **Response**:

  ```json
  {
    "title": "Post Title",
    "postImage": "image_url",
    "content": "rich_text_content",
    "author": "Author Name",
    "publishDate": "YYYY-MM-DD"
  }
  ```

---

## **Future Enhancements**

- Add user authentication for creating and managing posts.
- Implement a search feature for easier navigation.
- Enable commenting functionality for posts.
- Enhance responsiveness and mobile support.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Description of changes"
   ```

4. Push to your branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request on GitHub.

---

## **License**

This project is open-source
