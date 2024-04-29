import { subscribeToNewsletter } from "@/app/actions";

export default function SubscribeToNewsletter() {
  return (
    <form
      className="flex gap-6 items-center pt-20"
      action={subscribeToNewsletter}
    >
      <input
        name="email"
        type="email"
        className="p-4 bg-[#1D1D1D] placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700 transition-all duration-200 ease-in-out rounded-lg w-full"
        placeholder="Enter your email id"
      />
      <button
        type="submit"
        className="px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all duration-200 ease-in-out"
      >
        Subscribe
      </button>
    </form>
  );
}
