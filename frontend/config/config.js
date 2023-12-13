
let backendUrl;
if (process.env.NODE_ENV === "production") {
  backendUrl = "https://restaurant-4mn6.onrender.com";
} else {
  backendUrl = "http://localhost:3010";
}
export default backendUrl;
