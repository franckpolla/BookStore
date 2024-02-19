import React, { useState } from "react";
import Backbutton from "../component/Backbutton";
import Spinner from "../component/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete("http://localhost:5000/books/" + id);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4"> Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 gap-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3> Are You sure you wanna delete this book ?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          yes , Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
