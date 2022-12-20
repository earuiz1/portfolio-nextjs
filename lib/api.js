/**
 * It sends a POST request to the server with the data from the contact form
 * @param data - The data to send to the server.
 */
export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
