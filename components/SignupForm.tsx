"use client";

import { useState } from "react";

export function SignupForm({ planId }: { planId: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, plan_id: planId }),
    });
    setState(res.ok ? "idle" : "error");
  }

  return (
    <form className="signup-form" onSubmit={submit}>
      <label htmlFor="signup-email">Work email</label>
      <input
        id="signup-email"
        type="email"
        required
        placeholder="you@yourstore.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="button button-primary signup-form__submit" type="submit" disabled={state === "loading"}>
        Start 14-day free trial
      </button>
      {state === "error" && (
        <p className="signup-form__error">Something went wrong. Try again?</p>
      )}
    </form>
  );
}
