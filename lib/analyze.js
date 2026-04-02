import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function analyzeEmail(subject, body) {
  const message = await client.messages.create({
    model: 'claude-opus-4-20250805',
    max_tokens: 100,
    messages: [
      {
        role: 'user',
        content: `Eres un asistente de soporte para ENA (una institución educativa).

Analiza este correo y clasifícalo:

SIMPLE: Preguntas básicas, solicitudes de información, confirmaciones.
COMPLEJO: Problemas técnicos, solicitudes que requieren investigación, quejas.
CRÍTICO: Incidentes de seguridad, datos perdidos, accesos no autorizados, urgencias.

Asunto: ${subject}
Contenido: ${body}

Responde SOLO con: SIMPLE, COMPLEJO o CRÍTICO`
      }
    ]
  });

  return message.content[0].text.trim();
}
