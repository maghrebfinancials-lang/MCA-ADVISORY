/* ============================================================
   MCA ADVISORY — Main JavaScript
   Features: Language Switcher, Dynamic Content, Mobile Menu,
             Smooth Scroll, Form Validation, Scroll Reveal,
             Back to Top, Sticky Header
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS — All bilingual content lives here
   ============================================================ */
const translations = {
  fr: {
    /* Navigation */
    nav_home:     'Accueil',
    nav_about:    'À Propos',
    nav_services: 'Services',
    nav_sectors:  'Secteurs',
    nav_method:   'Méthode',
    nav_contact:  'Contact',
    nav_cta:      'Demander une consultation',

    /* Hero */
    hero_badge:       'Cabinet agréé · Marrakech',
    hero_title:       'Audit, Fiscalité &amp; Conseil pour<br><em>entreprises ambitieuses</em> au Maroc',
    hero_sub:         'Nous accompagnons les entrepreneurs, PME et investisseurs dans la structuration comptable, fiscale, juridique et financière de leurs activités.',
    hero_cta1:        'Demander une consultation',
    hero_cta2:        'Découvrir nos services',
    hero_stat1:       'Années d\'expérience',
    hero_stat2:       'Entreprises accompagnées',
    hero_stat3:       'Secteurs couverts',
    hero_card1_title: 'Conformité fiscale',
    hero_card1_sub:   '100% à jour',
    hero_card2_title: 'Membre OPCA',
    hero_card2_sub:   'Comptable agréé',

    /* Trust bar */
    trust1: 'Cabinet basé à Marrakech',
    trust2: 'Comptable agréé membre de l\'OPCA',
    trust3: 'Accompagnement fiscal & juridique',
    trust4: 'Secteurs variés & industries multiples',

    /* About */
    about_label:        'À Propos',
    about_title:        'Un cabinet structuré autour de la précision, la conformité et le conseil',
    about_lead:         'MCA Advisory est un cabinet comptable et de conseil basé à Marrakech, spécialisé dans l\'accompagnement des entrepreneurs, PME, hôtels, restaurants et investisseurs étrangers au Maroc.',
    about_body1:        'Nous intervenons sur l\'ensemble du cycle de vie d\'une entreprise : de la création et la domiciliation, à la tenue comptable, aux déclarations fiscales, à l\'audit financier et au conseil stratégique.',
    about_body2:        'Notre engagement : fournir des réponses claires, des solutions adaptées, et un suivi régulier pour que chaque client puisse se concentrer sur son cœur de métier en toute sérénité.',
    about_certif_label: 'Certification',
    about_certif_text:  'Membre agréé de l\'Ordre des Professionnels Comptables Agréés (OPCA) du Maroc',
    founder_role:       'Fondateur & Comptable agréé',
    founder_quote:      '"Notre mission est de vous offrir la clarté financière dont vous avez besoin pour prendre les meilleures décisions."',
    about_num1:         'Ans d\'expérience',
    about_num2:         'Clients servis',
    about_num3:         'Conformité garantie',

    /* Services section header */
    services_label:   'Nos Services',
    services_title:   'Une offre complète pour structurer et développer votre activité',
    services_sub:     'De la création d\'entreprise à l\'audit stratégique, nous couvrons l\'ensemble de vos besoins comptables, fiscaux et juridiques.',
    services_all_cta: 'Discuter de votre projet',

    /* Why Us */
    whyus_label: 'Pourquoi nous choisir',
    whyus_title: 'Quatre piliers qui définissent notre approche',

    /* Process */
    process_label: 'Notre Méthode',
    process_title: 'Un accompagnement structuré en 4 étapes',
    process_sub:   'Chaque mission commence par une compréhension fine de votre situation et se conclut par un suivi rigoureux dans la durée.',

    /* Sectors */
    sectors_label: 'Secteurs d\'activité',
    sectors_title: 'Une expertise sectorielle reconnue',
    sectors_sub:   'Nous accompagnons des entreprises dans des secteurs variés, avec une connaissance approfondie des spécificités de chacun.',

    /* Insights */
    insights_label: 'Ressources & Actualités',
    insights_title: 'Dernières publications',
    insights_sub:   'Nos analyses pour mieux comprendre la fiscalité, la comptabilité et la gestion d\'entreprise au Maroc.',
    insights_cta:   'Voir tous les articles',

    /* CTA Banner */
    cta_label: 'Passez à l\'action',
    cta_title: 'Besoin d\'un accompagnement comptable, fiscal ou juridique fiable ?',
    cta_sub:   'Nos experts sont disponibles pour analyser votre situation et vous proposer des solutions sur mesure.',
    cta_btn1:  'Réserver un appel',
    cta_btn2:  'WhatsApp',

    /* Contact */
    contact_label:       'Contactez-nous',
    contact_title:       'Parlons de votre projet',
    contact_intro:       'Vous avez une question ou souhaitez être accompagné ? Notre équipe vous répond dans les meilleurs délais.',
    contact_addr_label:  'Adresse',
    contact_phone_label: 'Téléphone',
    contact_email_label: 'Email',
    contact_hours_label: 'Horaires',
    contact_hours:       'Lundi – Vendredi, 9h – 18h30',
    contact_wa:          'Écrire sur WhatsApp',

    /* Form */
    form_name_label:    'Nom complet',
    form_name_ph:       'Jean Dupont',
    form_email_label:   'Adresse email',
    form_email_ph:      'jean@exemple.com',
    form_phone_label:   'Téléphone',
    form_phone_ph:      '+212 6 00 00 00 00',
    form_service_label: 'Service souhaité',
    form_service_default: 'Sélectionner un service',
    form_svc1:          'Création d\'entreprise',
    form_svc2:          'Domiciliation',
    form_svc3:          'Audit',
    form_svc4:          'Fiscalité & Comptabilité',
    form_svc5:          'Juridique des entreprises',
    form_svc6:          'Conseil & Stratégie',
    form_svc7:          'Autre',
    form_msg_label:     'Votre message',
    form_msg_ph:        'Décrivez brièvement votre situation ou votre besoin…',
    form_submit:        'Envoyer ma demande',
    form_success:       'Merci ! Votre message a été envoyé. Nous vous répondons sous 24h.',

    /* Footer */
    footer_tagline:       'Audit, Fiscalité & Conseil pour entreprises ambitieuses à Marrakech.',
    footer_services_title:'Services',
    footer_svc1:          'Création d\'entreprise',
    footer_svc2:          'Domiciliation',
    footer_svc3:          'Audit financier',
    footer_svc4:          'Fiscalité & Comptabilité',
    footer_svc5:          'Juridique des entreprises',
    footer_svc6:          'Conseil & Stratégie',
    footer_cabinet_title: 'Le Cabinet',
    footer_cab1:          'À Propos',
    footer_cab2:          'Notre Méthode',
    footer_cab3:          'Secteurs',
    footer_cab4:          'Publications',
    footer_cab5:          'Contact',
    footer_contact_title: 'Contact',
    footer_hours:         'Lun – Ven, 9h – 18h30',
    footer_rights:        'Tous droits réservés.',
    footer_legal:         'Cabinet membre de l\'OPCA — Marrakech, Maroc',

    /* Form validation */
    err_required:     'Ce champ est obligatoire.',
    err_email:        'Veuillez saisir une adresse email valide.',
    err_name_short:   'Le nom doit comporter au moins 2 caractères.',
  },

  en: {
    /* Navigation */
    nav_home:     'Home',
    nav_about:    'About',
    nav_services: 'Services',
    nav_sectors:  'Sectors',
    nav_method:   'Method',
    nav_contact:  'Contact',
    nav_cta:      'Book a Consultation',

    /* Hero */
    hero_badge:       'Certified Firm · Marrakech',
    hero_title:       'Audit, Taxation &amp; Advisory for<br><em>Ambitious Businesses</em> in Morocco',
    hero_sub:         'We guide entrepreneurs, SMEs, and investors through accounting, tax, legal, and financial structuring for their businesses.',
    hero_cta1:        'Book a Consultation',
    hero_cta2:        'Explore Our Services',
    hero_stat1:       'Years of Experience',
    hero_stat2:       'Companies Served',
    hero_stat3:       'Sectors Covered',
    hero_card1_title: 'Tax Compliance',
    hero_card1_sub:   '100% up to date',
    hero_card2_title: 'OPCA Member',
    hero_card2_sub:   'Certified Accountant',

    /* Trust bar */
    trust1: 'Firm based in Marrakech',
    trust2: 'Certified member of OPCA Morocco',
    trust3: 'Tax & legal advisory',
    trust4: 'Various sectors & industries',

    /* About */
    about_label:        'About Us',
    about_title:        'A firm built around precision, compliance, and advisory excellence',
    about_lead:         'MCA Advisory is an accounting and advisory firm based in Marrakech, specializing in supporting entrepreneurs, SMEs, hotels, restaurants, and foreign investors in Morocco.',
    about_body1:        'We intervene across the entire business lifecycle: from incorporation and domiciliation, to bookkeeping, tax declarations, financial auditing, and strategic advisory.',
    about_body2:        'Our commitment: provide clear answers, tailored solutions, and consistent follow-up so every client can focus on their core business with full confidence.',
    about_certif_label: 'Certification',
    about_certif_text:  'Certified member of the Ordre des Professionnels Comptables Agréés (OPCA) of Morocco',
    founder_role:       'Founder & Certified Accountant',
    founder_quote:      '"Our mission is to give you the financial clarity you need to make the best decisions."',
    about_num1:         'Years of Experience',
    about_num2:         'Clients Served',
    about_num3:         'Compliance Guaranteed',

    /* Services section header */
    services_label:   'Our Services',
    services_title:   'A complete offering to structure and grow your business',
    services_sub:     'From company formation to strategic audit, we cover all your accounting, tax, and legal needs.',
    services_all_cta: 'Discuss Your Project',

    /* Why Us */
    whyus_label: 'Why Choose Us',
    whyus_title: 'Four pillars that define our approach',

    /* Process */
    process_label: 'Our Method',
    process_title: 'A structured 4-step engagement',
    process_sub:   'Every engagement starts with a deep understanding of your situation and concludes with ongoing rigorous follow-up.',

    /* Sectors */
    sectors_label: 'Sectors',
    sectors_title: 'Recognized sector expertise',
    sectors_sub:   'We support businesses across diverse sectors with deep knowledge of each industry\'s specific requirements.',

    /* Insights */
    insights_label: 'Resources & Insights',
    insights_title: 'Latest publications',
    insights_sub:   'Our analyses to better understand taxation, accounting, and business management in Morocco.',
    insights_cta:   'View all articles',

    /* CTA Banner */
    cta_label: 'Take action',
    cta_title: 'Need reliable accounting, tax, or legal advisory support?',
    cta_sub:   'Our experts are available to analyze your situation and propose tailored solutions.',
    cta_btn1:  'Schedule a Call',
    cta_btn2:  'WhatsApp',

    /* Contact */
    contact_label:       'Contact Us',
    contact_title:       'Let\'s Talk About Your Project',
    contact_intro:       'Have a question or need guidance? Our team will get back to you as quickly as possible.',
    contact_addr_label:  'Address',
    contact_phone_label: 'Phone',
    contact_email_label: 'Email',
    contact_hours_label: 'Office Hours',
    contact_hours:       'Monday – Friday, 9am – 6:30pm',
    contact_wa:          'Message on WhatsApp',

    /* Form */
    form_name_label:    'Full Name',
    form_name_ph:       'John Smith',
    form_email_label:   'Email Address',
    form_email_ph:      'john@example.com',
    form_phone_label:   'Phone Number',
    form_phone_ph:      '+212 6 00 00 00 00',
    form_service_label: 'Service Needed',
    form_service_default: 'Select a service',
    form_svc1:          'Company Formation',
    form_svc2:          'Domiciliation',
    form_svc3:          'Audit',
    form_svc4:          'Taxation & Accounting',
    form_svc5:          'Corporate Legal',
    form_svc6:          'Advisory & Strategy',
    form_svc7:          'Other',
    form_msg_label:     'Your Message',
    form_msg_ph:        'Briefly describe your situation or need…',
    form_submit:        'Send My Request',
    form_success:       'Thank you! Your message has been sent. We\'ll get back to you within 24h.',

    /* Footer */
    footer_tagline:       'Audit, Taxation & Advisory for ambitious businesses in Marrakech.',
    footer_services_title:'Services',
    footer_svc1:          'Company Formation',
    footer_svc2:          'Domiciliation',
    footer_svc3:          'Financial Audit',
    footer_svc4:          'Taxation & Accounting',
    footer_svc5:          'Corporate Legal',
    footer_svc6:          'Advisory & Strategy',
    footer_cabinet_title: 'The Firm',
    footer_cab1:          'About',
    footer_cab2:          'Our Method',
    footer_cab3:          'Sectors',
    footer_cab4:          'Publications',
    footer_cab5:          'Contact',
    footer_contact_title: 'Contact',
    footer_hours:         'Mon – Fri, 9am – 6:30pm',
    footer_rights:        'All rights reserved.',
    footer_legal:         'OPCA certified firm — Marrakech, Morocco',

    /* Form validation */
    err_required:     'This field is required.',
    err_email:        'Please enter a valid email address.',
    err_name_short:   'Name must be at least 2 characters.',
  }
};

