import React from "react";
import useHandleForm from "../hooks/useHandleForm";

const FormPage = () => {
  const { form, submittedForm, handleName, handleEmail, handleSubmit } = useHandleForm();

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="flex flex-col gap-4 mx-auto my-10">
          <label htmlFor="name" className="flex items-center">
            <span className="w-32">名前</span>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleName}
              className="w-80 rounded border border-gray-400 bg-gray-300 px-3 py-2 text-black"
            />
          </label>

          <label htmlFor="email" className="flex items-center">
            <span className="w-32">メールアドレス</span>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleEmail}
              className="w-80 rounded border border-gray-400 bg-gray-300 px-3 py-2 text-black"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mb-10 bg-blue-500 text-black font-bold w-1/4 mx-auto py-1 rounded-full cursor-pointer hover:opacity-80"
        >
          送信
        </button>
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
