// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Formata a mensagem para o Discord
    const embed = {
      title: "Nova Mensagem de Contato",
      color: 0x00ff00, // Verde
      fields: [
        {
          name: "Nome",
          value: data.name,
          inline: true,
        },
        {
          name: "Telefone",
          value: data.cellphone,
          inline: true,
        },
        {
          name: "Email",
          value: data.email,
          inline: false,
        },
        {
          name: "Mensagem",
          value: data.message,
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
    };

    // Envia para o webhook do Discord
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Failed to send message to Discord" },
      { status: 500 }
    );
  }
}
