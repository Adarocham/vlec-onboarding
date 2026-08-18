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
    const msg = "Error: Claude API key no configurada. Configura VITE_CLAUDE_API_KEY en .env.local"
    console.error(msg)
    return msg
  }

  try {
    console.log('🤖 Enviando pregunta a Claude API...')

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

    console.log('📡 Respuesta de API:', response.status, response.statusText)

    if (!response.ok) {
      const error = await response.json()
      console.error('❌ Claude API error:', error)

      // Errores específicos
      if (error.error?.type === 'authentication_error') {
        return "Error: API key inválida. Verifica VITE_CLAUDE_API_KEY en .env.local"
      }

      return `Error API: ${error.error?.message || 'Desconocido'}`
    }

    const data = await response.json()
    console.log('✅ Respuesta exitosa:', data.content[0].text.substring(0, 100))
    return data.content[0].text
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('❌ Error calling Claude API:', errorMsg, error)
    return `Error: ${errorMsg}`
  }
}
