import { requestCustomerSupport } from "@/app/actions";

export default function CustomerSupport() {
  return (
    <section className="mx-4 my-12 flex flex-col gap-10 rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB] p-5 md:mx-auto md:w-[95%] md:max-w-10xl md:flex-row md:justify-between md:p-16">
      <div className="flex flex-col gap-6 md:max-w-[65%] md:gap-14">
        <h2 className="font-hero text-3xl/tight font-bold italic text-black md:text-7xl">
          Want an AI Designer uniquely trained for your enterprise?
        </h2>
        <div className="text-lg leading-snug text-black md:w-[70%] md:text-xl md:font-medium">
          We help enterprises with multiple outlets and sales teams scale their design operations effortlessly. Maintain complete brand control from one place, while empowering your team with creative freedom to stay active and on-brand every day.
        </div>
      </div>

      <CustomerSupportForm />
    </section>
  );
}

const CustomerSupportForm = () => {
  return (
    <form
      className="flex w-full max-w-md flex-col gap-4 self-center rounded-3xl bg-[#121212] p-6 text-zinc-100 md:w-[30%] md:p-10"
      action={requestCustomerSupport}
    >
      <h2 className="text-xl font-medium md:text-lg">Request a call back</h2>

      <div className="flex flex-col gap-1">
        <label
          className="p-1 text-sm font-normal text-white/80 md:text-xs"
          htmlFor="support-form-name"
        >
          Your full name here
        </label>
        <input
          id="support-form-name"
          name="name"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700 md:p-3 md:text-sm"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="p-1 text-sm font-normal text-white/80 md:text-xs"
          htmlFor="support-form-email"
        >
          Enter email here
        </label>
        <input
          id="support-form-email"
          name="email"
          type="email"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700 md:p-3 md:text-sm"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="p-1 text-sm font-normal text-white/80 md:text-xs"
          htmlFor="support-form-phone"
        >
          Mobile number
        </label>
        <input
          id="support-form-phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700 md:p-3 md:text-sm"
          placeholder="Enter your mobile number"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg border-white bg-gradient-to-br from-[#E293FE] to-[#2DEFAE] px-6 py-2 text-lg font-medium text-black transition-all duration-200 ease-in-out hover:from-[#2DEFAE] hover:to-[#E293FE] hover:text-white md:rounded-md md:p-3 md:text-sm"
      >
        Request a call back
      </button>
    </form>
  );
};