/* ============================================================
   DYNAMIC DATA — Services, Pillars, Process, Sectors, Blog
   ============================================================ */

const data = {
  services: {
    fr: [
      {
        num: '01',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
        title: 'Création d\'entreprise',
        desc: 'Accompagnement complet de la demande de certificat négatif à la publication légale : choix de forme juridique, rédaction des statuts, immatriculation et formalités administratives.',
        link: '#contact'
      },
      {
        num: '02',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        title: 'Domiciliation des entreprises',
        desc: 'Mise à disposition d\'une adresse professionnelle prestigieuse à Marrakech avec gestion du courrier et support administratif permanent.',
        link: '#contact'
      },
      {
        num: '03',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
        title: 'Audit',
        desc: 'Diagnostic financier approfondi, revue de conformité réglementaire, évaluation des processus internes et identification des risques pour optimiser la performance de votre entreprise.',
        link: '#contact'
      },
      {
        num: '04',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 8h4M6 11h4M14 8h4M14 11h4"/></svg>`,
        title: 'Fiscalité & Comptabilité',
        desc: 'Tenue comptable rigoureuse, déclarations fiscales (IS, IR, TVA, patente), états financiers annuels et mise en conformité fiscale totale selon la réglementation marocaine.',
        link: '#contact'
      },
      {
        num: '05',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
        title: 'Juridique des entreprises',
        desc: 'Accompagnement en droit des affaires : rédaction de contrats commerciaux, assemblées générales, modifications statutaires, cessions de parts et gouvernance d\'entreprise.',
        link: '#contact'
      },
      {
        num: '06',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        title: 'Conseil & Stratégie',
        desc: 'Conseil personnalisé pour l\'optimisation fiscale, la structuration financière, la préparation à la croissance et l\'aide à la décision stratégique pour les dirigeants.',
        link: '#contact'
      }
    ],
    en: [
      {
        num: '01',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
        title: 'Company Formation',
        desc: 'Full assistance from negative certificate to legal publication: legal form selection, articles drafting, registration, and all administrative formalities.',
        link: '#contact'
      },
      {
        num: '02',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        title: 'Business Domiciliation',
        desc: 'Professional business address in Marrakech with mail management and permanent administrative support for your company.',
        link: '#contact'
      },
      {
        num: '03',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
        title: 'Audit',
        desc: 'In-depth financial diagnosis, regulatory compliance review, internal process evaluation, and risk identification to optimize your company\'s performance.',
        link: '#contact'
      },
      {
        num: '04',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 8h4M6 11h4M14 8h4M14 11h4"/></svg>`,
        title: 'Taxation & Accounting',
        desc: 'Rigorous bookkeeping, tax declarations (corporate, income, VAT), annual financial statements, and full tax compliance under Moroccan regulations.',
        link: '#contact'
      },
      {
        num: '05',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
        title: 'Corporate Legal',
        desc: 'Business law support: commercial contract drafting, general assemblies, statutory amendments, share transfers, and corporate governance.',
        link: '#contact'
      },
      {
        num: '06',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        title: 'Advisory & Strategy',
        desc: 'Personalized advisory for tax optimization, financial structuring, growth preparation, and strategic decision support for business leaders.',
        link: '#contact'
      }
    ]
  },

  pillars: {
    fr: [
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
        title: 'Conformité',
        desc: 'Nous veillons à ce que votre entreprise respecte l\'ensemble des obligations fiscales, comptables et juridiques en vigueur au Maroc.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
        title: 'Clarté',
        desc: 'Nous traduisons la complexité fiscale et comptable en informations claires, compréhensibles et actionnables pour chaque dirigeant.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        title: 'Réactivité',
        desc: 'Nous assurons un suivi proactif et répondons rapidement à vos besoins, notamment lors des échéances fiscales ou des situations urgentes.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
        title: 'Confidentialité',
        desc: 'Toutes les informations confiées à notre cabinet sont traitées avec la plus stricte discrétion professionnelle et une sécurité absolue.'
      }
    ],
    en: [
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
        title: 'Compliance',
        desc: 'We ensure your business meets all applicable tax, accounting, and legal obligations under Moroccan regulations.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
        title: 'Clarity',
        desc: 'We translate fiscal and accounting complexity into clear, understandable, and actionable information for every business leader.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        title: 'Responsiveness',
        desc: 'We provide proactive follow-up and respond quickly to your needs, especially around tax deadlines or urgent situations.'
      },
      {
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
        title: 'Confidentiality',
        desc: 'All information entrusted to our firm is treated with the strictest professional discretion and absolute security.'
      }
    ]
  },

  process: {
    fr: [
      {
        num: '01',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        title: 'Diagnostic',
        desc: 'Analyse approfondie de votre situation fiscale, comptable, juridique et financière. Identification des besoins prioritaires et des risques.'
      },
      {
        num: '02',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
        title: 'Plan d\'action',
        desc: 'Élaboration d\'une feuille de route personnalisée avec des objectifs clairs, un calendrier défini et les livrables attendus.'
      },
      {
        num: '03',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
        title: 'Exécution',
        desc: 'Mise en œuvre rigoureuse du plan d\'action : tenue comptable, déclarations, audits, rédaction de documents juridiques ou conseils stratégiques.'
      },
      {
        num: '04',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        title: 'Suivi & Reporting',
        desc: 'Rapports réguliers, points de suivi et ajustements continus pour garantir la conformité et la performance de votre entreprise dans la durée.'
      }
    ],
    en: [
      {
        num: '01',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        title: 'Diagnostic',
        desc: 'In-depth analysis of your tax, accounting, legal, and financial situation. Identification of priority needs and risks.'
      },
      {
        num: '02',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
        title: 'Action Plan',
        desc: 'Development of a personalized roadmap with clear objectives, a defined timeline, and expected deliverables.'
      },
      {
        num: '03',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
        title: 'Execution',
        desc: 'Rigorous implementation of the action plan: bookkeeping, declarations, audits, legal document drafting, or strategic advisory.'
      },
      {
        num: '04',
        icon: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        title: 'Monitoring & Reporting',
        desc: 'Regular reports, progress reviews, and ongoing adjustments to ensure compliance and sustained performance for your business.'
      }
    ]
  },

  sectors: {
    fr: [
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, name: 'Hôtellerie', sub: 'Hôtels & Riads' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`, name: 'Restauration', sub: 'Cafés & Restaurants' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`, name: 'Commerce', sub: 'Import & Export' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`, name: 'Industrie', sub: 'Production & Manufacture' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, name: 'Agriculture', sub: 'Agro-alimentaire' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`, name: 'Logistique', sub: 'Transport & Distribution' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, name: 'Startups & PME', sub: 'Innovation & Croissance' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, name: 'Investisseurs étrangers', sub: 'IDE & Implantation' }
    ],
    en: [
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, name: 'Hospitality', sub: 'Hotels & Riads' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`, name: 'Restaurants', sub: 'Cafés & Dining' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`, name: 'Trade & Commerce', sub: 'Import & Export' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`, name: 'Industry', sub: 'Production & Manufacturing' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, name: 'Agriculture', sub: 'Agri-food' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`, name: 'Logistics', sub: 'Transport & Distribution' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, name: 'Startups & SMEs', sub: 'Innovation & Growth' },
      { icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, name: 'Foreign Investors', sub: 'FDI & Setup' }
    ]
  },

  articles: {
    fr: [
      {
        cat: 'Création',
        date: 'Mai 2026',
        read: '5 min',
        title: 'Créer une SARL au Maroc : les étapes essentielles',
        excerpt: 'De la déclaration du nom commercial à l\'immatriculation au registre de commerce, découvrez le processus complet pour créer votre SARL au Maroc en toute conformité.',
        link: '#'
      },
      {
        cat: 'Fiscalité',
        date: 'Avr 2026',
        read: '7 min',
        title: 'TVA au Maroc : ce que les entrepreneurs doivent surveiller',
        excerpt: 'Taux applicables, régimes d\'exonération, obligations déclaratives et pièges à éviter : tout ce que vous devez savoir sur la TVA marocaine pour votre entreprise.',
        link: '#'
      },
      {
        cat: 'Audit',
        date: 'Mar 2026',
        read: '6 min',
        title: 'Pourquoi auditer votre entreprise avant une phase de croissance',
        excerpt: 'Avant de lever des fonds ou de vous développer, un audit préventif vous permet de corriger les anomalies, rassurer les investisseurs et sécuriser votre trajectoire.',
        link: '#'
      }
    ],
    en: [
      {
        cat: 'Formation',
        date: 'May 2026',
        read: '5 min',
        title: 'Forming an SARL in Morocco: The Essential Steps',
        excerpt: 'From trade name registration to commercial court filing, discover the complete process for incorporating your SARL in Morocco in full compliance.',
        link: '#'
      },
      {
        cat: 'Taxation',
        date: 'Apr 2026',
        read: '7 min',
        title: 'VAT in Morocco: What Entrepreneurs Must Watch',
        excerpt: 'Applicable rates, exemption regimes, filing obligations, and pitfalls to avoid — everything you need to know about Moroccan VAT for your business.',
        link: '#'
      },
      {
        cat: 'Audit',
        date: 'Mar 2026',
        read: '6 min',
        title: 'Why Audit Your Business Before a Growth Phase',
        excerpt: 'Before raising funds or expanding, a preventive audit helps you correct irregularities, reassure investors, and secure your growth trajectory.',
        link: '#'
      }
    ]
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = 'fr';

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  currentLang = lang;

  /* Update <html> lang attribute */
  document.documentElement.lang = lang;

  /* Update lang buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  /* Update all [data-i18n] text elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  /* Update all [data-i18n-html] HTML elements */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  /* Update all [data-i18n-placeholder] */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  /* Re-render dynamic sections */
  renderServices();
  renderPillars();
  renderProcess();
  renderSectors();
  renderArticles();

  /* Save preference */
  try { localStorage.setItem('mca_lang', lang); } catch(_) {}
}

