import { mailtoHref } from "../site-data";

export function WaitlistForm() {
  return (
    <form action={mailtoHref} method="post" encType="text/plain" className="grid gap-4">
      <div>
        <label htmlFor="first-name" className="text-sm font-black text-slate-800">
          First name
        </label>
        <input
          id="first-name"
          name="First name"
          type="text"
          autoComplete="given-name"
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-950 outline-none ring-[#4b2f83]/20 transition focus:border-[#4b2f83] focus:ring-4"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-black text-slate-800">
          Email
        </label>
        <input
          id="email"
          name="Email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-950 outline-none ring-[#4b2f83]/20 transition focus:border-[#4b2f83] focus:ring-4"
        />
      </div>

      <div>
        <label htmlFor="homeschool-role" className="text-sm font-black text-slate-800">
          Homeschool role
        </label>
        <select
          id="homeschool-role"
          name="Homeschool role"
          defaultValue="Parent"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-950 outline-none ring-[#4b2f83]/20 transition focus:border-[#4b2f83] focus:ring-4"
        >
          <option>Parent</option>
          <option>Student</option>
          <option>Co-op Leader</option>
          <option>Educator</option>
        </select>
      </div>

      <button type="submit" className="mt-2 rounded-2xl bg-[#4b2f83] px-5 py-4 text-center font-black text-white shadow-lg shadow-[#4b2f83]/15 transition hover:bg-[#3f2770]">
        Join the Waitlist
      </button>

      <p className="text-sm font-bold leading-6 text-slate-500">
        Launch updates only. No payment, no account, and no student records required.
      </p>
    </form>
  );
}
