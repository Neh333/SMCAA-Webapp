import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  topic: "general question",
  message: ""
};

const TOPICS = [
  { value: "general question", label: "General Question" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "volunteer", label: "Volunteer" },
  { value: "resource partnership", label: "Resource ParStnership" },
  { value: "community outreach", label: "Community Outreach" }
];

// Web3Forms access keys are public by design (they only permit submitting to your
// form), so it is safe to embed this in the client bundle.
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const closeFeedback = () => setFeedback((prev) => ({ ...prev, open: false }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ ...form, access_key: WEB3FORMS_ACCESS_KEY })
      }).then((res) => res.json());

      if (res.success) {
        setFeedback({ open: true, severity: "success", message: "Thanks! Your message has been sent." });
        setForm(INITIAL_FORM);
      } else {
        setFeedback({ open: true, severity: "error", message: res.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setFeedback({ open: true, severity: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{ maxWidth: 480, mx: "auto", mt: 4, textAlign: "left" }}
    >
      <Stack spacing={2.5}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          select
          label="How can we help?"
          name="topic"
          value={form.topic}
          onChange={handleChange}
          fullWidth
        >
          {TOPICS.map((topic) => (
            <MenuItem key={topic.value} value={topic.value}>
              {topic.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          minRows={4}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={submitting}
          sx={{ backgroundColor: "#6a1b9a", "&:hover": { backgroundColor: "#571680" } }}
        >
          {submitting ? "Sending…" : "Submit"}
        </Button>
      </Stack>

      <Snackbar
        open={feedback.open}
        autoHideDuration={5000}
        onClose={closeFeedback}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={feedback.severity} onClose={closeFeedback} variant="filled">
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactForm;