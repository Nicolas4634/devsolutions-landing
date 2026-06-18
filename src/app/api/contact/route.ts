import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  description?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, company, email, phone, description } = body;

    if (!name?.trim() || !email?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Completá los campos obligatorios." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { error: "El formulario no está configurado. Contactanos por WhatsApp." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nuevo contacto - ${name}`,
        from_name: "Nexo Digital",
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || "No indicado",
        company: company?.trim() || "No indicada",
        message: description.trim(),
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { error: data.message ?? "No se pudo enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error de conexión. Intentá de nuevo o escribinos por WhatsApp." },
      { status: 500 }
    );
  }
}
