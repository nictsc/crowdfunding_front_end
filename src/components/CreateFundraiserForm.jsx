// useState stores the form values while the user types.
import { useState } from "react";

// useNavigate lets us send the user to another page after creating the fundraiser.
import { Link, useNavigate } from "react-router-dom";

// This helper sends the new fundraiser data to the backend API.
import postFundraiser from "../api/post-fundraiser.js";
import { useAuth } from "../hooks/use-auth.js";
import Footer from "./Footer";

// Shared app-wide styles.
import "../index.css";

function CreateFundraiserForm() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  // Keeping the request body in the variable form.
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    goal: "",
    is_open: true,
  });

  // Tracking UI feedback state if there are errors or submitting data. These are state hooks.
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If the end user is not authenticated, return the error message.
  if (!auth?.token) {
    return (
      <div className="createfundraiser-page">
        <div className="createfundraiser-main">
          <div className="card">
            <p>Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to create a fundraiser.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (event) => {
    const { id, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrorMessage("");
  };

  // Validate request body data is entered before submitting.
  const handleSubmit = async (event) => {
    event.preventDefault();

    const missingFields = [];
    if (!form.title.trim()) missingFields.push("title");
    if (!form.description.trim()) missingFields.push("description");
    if (!form.image.trim()) missingFields.push("image URL");
    if (!form.goal) missingFields.push("goal");

    if (missingFields.length > 0) {
      setErrorMessage(
        `Please fill in the following field(s): ${missingFields.join(", ")}.`,
      );
      return;
    }

    const goalNumber = Number(form.goal);
    if (Number.isNaN(goalNumber) || goalNumber <= 0) {
      setErrorMessage("Goal must be a positive number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const newFundraiser = await postFundraiser({
        title: form.title,
        description: form.description,
        image: form.image.trim(),
        goal: goalNumber,
        is_open: form.is_open,
      });

      if (newFundraiser?.id) {
        navigate(`/fundraiser/${newFundraiser.id}`);
      } else {
        navigate("/fundraisers");
      }
    } catch (err) {
      setErrorMessage(err.message || "Error creating fundraiser.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="createfundraiser-page">
      <div className="createfundraiser-main">
        <form className="createfundraiser-form" onSubmit={handleSubmit}>
          <h2>Create a fundraiser</h2>

          <div className="title-field">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="description-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="5"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="image-field">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              type="url"
              value={form.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="goal-field">
            <label htmlFor="goal">Goal Amount</label>
            <input
              id="goal"
              type="number"
              min="1"
              value={form.goal}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && <p className="text-error">{errorMessage}</p>}

          <button className="submit-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Fundraiser"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateFundraiserForm;