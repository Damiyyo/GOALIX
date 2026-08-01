"use client";

import {
    useEffect,
    useRef,
    useState,
  } from "react";

import API from "@/lib/axios";

const AdminReelsPage = () => {
  const [video, setVideo] =
    useState<File | null>(null);

  const [title, setTitle] =
    useState("");

  const [caption, setCaption] =
    useState("");

  const [category, setCategory] =
    useState("General");

  const [loading, setLoading] =
    useState(false);

  const [reels, setReels] =
    useState<any[]>([]);

    const [previewUrl, setPreviewUrl] =
  useState("");

  /* ====================== */
  /* GET ALL REELS */
  /* ====================== */

  const fetchReels =
    async () => {
      try {
        const res =
          await API.get(
            "/reels"
          );

        setReels(
          res.data
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

  useEffect(() => {
    fetchReels();
  }, []);

  /* ====================== */
  /* UPLOAD */
  /* ====================== */

  const uploadReel =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      if (!video) {
        return alert(
          "Please select a video."
        );
      }

      try {
        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "video",
          video
        );

        formData.append(
          "title",
          title
        );

        formData.append(
          "caption",
          caption
        );

        formData.append(
          "category",
          category
        );

        await API.post(
          "/reels/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        alert(
          "Reel uploaded successfully."
        );

        setTitle("");

        setCaption("");

        setCategory(
          "General"
        );

        setVideo(null);

        fetchReels();
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Upload failed."
        );
      } finally {
        setLoading(false);
      }
    };

    const deleteReel = async (
        id: string
      ) => {
        const confirmDelete =
          window.confirm(
            "Delete this reel permanently?"
          );
      
        if (!confirmDelete) return;
      
        try {
          await API.delete(
            `/reels/${id}`
          );
      
          fetchReels();
        } catch (error) {
          console.error(error);
      
          alert(
            "Unable to delete reel."
          );
        }
      };


  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        px-8
        py-10

        text-white
      "
    >
      <div className="mx-auto max-w-5xl">
        <h1
          className="
            text-5xl
            font-black
          "
        >
          Upload Reel
        </h1>

        <p
          className="
            mt-3

            text-zinc-400
          "
        >
          Upload football reels
          for Goalix users.
        </p>

        <form
          onSubmit={
            uploadReel
          }
          className="
            mt-10

            space-y-6
          "
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
              w-full

              rounded-2xl

              bg-[#151515]

              p-4
            "
          />

          <textarea
            placeholder="Caption"
            value={caption}
            onChange={(e) =>
              setCaption(
                e.target.value
              )
            }
            className="
              h-36
              w-full

              rounded-2xl

              bg-[#151515]

              p-4
            "
          />

          <select
            value={
              category
            }
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="
              w-full

              rounded-2xl

              bg-[#151515]

              p-4
            "
          >
            <option>
              General
            </option>

            <option>
              Goals
            </option>

            <option>
              Highlights
            </option>

            <option>
              Skills
            </option>

            <option>
              Transfers
            </option>

            <option>
              Admin
            </option>
          </select>

          
          <div
  className="
    rounded-3xl

    border-2
    border-dashed
    border-white/10

    bg-[#151515]

    p-10

    text-center
  "
>
  <input
    type="file"
    accept="video/*"
    onChange={(e) => {
      const file =
        e.target.files?.[0];

      if (!file) return;

      setVideo(file);

      setPreviewUrl(
        URL.createObjectURL(file)
      );
    }}
  />

  <p
    className="
      mt-4

      text-zinc-400
    "
  >
    Upload MP4, MOV or WebM
  </p>
</div>
{previewUrl && (
  <div className="mt-8">
    <video
      src={previewUrl}
      controls
      className="
        h-[450px]
        w-full

        rounded-3xl

        object-cover
      "
    />

    <p
      className="
        mt-3

        text-sm

        text-green-400
      "
    >
      Preview
    </p>
  </div>
)}

          <button
            type="submit"
            className="
              rounded-2xl

              bg-green-500

              px-8
              py-4

              font-black
            "
          >
            {loading
              ? "Uploading..."
              : "Upload Reel"}
          </button>
        </form>


        {/* ====================== */}
{/* ALL REELS */}
{/* ====================== */}

<div className="mt-16">
  <h2
    className="
      text-4xl
      font-black
    "
  >
    Uploaded Reels
  </h2>

  <p
    className="
      mt-2
      text-zinc-400
    "
  >
    Manage every uploaded football reel.
  </p>

  <div
    className="
      mt-8

      grid
      gap-8

      md:grid-cols-2
    "
  >
    {reels.map((reel) => (
      <div
        key={reel._id}
        className="
          overflow-hidden

          rounded-[28px]

          border
          border-white/10

          bg-[#151515]
        "
      >
        {/* VIDEO */}

        <video
          src={reel.videoUrl}
          controls
          className="
            h-72
            w-full

            object-cover
          "
        />

        {/* CONTENT */}

        <div className="p-6">
          <h3
            className="
              text-2xl
              font-black
            "
          >
            {reel.title}
          </h3>

          <p
            className="
              mt-3

              text-zinc-400
            "
          >
            {reel.caption}
          </p>

          <div
            className="
              mt-5

              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                rounded-full

                bg-green-500/10

                px-4
                py-2

                text-sm

                text-green-400
              "
            >
              {reel.category}
            </span>

            <button
              onClick={() =>
                deleteReel(
                  reel._id
                )
              }
              className="
                rounded-xl

                bg-red-500

                px-5
                py-3

                font-bold
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}

    {!reels.length && (
      <div
        className="
          rounded-[28px]

          border
          border-white/10

          bg-[#151515]

          py-20

          text-center

          text-zinc-500
        "
      >
        No reels uploaded yet.
      </div>
    )}
  </div>
</div>
      </div>
    </main>
  );
};

export default AdminReelsPage;