import { subscribeToNewsletter } from "@/app/actions";

export default function SubscribeToNewsletter() {
  return (
    <form
      className="flex flex-col items-center gap-2 pt-5 md:pt-12"
      // @ts-ignore
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
        className="w-full rounded-lg bg-white/10 px-6 py-3 font-medium transition-all duration-200 ease-in-out hover:bg-white/20"
      >
        Subscribe
      </button>
    </form>
  );
}
