import type { Locale } from './content';

export const contactCopy = {
  en: {
    name: 'Your name', email: 'Email address', topic: 'What can we help with?',
    message: 'Your message', send: 'Send enquiry', sending: 'Sending…',
    note: 'We use these details to respond to your enquiry. All fields are required.',
    success: 'Your enquiry has been accepted for sending. Thank you for contacting Akemis.',
    error: 'We couldn’t send your enquiry. Your message is still here; please try again or email contact@akemis.com.',
    invalid: 'Please check your name, email address, topic and message (10–5,000 characters).',
    unavailable: 'The contact form is not available yet. Please email contact@akemis.com.',
  },
  es: {
    name: 'Tu nombre', email: 'Correo electrónico', topic: '¿En qué podemos ayudarte?',
    message: 'Tu mensaje', send: 'Enviar consulta', sending: 'Enviando…',
    note: 'Usamos estos datos para responder a tu consulta. Todos los campos son obligatorios.',
    success: 'Tu consulta ha sido aceptada para su envío. Gracias por contactar con Akemis.',
    error: 'No hemos podido enviar tu consulta. Tu mensaje sigue aquí; inténtalo de nuevo o escribe a contact@akemis.com.',
    invalid: 'Revisa tu nombre, correo, tema y mensaje (entre 10 y 5.000 caracteres).',
    unavailable: 'El formulario aún no está disponible. Escribe a contact@akemis.com.',
  },
  fr: {
    name: 'Votre nom', email: 'Adresse e-mail', topic: 'Comment pouvons-nous vous aider ?',
    message: 'Votre message', send: 'Envoyer la demande', sending: 'Envoi en cours…',
    note: 'Nous utilisons ces informations pour répondre à votre demande. Tous les champs sont obligatoires.',
    success: 'Votre demande a été acceptée pour envoi. Merci de contacter Akemis.',
    error: 'Votre demande n’a pas pu être envoyée. Votre message est conservé ; réessayez ou écrivez à contact@akemis.com.',
    invalid: 'Vérifiez votre nom, votre e-mail, le sujet et le message (10 à 5 000 caractères).',
    unavailable: 'Le formulaire n’est pas encore disponible. Écrivez à contact@akemis.com.',
  },
} satisfies Record<Locale, Record<string, string>>;
