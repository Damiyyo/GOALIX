"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import API from "@/lib/axios";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthTabs from "@/components/auth/AuthTabs";
import GoalixWelcomeModal from "@/components/onboarding/welcomeModal";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [showWelcome, setShowWelcome] =
    useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await API.post(
          "/auth/login",
          formData
        );

      // Save JWT Token
      localStorage.setItem(
        "goalixToken",
        res.data.token
      );

      // Save Logged In User
      localStorage.setItem(
        "goalixUser",
        JSON.stringify(
          res.data.user
        )
      );

      // Check if onboarding has been completed
      const onboardingComplete =
        localStorage.getItem(
          "goalixOnboardingComplete"
        );

      if (
        onboardingComplete ===
        "true"
      ) {
        router.push(
          "/dashboard/login-loading"
        );
      } else {
        setShowWelcome(true);
      }
    } catch (error: any) {
      console.error(error);

      alert(
        error.response?.data
          ?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  // Welcome Modal Close
  const handleWelcomeClose = (
    dontShowAgain: boolean
  ) => {
    if (dontShowAgain) {
      localStorage.setItem(
        "goalixOnboardingComplete",
        "true"
      );
    }

    setShowWelcome(false);

    router.push(
      "/dashboard/loading"
    );
  };

  return (
    <>
      {showWelcome && (
        <GoalixWelcomeModal
          onClose={
            handleWelcomeClose
          }
        />
      )}

      <AuthLayout>
        <AuthTabs />

        <AuthHeader
          title="Welcome Back"
          subtitle="Login to continue accessing football insights and predictions."
        />

        {/* LOGIN FORM */}

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >
          <AuthInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
          />

          {/* Forgot Password */}

          <div className="mt-3 flex justify-end">
            <Link
              href="/forgot-password"
              className="
                text-sm
                text-green-400
                transition-all
                duration-300
                hover:text-green-300
              "
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}

          <div className="pt-2">
            <AuthButton
              text={
                loading
                  ? "Logging in..."
                  : "Login"
              }
            />
          </div>
        </form>

        {/* Bottom Text */}

        <p
          className="
            mt-8
            text-center
            text-sm
            text-zinc-500
          "
        >
          Don&apos;t have an
          account?{" "}
          <Link
            href="/register"
            className="
              font-semibold
              text-zinc-800
              hover:underline
            "
          >
            Create Account
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default LoginPage;