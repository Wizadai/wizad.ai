import { requestCustomerSupport } from "@/app/actions";

export default function CustomerSupport() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between md:w-full gap-10 md:gap-12 mx-4 md:mx-auto my-12 p-5 md:p-20 max-w-screen-2xl rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB]">
      <div className="flex flex-col gap-6 md:gap-20 md:max-w-3xl md:py-10">
        <h2 className="font-hero text-3xl md:text-7xl font-bold italic text-black">
          Still need dedicated support to manage your social media?
        </h2>
        <span className="text-lg md:text-2xl text-black">
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
      className="flex flex-col gap-6 rounded-3xl text-zinc-100 bg-zinc-950 p-6 md:p-10 w-full max-w-md"
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
          className="p-4 bg-[#1D1D1D] placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700 transition-all duration-200 ease-in-out rounded-lg w-full"
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
          className="p-4 bg-[#1D1D1D] placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700 transition-all duration-200 ease-in-out rounded-lg w-full"
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
          className="p-4 bg-[#1D1D1D] placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700 transition-all duration-200 ease-in-out rounded-lg w-full"
          placeholder="Enter your email id"
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all duration-200 ease-in-out"
      >
        Request a call back
      </button>
    </form>
  );
};
