"use client";

import { useState } from "react";

interface FeedbackDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function FeedbackDrawer({
  open,
  onClose,
}: FeedbackDrawerProps) {
  const [category, setCategory] =
    useState("Bug Report");

  const [subject, setSubject] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [sending, setSending] =
    useState(false);

  const [sent, setSent] =
    useState(false);

    const handleSubmit = async () => {
        if (!subject.trim() || !message.trim())
          return;
      
        setSending(true);
      
        try {
          const storedUser =
            localStorage.getItem(
              "goalixUser"
            );
      
          const user = storedUser
            ? JSON.parse(storedUser)
            : null;

            console.log(
                "API URL:",
                process.env.NEXT_PUBLIC_API_URL
              );
      
          const response =
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/feedback`,
              {
                method: "POST",
      
                headers: {
                  "Content-Type":
                    "application/json",
                },
      
                body: JSON.stringify({
                  userId:
                    user?._id || "",
      
                  fullName:
                    user?.fullName ||
                    "",
      
                  email:
                    user?.email || "",
      
                  category,
      
                  subject,
      
                  message,
                }),
              }
            );
      
          const data =
            await response.json();
      
          if (!response.ok) {
            throw new Error(
              data.message ||
                "Unable to send feedback."
            );
          }
      
          setSent(true);
      
          setTimeout(() => {
            setSent(false);
      
            setSubject("");
      
            setMessage("");
      
            setCategory(
              "Bug Report"
            );
      
            onClose();
          }, 2000);
        } catch (error) {
          console.error(error);
      
          alert(
            "Unable to submit feedback. Please try again."
          );
        } finally {
          setSending(false);
        }
      };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-50

          bg-black/50
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed

          right-0
          top-0

          z-[60]

          flex
          h-screen
          w-full
          max-w-md
          flex-col

          border-l
          border-white/10

          bg-[#111111]

          transition-transform
          duration-500

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/10

            p-6
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-black
              "
            >
              Feedback
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-zinc-400
              "
            >
              Help us improve Goalix.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              text-2xl
              text-zinc-400
            "
          >
            ×
          </button>
        </div>

        {!sent ? (
          <div
            className="
              flex-1
              overflow-y-auto

              space-y-6

              p-6
            "
          >
            {/* Category */}

            <div>
              <label
                className="
                  mb-2
                  block

                  text-sm
                  font-semibold
                "
              >
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-xl

                  border
                  border-white/10

                  bg-[#1a1a1a]

                  p-3

                  text-white
                "
              >
                <option>
                  Bug Report
                </option>

                <option>
                  Feature Request
                </option>

                <option>
                  Prediction Issue
                </option>

                <option>
                  Match Data Issue
                </option>

                <option>
                  UI / Design
                </option>

                <option>
                  General Feedback
                </option>
              </select>
            </div>

            {/* Subject */}

            <div>
              <label
                className="
                  mb-2
                  block

                  text-sm
                  font-semibold
                "
              >
                Subject
              </label>

              <input
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
                placeholder="Brief summary..."
                className="
                  w-full

                  rounded-xl

                  border
                  border-white/10

                  bg-[#1a1a1a]

                  p-3

                  text-white
                "
              />
            </div>

            {/* Message */}

            <div>
              <label
                className="
                  mb-2
                  block

                  text-sm
                  font-semibold
                "
              >
                Description
              </label>

              <textarea
                rows={6}
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                placeholder="Describe the issue..."
                className="
                  w-full

                  resize-none

                  rounded-xl

                  border
                  border-white/10

                  bg-[#1a1a1a]

                  p-3

                  text-white
                "
              />
            </div>

            {/* Upload */}

            <div>
              <label
                className="
                  mb-2
                  block

                  text-sm
                  font-semibold
                "
              >
                Screenshot
              </label>

              <input
                type="file"
                className="
                  w-full
                  text-sm
                "
              />
            </div>
          </div>
        ) : (
          <div
            className="
              flex
              flex-1
              flex-col

              items-center
              justify-center

              p-10

              text-center
            "
          >
            <div className="text-6xl">
              ✅
            </div>

            <h2
              className="
                mt-6

                text-3xl
                font-black
              "
            >
              Thank You!
            </h2>

            <p
              className="
                mt-3

                text-zinc-400
              "
            >
              Your feedback has
              been received.
            </p>
          </div>
        )}

        {!sent && (
          <div
            className="
              border-t
              border-white/10

              p-6
            "
          >
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="
                w-full

                rounded-2xl

                bg-green-500

                py-4

                font-black

                text-black

                transition-all

                hover:scale-[1.02]

                disabled:opacity-60
              "
            >
              {sending
                ? "Sending..."
                : "Send Feedback"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}