import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Backbutton from "../component/Backbutton";
import Spinner from "../component/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/books/${id}`);
      if (response.status === 200) {
        setBook(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <Backbutton />

      <h1 className=" text-3xl my-4"> Sow book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span> {book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span> {book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span> {book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span> {book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span> {new Date(book.CreatedAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span> {new Date(book.UpdatedAt).toString()} </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
