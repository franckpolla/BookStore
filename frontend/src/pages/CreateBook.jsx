import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../component/Spinner";
import Backbutton from "../component/Backbutton";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublisYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = async () => {
    const data = {
      title: title,
      author,
      publishYear: publishYear,
    };
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/books", data);
      setLoading(false);
      alert("Book created successfully !");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4"> Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col  border-r-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title </label>
            <input
              type="text"
              placeholder="enter Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author </label>
            <input
              type="text"
              placeholder="enter Title"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">PublishYear </label>
            <input
              type="text"
              placeholder="enter Title"
              required
              value={publishYear}
              onChange={(e) => setPublisYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button onClick={handleSaveBook} className="bg-blue-500 m-8">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
