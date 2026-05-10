import { useEffect, useState } from "react";
import AnimatedCard from "../assets/components/AnimatedCard";
import { FaStar } from "react-icons/fa";

export default function Feedback() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const [feedbacks, setFeedbacks] = useState([]);

  // ================= LOAD FROM LOCAL STORAGE =================
  useEffect(() => {
    const stored = localStorage.getItem("shield_feedbacks");

    if (stored) {
      setFeedbacks(JSON.parse(stored));
    } else {
      const defaultFeedbacks = [
        {
          id: 1,
          name: "Sahrish",
          message: "Amazing protection system UI and smooth experience.",
          rating: 5,
        },
        {
          id: 2,
          name: "Ali",
          message: "Very modern dashboard and strong AI protection features.",
          rating: 4,
        },
      ];

      setFeedbacks(defaultFeedbacks);

      localStorage.setItem(
        "shield_feedbacks",
        JSON.stringify(defaultFeedbacks)
      );
    }
  }, []);

  // ================= SUBMIT FEEDBACK =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) return;

    const newFeedback = {
      id: Date.now(),
      name,
      message,
      rating,
    };

    const updated = [newFeedback, ...feedbacks];

    setFeedbacks(updated);

    // SAVE
    localStorage.setItem(
      "shield_feedbacks",
      JSON.stringify(updated)
    );

    // RESET
    setName("");
    setMessage("");
    setRating(5);
  };

  return (
    <section className="min-h-screen bg-[#0B0B1E] text-white px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-14">
        User Feedback
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* ================= LEFT SIDE FEEDBACK CARDS ================= */}

        <div className="grid md:grid-cols-2 gap-6">

          {feedbacks.map((item) => (

            <AnimatedCard key={item.id}>

              <div className="p-6 h-full">

                {/* NAME */}
                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                {/* STARS */}
                <div className="flex gap-1 mb-3">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <FaStar
                      key={star}
                      className={`text-lg ${
                        star <= item.rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />

                  ))}

                </div>

                {/* MESSAGE */}
                <p className="text-gray-400 leading-relaxed">
                  {item.message}
                </p>

              </div>

            </AnimatedCard>

          ))}

        </div>

        {/* ================= RIGHT SIDE FORM ================= */}

        <AnimatedCard>

          <div className="p-8">

            <h2 className="text-2xl font-bold mb-6">
              Share Your Feedback
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  bg-[#121232]
                  border border-purple-500/20
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-purple-500
                "
              />

              {/* MESSAGE */}
              <textarea
                placeholder="Write your feedback..."
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  w-full
                  bg-[#121232]
                  border border-purple-500/20
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-purple-500
                "
              />

              {/* STARS */}
              <div>

                <p className="mb-3 text-gray-300">
                  Your Rating
                </p>

                <div className="flex gap-2">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                    >

                      <FaStar
                        className={`text-2xl transition ${
                          star <= rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />

                    </button>

                  ))}

                </div>

              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600
                  hover:opacity-90
                  transition
                  hover:-translate-y-1
                  duration-300
                "
              >
                Submit Feedback
              </button>

            </form>

          </div>

        </AnimatedCard>

      </div>

    </section>
  );
}