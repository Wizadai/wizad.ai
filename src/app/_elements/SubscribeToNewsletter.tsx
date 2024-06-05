import { subscribeToNewsletter } from "@/app/actions";

export default function SubscribeToNewsletter() {
  return (
    <form
      className="flex items-center gap-6 pt-20"
      action={subscribeToNewsletter}
    >
      <input
        name="email"
        type="email"
        className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700"
        placeholder="Enter your email id"
      />
      <button
        type="submit"
        className="rounded-lg bg-white/10 px-6 py-4 font-medium transition-all duration-200 ease-in-out hover:bg-white/20"
      >
        Subscribe
      </button>
    </form>
  );
}
