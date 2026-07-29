"use client";

import { useState } from "react";
import { Ticket } from "@/data/odds/tickets";

interface OddsCardProps {
  ticket: Ticket;
}

const confidenceColors = (confidence: number) => {
  if (confidence >= 90) return "text-green-400";
  if (confidence >= 80) return "text-yellow-400";
  return "text-red-400";
};

const badgeColors = (title: string) => {
  switch (title) {
    case "Safe Ticket":
      return "bg-green-500/20 text-green-400";

    case "Medium Ticket":
      return "bg-yellow-500/20 text-yellow-400";

    case "Premium Ticket":
      return "bg-cyan-500/20 text-cyan-400";

    case "High Odds":
      return "bg-orange-500/20 text-orange-400";

    case "Super Acca":
      return "bg-purple-500/20 text-purple-400";

    case "VIP Ticket":
      return "bg-pink-500/20 text-pink-400";

    case "Mega Odds":
      return "bg-indigo-500/20 text-indigo-400";

    default:
      return "bg-red-500/20 text-red-400";
  }
};

const OddsCard = ({ ticket }: OddsCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(ticket.code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="
        rounded-2xl
  
        border border-white/10
  
        bg-[#111111]
  
        p-4
  
        transition-all
        duration-300
  
        hover:border-green-500/30
      "
    >
      {/* HEADER */}
  
      <div className="flex items-center justify-between">
        <span
          className={`
            rounded-full
            px-2.5
            py-1
  
            text-[10px]
            font-bold
  
            ${badgeColors(ticket.title)}
          `}
        >
          {ticket.title}
        </span>
  
        <span
          className={`
            text-sm
            font-black
            ${confidenceColors(ticket.confidence)}
          `}
        >
          {ticket.confidence}%
        </span>
      </div>
  
      {/* ODDS */}
  
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-zinc-500">
            Odds
          </p>
  
          <h2 className="text-2xl font-black">
            {ticket.odds}
          </h2>
        </div>
  
        <div className="text-right">
          <p className="text-xs text-zinc-500">
            Booking Code
          </p>
  
          <p
            className="
              mt-1
  
              font-bold
  
              text-green-400
            "
          >
            {ticket.code}
          </p>
        </div>
      </div>
  
      {/* BUTTON */}
  
      <button
        onClick={copyCode}
        className="
          mt-4
  
          w-full
  
          rounded-xl
  
          bg-white
  
          py-2.5
  
          text-sm
          font-black
  
          text-black
        "
      >
        {copied
          ? "Copied ✓"
          : "Copy Code"}
      </button>
    </div>
  );
};

export default OddsCard;