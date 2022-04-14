import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState();
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState("");
  // ? 1. Get collection data(posts)
  //   useEffect(() => {
  //     getDocs(colRef)
  //       .then((snapshot) => {
  //         let posts = [];
  //         snapshot.docs.forEach((doc) => {
  //           posts.push({
  //             id: doc.id,
  //             ...doc.data(),
  //           });
  //         });
  //         setPosts(posts);
  //         // console.log(posts);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  // ! 2. Get document in realtime
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
    const docrefSingle = doc(db, "posts", "vMXVZoAtOscVRm8QBrA5");
    // getDoc(docrefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    onSnapshot(docrefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };

  // createAt
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "This is a new title from update function",
    });
  };
  // ! Firestore queries
  useEffect(() => {
    const colRefQuery = collection(db, "posts");
    const q = query(colRef, where("author", "==", "Dinh"), limit(5));
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
  }, []);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500 "
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500 "
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500 "
            placeholder="Enter your id"
            name="id"
            onChange={(e) => setPostId(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-lg"
          >
            Remove Post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
