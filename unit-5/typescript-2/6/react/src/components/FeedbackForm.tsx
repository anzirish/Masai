import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FeedbackFormData {
  name: string;
  email: string;
  rating: number | "";
  feedback: string;
}

interface FeedbackFormProps {
  initialValues?: FeedbackFormData;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ initialValues }) => {
  const [formData, setFormData] = useState<FeedbackFormData>(
    initialValues || {
      name: "",
      email: "",
      rating: "",
      feedback: "",
    }
  );

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) || "" : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      formData.rating === "" ||
      !formData.feedback
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Customer Feedback Form</h2>

          <div style={{ marginBottom: "1rem" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Rating (1-5):</label>
            <input
              type="number"
              name="rating"
              min={1}
              max={5}
              value={formData.rating}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows={4}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>Your response has been recorded.</p>
          <button onClick={() => setSubmitted(false)}>Submit another</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