/* ============================================================
   RENDER — Dynamic section generators
   ============================================================ */

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  const items = data.services[currentLang];
  const linkLabel = currentLang === 'fr' ? 'En savoir plus' : 'Learn more';
  const arrowSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

  grid.innerHTML = items.map((s, i) => `
    <article class="service-card" role="listitem" style="transition-delay:${i * 80}ms">
      <div class="service-icon" aria-hidden="true">${s.icon}</div>
      <div class="service-num">${s.num}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <a href="${s.link}" class="service-link">
        <span>${linkLabel}</span>
        ${arrowSvg}
      </a>
    </article>
  `).join('');

  observeCards(grid.querySelectorAll('.service-card'));
}

function renderPillars() {
  const grid = document.getElementById('pillars-grid');
  if (!grid) return;
  const items = data.pillars[currentLang];

  grid.innerHTML = items.map((p, i) => `
    <div class="pillar-card" role="listitem" style="transition-delay:${i * 100}ms">
      <div class="pillar-icon" aria-hidden="true">${p.icon}</div>
      <h3 class="pillar-title">${p.title}</h3>
      <p class="pillar-desc">${p.desc}</p>
    </div>
  `).join('');

  observeCards(grid.querySelectorAll('.pillar-card'));
}

function renderProcess() {
  const container = document.getElementById('process-steps');
  if (!container) return;
  const items = data.process[currentLang];

  container.innerHTML = items.map((s, i) => `
    <div class="process-step" role="listitem" style="transition-delay:${i * 100}ms">
      <div class="step-num-wrap">
        <span class="step-num">${s.num}</span>
        <div class="step-icon" aria-hidden="true">${s.icon}</div>
      </div>
      <h3 class="step-title">${s.title}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>
  `).join('');

  observeCards(container.querySelectorAll('.process-step'));
}

