import React, { useState } from "react";
import { MessageSquare, Star, Send } from "lucide-react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Ayesha",
      message:
        "Amazing protection system. The dashboard UI feels modern and smooth.",
      rating: 5,
      date: "2 hours ago",
    },
    {
      id: 2,
      name: "Ali",
      message:
        "Very clean interface and easy image protection workflow.",
      rating: 4,
      date: "5 hours ago",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) return;

    const newFeedback = {
      id: Date.now(),
      name,
      message,
      rating,
      date: "Just now",
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setName("");
    setMessage("");
    setRating(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1f] to-[#0a0d18] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">User Feedback</h1>
          <p className="text-gray-400 text-sm">
            Share your experience with ShieldAI protection system.
          </p>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/30">
          <MessageSquare />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <div className="lg:col-span-1 bg-[#0f1429] border border-gray-800 rounded-2xl p-5 h-fit sticky top-6 order-1 lg:order-2">
          <h2 className="text-lg font-medium mb-5">Leave Feedback</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#11182f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500 text-sm"
              />
            </div>

            {/* Feedback */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Your Feedback
              </label>
              <textarea
                rows="5"
                placeholder="Write your feedback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#11182f] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500 text-sm resize-none"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="text-sm text-gray-400 block mb-3">
                Rating
              </label>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`p-2 rounded-lg border transition ${
                      rating >= star
                        ? "bg-purple-600 border-purple-600"
                        : "border-gray-700 bg-[#11182f]"
                    }`}
                  >
                    <Star size={16} fill={rating >= star ? "white" : "none"} />
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 transition flex items-center justify-center gap-2 font-medium"
            >
              <Send size={16} /> Submit Feedback
            </button>
          </form>
        </div>

        {/* Feedback Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-5 order-2 lg:order-1">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-[#0f1429] border border-gray-800 rounded-2xl p-5 hover:border-purple-500/40 transition"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center text-lg font-semibold">
                    {feedback.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-medium">{feedback.name}</h3>
                    <p className="text-xs text-gray-400">{feedback.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="white" />
                  ))}
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {feedback.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
