import React from "react";
import useHandleForm from "../hooks/useHandleForm";

const FormPage = () => {
  const { form, submittedForm, handleName, handleEmail, handleSubmit } = useHandleForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          名前:
          <input id="name" type="text" value={form.name} onChange={handleName} />
        </label>
        <label htmlFor="email">
          メールアドレス:
          <input id="email" type="email" value={form.email} onChange={handleEmail} />
        </label>

        <button type="submit">送信</button>
      </form>
      <div>
        <h3>Result Form</h3>
        <p>名前: {submittedForm.name}</p>
        <p>メールアドレス: {submittedForm.email}</p>
      </div>
    </>
  );
};

export default FormPage;
