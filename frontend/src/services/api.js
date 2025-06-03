const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_URL}/projects`);
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function sendContactMessage(form) {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      throw new Error("Failed to send message");
    }
    return await res.json();
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
}