function renderSectors() {
  const grid = document.getElementById('sectors-grid');
  if (!grid) return;
  const items = data.sectors[currentLang];

  grid.innerHTML = items.map((s, i) => `
    <div class="sector-card" role="listitem" style="transition-delay:${i * 60}ms">
      <div class="sector-icon" aria-hidden="true">${s.icon}</div>
      <span class="sector-name">${s.name}</span>
      <span class="sector-sub">${s.sub}</span>
    </div>
  `).join('');

  observeCards(grid.querySelectorAll('.sector-card'));
}

function renderArticles() {
  const grid = document.getElementById('insights-grid');
  if (!grid) return;
  const items = data.articles[currentLang];
  const readLabel = currentLang === 'fr' ? 'de lecture' : 'read';
  const linkLabel = currentLang === 'fr' ? 'Lire l\'article' : 'Read article';
  const arrowSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

  grid.innerHTML = items.map((a, i) => `
    <article class="article-card" role="listitem" style="transition-delay:${i * 100}ms">
      <div class="article-img">
        <div class="article-img-inner"></div>
        <span class="article-cat">${a.cat}</span>
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span class="article-date">${a.date}</span>
          <span class="article-read">${a.read} ${readLabel}</span>
        </div>
        <h3 class="article-title">${a.title}</h3>
        <p class="article-excerpt">${a.excerpt}</p>
        <a href="${a.link}" class="article-link">
          <span>${linkLabel}</span>
          ${arrowSvg}
        </a>
      </div>
    </article>
  `).join('');

  observeCards(grid.querySelectorAll('.article-card'));
}

