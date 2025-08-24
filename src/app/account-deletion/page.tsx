import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion Request - Wizad.ai",
  description: "Request account deletion for existing Wizad.ai customers",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Account Deletion Request
          </h1>
          
          <div className="mb-6 rounded-lg bg-gray-900 p-6">
            <p className="mb-4 text-gray-300">
              We're sorry to see you go. If you'd like to delete your Wizad.ai account, 
              please fill out the form below. This action is permanent and cannot be undone.
            </p>
            <p className="text-sm text-yellow-400">
              Note: All your designs, data, and account information will be permanently removed 
              from our servers within 30 days of your request.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900 p-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfES_rgxe2d0mEyQH32nTlGbv2ejFXrKMxraf4rCgeduJbf9w/viewform?embedded=true" 
              width="100%" 
              height="995" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
