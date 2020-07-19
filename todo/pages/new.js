import { useState, useEffect } from "react";
import {useRouter} from 'next/router';

function newNote() {
  const [form, setForm] = useState({ title: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const router = useRouter();

  const createNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }

    return err;
  };

  return (
    <div className="form-container">
      <h1>Create Note</h1>
      <div>
        {isSubmitting ? (
          <h2>Loading ...</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              error={
                errors.title
                  ? { content: "Please enter a title", pointing: "below" }
                  : null
              }
              label="Title"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
            <br />
            <br />

            <textarea
              label="Descriprtion"
              placeholder="Description"
              name="description"
              error={
                errors.description
                  ? { content: "Please enter a description", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <br />

            <button type="submit">Create</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default newNote;
