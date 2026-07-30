"use client";

import { useEffect, useState } from "react";

import FeedbackFilters from "./FeedbackFilter";
import FeedbackList from "./FeedbackList";
import FeedbackDetails from "./FeedbackDetails";

export interface Feedback {
  _id: string;

  fullName: string;

  email: string;

  category: string;

  subject: string;

  message: string;

  status: "new" | "resolved";

  screenshot?: string;

  createdAt: string;
}

export default function FeedbackAdminPage() {
  const [feedback, setFeedback] =
    useState<Feedback[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedFeedback, setSelectedFeedback] =
    useState<Feedback | null>(null);

  const [activeFilter, setActiveFilter] =
    useState<"all" | "new" | "resolved">(
      "all"
    );

  const API =
    process.env.NEXT_PUBLIC_API_URL;

  /* -------------------------------- */
  /* FETCH FEEDBACK                   */
  /* -------------------------------- */

  const fetchFeedback =
    async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API}/feedback`
        );

        const data =
          await response.json();

        if (data.success) {
          setFeedback(data.feedback);

          if (
            data.feedback.length > 0 &&
            !selectedFeedback
          ) {
            setSelectedFeedback(
              data.feedback[0]
            );
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  /* -------------------------------- */
  /* UPDATE STATUS                    */
  /* -------------------------------- */

  const updateStatus =
    async (
      id: string,
      status:
        | "new"
        | "resolved"
    ) => {
      try {
        await fetch(
          `${API}/feedback/${id}/status`,
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              status,
            }),
          }
        );

        fetchFeedback();
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const filteredFeedback =
    activeFilter === "all"
      ? feedback
      : feedback.filter(
          (item) =>
            item.status ===
            activeFilter
        );

  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        px-6
        py-10

        text-white
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div>
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-green-400
            "
          >
            Goalix Admin
          </p>

          <h1
            className="
              mt-3

              text-5xl
              font-black
              tracking-tight
            "
          >
            Feedback Center
          </h1>

          <p
            className="
              mt-3

              max-w-2xl

              text-zinc-400
            "
          >
            View user reports,
            suggestions and feature
            requests.
          </p>
        </div>

        {/* FILTER */}

        <div className="mt-10">
          <FeedbackFilters
            activeFilter={
              activeFilter
            }
            onChange={
              setActiveFilter
            }
          />
        </div>

        {/* CONTENT */}

        <div
          className="
            mt-8

            grid
            gap-6

            lg:grid-cols-[380px_1fr]
          "
        >
          <FeedbackList
            loading={loading}
            feedback={
              filteredFeedback
            }
            selectedFeedback={
              selectedFeedback
            }
            onSelect={
              setSelectedFeedback
            }
          />

          {/* CONTENT */}

<div
  className="
    mt-8

    grid
    gap-6

    lg:grid-cols-[380px_1fr]
  "
>
  <FeedbackList
    loading={loading}
    feedback={filteredFeedback}
    selectedFeedback={selectedFeedback}
    onSelect={setSelectedFeedback}
  />

<FeedbackDetails
  feedback={selectedFeedback}
  onResolve={(id) =>
    updateStatus(id, "resolved")
  }
  onDelete={async (id) => {
    console.log("Deleting feedback:", id);

    try {
      const response = await fetch(
        `${API}/feedback/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log(data);

      await fetchFeedback();

      setSelectedFeedback(null);
    } catch (error) {
      console.error(error);
    }
  }}
/>
</div>
        </div>
      </div>
    </main>
  );
}