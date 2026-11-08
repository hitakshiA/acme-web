"use client";

import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import type { PlanId } from "../lib/plans";

export type SignupFormHandle = { handleContinue: () => void };

// mobile safari only scrolls a focused element clear of the keyboard when focus()
// runs inside the tap handler itself, so on iOS we can't wait for the effect
const isIOS = typeof navigator !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent);

type Props = { planId: PlanId; interval: "month" | "year"; ref?: Ref<SignupFormHandle> };

export function SignupForm({ planId, interval, ref }: Props) {
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const [step, setStep] = useState<"email" | "store">("email");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({ handleContinue }));

  useEffect(() => {
    if (step === "store" && !isIOS) submitRef.current?.focus();
  }, [step]);

  function handleContinue() {
    if (step === "store") return submitRef.current?.focus();
    if (!emailRef.current?.reportValidity()) return;
    setStep("store");
    if (isIOS) {
      // see the isIOS note up top
      submitRef.current!.focus();
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, store_name: storeName, plan_id: planId, interval }),
    });
    setState(res.ok ? "idle" : "error");
  }

  return (
    <form id="signup" className="signup-form" onSubmit={submit}>
      {step === "email" ? (
        <>
          <label htmlFor="signup-email">Work email</label>
          <input
            ref={emailRef}
            id="signup-email"
            type="email"
            required
            placeholder="you@yourstore.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="button button-primary" type="button" onClick={handleContinue}>
            Continue
          </button>
        </>
      ) : (
        <>
          <label htmlFor="signup-store">Store name</label>
          <input
            id="signup-store"
            required
            placeholder="Your store"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
          <button
            ref={submitRef}
            className="button button-primary signup-form__submit"
            type="submit"
            disabled={state === "loading"}
          >
            Start 14-day free trial
          </button>
        </>
      )}
      {state === "error" && (
        <p className="signup-form__error">Something went wrong. Try again?</p>
      )}
    </form>
  );
}
