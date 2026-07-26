"use client";

import Navbar from "@/components/navigation/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/axios";

type Stats = {
  totalUsers: number;
  todayUsers: number;
  weekUsers: number;
  monthUsers: number;
};

type User = {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
};

const AdminPage = () => {
  const router = useRouter();

  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    todayUsers: 0,
    weekUsers: 0,
    monthUsers: 0,
  });

  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");


  useEffect(() => {
    const storedUser = localStorage.getItem("goalixUser");

    if (!storedUser) {
      router.replace("/");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.role !== "admin") {
      router.replace("/");
      return;
    }

    fetchDashboard();
  }, [router]);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const [statsRes, usersRes] = await Promise.all([
        API.get("/admin/stats"),
        API.get("/admin/users"),
      ]);

      setStats(statsRes.data);
      setUsers(usersRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    const confirmDelete = window.confirm(
      "Delete this user permanently?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/users/${id}`);

      setUsers((prev) =>
        prev.filter((user) => user._id !== id)
      );

      setStats((prev) => ({
        ...prev,
        totalUsers: prev.totalUsers - 1,
      }));
    } catch (err) {
      console.error(err);
      alert("Unable to delete user.");
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.fullName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.username
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[#0b0b0b]
          pt-36
          px-8
          pb-16
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
              Goalix
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-black
              "
            >
              Admin Dashboard
            </h1>

            <p className="mt-4 text-zinc-400">
              Monitor every registered user on Goalix.
            </p>
          </div>

                  {/* STATS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Total Users",
              value: stats.totalUsers,
            },
            {
              label: "Today's Signups",
              value: stats.todayUsers,
            },
            {
              label: "This Week",
              value: stats.weekUsers,
            },
            {
              label: "This Month",
              value: stats.monthUsers,
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-[28px] border border-white/10 bg-[#121212] p-6"
            >
              <p className="text-sm text-zinc-500">
                {card.label}
              </p>

              <h2 className="mt-4 text-5xl font-black text-green-400">
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* SEARCH */}

        <div className="mt-14">
          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search users..."
            className="w-full rounded-2xl border border-white/10 bg-[#121212] px-6 py-4 outline-none placeholder:text-zinc-500"
          />
        </div>

        {/* USERS */}

        <div className="mt-8">
          {loading ? (
            <div className="py-12 text-center text-zinc-400">
              Loading users...
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div
                  key={user._id}
                  className="rounded-3xl border border-white/10 bg-[#121212] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">
                        {user.fullName}
                      </h2>

                      <p className="mt-2 text-zinc-400">
                        @{user.username}
                      </p>

                      <p className="mt-2 text-zinc-500">
                        {user.email}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-zinc-500">
                        {user.role}
                      </p>

                      <p className="mt-2 text-sm text-zinc-500">
                        {new Date(
                          user.createdAt
                        ).toLocaleDateString()}
                      </p>

                      <button
                        onClick={() =>
                          deleteUser(user._id)
                        }
                        className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
                      >
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {!filteredUsers.length && (
                <div className="rounded-3xl border border-white/10 bg-[#121212] py-12 text-center text-zinc-500">
                  No users found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
    </>
  );
};

export default AdminPage;