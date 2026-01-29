
export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : https://taste-byte-backend-6qasj2ida-kaura007s-projects.vercel.app/");
