"use client"
import { createAction } from "@/lib/testFormSubmission";
import Image from "next/image";

export default function Home() {

  return (
    <div className="mt-56 mb-56 mx-16">
      <form action={createAction}>
        <input className="border-2 mx-3" type="text" name="name" placeholder="Name" />
        <input className="border-2" type="email" name="email" placeholder="Email" />
        <button className=" bg-slate-500 p-1 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
