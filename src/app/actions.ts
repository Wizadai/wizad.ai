"use server";

type ContactSupportSubmission = {
  type: "async_customer_support";
  name: string;
  business: string;
  phone: string;
};

type SubscribeToNewsletterSubmission = {
  type: "subscribe_to_newsletter";
  email: string;
};

type GoogleAppScriptSubmission =
  | ContactSupportSubmission
  | SubscribeToNewsletterSubmission;

const callGoogleAppScriptWebhook = async (data: GoogleAppScriptSubmission) => {
  const webhookUrl = process.env.FORM_SUBMIT_WEBHOOK!;

  const url = new URL(webhookUrl);
  Object.entries(data).forEach((entry) => url.searchParams.set(...entry));

  const res = await fetch(url.toString());
  return res.ok;
};

export async function subscribeToNewsletter(form: FormData) {
  const email = form.get("email")?.toString();
  if (!email) return;

  return await callGoogleAppScriptWebhook({
    type: "subscribe_to_newsletter",
    email,
  });
}

export async function requestCustomerSupport(form: FormData) {
  const name = form.get("name")?.toString() || "";
  const business = form.get("business")?.toString() || "";
  const phone = form.get("phone")?.toString() || "";

  if (!name || (!business && !phone)) return;

  return await callGoogleAppScriptWebhook({
    type: "async_customer_support",
    name,
    business,
    phone,
  });
}
