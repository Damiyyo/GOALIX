"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import API from "@/lib/axios";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthTabs from "@/components/auth/AuthTabs";

import RegisterSuccessModal from "@/components/auth/registerSuccessModal";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [
    showSuccessModal,
    setShowSuccessModal,
  ] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post(
        "/auth/register",
        formData
      );

      setShowSuccessModal(true);
    } catch (error: any) {
      console.error(error);

      alert(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <RegisterSuccessModal
        open={showSuccessModal}
        onFinish={() =>
          router.push("/login")
        }
      />

      <AuthLayout>
        <AuthTabs />

        <AuthHeader
          title="Create Account"
          subtitle="Join Goalix to access football insights, live scores and predictions."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <AuthInput
            label="Username"
            placeholder="Choose a username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="pt-2">
            <AuthButton
              text={
                loading
                  ? "Creating Account..."
                  : "Create Account"
              }
            />
          </div>
        </form>

        <p
          className="
            mt-8
            text-center
            text-sm
            text-zinc-500
          "
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="
              font-semibold
              text-zinc-800
              hover:underline
            "
          >
            Login
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;