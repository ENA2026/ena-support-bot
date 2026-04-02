import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function analyzeEmail(subject, body) {
  const message = await client.messages.create({
    model: 'claude-opus-4-20250805',
    max_tokens: 100,
    messages: [
      {
        role: 'user',
        content: `Analiza este correo y clasifícalo como SIMPLE, COMPLEJO o CRÍTICO.

Asunto: ${subject}
Contenido: ${body}

Responde SOLO con: SIMPLE, COMPLEJO o CRÍTICO`
      }
    ]
  });

  return message.content[0].text.trim();
}
