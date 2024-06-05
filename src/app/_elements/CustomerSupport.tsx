import { requestCustomerSupport } from "@/app/actions";

export default function CustomerSupport() {
  return (
    <section className="mx-4 my-12 flex max-w-screen-2xl flex-col gap-10 rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB] p-5 md:mx-auto md:w-full md:flex-row md:justify-between md:gap-12 md:p-20">
      <div className="flex flex-col gap-6 md:max-w-3xl md:gap-20 md:py-10">
        <h2 className="font-hero text-3xl font-bold italic text-black md:text-7xl">
          Still need dedicated support to manage your social media?
        </h2>
        <span className="text-lg text-black md:text-2xl">
          We have a group of social media experts to help and guide you. Request
          a call back now, to know more about the tailored services and packages
          we have for you.
        </span>
      </div>

      <CustomerSupportForm />
    </section>
  );
}

const CustomerSupportForm = () => {
  return (
    <form
      className="flex w-full max-w-md flex-col gap-6 rounded-3xl bg-zinc-950 p-6 text-zinc-100 md:p-10"
      action={requestCustomerSupport}
    >
      <h2 className="text-xl font-semibold">Request a call back</h2>

      <div className="flex flex-col gap-1">
        <label className="p-1" htmlFor="support-form-name">
          Full Name
        </label>
        <input
          id="support-form-name"
          name="name"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="p-1" htmlFor="support-form-phone">
          Mobile Number
        </label>
        <input
          id="support-form-phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700"
          placeholder="Enter your mobile number"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="p-1" htmlFor="support-form-email">
          Email ID
        </label>
        <input
          id="support-form-email"
          name="email"
          type="email"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700"
          placeholder="Enter your email id"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-lg bg-white/10 px-6 py-4 font-medium transition-all duration-200 ease-in-out hover:bg-white/20"
      >
        Request a call back
      </button>
    </form>
  );
};
