import { useEffect, useState } from "react";
import type { Feedback } from "../types/Feedback";
import { onValue, ref, set } from "firebase/database";
import { db } from "../utils/firebase";
import { encodeEmail } from "../utils/util";

const Home = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [foodRating, setFoodRating] = useState<number>(0);
  const [qualityRating, setQualityRating] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [greeting, showGreeting] = useState<boolean>(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const feedbackRef = ref(db, `feedbacks`);
    const unSubscribe = onValue(feedbackRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setFeedbacks(Object.values(data));
      } else {
        setFeedbacks([])
      }
    });
    return () => unSubscribe()
  }, []);

  const submitHandler = () => {
    if (!name.trim()) {
      setError(`Name can't be empty`);
      return;
    }

    if (!email.trim()) {
      setError(`Email can't be empty`);
      return;
    }

    const feedback: Feedback = {
      name,
      email,
      comment,
      foodRating,
      qualityRating,
    };
    saveFeedback(feedback);
  };

  const saveFeedback = async (feedback: Feedback) => {
    try {
      await set(ref(db, `/feedbacks/${encodeEmail(feedback.email)}`), feedback);
      setName("");
      setEmail("");
      setComment("");
      setFoodRating(0);
      setQualityRating(0);
      showGreeting(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something wen wrong while saving feedabck");
      }
    }
  };

  useEffect(() => {
    setError(null);
  }, [name, email]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-evenly items-start p-6 w-full">
        <div className="flex flex-col bg-white md:max-w-lg rounded-2xl p-10 border border-gray-200 shadow-2xl space-y-4">
          <h1 className="font-serif font-semibold text-2xl text-blue-700 text-center  ">
            Feedback : Aromatic Bar
          </h1>
          <label className="flex items-center whitespace-nowrap gap-3 text-gray-700 font-medium">
            <span>Enter name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-1 flex-1  border border-gray-300 rounded-lg shadow-sm 
               focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm text-gray-700 font-normal hover:border-blue-300
               transition"
            />
          </label>

          <label className="flex items-center gap-3 whitespace-nowrap text-gray-700 font-medium">
            Enter email : {}
            <input
              className="border border-gray-300 rounded-lg px-3 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition hover:border-blue-300 text-sm text-gray-700 flex-1 font-normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-5 text-gray-700 font-medium">
            Rate the food : {}
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="foodRating"
                    value={value}
                    checked={foodRating === value}
                    onChange={() => setFoodRating(value)}
                  />
                  <span>{value}</span>
                </label>
              );
            })}
          </label>
          <label className="flex items-center gap-5  text-gray-700 font-medium">
            Rate the quality : {}
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="qualityRating"
                    value={value}
                    checked={qualityRating === value}
                    onChange={() => setQualityRating(value)}
                  />
                  <span>{value}</span>
                </label>
              );
            })}
          </label>
          <label className="flex items-center gap-3 text-gray-700 font-medium">
            Enter comments : {}
            <textarea
              className="border h-24 resize-none border-gray-300 rounded-lg px-3 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition hover:border-blue-300 text-sm text-gray-700 font-normal flex-1"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button
            onClick={submitHandler}
            className="shadow-md hover:to-red-900 w-full cursor-pointer bg-blue-600 rounded pt-1 pb-1 p-1 text-white"
          >
            Submit feedback
          </button>
          {error && (
            <p className="text-red-600 font-semibold font-mono">{error}</p>
          )}
          {greeting && (
            <p className="text-blue-500 font-semibold font-mono">
              Thank you for your valuable{" "}
              <span className="text-pink-500 font-semibold font-mono">
                feedback!
              </span>
            </p>
          )}
        </div>

        <div className="flex flex-col bg-white md:max-w-lg rounded-2xl p-10 border border-gray-200 shadow-2xl space-y-4">
          <h1 className="font-serif font-semibold text-2xl text-blue-700 text-center  ">
            Feedbacks : Aromatic Bar
          </h1>
          <div className="rounded-lg shadow-lg flex flex-col space-y-2">{
            feedbacks.map((feed)=>{
              return (
                <div className="border rounded-sm shadow-sm p-2 border-blue-300">
                <p>{feed.name}</p>
                <p>{feed.email}</p>
                <p>Food rating : {feed.foodRating}/5</p>
                <p>Quality rating : {feed.qualityRating}/5</p>
                <p>{feed.comment}</p>
                </div>
              )
            })}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
