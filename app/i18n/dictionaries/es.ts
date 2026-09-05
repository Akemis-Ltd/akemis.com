import type { Dictionary } from "../types";

const es: Dictionary = {
  meta: {
    siteDescription:
      "Contratación, facturación y pago para consultores independientes, y desarrollo de software asistido por IA para pymes. Hong Kong, desde 2003.",
    homeTitle: "Factura como una empresa. Trabaja como un independiente.",
    consultantsTitle: "Para consultores independientes",
    consultantsDescription:
      "Akemis contrata con tu cliente, factura en su nombre, cobra y te paga en tu divisa. Comprueba tu elegibilidad en cinco preguntas.",
    buildTitle: "Software a medida y agentes de IA para pymes",
    buildDescription:
      "Un equipo sénior que entrega software funcional en semanas: aplicaciones a medida, herramientas internas, agentes sobre tus propios datos e integración con los sistemas que ya usas.",
    aboutTitle: "Nosotros",
    aboutDescription:
      "Akemis Limited es una empresa de Hong Kong fundada en 2003. Dos décadas de sistemas empresariales convertidas en un servicio de contratación para independientes y un estudio de software.",
    contactTitle: "Contacto",
    contactDescription:
      "Habla con Akemis sobre contratación y facturación como consultor independiente, sobre contratar consultores, o sobre desarrollar software para tu empresa.",
    privacyTitle: "Aviso de privacidad del sitio",
    privacyDescription: "Cómo akemis.com trata los datos personales que envías a través de sus formularios.",
  },
  nav: {
    consultants: "Para consultores",
    build: "Build",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Comprobar elegibilidad",
    language: "Idioma",
    skip: "Ir al contenido",
  },
  home: {
    eyebrow: "Akemis · Hong Kong · desde 2003",
    title: "Factura como una empresa. Trabaja como un independiente.",
    lede: "Contratamos, facturamos y cobramos para consultores independientes, y luego les pagamos en su propia divisa. Y para las pymes que necesitan software, lo construimos en semanas.",
    ctaConsultant: "Soy consultor",
    ctaBusiness: "Dirijo una empresa",
    doors: [
      {
        eyebrow: "Para consultores independientes",
        title: "Tus clientes, o los nuestros. Un contrato, una factura, un pago.",
        body: "Firmamos con tu cliente, facturamos en nuestro nombre, reclamamos el pago y te pagamos al cobrar, con un extracto que puedes dar a tu asesor.",
        cta: "Cómo funciona",
        secondary: "Comprobar elegibilidad",
        href: "/consultants",
        secondaryHref: "/consultants#eligibility",
        image: "/images/majorel-consulting-team-scaled-1.jpeg",
        alt: "Consultores trabajando juntos alrededor de una mesa",
      },
      {
        eyebrow: "Para empresas",
        title: "Software a medida y agentes de IA, entregados en semanas.",
        body: "Un equipo sénior que construye la herramienta que realmente necesitas: un sistema interno, un portal de clientes, un agente sobre tus propios datos, una integración con los sistemas que ya usas.",
        cta: "Ver lo que construimos",
        secondary: "Solicitar una llamada",
        href: "/build",
        secondaryHref: "/contact",
        image: "/images/OUR-FIRMS_CONSULTING2_1000x667.jpg",
        alt: "Dos personas revisando cifras y un portátil en un escritorio",
      },
    ],
    proof: [
      { k: "Fundada en", v: "2003", note: "Una empresa de Hong Kong desde hace más de veinte años." },
      { k: "Divisas facturadas y pagadas", v: "8", note: "" },
      { k: "Consultores pagados en", v: "3 continentes", note: "África, Asia y América, en su propia divisa." },
    ],
    whatLabel: "Qué hacemos",
    whatTitle: "Tres cosas, bien hechas.",
    items: [
      {
        title: "Contratación gestionada para consultores",
        body: "Akemis es la parte contratante entre tú y tu cliente. Nos ocupamos del papeleo, el cumplimiento, el cobro y el pago; tú te quedas con el trabajo. Abierto a nuevos consultores en la primera ola de países.",
        href: "/consultants",
      },
      {
        title: "Ledger, el plan solo software",
        body: "Para consultores que quieren el mismo portal, partes de horas y facturación, pero que facturan en su propio nombre y cuenta. En desarrollo, beta privada a finales de año.",
        href: "/consultants#ledger",
      },
      {
        title: "Akemis Build",
        body: "Sprints de alcance cerrado para crear software a medida, herramientas internas, agentes e integraciones para pymes. Nuestra propia plataforma de facturación es la primera referencia.",
        href: "/build",
      },
    ],
    more: "Más",
    ctaTitle: "Cinco preguntas te dicen si estás en la primera ola.",
    ctaBody: "País, situación, cliente, servicio, volumen. Respuesta inmediata, sin crear cuenta.",
  },
  consultants: {
    eyebrow: "Un servicio de Akemis · Hong Kong · desde 2003",
    title: "Trabaja donde quieras. Cobra como es debido.",
    lede: "Akemis contrata, factura y cobra para consultores independientes, y luego te paga en tu divisa. Tus clientes o los nuestros.",
    ctaPrimary: "Comprobar mi elegibilidad",
    ctaSecondary: "Ver cómo funciona",
    heroAlt: "Consultores independientes trabajando juntos",
    ways: [
      {
        eyebrow: "Traes tu propio cliente",
        title: "Tú encontraste el trabajo. Nosotros hacemos el papeleo.",
        body: "Añades el cliente, hacemos las verificaciones y firmamos con él. Comisión más baja. Tú mantienes la relación.",
      },
      {
        eyebrow: "Aceptas una misión de Akemis",
        title: "Nosotros encontramos el trabajo. Mismo portal, mismo pago.",
        body: "Misiones de nuestra red, sobre todo aplicaciones empresariales, datos y software. Comisión más alta, porque incluye la colocación.",
      },
    ],
    howLabel: "Cómo funciona",
    howTitle: "Cuatro pasos, en este orden.",
    steps: [
      {
        t: "Comprueba la elegibilidad y pasa las verificaciones",
        b: "Cinco preguntas en esta página y, después, los documentos de identidad, domicilio y alta de actividad en el portal.",
      },
      {
        t: "Firmamos ambos contratos",
        b: "Un contrato marco con tu cliente y un contrato de prestación contigo. Lees los dos antes de que se firme nada.",
      },
      {
        t: "Trabajas y envías desde el portal",
        b: "Registras el periodo, adjuntas los partes de horas o entregables y envías la factura. La revisamos y la mandamos a tu cliente.",
      },
      {
        t: "Cobramos y te pagamos al recibir",
        b: "Los recordatorios salen tras el vencimiento y después una persona hace el seguimiento. Cuando el cliente paga, cobras en tu divisa con un justificante de transferencia.",
      },
    ],
    includedLabel: "Qué incluye",
    includedTitle: "Todo lo que va del apretón de manos al banco.",
    included: [
      ["Contratación", "Contrato de cliente y contrato de prestación desde plantillas probadas, para cada proyecto."],
      ["Facturación", "Facturas en nombre de Akemis, en ocho divisas, con tu comisión como línea aparte o integrada."],
      ["Seguimiento del cobro", "Recordatorios automáticos y después una persona concreta que llama al cliente."],
      ["Pago con justificante", "Al cobrar, a una cuenta a tu nombre, con un documento para tu contabilidad."],
      ["Archivo documental", "Contratos, documentos de identidad, certificados y facturas en un solo sitio, exportables."],
      ["Extractos", "Por cliente y por divisa, listos para tu asesor."],
      ["Atención humana", "Una persona responde en un día laborable."],
    ],
    comingLabel: "Próximamente",
    coming: [
      "Partes de horas con validación del cliente",
      "Gastos con captura de recibos",
      "Exportaciones para tu asesor",
    ],
    countriesLabel: "Países y divisas",
    countriesTitle: "La primera ola.",
    clientCountriesTitle: "Dónde puede estar tu cliente",
    consultantCountriesTitle: "Dónde puedes estar tú",
    consultantCountriesBody: "Cualquiera de los países de clientes, más",
    currenciesTitle: "Divisas",
    countriesNote:
      "¿En otro sitio? Haz la comprobación igualmente y únete a la lista de espera. Añadimos países por olas, cuando confirmamos las normas locales.",
    pricingLabel: "Precios",
    pricingTitle: "Un porcentaje de lo que facturas, con un mínimo mensual.",
    prices: [
      {
        name: "Gestionada, tu cliente",
        line: "Porcentaje del importe facturado, con un mínimo mensual. Tarifa reducida.",
        note: "Detallado en la tarifa que recibes con el paquete de alta.",
      },
      {
        name: "Gestionada, misión de Akemis",
        line: "Porcentaje del importe facturado, tarifa superior, colocación incluida.",
        note: "Acordado en cada misión antes de que la aceptes.",
      },
      {
        name: "Ledger, solo software",
        line: "Cuota mensual fija. Facturas en tu propio nombre y cuenta.",
        note: "En desarrollo, beta privada a finales de año. Únete a la lista de espera.",
      },
    ],
    pricingNote: "Sin margen en el cambio de divisa, sin cuota de alta y sin cargo los meses en que no facturas.",
    eligibilityLabel: "Elegibilidad",
    eligibilityTitle: "Cinco preguntas. Respuesta inmediata.",
    eligibilityBody:
      "No se guarda nada hasta que dejas tu correo al final. Solo clientes empresa, y tú sigues siendo responsable de tus impuestos.",
    trust: [
      { t: "Desde 2003", b: "Una empresa de Hong Kong con dos décadas de trabajo con clientes." },
      {
        t: "Conocimiento del cliente",
        b: "Verificación de identidad de cada consultor y cada cliente. También te protege a ti.",
      },
      { t: "Contratos legibles", b: "Contratos claros, enviados antes de firmar, iguales para todos." },
      { t: "Una persona con quien hablar", b: "El soporte responde en un día laborable y conoce tu expediente." },
    ],
    companiesLabel: "Para empresas",
    companiesTitle: "Contrata a un consultor independiente sin abrir una ficha de proveedor para cada uno.",
    companiesBody:
      "Un único proveedor, Akemis, para todos los consultores con los que trabajes a través de nosotros. Un contrato, un formato de factura, un pago. Si lo que necesitas es software y no personas, mira",
    companiesLink: "Akemis Build",
    companiesCta: "Hablemos",
    faqLabel: "Preguntas",
    faqTitle: "Las que nos hacen.",
    faq: [
      [
        "¿Con quién es mi contrato?",
        "Con Akemis Limited, Hong Kong. Akemis mantiene un contrato de prestación aparte con tu cliente. Ves los dos antes de firmar.",
      ],
      ["¿Quién factura a mi cliente?", "Akemis, en su propio nombre, a partir de la factura que preparas y envías en el portal."],
      [
        "¿Cuándo cobro?",
        "Al recibir el pago del cliente, una vez conciliados los fondos con tu factura, normalmente en pocos días laborables. Los plazos de pago con clientes son de 30 días estándar y 45 como máximo.",
      ],
      [
        "¿En qué divisa?",
        "Cualquiera de las ocho en las que operamos hoy: EUR, USD, GBP, AED, MAD, TND, XAF y XOF. El pago va a una cuenta a tu nombre.",
      ],
      [
        "¿Quién paga las comisiones bancarias?",
        "Las comisiones bancarias y de transferencia se detallan en tu justificante, y la tarifa enviada con el paquete de alta indica quién asume cada una. La conversión se hace al tipo que nos da nuestro proveedor de pagos; no añadimos margen.",
      ],
      [
        "¿Y si el cliente paga tarde?",
        "Reclamamos. Primero con recordatorios automáticos y después con seguimiento personal. No adelantamos fondos antes de que el cliente pague.",
      ],
      [
        "¿Gestionáis mis impuestos?",
        "No. Sigues siendo responsable de tus impuestos y cotizaciones en tu país, y lo confirmas al darte de alta.",
      ],
      [
        "¿Puedo conservar mis propios clientes?",
        "Sí. Traer tu propio cliente es el caso normal y tiene la comisión reducida. Las misiones que te consigue Akemis tienen una comisión superior.",
      ],
      [
        "¿Puedo irme?",
        "Sí, con el preaviso previsto en el contrato de prestación. Los proyectos en curso se completan según sus condiciones vigentes.",
      ],
      [
        "¿Qué hacéis con mis documentos de identidad?",
        "Se guardan de forma segura, se usan solo para cumplir nuestras obligaciones de conocimiento del cliente y las solicitudes de nuestro proveedor de pagos, y se eliminan tras el periodo de conservación indicado en nuestro aviso de privacidad.",
      ],
    ],
  },
  build: {
    eyebrow: "Akemis Build",
    title: "El software que tu negocio necesita, entregado en semanas.",
    lede: "Un equipo sénior que usa desarrollo asistido por IA, con veinte años de sistemas empresariales en Hong Kong detrás. Alcance cerrado, precio cerrado y un producto funcional al final.",
    ctaPrimary: "Solicitar una llamada",
    ctaSecondary: "Ver las ofertas",
    heroAlt: "Revisión de cifras y trabajo con portátil",
    offersLabel: "Ofertas",
    offersTitle: "Explorar, construir, operar.",
    colStage: "Etapa",
    colOffer: "Oferta",
    colShape: "Formato",
    stages: { discovery: "Exploración", build: "Construcción", run: "Operación" },
    offers: [
      {
        stage: "discovery",
        name: "Auditoría de oportunidades de IA",
        shape:
          "Una semana. Mapeamos tus procesos, datos y sistemas y entregamos una lista priorizada de automatizaciones con su esfuerzo y su retorno.",
      },
      {
        stage: "discovery",
        name: "Sprint de prototipo",
        shape:
          "Dos semanas. Un producto navegable con tus datos reales para un caso de uso, para decidir sobre algo tangible.",
      },
      {
        stage: "build",
        name: "Aplicación a medida o herramienta interna",
        shape:
          "De cuatro a ocho semanas, alcance y precio cerrados. Aplicación web, base de datos, autenticación, administración y alojamiento. Nuestra plataforma de facturación se construyó así.",
      },
      {
        stage: "build",
        name: "Agentes personalizados",
        shape:
          "Soporte sobre tu propia base de conocimiento, cualificación comercial, tareas administrativas como la captura de documentos y los informes, incorporación de personal.",
      },
      {
        stage: "build",
        name: "Integraciones",
        shape:
          "Con los sistemas que ya usas: ERP, CRM, contabilidad, comercio electrónico. Tu equipo consulta sus datos en lenguaje natural.",
      },
      {
        stage: "build",
        name: "Automatización documental",
        shape:
          "Contratos, presupuestos y expedientes de cumplimiento generados desde tus plantillas y tus datos, revisados por una persona antes de salir.",
      },
      {
        stage: "run",
        name: "Cuota mensual",
        shape: "Alojamiento, supervisión, actualizaciones y una lista de mejoras que abordamos contigo cada mes.",
      },
      {
        stage: "run",
        name: "Dirección técnica a tiempo parcial",
        shape: "Para fundadores sin socio técnico: arquitectura, elección de proveedores, contratación y una revisión semanal.",
      },
    ],
    segmentsLabel: "Para quién construimos",
    segmentsTitle: "Pymes con un problema concreto.",
    segments: [
      [
        "Consultoras y agencias",
        "Herramientas de tiempo, facturación e informes de cliente que encajan con tu forma de trabajar.",
      ],
      ["Empresas de comercio y aprovisionamiento", "Seguimiento de pedidos, documentos de proveedores, presupuestos y coste final."],
      [
        "Servicios profesionales",
        "Recepción de casos, redacción y seguimiento de expedientes para despachos jurídicos, contables y de selección.",
      ],
      ["Comercio electrónico y creadores", "Atribución, analítica y automatización administrativa alrededor de tus tiendas."],
    ],
    proofLabel: "Lo que hemos construido",
    proofTitle: "Primero nuestros propios productos.",
    proof: [
      {
        t: "Akemis Ledger",
        b: "Facturación, conciliación bancaria y pagos para decenas de consultores en ocho divisas, con portal de autoservicio, generación de contratos y flujos de cumplimiento. Construido y operado por un equipo de dos personas.",
      },
      {
        t: "Creator Analytics",
        b: "Una aplicación de analítica conectada con TikTok: alta autenticada, métricas por vídeo, atribución de enlaces y datos de pedidos de plataformas asociadas.",
      },
      {
        t: "Veinte años de sistemas empresariales",
        b: "Proyectos de implantación e integración de SAP, Oracle y PeopleSoft desde 2003. Por eso las integraciones que construimos respetan cómo se comporta de verdad un sistema empresarial.",
      },
    ],
    howLabel: "Cómo trabajamos",
    howTitle: "Alcance cerrado. Demo semanal. Tu código, tus cuentas.",
    how: [
      "Alcance y precio acordados antes de la primera línea de código. Los cambios se presupuestan, no se absorben en silencio.",
      "Una demo funcional cada semana, con tus datos, desde la segunda semana.",
      "Todo vive en tus repositorios, tus cuentas de nube y tu dominio. Sin dependencia de nosotros.",
      "Una persona revisa cada elemento generado antes de que llegue a un cliente o a la contabilidad.",
    ],
    callLabel: "Primera llamada",
    callTitle: "Treinta minutos. Trae el problema, no un pliego.",
    callBody:
      "Cuéntanos qué tarda demasiado o se rompe con frecuencia. Te diremos con franqueza si el siguiente paso es una auditoría de una semana, un prototipo de dos, o nada en absoluto.",
    callNote: "¿Eres consultor independiente y no una empresa?",
    callNoteLink: "Esta página es para ti",
    callSubmit: "Solicitar una llamada",
  },
  about: {
    eyebrow: "Sobre Akemis",
    title: "Una empresa hongkonesa de veinte años que aprendió a entregar software.",
    lede: "Pasamos dos décadas implantando sistemas empresariales y pagando a los consultores que hacían el trabajo. La segunda parte resultó ser un negocio en sí misma.",
    heroAlt: "El puerto y los rascacielos de Hong Kong",
    timelineLabel: "Cómo llegamos aquí",
    timeline: [
      {
        year: "2003",
        t: "Fundación en Hong Kong",
        b: "Consultoría de sistemas empresariales: implantación e integración de SAP, Oracle y PeopleSoft para clientes de Asia, Europa y Oriente Medio.",
      },
      {
        year: "2010s",
        t: "Consultores, no plantilla",
        b: "Proyectos cubiertos con especialistas independientes. Akemis se convierte en la parte contratante entre ellos y el cliente, y aprende el papeleo a base de práctica.",
      },
      {
        year: "2025",
        t: "El ledger se convierte en producto",
        b: "La facturación, la conciliación bancaria y los pagos salen de las hojas de cálculo hacia nuestra propia plataforma, construida con desarrollo asistido por IA por un equipo de dos personas.",
      },
      {
        year: "2026",
        t: "Abierto a nuevos consultores",
        b: "El servicio de contratación se abre más allá de nuestra red, con un portal de autoservicio, y el estudio que lo construyó empieza a construir para otras pymes.",
      },
    ],
    beliefs: [
      {
        t: "Lo que creemos",
        b: "Ser independiente no debería significar un papeleo de aficionado. Un consultor merece la misma contratación, facturación y gestión de cobro que una empresa, sin tener que convertirse en una.",
      },
      {
        t: "Lo que no somos",
        b: "Ni un banco, ni una gestoría de nóminas, ni un empleador de registro. Akemis es la parte contratante de dos contratos de prestación, y un proveedor de software. El dinero se mueve porque se facturó un trabajo, nunca por sí mismo.",
      },
      {
        t: "Quién lo dirige",
        b: "Un equipo pequeño en Hong Kong y Europa dirigido por el fundador, Philippe Barthelemy. Cada consultor de la plataforma tiene una persona concreta que conoce su expediente.",
      },
    ],
    linkConsultants: "Para consultores",
    linkConsultantsBody: "Contratación, facturación, cobro y pago.",
    linkBuild: "Para empresas",
    linkBuildBody: "Software a medida y agentes, construidos en semanas.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Responde una persona.",
    lede: "En un día laborable, hora de Hong Kong o de París. Dinos quién eres y qué necesitas; el formulario lo dirige a la persona adecuada.",
    emailLabel: "Correo",
    companyLabel: "Empresa",
    companyValue: "Akemis Limited, Hong Kong",
    portalLabel: "¿Ya eres consultor con nosotros?",
    portalBody: "Usa el portal y tu contacto habitual; es más rápido que este formulario.",
  },
  form: {
    name: "Nombre completo",
    email: "Correo profesional",
    company: "Empresa",
    iAm: "Soy",
    topics: {
      consultant: "consultor independiente",
      business: "una empresa que busca un consultor",
      build: "una empresa que necesita software",
      other: "otra cosa",
    },
    message: "¿En qué podemos ayudar?",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    sentTitle: "Mensaje enviado.",
    sentBody: "Respondemos en un día laborable, desde contact@akemis.com.",
    privacyNote: "Usamos tus datos solo para responderte. Consulta nuestro",
    privacyLink: "aviso de privacidad",
    errorGeneric: "No hemos podido enviar tu mensaje. Escríbenos a contact@akemis.com.",
    errorNetwork: "Problema de conexión. Escríbenos a contact@akemis.com.",
  },
  eligibility: {
    qResidence: "¿Dónde resides?",
    qStatus: "¿Cómo trabajas hoy?",
    qClient: "¿Dónde está tu cliente?",
    qCategory: "¿A qué te dedicas?",
    qVolume: "Facturación mensual, aproximada",
    choose: "Elegir…",
    otherCountry: "Otro país",
    otherCategory: "Otra cosa",
    statuses: {
      sole: "Como autónomo",
      company: "A través de mi propia sociedad",
      none: "Aún no estoy dado de alta",
      employee: "Soy asalariado y busco una nómina",
    },
    volumes: {
      lt3k: "Menos de 3.000 USD",
      mid: "De 3.000 a 10.000 USD",
      high: "De 10.000 a 25.000 USD",
      top: "Más de 25.000 USD",
    },
    passTitle: "Estás en la primera ola.",
    passBody:
      "Déjanos tu correo y te enviaremos el paquete de alta: los justificantes que necesitamos, el contrato de prestación para leerlo y la tarifa.",
    failTitle: "Todavía no, pero pronto.",
    failBodyPrefix: "Porque",
    failBodySuffix: "Únete a la lista de espera y te avisaremos cuando cubramos tu situación.",
    reasons: {
      residence: "tu país de residencia no está en la primera ola",
      client: "el país de tu cliente no está en la primera ola",
      employee: "el servicio es para consultores independientes, no para asalariados que buscan una nómina",
      volume: "los proyectos por debajo del mínimo de lanzamiento pasan a la lista de espera del plan solo software",
    },
    emailPlaceholder: "tu@ejemplo.com",
    emailLabel: "Dirección de correo",
    submitPass: "Enviarme el paquete de alta",
    submitFail: "Unirme a la lista de espera",
    thanks: "Gracias. Tendrás noticias nuestras.",
    error: "No se ha podido enviar. Escríbenos a contact@akemis.com.",
  },
  categories: [
    "Aplicaciones empresariales y ERP",
    "CRM y plataformas de cliente",
    "Datos, inteligencia de negocio y analítica",
    "Desarrollo de software",
    "IA y automatización",
    "Nube e infraestructura",
    "Gestión de proyectos y programas",
    "Finanzas y transformación",
    "Sistemas de RR. HH. y nóminas",
    "Formación y gestión del cambio",
  ],
  footer: {
    blurb:
      "Contratación, facturación y pago para consultores independientes, y software asistido por IA para pymes. Hong Kong, desde 2003.",
    consultants: "Consultores",
    businesses: "Empresas",
    company: "Empresa",
    links: {
      how: "Cómo funciona",
      included: "Qué incluye",
      countries: "Países y divisas",
      eligibility: "Comprobar elegibilidad",
      build: "Akemis Build",
      offers: "Ofertas",
      proof: "Lo que hemos construido",
      call: "Solicitar una llamada",
      about: "Nosotros",
      contact: "Contacto",
      privacy: "Privacidad",
      creators: "Aviso legal de Creator Analytics",
    },
    rights: "Todos los derechos reservados.",
    since: "Hong Kong · desde 2003",
  },
  privacy: {
    updated: "Última actualización: 5 de septiembre de 2026. Se aplica solo a este sitio web.",
    sections: [
      {
        h: "Quiénes somos",
        p: "Este sitio lo gestiona Akemis Limited, sociedad constituida en Hong Kong. Para cualquier cuestión sobre tus datos personales, escribe a contact@akemis.com.",
      },
      {
        h: "Qué recoge este sitio",
        p: "Solo lo que escribes en un formulario: nombre, correo electrónico, empresa, el tema que eliges, tu mensaje y, en la comprobación de elegibilidad, las cinco respuestas seleccionadas. Las preguntas de elegibilidad se resuelven en tu navegador; no nos llega nada hasta que introduces tu correo y pulsas el botón. El sitio no usa cookies publicitarias ni de seguimiento. Guarda tu elección de idioma en una cookie para no enviarte al idioma equivocado en tu próxima visita.",
      },
      {
        h: "Qué hacemos con ello",
        p: "Los envíos llegan a nuestro buzón a través de un proveedor de envío de correo y se usan para responderte. Si pediste el paquete de alta o te uniste a la lista de espera, usamos tu correo para enviártelo o para avisarte. No vendemos ni cedemos tus datos a terceros para sus propios fines.",
      },
      {
        h: "Cuánto tiempo lo conservamos",
        p: "Los mensajes hasta dos años después de nuestro último intercambio. Las inscripciones en la lista de espera hasta que pidas la baja o se cierre la lista. Responde a cualquier correo nuestro para darte de baja.",
      },
      {
        h: "Tus derechos",
        p: "Puedes pedir qué datos tenemos, solicitar su corrección o supresión y oponerte a nuevos contactos, conforme a la Ordenanza de Datos Personales (Privacidad) de Hong Kong y, cuando te sea aplicable, al RGPD. Escribe a la dirección indicada; respondemos en el plazo de un mes.",
      },
      {
        h: "Otros productos",
        p: "El portal de consultores y la aplicación Creator Analytics tienen sus propias condiciones y políticas de privacidad, que se facilitan al darte de alta. Los documentos de Creator Analytics están publicados aquí:",
      },
    ],
    creatorsLink: "Política de privacidad de Creator Analytics",
  },
};

export default es;
