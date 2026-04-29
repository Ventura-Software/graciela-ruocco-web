import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, area, mensaje, website } = body;

    // Honeypot check - if website field is filled, it's a bot
    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Campos requeridos: nombre, email, mensaje" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error: resendError } = await resend.emails.send({
      from: "Graciela Ruocco Web <onboarding@resend.dev>", // Will change to your domain after verification
      to: [process.env.CONTACT_EMAIL || "gruoccocosta@gmail.com"],
      replyTo: email,
      subject: `Nueva consulta de ${nombre} - ${area}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #0A1628;
                color: #fff;
                padding: 30px 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
              }
              .content {
                background: #fff;
                padding: 30px 20px;
                border: 1px solid #E5E7EB;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #0A1628;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                margin-bottom: 5px;
              }
              .field-value {
                color: #4A5568;
                font-size: 15px;
              }
              .message-box {
                background: #FAF8F5;
                padding: 15px;
                border-radius: 4px;
                border-left: 3px solid #C9A96E;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #E5E7EB;
                color: #6B7280;
                font-size: 13px;
              }
              .badge {
                display: inline-block;
                background: #C9A96E;
                color: #0A1628;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nueva Consulta Web</h1>
            </div>
            <div class="content">
              <div class="badge">${area}</div>

              <div class="field">
                <div class="field-label">Nombre</div>
                <div class="field-value">${nombre}</div>
              </div>

              ${
                empresa
                  ? `
                <div class="field">
                  <div class="field-label">Empresa</div>
                  <div class="field-value">${empresa}</div>
                </div>
              `
                  : ""
              }

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #C9A96E; text-decoration: none;">${email}</a>
                </div>
              </div>

              ${
                telefono
                  ? `
                <div class="field">
                  <div class="field-label">Teléfono</div>
                  <div class="field-value">
                    <a href="tel:${telefono}" style="color: #C9A96E; text-decoration: none;">${telefono}</a>
                  </div>
                </div>
              `
                  : ""
              }

              <div class="field">
                <div class="field-label">Mensaje</div>
                <div class="message-box">
                  ${mensaje.replace(/\n/g, "<br>")}
                </div>
              </div>

              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de <strong>gracielaruocco.com.uy</strong></p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${email}" style="color: #C9A96E; text-decoration: none; margin: 0 10px;">Responder</a>
                  ${
                    telefono
                      ? `| <a href="tel:${telefono}" style="color: #C9A96E; text-decoration: none; margin: 0 10px;">Llamar</a>`
                      : ""
                  }
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (resendError) {
      throw new Error(resendError.message);
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
