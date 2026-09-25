import React, { useState } from "react";

const useHandleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [submittedForm, setSubmittedForm] = useState({
    name: "",
    email: "",
  });

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: event.target.value });
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) return alert("名前が未入力です");
    setSubmittedForm(form);

    setForm({
      name: "",
      email: "",
    });
  };
  return {
    form,
    submittedForm,
    handleName,
    handleEmail,
    handleSubmit,
  };
};

export default useHandleForm;