/* ============================================================
   INTERSECTION OBSERVER — Scroll reveal
   ============================================================ */
let revealObserver;
let cardObserver;

function initRevealObserver() {
  const opts = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, opts);

  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  /* Observe [data-reveal] elements */
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
}

function observeCards(cards) {
  if (!cardObserver) return;
  cards.forEach(card => {
    card.classList.remove('revealed');
    cardObserver.observe(card);
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('main-nav');
  const overlay = document.getElementById('nav-overlay');
  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    overlay.classList.add('visible');
    overlay.removeAttribute('aria-hidden');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  /* Close on nav link click */
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });
}

/* ============================================================
   STICKY HEADER — add class on scroll
   ============================================================ */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* ============================================================
   SMOOTH SCROLL — for all anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function updateVisibility() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateVisibility();
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');

  function getError(input) {
    const t = translations[currentLang];

    if (!input.value.trim() && input.required) return t.err_required;

    if (input.type === 'email' && input.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(input.value.trim())) return t.err_email;
    }

    if (input.id === 'f-name' && input.value.trim().length < 2 && input.value.trim()) {
      return t.err_name_short;
    }

    if (input.tagName === 'SELECT' && input.required && !input.value) return t.err_required;

    return '';
  }

  function showError(group, msg) {
    group.classList.toggle('error', !!msg);
    const errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
  }

  function validateField(input) {
    const group = input.closest('.form-group');
    if (!group) return true;
    const err = getError(input);
    showError(group, err);
    return !err;
  }

  /* Live validation on blur */
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(input => {
      if (!validateField(input)) valid = false;
    });

    if (!valid) {
      /* Focus first error field */
      const firstError = form.querySelector('.form-group.error input, .form-group.error select, .form-group.error textarea');
      if (firstError) firstError.focus();
      return;
    }

    /* Simulate form submission */
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'fr' ? 'Envoi en cours…' : 'Sending…';

    setTimeout(() => {
      form.reset();
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
      form.querySelectorAll('.form-error').forEach(e => { e.textContent = ''; });
      submitBtn.disabled = false;
      submitBtn.textContent = translations[currentLang].form_submit;

      if (successMsg) {
        successMsg.removeAttribute('hidden');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { successMsg.setAttribute('hidden', ''); }, 6000);
      }
    }, 1200);
  });
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   ACTIVE NAV LINK — highlight current section
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.style.color = href === `#${id}` ? 'var(--gold)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  /* Restore saved language preference */
  let savedLang = 'fr';
  try { savedLang = localStorage.getItem('mca_lang') || 'fr'; } catch(_) {}

  /* Initial render of dynamic sections */
  renderServices();
  renderPillars();
  renderProcess();
  renderSectors();
  renderArticles();

  /* Init all features */
  initRevealObserver();
  initMobileMenu();
  initStickyHeader();
  initSmoothScroll();
  initBackToTop();
  initContactForm();
  initActiveNav();
  setFooterYear();

  /* Apply language (updates text after render) */
  setLanguage(savedLang);

  /* Language switcher buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* Run on DOM ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
