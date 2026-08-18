const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY

const SYSTEM_PROMPT = `Eres el Asistente VLEC, la Inteligencia Artificial de apoyo para los Entornos Virtuales para la Enseñanza Clínica del Derecho.

Tu función es actuar como guía experto durante el onboarding y a lo largo de las sesiones de entrenamiento.

INFORMACIÓN QUE DEBES SABER:
- VLEC analiza comunicación oral: velocidad, claridad, volumen y fluidez
- VLEC NO evalúa el fondo jurídico (solo forma comunicativa)
- Rango de velocidad ideal: 140-170 palabras por minuto
- Las 4 métricas: Velocidad, Claridad, Volumen, Fluidez
- Dos escenarios: Litigante (sala de tribunal) e Entrevista (diálogo directo)
- El ciclo PAA: Planificar → Actuar → Analizar
- Tu voz NUNCA se graba ni se almacena

Responde con claridad, brevedad y enfoque educativo. Usa ejemplos cuando sea necesario.`

export async function askAssistant(question: string): Promise<string> {
  if (!CLAUDE_API_KEY) {
    return "Error: Claude API key no configurada. Configura VITE_CLAUDE_API_KEY en .env.local"
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{
          role: 'user',
          content: question
        }]
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Claude API error:', error)
      return "No pude procesar tu pregunta. Intenta de nuevo."
    }

    const data = await response.json()
    return data.content[0].text
  } catch (error) {
    console.error('Error calling Claude API:', error)
    return "Hubo un error conectando con el asistente. Intenta de nuevo."
  }
}
