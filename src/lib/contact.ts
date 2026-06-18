interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
}

export async function submitContactForm(form: ContactFormData) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("MISSING_KEY");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Nuevo contacto - ${form.name}`,
      from_name: "Nexo Digital",
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || "No indicado",
      company: form.company.trim() || "No indicada",
      message: form.description.trim(),
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "SEND_FAILED");
  }
}
