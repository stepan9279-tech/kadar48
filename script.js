
    let currentLang = 'ru';
    let currentPage = 'home';
    let currentFilter = 'all';
    let currentProjectId = 'vracar-clinic';

    // Default Editable Site Configuration (Baked into static export when downloaded)
    /*__KADAR48_CMS_STATE_START__*/
    const defaultSiteConfig = {
      heroBadge: 'БЕЛГРАД · НОВИ-САД · СУБОТИЦА (ДРУГИЕ ГОРОДА — ПО ДОГОВОРЕННОСТИ)',
      heroTitleMain: 'Снимаем и монтируем видео для бизнеса и экспертов. Готовый материал —',
      heroTitleAccent: 'через 48 часов.',
      heroTitle: 'Снимаем и монтируем видео для бизнеса и экспертов. Готовый материал — <span class="font-serif italic font-normal">через 48 часов.</span>',
      heroLead: 'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
      heroNote: 'Привозим мобильный кино-свет с сотами, микрофоны, телесуфлер и две 4K-камеры прямо к вам в клинику, офис или студию — и отдаем готовый монтаж ровно через двое суток.',
      contactGeo: 'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
      blockStyles: {
        heroBadge: { font: 'mono', weight: '400', italic: false, sizeDesktop: 12, sizeMobile: 11, lineHeight: '1.4' },
        heroTitleMain: { font: 'sans', weight: '400', italic: false, sizeDesktop: 60, sizeMobile: 32, lineHeight: '1.08' },
        heroTitleAccent: { font: 'serif', weight: '400', italic: true, sizeDesktop: 62, sizeMobile: 34, lineHeight: '1.08' },
        heroLead: { font: 'sans', weight: '400', italic: false, sizeDesktop: 16, sizeMobile: 15, lineHeight: '1.6' },
        heroNote: { font: 'sans', weight: '400', italic: false, sizeDesktop: 16, sizeMobile: 14, lineHeight: '1.6' },
        contactGeo: { font: 'sans', weight: '400', italic: false, sizeDesktop: 14, sizeMobile: 13, lineHeight: '1.5' }
      },
      heroImg: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=85',
      studioImg1: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1400&q=85',
      studioImg2: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85',
      telegramHandle: '@kadar48_bg',
      whatsappNumber: '+381 62 840 48 48',
      emailAddress: 'hello@kadar48.rs',
      tgBotToken: '',
      tgChatId: '6903692674',
      webhookUrl: '',
      // Custom password hash (empty = uses default "kadar48admin")
      customPassHash: '',
      services: [
        {
          num: '01',
          price: '€60',
          ru: {
            title: '3 вертикальных видео',
            desc: 'Пробная выездная съемка: 1 час работы у вас в офисе, клинике или заведении со студийным светом, телесуфлером и петличками. Монтаж трех роликов с цветокоррекцией и субтитрами за 48 часов.'
          },
          sr: {
            title: '3 vertikalna videa',
            desc: 'Probno snimanje na vašoj lokaciji: 1 sat rada uz studijsku rasvetu, teleprompter i bubice. Montaža tri klipa sa kolor korekcijom i titlovima za 48 sati.'
          },
          en: {
            title: '3 Vertical Videos',
            desc: 'Introductory on-location session: 1 hour at your office, clinic, or venue with studio lighting, teleprompter, and wireless mics. Full edit of three videos in 48 hours.'
          }
        },
        {
          num: '02',
          price: '€180',
          ru: {
            title: '10 вертикальных видео',
            desc: 'Двухчасовая съемка на вашей локации в Белграде, Нови-Саде или Суботице. Мобильный мягкий свет, накамерный телесуфлер, запись с двух ракурсов и динамичный монтаж десяти роликов (Reels, Shorts, TikTok) за 48 часов.'
          },
          sr: {
            title: '10 vertikalnih videa',
            desc: 'Dvosatno snimanje na vašoj lokaciji u Beogradu, Novom Sadu ili Subotici. Mobilna meka rasveta, teleprompter, snimanje sa dve kamere i montaža deset klipova za 48 sati.'
          },
          en: {
            title: '10 Vertical Videos',
            desc: 'Two-hour shoot at your location in Belgrade, Novi Sad, or Subotica. Soft mobile lighting, lens teleprompter, two-camera capture, and dynamic editing of ten vertical videos in 48 hours.'
          }
        },
        {
          num: '03',
          price: '€270',
          ru: {
            title: '15 вертикальных видео и сценарии',
            desc: 'Разработка тем и написание сценариев под ваши задачи, 3 часа съемки на вашей локации или в интерьерной студии, монтаж пятнадцати роликов с аккуратной типографикой, саунд-дизайном и цветокоррекцией.'
          },
          sr: {
            title: '15 vertikalnih videa i scenariji',
            desc: 'Razvoj tema i pisanje scenarija, 3 sata snimanja na lokaciji ili u studiju, montaža petnaest klipova sa tipografijom, dizajnom zvuka i kolor korekcijom.'
          },
          en: {
            title: '15 Vertical Videos & Scripting',
            desc: 'Topic research and custom scriptwriting, 3 hours of filming on location or in an interior studio, and editing of fifteen videos with clean typography and color grading.'
          }
        },
        {
          num: '04',
          price: '€140',
          ru: {
            title: 'Запись подкаста или интервью',
            desc: 'Съемка до 1.5 часов в подобранной подкаст-студии на две камеры в 4K, многоканальная запись звука на рекордер, монтаж полного выпуска для YouTube и 4 вертикальных фрагментов. Аренда зала включена.'
          },
          sr: {
            title: 'Snimanje podkasta ili intervjua',
            desc: 'Snimanje do 1.5 sat u odabranom podkast studiju sa dve 4K kamere, višekanalni zvuk, montaža cele epizode i 4 vertikalna isečka. Zakup sale uključen.'
          },
          en: {
            title: 'Podcast or Interview Session',
            desc: 'Up to 1.5 hours of filming in a curated podcast studio on two 4K cameras, multi-track audio, full YouTube episode edit, and 4 vertical clips. Studio rental included.'
          }
        },
        {
          num: '05',
          price: 'По договоренности',
          price_sr: 'Po dogovoru',
          price_en: 'Custom quote',
          ru: {
            title: 'Выездная съемка в другом городе',
            desc: 'Работаем в Белграде, Нови-Саде и Суботице, а в остальные города выезжаем по договоренности со всем комплектом света, звука, стабилизатором и двумя камерами.'
          },
          sr: {
            title: 'Terensko snimanje u drugom gradu',
            desc: 'Radimo u Beogradu, Novom Sadu i Subotici, a u ostale gradove dolazimo po dogovoru sa kompletnom opremom.'
          },
          en: {
            title: 'On-Location Shoot in Other Cities',
            desc: 'We operate in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement with full lighting, audio, and two 4K cameras.'
          }
        }
      ]
    };
    /*__KADAR48_CMS_STATE_END__*/

    const i18n = {
      ru: {
        brand_country: 'БЕЛГРАД · НОВИ-САД · СУБОТИЦА',
        nav_home: 'Главная',
        nav_work: 'Работы',
        nav_services: 'Услуги и цены',
        nav_studio: 'Формат и техника',
        nav_contact: 'Контакты',
        nav_privacy: 'Политика конфиденциальности и Cookie',
        nav_cta: 'Обсудить съемку →',
        menu_open: 'Меню',
        menu_close: 'Закрыть',
        home_hero_badge: 'БЕЛГРАД · НОВИ-САД · СУБОТИЦА (ДРУГИЕ ГОРОДА — ПО ДОГОВОРЕННОСТИ)',
        home_hero_title_main: 'Снимаем и монтируем видео для бизнеса и экспертов. Готовый материал —',
        home_hero_title_accent: 'через 48 часов.',
        home_hero_title: 'Снимаем и монтируем видео для бизнеса и экспертов. Готовый материал — <span class="font-serif italic font-normal">через 48 часов.</span>',
        home_hero_lead: 'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
        home_hero_note: 'Привозим мобильный кино-свет с сотами, микрофоны, телесуфлер и две 4K-камеры прямо к вам в клинику, офис или студию — и отдаем готовый монтаж ровно через двое суток.',
        home_hero_link: 'Услуги и цены →',
        home_hero_caption: '<span>Белград · Нови-Сад · Суботица (выезд по договоренности)</span><span class="font-mono">4K S-Log3 / 48h Turnaround</span>',
        home_work_heading: 'Избранные проекты',
        home_work_intro: 'Работаем с клиниками, технологическими компаниями, авторами и локальным бизнесом, которым важна спокойная, взрослая подача в кадре.'
        home_all_work_link: 'Все работы (6) →',
        home_approach_title: 'Подход и стандарты',
        home_adv1_title: 'Развертывание за 15 минут',
        home_adv1_desc: 'Привозим компактный мягкий свет с сотами, петлички и накамерный телесуфлер прямо в ваш кабинет или офис.',
        home_adv2_title: 'Готовность за 48 часов',
        home_adv2_desc: 'Вместо ожидания неделями вы получаете готовые вертикальные ролики или смонтированный подкаст с цветокоррекцией, чистым звуком и субтитрами через двое суток.',
        home_adv3_title: 'Спокойная подача в кадре',
        home_adv3_desc: 'Работаем с врачами, предпринимателями и инженерами: выводим тезисы на телесуфлер перед объективом и помогаем говорить уверенно без заучивания текста.',
        home_bottom_prompt: 'Посмотрите стоимость съемочных форматов или список оборудования, с которым мы работаем.',
        home_to_services: 'Смотреть услуги и цены →',
        home_to_studio: 'Формат и техника →',
        work_page_title: 'Работы и <span class="font-serif italic font-normal">кейсы</span>',
        work_page_sub: 'Проекты в Белграде, Нови-Саде и Суботице. Выберите любой кейс, чтобы посмотреть задачу, особенности съемки и результат клиента.',
        filter_all: 'Все проекты',
        filter_reels: 'Reels / Эксперты',
        filter_podcast: 'Подкасты и YouTube',
        filter_brands: 'Бренды и недвижимость',
        proj_back: '← Все работы',
        proj_col_task: 'Задача',
        proj_col_shoot: 'Съемка и сценарий',
        proj_col_result: 'Результат в цифрах',
        proj_inquire_btn: 'Обсудить похожую съемку →',
        proj_next_label: 'Следующий проект:',
        services_page_title: 'Услуги и стоимость <span class="font-serif italic font-normal">работы</span>',
        services_page_sub: 'Прозрачная стоимость по объему готового материала. Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
        srv_book_link: 'Записаться на съемку →',
        srv_custom_box_title: 'Нужен нестандартный формат, другое количество роликов или выезд в другой город?',
        srv_custom_box_desc: 'В форме заявки вы можете выбрать «Свой вариант» и свободно описать задачу своими словами.',
        srv_custom_box_btn: 'Написать свой вариант →',
        services_portfolio_note: 'Примечание по спеццене (-30%): указана стартовая стоимость при условии согласия на публикацию роликов в открытом портфолио студии.',
        faq_heading: 'Частые вопросы и условия',
        faq_q1: 'В каких городах вы работаете?',
        faq_a1: 'Работаем в Белграде, Нови-Саде и Суботице, а в остальные города выезжаем по предварительной договоренности со всем комплектом света, звука и двумя камерами.',
        faq_q2: 'Я никогда не говорил на камеру. Как проходит запись?',
        faq_a2: 'Большинство наших клиентов — врачи, предприниматели и инженеры, а не профессиональные ведущие. Мы выводим тезисы или полный текст на накамерный телесуфлер прямо перед объективом и помогаем поймать спокойный, естественный темп речи.',
        faq_q3: 'Как происходит оплата и на каких языках вы работаете?',
        faq_a3: 'Принимаем оплату на счет (Preduzetnik / D.O.O. в динарах RSD), переводом на карту или наличными в евро и динарах. Снимаем и верстаем субтитры на русском, сербском и английском языках.',
        studio_page_title: 'Мобильный продакшн и <span class="font-serif italic font-normal">студии</span>',
        studio_page_lead: 'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности. Привозим свет и звук на вашу локацию или бронируем интерьерную студию.',
        studio_img1_cap: 'Выездной сетап: разворачиваем студийный свет, звук и суфлер в вашем офисе или клинике за 15 минут',
        studio_img2_cap: 'Для подкастов подбираем залы в Белграде, Нови-Саде и Суботице под визуальный стиль вашего проекта',
        studio_process_heading: 'Четыре этапа работы',
        step1_title: 'Сценарии и подготовка',
        step1_desc: 'Созваниваемся на 20–30 минут, разбираем вашу нишу, формулируем темы и готовим чистую структуру текста для телесуфлера.',
        step2_title: 'Выезд или запись в студии',
        step2_desc: 'Приезжаем к вам в офис, клинику или квартиру в Белграде, Нови-Саде или Суботице (другие города — по договоренности) либо встречаемся в студии.',
        step3_title: 'Монтаж за 48 часов',
        step3_desc: 'Выполняем динамичную склейку с двух камер, цветокоррекцию из профиля S-Log3, чистку и мастеринг голоса, а также верстку субтитров.',
        step4_title: 'Готовый архив',
        step4_desc: 'Ровно через 48 часов вы получаете ссылку на облачную папку с готовыми к публикации вертикальными видео или полным выпуском подкаста.',
        studio_tech_heading: 'Техническая спецификация',
        studio_tech_sub: 'Компактный комплект оборудования, позволяющий быстро развернуть студийную картинку и чистый звук на любой локации.',
        spec_cam_label: 'Камеры и оптика',
        spec_cam_val: '2× Sony ZV-E10 (4K S-Log3) / Светосильный фикс 33mm f/1.4 + 16-50mm',
        spec_stab_label: 'Стабилизация и охлаждение',
        spec_stab_val: 'Трехосевой стабилизатор DJI RS 3 Mini / Активное охлаждение Ulanzi + питание USB-C PD',
        spec_light_label: 'Мобильный кино-свет',
        spec_light_val: 'Компактный COB-моноблок 100W с купольным софтбоксом 60 см и сотами / Контровой аккумуляторный свет Ulanzi 40W Pro / 2× RGB-трубки Ulanzi VL119',
        spec_audio_label: 'Запись звука',
        spec_audio_val: 'Радиосистема Hollyland Lark M2 (для Reels) / 2× динамических микрофона Fifine K688 + рекордер Zoom PodTrak P4 (для подкастов)',
        spec_prompter_label: 'Суфлер и контроль',
        spec_prompter_val: 'Накамерный телесуфлер Ulanzi с Bluetooth-пультом управления',
        contact_page_title: 'Обсудить <span class="font-serif italic font-normal">съемку</span>',
        contact_geo: 'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
        contact_hours: 'Понедельник – Суббота, 10:00 – 21:00',
        form_intro: 'Оставьте контакт, выберите город и формат (или напишите свой вариант задачи) — мы свяжемся с вами, покажем примеры роликов и согласуем день записи.',
        form_name_label: 'Имя *',
        form_city_label: 'Город съемки *',
        city_bg: 'Белград',
        city_ns: 'Нови-Сад',
        city_su: 'Суботица',
        city_other: 'Другой город (по договоренности)',
        ph_custom_city: 'Напишите город или локацию (по договоренности) *',
        ph_custom_format: 'Опишите ваш вариант задачи или нужное количество видео *',
        ph_contact: '@username / +381...',
        form_contact_label: 'Telegram, WhatsApp или телефон *',
        form_format_label: 'Формат и объем работы *',
        form_custom_toggle: 'Написать свой вариант',
        form_custom_format_label: 'Опишите ваш вариант, задачу или нужное количество видео *',
        opt_custom_service: 'Свой вариант (написать задачу или формат вручную)',
        form_note_label: 'Комментарий или ссылка на ваш проект (необязательно)',
        form_submit: 'Отправить заявку',
        form_thanks_title: 'Спасибо. Заявка сохранена и передана продюсеру.',
        form_thanks_body: 'Мы напишем вам в течение двух часов в рабочее время, чтобы обсудить город, локацию и удобное время съемки. Вы можете отозвать согласие в любой момент, написав на privacy@kadar48.rs.',
        form_reset_btn: 'Отправить еще одно сообщение',
        chk_pd_prefix: 'Я даю',
        chk_pd_link1: 'Согласие на обработку персональных данных',
        chk_pd_mid: 'и соглашаюсь с',
        chk_pd_link2: 'Политикой конфиденциальности',
        chk_msg_label: 'Согласен на получение ответа и расчета сметы через указанный мессенджер (Telegram / WhatsApp), включая трансграничную передачу сообщения (ст. 12 152-ФЗ РФ / ст. 49 GDPR) *',
        form_error_msg: 'Пожалуйста, заполните обязательные поля (включая свой вариант, если он выбран) и отметьте оба согласия.',
        modal_req_title: 'Быстрая заявка на съемку',
        modal_close_btn: 'Закрыть',
        cookie_banner_text: 'Мы используем только технические файлы Cookie для запоминания языка и вашего выбора конфиденциальности. Аналитические и маркетинговые скрипты отключены по умолчанию и активируются только с вашего согласия. Подробнее в',
        cookie_banner_link: 'Политике конфиденциальности',
        cookie_btn_accept: 'Принять все',
        cookie_btn_reject: 'Отклонить все',
        cookie_btn_custom: 'Настроить',
        cookie_modal_heading: 'Настройки файлов Cookie',
        cookie_cat1_title: '1. Строго необходимые (Технические)',
        cookie_cat1_desc: 'Необходимы для работы навигации, переключения языка (RU/SR/EN) и сохранения вашего выбора конфиденциальности в localStorage. Не передают данные третьим лицам.',
        cookie_cat2_title: '2. Аналитика и статистика',
        cookie_cat2_desc: 'Помогают понимать, какие кейсы и разделы сайта просматривают чаще всего (по умолчанию отключены).',
        cookie_cat3_title: '3. Маркетинг и внешние медиа',
        cookie_cat3_desc: 'Используются для внешних видеоплееров и оценки эффективности рекламных кампаний (по умолчанию отключены).',
        cookie_save_custom: 'Сохранить выбор',
        footer_cities: 'Белград · Нови-Сад · Суботица (другие города — по договоренности)',
        footer_privacy_link: 'Политика конфиденциальности и Cookie (GDPR / ZZPL / 152-ФЗ)',
        footer_consent_link: 'Согласие на обработку ПДн',
        footer_cookie_btn: 'Настройки Cookie',
        legal_back_btn: '← Вернуться к форме заявки',
        privacy_page_title: 'Политика конфиденциальности и <span class="font-serif italic font-normal">файлов Cookie</span>',
        privacy_page_sub: 'Настоящая Политика разработана в соответствии с Общим регламентом по защите данных ЕС (Regulation (EU) 2016/679 — GDPR), Законом о защите персональных данных Республики Сербия («Сл. гласник РС», бр. 87/2018 — ZZPL) и Федеральным законом РФ от 27.07.2006 № 152-ФЗ «О персональных данных».',
        priv_s1_title: 'Оператор персональных данных (Data Controller)',
        priv_s1_body: '<p class="text-ink font-medium">KADAR 48 Production (PR Studio za kinematografsku i video produkciju KADAR 48 Beograd)</p><p>Юридический адрес: Vračar, 11000 Beograd, Republika Srbija.</p><p class="font-mono text-xs text-ink">PIB: 114289402 · Matični broj: 67419280 · E-mail по вопросам защиты данных (DPO): privacy@kadar48.rs</p><p>Оператор самостоятельно определяет цели и способы обработки персональных данных посетителей сайта и заказчиков услуг видеопродакшна.</p>',
        priv_s2_title: 'Правовые основания обработки',
        priv_s2_body: '<p>• <strong class="text-ink font-normal">Европейский союз (GDPR, ст. 6(1)(a), 6(1)(b)):</strong> явное, свободно выраженное согласие субъекта данных при отправке формы заявки и преддоговорные отношения по расчету сметы съемки.</p><p>• <strong class="text-ink font-normal">Республика Сербия (ZZPL, чл. 12 и чл. 15):</strong> обработка с согласия физического лица или для исполнения договора на территории Сербии с соблюдением прав, контролируемых Уполномоченным (Повереник за информације од јавног значаја и заштиту података о личности).</p><p>• <strong class="text-ink font-normal">Российская Федерация (152-ФЗ «О персональных данных», ст. 6, ст. 9, ст. 10.1, ст. 12):</strong> обработка на основании отдельного непредзаполненного согласия пользователя без распространения данных неограниченному кругу лиц.</p>',
        priv_s3_title: 'Какие данные собираются и цели обработки',
        priv_s3_body: '<p>Мы соблюдаем принцип минимизации данных (Data Minimization) и обрабатываем только те сведения, которые вы вводите добровольно:</p><ul class="list-disc pl-5 space-y-1.5"><li>Имя (или псевдоним) для обращения к вам;</li><li>Контактный идентификатор (имя пользователя Telegram, номер WhatsApp, телефон или адрес электронной почты);</li><li>Выбранный город, формат съемки и комментарий к задаче;</li><li>Техническая запись о факте и времени предоставления согласия на обработку ПДн и настройках Cookie в <code class="font-mono text-xs">localStorage</code> вашего браузера.</li></ul><p>Цели обработки строго ограничены: обратная связь по вашему запросу, расчет стоимости видеосъемки, согласование даты записи и заключение договора.</p>',
        priv_s4_title: 'Трансграничная передача и связь через мессенджеры',
        priv_s4_body: '<p>1. <strong class="text-ink font-normal">Отсутствие скрытых трекеров по умолчанию:</strong> на сайте не активируются сторонние рекламные и аналитические скрипты (Google Analytics, Meta Pixel и др.) без вашего предварительного явного согласия в окне управления Cookie.</p><p>2. <strong class="text-ink font-normal">Трансграничная обработка (ст. 12 152-ФЗ / ст. 49 GDPR):</strong> поскольку студия KADAR 48 физически расположена и оказывает услуги в Республике Сербия (государстве — участнике Конвенции Совета Европы № 108), отправка заявки означает ваше информированное согласие на обработку обращения оператором в Республике Сербия.</p><p>3. <strong class="text-ink font-normal">Связь через мессенджеры:</strong> при указании контакта в Telegram или WhatsApp связь осуществляется только при наличии вашей отдельной отметки о согласии на получение ответа через выбранный мессенджер.</p>',
        priv_s5_title: 'Политика файлов Cookie (ePrivacy & GDPR)',
        priv_s5_intro: 'Мы не используем принудительные Cookie-стены (Cookie Walls). Вы можете пользоваться всеми разделами сайта при полном отказе от необязательных файлов Cookie.',
        priv_s5_table: '<div class="p-4 bg-surface/60 grid grid-cols-1 sm:grid-cols-12 gap-2 font-medium text-ink"><div class="sm:col-span-4">Категория</div><div class="sm:col-span-5">Назначение и хранение</div><div class="sm:col-span-3 sm:text-right">Статус по умолчанию</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">1. Строго необходимые</div><div class="sm:col-span-5 text-muted">Сохранение выбранного языка (<code class="font-mono">kadar48_lang</code>) и вашего решения по баннеру Cookie (<code class="font-mono">kadar48_cookie_consent</code>) в течение 180 дней.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-ink">Всегда активны</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">2. Аналитические</div><div class="sm:col-span-5 text-muted">Анонимизированный подсчет посещаемости страниц без передачи IP-адресов рекламным сетям.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Отключены (Opt-in)</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">3. Маркетинговые и медиа</div><div class="sm:col-span-5 text-muted">Встраиваемые внешние видеоплееры и пиксели ретаргетинга.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Отключены (Opt-in)</div></div>',
        priv_btn_open_cookies: 'Изменить настройки Cookie прямо сейчас',
        priv_btn_to_consent: 'Открыть текст Согласия на обработку ПДн →',
        priv_s6_title: 'Ваши права и отзыв согласия в 1 клик',
        priv_s6_body: '<p>В соответствии со ст. 15–22 GDPR, Законом ZZPL Сербии и ст. 14 152-ФЗ РФ вы имеете право:</p><ul class="list-disc pl-5 space-y-1.5"><li>Запросить копию ваших персональных данных, обрабатываемых студией, или потребовать их исправления;</li><li>Потребовать полного удаления данных («право на забвение» / Right to Erasure) в течение 72 часов с момента обращения;</li><li>Отозвать согласие на обработку персональных данных, отправив письмо в свободной форме на <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a>, или сбросить настройки Cookie кнопкой ниже.</li></ul>',
        priv_btn_revoke: 'Отозвать и сбросить все Cookie-согласия в 1 клик',
        consent_doc_title: 'Согласие на обработку <span class="font-serif italic font-normal">персональных данных</span>',
        consent_doc_intro: 'Физическое лицо (пользователь веб-сайта <span class="font-mono">kadar48.rs</span>), заполняя веб-форму заявки и проставляя отметку (галочку) в поле согласия, действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, предоставляет свое конкретное, предметное, информированное и однозначное согласие Оператору:',
        consent_doc_operator: '<p class="font-medium">Оператор: KADAR 48 Production (Beograd, Republika Srbija, PIB 114289402)</p><p>Контактный адрес для обращений субъектов персональных данных: <span class="font-mono">privacy@kadar48.rs</span></p>',
        consent_doc_s1: '<h2 class="text-lg font-normal text-ink">1. Перечень обрабатываемых персональных данных</h2><p>Согласие дается на обработку следующих категорий персональных данных (не являющихся специальными или биометрическими):</p><ul class="list-disc pl-5 space-y-1"><li>Имя (или имя/название проекта, указанное пользователем);</li><li>Номер телефона и/или идентификатор в мессенджере (Telegram / WhatsApp) и/или адрес электронной почты;</li><li>Сведения о выбранном городе, формате видеосъемки и описание задачи;</li><li>Технические метаданные отправки формы (дата, время, выбранный язык интерфейса).</li></ul>',
        consent_doc_s2: '<h2 class="text-lg font-normal text-ink">2. Цели обработки персональных данных</h2><p>Персональные данные обрабатываются исключительно в целях:</p><ul class="list-disc pl-5 space-y-1"><li>Связи с пользователем для консультации по услугам видеосъемки и монтажа;</li><li>Направления расчета стоимости (сметы), примеров работ и согласования даты съемки;</li><li>Подготовки и заключения договора на оказание услуг видеопродакшна.</li></ul>',
        consent_doc_s3: '<h2 class="text-lg font-normal text-ink">3. Перечень действий и трансграничная передача (ст. 12 152-ФЗ РФ / GDPR)</h2><p>В ходе обработки с персональными данными будут совершаться следующие действия: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, блокирование, удаление и уничтожение.</p><p>Пользователь проинформирован и соглашается с тем, что Оператор зарегистрирован и осуществляет деятельность на территории Республики Сербия (государства — участника Конвенции Совета Европы о защите физических лиц при автоматизированной обработке персональных данных). При выборе связи через мессенджеры Telegram или WhatsApp пользователь дает отдельное согласие на получение ответа через соответствующий мессенджер.</p>',
        consent_doc_s4: '<h2 class="text-lg font-normal text-ink">4. Срок действия согласия и порядок его отзыва</h2><p>Настоящее согласие действует в течение 12 (двенадцати) месяцев с момента отправки заявки либо до момента достижения цели обработки или отзыва согласия субъектом персональных данных.</p><p>Согласие может быть отозвано в любой момент путем направления электронного письма на адрес <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a> с пометкой «Отзыв согласия на обработку ПДн». В случае отзыва согласия Оператор прекращает обработку и уничтожает персональные данные в срок, не превышающий 3 (трех) рабочих дней.</p>',
        consent_to_priv_btn: 'Перейти к Политике конфиденциальности и Cookie →',
        consent_to_contact_btn: 'Вернуться в Контакты →'
      },
      sr: {
        brand_country: 'BEOGRAD · NOVI SAD · SUBOTICA',
        nav_home: 'Početna',
        nav_work: 'Radovi',
        nav_services: 'Usluge i cene',
        nav_studio: 'Format i oprema',
        nav_contact: 'Kontakt',
        nav_privacy: 'Politika privatnosti i kolačića',
        nav_cta: 'Zakažite snimanje →',
        menu_open: 'Meni',
        menu_close: 'Zatvori',
        home_hero_badge: 'BEOGRAD · NOVI SAD · SUBOTICA (OSTALI GRADOVI — PO DOGOVORU)',
        home_hero_title_main: 'Snimanje i montaža video sadržaja za biznise i eksperte. Gotov materijal —',
        home_hero_title_accent: 'za 48 sati.',
        home_hero_title: 'Snimanje i montaža video sadržaja za biznise i eksperte. Gotov materijal — <span class="font-serif italic font-normal">za 48 sati.</span>',
        home_hero_lead: 'Radimo u Beogradu, Novom Sadu i Subotici, a u ostale gradove dolazimo po dogovoru.',
        home_hero_note: 'Donosimo studijsku rasvetu sa saćem, bežični zvuk, teleprompter i dve 4K kamere direktno u vašu kliniku, kancelariju ili studio — i isporučujemo montirane klipove za 48 sati.',
        home_hero_link: 'Usluge i cene →',
        home_hero_caption: '<span>Beograd · Novi Sad · Subotica (dolazak po dogovoru)</span><span class="font-mono">4K S-Log3 / 48h Turnaround</span>',
        home_work_heading: 'Izabrani radovi',
        home_work_intro: 'Radimo sa klinikama, IT kompanijama, autorima i biznisima u Beogradu, Novom Sadu i Subotici.',
        home_all_work_link: 'Svi radovi (6) →',
        home_approach_title: 'Pristup i standardi',
        home_adv1_title: 'Postavka za 15 minuta',
        home_adv1_desc: 'Donosimo meku rasvetu sa saćem, bubice i teleprompter direktno u vašu ordinaciju ili kancelariju.',
        home_adv2_title: 'Gotova montaža za 48 sati',
        home_adv2_desc: 'Umesto čekanja nedeljama, dobijate kompletno montirane vertikalne klipove ili podkast sa kolor korekcijom, čistim tonom i titlovima za 48 sati.',
        home_adv3_title: 'Prirodan nastup pred kamerom',
        home_adv3_desc: 'Radimo sa lekarima, preduzetnicima i inženjerima: tekst ide na teleprompter ispred objektiva za miran i siguran govor.',
        home_bottom_prompt: 'Pogledajte cene formata snimanja ili tehničku specifikaciju naše opreme.',
        home_to_services: 'Pogledajte usluge i cene →',
        home_to_studio: 'Format i oprema →',
        work_page_title: 'Radovi i <span class="font-serif italic font-normal">studije slučaja</span>',
        work_page_sub: 'Projekti u Beogradu, Novom Sadu i Subotici. Izaberite projekat za detaljan prikaz zadatka i rezultata.',
        filter_all: 'Svi projekti',
        filter_reels: 'Reels / Eksperti',
        filter_podcast: 'Podkasti i YouTube',
        filter_brands: 'Brendovi i nekretnine',
        proj_back: '← Svi radovi',
        proj_col_task: 'Zadatak',
        proj_col_shoot: 'Snimanje i scenario',
        proj_col_result: 'Rezultat u brojkama',
        proj_inquire_btn: 'Zakažite slično snimanje →',
        proj_next_label: 'Sledeći projekat:',
        services_page_title: 'Usluge i cene <span class="font-serif italic font-normal">rada</span>',
        services_page_sub: 'Jasne cene prema obimu gotovog materijala. Radimo u Beogradu, Novom Sadu i Subotici, a u ostale gradove dolazimo po dogovoru.',
        srv_book_link: 'Zakažite termin →',
        srv_custom_box_title: 'Potreban vam je poseban format, drugačiji broj klipova ili snimanje u drugom gradu?',
        srv_custom_box_desc: 'U formi možete izabrati „Sopstvena opcija“ i slobodno opisati vaš zadatak.',
        srv_custom_box_btn: 'Napišite svoj zahtev →',
        services_portfolio_note: 'Napomena o portfolio ceni (-30%): navedene su početne cene za projekte koji su otvoreni za objavu u portfoliju studija.',
        faq_heading: 'Česta pitanja i uslovi',
        faq_q1: 'U kojim gradovima radite?',
        faq_a1: 'Radimo u Beogradu, Novom Sadu i Subotici, a u ostale gradove dolazimo po dogovoru sa kompletnom mobilnom rasvetom, zvukom i kamerama.',
        faq_q2: 'Nikada nisam govorio pred kamerom. Kako izgleda snimanje?',
        faq_a2: 'Tekst ili teze idu na teleprompter ispred objektiva, a tokom snimanja vam pomažemo da zadržite miran i prirodan ton.',
        faq_q3: 'Kako funkcioniše plaćanje i na kojim jezicima radite?',
        faq_a3: 'Plaćanje je moguće preko računa (Preduzetnik / D.O.O. u RSD), karticom ili gotovinom. Snimamo i izrađujemo titlove na srpskom, ruskom i engleskom jeziku.',
        studio_page_title: 'Mobilna produkcija i <span class="font-serif italic font-normal">studiji</span>',
        studio_page_lead: 'Radimo u Beogradu, Novom Sadu i Subotici, u ostale gradove dolazimo po dogovoru. Donosimo rasvetu i zvuk na vašu lokaciju ili biramo podkast studio.',
        studio_img1_cap: 'Mobilni setap: postavljamo studijsko svetlo, zvuk i teleprompter u vašem prostoru za 15 minuta',
        studio_img2_cap: 'Za podkaste biramo studije u Beogradu, Novom Sadu i Subotici koji odgovaraju vašem projektu',
        studio_process_heading: 'Četiri koraka rada',
        step1_title: 'Scenariji i priprema',
        step1_desc: 'Kratak poziv od 20–30 minuta, definisanje tema i priprema jasnog teksta za teleprompter.',
        step2_title: 'Snimanje na lokaciji ili u studiju',
        step2_desc: 'Dolazimo u vaš prostor u Beogradu, Novom Sadu ili Subotici (ostali gradovi po dogovoru) — ili snimamo u pripremljenom podkast studiju.',
        step3_title: 'Montaža za 48 sati',
        step3_desc: 'Dinamična montaža sa dve kamere, kolor korekcija iz S-Log3 profila, obrada glasa i izrada titlova.',
        step4_title: 'Gotova arhiva',
        step4_desc: 'Tačno 48 sati nakon snimanja dobijate cloud folder sa spremnim vertikalnim klipovima ili celom epizodom.',
        studio_tech_heading: 'Tehnička specifikacija',
        studio_tech_sub: 'Kompaktan komplet opreme koji omogućava brzu postavku studijske slike i čistog tona na svakoj lokaciji.',
        spec_cam_label: 'Kamere i optika',
        spec_cam_val: '2× Sony ZV-E10 (4K S-Log3) / Svetlosno jak portretni objektiv 33mm f/1.4 + 16-50mm',
        spec_stab_label: 'Stabilizacija i hlađenje',
        spec_stab_val: 'Troosni gimbal DJI RS 3 Mini / Aktivno hlađenje Ulanzi + napajanje USB-C PD',
        spec_light_label: 'Mobilna kino-rasveta',
        spec_light_val: 'Kompaktni COB-monoblok 100W sa kupolastim softboksom 60 cm i saćem / Akumulatorsko kontrasvetlo Ulanzi 40W Pro / 2× RGB cevi Ulanzi VL119',
        spec_audio_label: 'Snimanje zvuka',
        spec_audio_val: 'Bežični sistem Hollyland Lark M2 (za Reels) / 2× dinamička mikrofona Fifine K688 + rekorder Zoom PodTrak P4 (za podkaste)',
        spec_prompter_label: 'Teleprompter i kontrola',
        spec_prompter_val: 'Teleprompter na kameri Ulanzi sa Bluetooth daljinskim upravljačem',
        contact_page_title: 'Zakažite <span class="font-serif italic font-normal">snimanje</span>',
        contact_geo: 'Radimo u Beogradu, Novom Sadu i Subotici, a u ostale gradove dolazimo po dogovoru.',
        contact_hours: 'Ponedeljak – Subota, 10:00 – 21:00',
        form_intro: 'Ostavite kontakt, izaberite grad i format (ili napišite svoju opciju) — javićemo vam se sa primerima i dogovoriti termin snimanja.',
        form_name_label: 'Ime *',
        form_city_label: 'Grad snimanja *',
        city_bg: 'Beograd',
        city_ns: 'Novi Sad',
        city_su: 'Subotica',
        city_other: 'Drugi grad (po dogovoru)',
        ph_custom_city: 'Napišite grad ili lokaciju (po dogovoru) *',
        ph_custom_format: 'Opišite vaš zahtev, format ili broj klipova *',
        ph_contact: '@korisnik / +381...',
        form_contact_label: 'Telegram, WhatsApp ili telefon *',
        form_format_label: 'Format i obim rada *',
        form_custom_toggle: 'Napišite svoju opciju',
        form_custom_format_label: 'Opišite vaš zahtev, format ili broj klipova *',
        opt_custom_service: 'Sopstvena opcija (ručni unos zadatka ili formata)',
        form_note_label: 'Napomena ili link ka projektu (opciono)',
        form_submit: 'Pošaljite upit',
        form_thanks_title: 'Hvala. Upit i saglasnost su evidentirani.',
        form_thanks_body: 'Javićemo vam se u roku od dva sata. Saglasnost možete opozvati u svakom trenutku putem privacy@kadar48.rs.',
        form_reset_btn: 'Pošaljite još jednu poruku',
        chk_pd_prefix: 'Dajem',
        chk_pd_link1: 'Saglasnost za obradu podataka o ličnosti',
        chk_pd_mid: 'i prihvatam',
        chk_pd_link2: 'Politiku privatnosti',
        chk_msg_label: 'Saglasan sam da odgovor i ponudu dobijem putem izabranog mesindžera (Telegram / WhatsApp) *',
        form_error_msg: 'Molimo popunite obavezna polja i označite obe saglasnosti pre slanja.',
        modal_req_title: 'Brzi upit za snimanje',
        modal_close_btn: 'Zatvori',
        cookie_banner_text: 'Koristimo samo tehničke kolačiće za pamćenje jezika i vašeg izbora privatnosti. Analitički i marketinški skriptovi su isključeni podrazumevano. Više u',
        cookie_banner_link: 'Politici privatnosti',
        cookie_btn_accept: 'Prihvati sve',
        cookie_btn_reject: 'Odbij sve',
        cookie_btn_custom: 'Podešavanja',
        cookie_modal_heading: 'Podešavanja kolačića (Cookies)',
        cookie_cat1_title: '1. Neophodni (Tehnički)',
        cookie_cat1_desc: 'Neophodni za navigaciju, izbor jezika i čuvanje vašeg izbora privatnosti u localStorage.',
        cookie_cat2_title: '2. Analitika i statistika',
        cookie_cat2_desc: 'Pomažu nam da razumemo koje stranice se najviše posećuju (isključeni podrazumevano).',
        cookie_cat3_title: '3. Marketing i eksterni mediji',
        cookie_cat3_desc: 'Koriste se za eksterne video plejere i merenje kampanja (isključeni podrazumevano).',
        cookie_save_custom: 'Sačuvaj izbor',
        footer_cities: 'Beograd · Novi Sad · Subotica (ostali gradovi — po dogovoru)',
        footer_privacy_link: 'Politika privatnosti i kolačića (GDPR / ZZPL / 152-FZ)',
        footer_consent_link: 'Saglasnost za obradu podataka',
        footer_cookie_btn: 'Podešavanja kolačića',
        legal_back_btn: '← Nazad na formular',
        privacy_page_title: 'Politika privatnosti i <span class="font-serif italic font-normal">kolačića (Cookies)</span>',
        privacy_page_sub: 'Ova Politika je izrađena u skladu sa Opštom uredbom o zaštiti podataka EU (Regulation (EU) 2016/679 — GDPR), Zakonom o zaštiti podataka o ličnosti Republike Srbije („Sl. glasnik RS“, br. 87/2018 — ZZPL) i zakonodavstvom o zaštiti podataka o ličnosti (152-FZ).',
        priv_s1_title: 'Rukovalac podacima o ličnosti (Data Controller)',
        priv_s1_body: '<p class="text-ink font-medium">KADAR 48 Production (PR Studio za kinematografsku i video produkciju KADAR 48 Beograd)</p><p>Sedište: Vračar, 11000 Beograd, Republika Srbija.</p><p class="font-mono text-xs text-ink">PIB: 114289402 · Matični broj: 67419280 · Kontakt za zaštitu podataka (DPO): privacy@kadar48.rs</p><p>Rukovalac samostalno određuje svrhu i način obrade podataka o ličnosti posetilaca sajta i klijenata video produkcije.</p>',
        priv_s2_title: 'Pravni osnov obrade podataka',
        priv_s2_body: '<p>• <strong class="text-ink font-normal">Evropska unija (GDPR, čl. 6(1)(a), 6(1)(b)):</strong> izričit, slobodno dat pristanak lica pri slanju kontakt forme i predugovorne radnje radi obračuna cene snimanja.</p><p>• <strong class="text-ink font-normal">Republika Srbija (ZZPL, čl. 12 i čl. 15):</strong> obrada uz pristanak fizičkog lica ili radi izvršenja ugovora na teritoriji Srbije uz poštovanje prava koja nadzire Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti.</p><p>• <strong class="text-ink font-normal">Međunarodna usklađenost (152-FZ):</strong> obrada na osnovu posebne saglasnosti korisnika bez distribucije podataka trećim licima.</p>',
        priv_s3_title: 'Koji podaci se prikupljaju i svrha obrade',
        priv_s3_body: '<p>Poštujemo princip minimizacije podataka (Data Minimization) i obrađujemo samo podatke koje dobrovoljno unesete:</p><ul class="list-disc pl-5 space-y-1.5"><li>Ime (ili naziv projekta/kompanije) radi obraćanja;</li><li>Kontakt identifikator (Telegram korisničko ime, WhatsApp broj, telefon ili e-mail adresa);</li><li>Izabrani grad snimanja, format usluge i napomena uz upit;</li><li>Tehnički zapis o vremenu davanja saglasnosti i podešavanjima kolačića u <code class="font-mono text-xs">localStorage</code> vašeg pregledača.</li></ul><p>Svrha obrade je isključivo odgovor na vaš upit, izrada ponude za snimanje, zakazivanje termina i zaključenje ugovora.</p>',
        priv_s4_title: 'Prekogranični prenos i komunikacija putem mesindžera',
        priv_s4_body: '<p>1. <strong class="text-ink font-normal">Bez skrivenih trekera podrazumevano:</strong> na sajtu se ne aktiviraju reklamni ili analitički skriptovi trećih strana (Google Analytics, Meta Pixel i sl.) bez vašeg prethodnog izričitog pristanka.</p><p>2. <strong class="text-ink font-normal">Lokacija obrade (ZZPL / GDPR / čl. 12 152-FZ):</strong> budući da studio KADAR 48 posluje u Republici Srbiji (državi potpisnici Konvencije Saveta Evrope br. 108 koja obezbeđuje primerenu zaštitu podataka), slanjem upita dajete saglasnost za obradu vašeg zahteva u Republici Srbiji.</p><p>3. <strong class="text-ink font-normal">Odgovor putem mesindžera:</strong> ukoliko navedete kontakt za Telegram ili WhatsApp, komunikacija se vrši isključivo uz vašu posebnu potvrdu (čekboks) u formularu.</p>',
        priv_s5_title: 'Politika kolačića (Cookies — ePrivacy & GDPR)',
        priv_s5_intro: 'Ne koristimo prisilne Cookie zidove (Cookie Walls). Sve stranice sajta možete slobodno koristiti i ako odbijete sve neobavezne kolačiće.',
        priv_s5_table: '<div class="p-4 bg-surface/60 grid grid-cols-1 sm:grid-cols-12 gap-2 font-medium text-ink"><div class="sm:col-span-4">Kategorija</div><div class="sm:col-span-5">Namena i rok čuvanja</div><div class="sm:col-span-3 sm:text-right">Status podrazumevano</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">1. Neophodni (Tehnički)</div><div class="sm:col-span-5 text-muted">Čuvanje izabranog jezika (<code class="font-mono">kadar48_lang</code>) i vaše odluke o kolačićima (<code class="font-mono">kadar48_cookie_consent</code>) tokom 180 dana.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-ink">Uvek aktivni</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">2. Analitički</div><div class="sm:col-span-5 text-muted">Anonimizovana statistika posećenosti stranica bez predaje IP adresa reklamnim mrežama.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Isključeni (Opt-in)</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">3. Marketing i mediji</div><div class="sm:col-span-5 text-muted">Eksterni video plejeri i merenje uspešnosti kampanja.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Isključeni (Opt-in)</div></div>',
        priv_btn_open_cookies: 'Promenite podešavanja kolačića odmah',
        priv_btn_to_consent: 'Otvorite tekst Saglasnosti za obradu podataka →',
        priv_s6_title: 'Vaša prava i opoziv saglasnosti u 1 klik',
        priv_s6_body: '<p>U skladu sa čl. 15–22 GDPR, Zakonom ZZPL Republike Srbije i 152-FZ imate pravo da:</p><ul class="list-disc pl-5 space-y-1.5"><li>Zatražite kopiju vaših podataka o ličnosti koje studio obrađuje ili njihovu ispravku;</li><li>Zahtevate potpuno brisanje podataka („pravo na zaborav“ / Right to Erasure) u roku od 72 sata;</li><li>Opozovete saglasnost u bilo kom trenutku slanjem poruke na <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a> ili resetujete kolačiće pomoću dugmeta ispod.</li></ul>',
        priv_btn_revoke: 'Opozovi i resetuj sve kolačiće u 1 klik',
        consent_doc_title: 'Saglasnost za obradu <span class="font-serif italic font-normal">podataka o ličnosti</span>',
        consent_doc_intro: 'Fizičko lice (korisnik veb-sajta <span class="font-mono">kadar48.rs</span>), popunjavanjem kontakt forme i označavanjem polja za saglasnost, postupajući slobodno i informisano, daje svoju izričitu i nedvosmislenu saglasnost Rukovaocu:',
        consent_doc_operator: '<p class="font-medium">Rukovalac: KADAR 48 Production (Beograd, Republika Srbija, PIB 114289402)</p><p>Kontakt adresa za zahteve u vezi sa zaštitom podataka o ličnosti: <span class="font-mono">privacy@kadar48.rs</span></p>',
        consent_doc_s1: '<h2 class="text-lg font-normal text-ink">1. Spisak podataka o ličnosti koji se obrađuju</h2><p>Saglasnost se daje za obradu sledećih kategorija podataka (koji ne spadaju u posebne ili biometrijske vrste podataka):</p><ul class="list-disc pl-5 space-y-1"><li>Ime (ili naziv projekta/brenda koji korisnik navede);</li><li>Broj telefona i/ili korisničko ime u mesindžeru (Telegram / WhatsApp) i/ili e-mail adresa;</li><li>Podaci o izabranom gradu snimanja, formatu usluge i opisu zadatka;</li><li>Tehnički metapodaci slanja forme (datum, vreme, izabrani jezik interfejsa).</li></ul>',
        consent_doc_s2: '<h2 class="text-lg font-normal text-ink">2. Svrha obrade podataka o ličnosti</h2><p>Podaci o ličnosti se obrađuju isključivo u sledeće svrhe:</p><ul class="list-disc pl-5 space-y-1"><li>Kontaktiranje korisnika radi konsultacija o uslugama video snimanja i montaže;</li><li>Slanje obračuna cene (ponude), primera radova i dogovaranje termina snimanja;</li><li>Priprema i zaključenje ugovora o pružanju usluga video produkcije.</li></ul>',
        consent_doc_s3: '<h2 class="text-lg font-normal text-ink">3. Radnje obrade i prekogranični prenos (ZZPL / GDPR / čl. 12 152-FZ)</h2><p>Tokom obrade vrše se sledeće radnje: prikupljanje, beleženje, strukturiranje, čuvanje, uvid, korišćenje radi komunikacije sa klijentom i brisanje.</p><p>Korisnik je upoznat i saglasan da je Rukovalac registrovan i obavlja delatnost na teritoriji Republike Srbije. Ukoliko korisnik izabere komunikaciju putem aplikacija Telegram ili WhatsApp, daje posebnu saglasnost za prijem odgovora putem izabranog mesindžera.</p>',
        consent_doc_s4: '<h2 class="text-lg font-normal text-ink">4. Rok važenja saglasnosti i način opoziva</h2><p>Ova saglasnost važi 12 (dvanaest) meseci od trenutka slanja upita ili do ostvarenja svrhe obrade, odnosno do trenutka opoziva saglasnosti.</p><p>Saglasnost se može opozvati u svakom trenutku slanjem e-maila na <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a>. U slučaju opoziva, Rukovalac obustavlja obradu i briše podatke u roku od najviše 3 (tri) radna dana.</p>',
        consent_to_priv_btn: 'Pređite na Politiku privatnosti i kolačića →',
        consent_to_contact_btn: 'Nazad na Kontakt →'
      },
      en: {
        brand_country: 'BELGRADE · NOVI SAD · SUBOTICA',
        nav_home: 'Home',
        nav_work: 'Works',
        nav_services: 'Services & Rates',
        nav_studio: 'Format & Gear',
        nav_contact: 'Contact',
        nav_privacy: 'Privacy & Cookie Policy',
        nav_cta: 'Book a shoot →',
        menu_open: 'Menu',
        menu_close: 'Close',
        home_hero_badge: 'BELGRADE · NOVI SAD · SUBOTICA (OTHER CITIES BY ARRANGEMENT)',
        home_hero_title_main: 'Filming and editing video content for businesses and experts. Delivered —',
        home_hero_title_accent: 'in 48 hours.',
        home_hero_title: 'Filming and editing video content for businesses and experts. Delivered — <span class="font-serif italic font-normal">in 48 hours.</span>',
        home_hero_lead: 'We work in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement.',
        home_hero_note: 'We bring gridded studio lighting, wireless audio, teleprompter, and two 4K cameras directly to your clinic, office, or studio — delivering finished edits in 48 hours.',
        home_hero_link: 'Services & Rates →',
        home_hero_caption: '<span>Belgrade · Novi Sad · Subotica (other cities by arrangement)</span><span class="font-mono">4K S-Log3 / 48h Turnaround</span>',
        home_work_heading: 'Selected Works',
        home_work_intro: 'We work with clinics, tech teams, specialists, and local businesses in Belgrade, Novi Sad, and Subotica.',
        home_all_work_link: 'All works (6) →',
        home_approach_title: 'Approach & Standards',
        home_adv1_title: '15-minute on-site setup',
        home_adv1_desc: 'We bring soft gridded lighting, wireless mics, and a lens teleprompter straight to your office or clinic.',
        home_adv2_title: '48-hour editing turnaround',
        home_adv2_desc: 'Instead of waiting weeks, receive color-graded, audio-mixed, and subtitled vertical videos or podcast episodes within 48 hours.',
        home_adv3_title: 'Calm on-camera delivery',
        home_adv3_desc: 'We guide physicians, founders, and engineers using an on-lens teleprompter so you speak naturally without memorizing lines.',
        home_bottom_prompt: 'Review our transparent production rates or inspect our mobile equipment specification.',
        home_to_services: 'View services & rates →',
        home_to_studio: 'Format & gear →',
        work_page_title: 'Selected works & <span class="font-serif italic font-normal">case studies</span>',
        work_page_sub: 'Projects in Belgrade, Novi Sad, and Subotica. Select any case study below to inspect the brief and client results.',
        filter_all: 'All works',
        filter_reels: 'Reels / Experts',
        filter_podcast: 'Podcasts & YouTube',
        filter_brands: 'Brands & Real Estate',
        proj_back: '← All works',
        proj_col_task: 'The Brief',
        proj_col_shoot: 'Filming & Script',
        proj_col_result: 'Measured Outcome',
        proj_inquire_btn: 'Inquire about a similar shoot →',
        proj_next_label: 'Next project:',
        services_page_title: 'Services & <span class="font-serif italic font-normal">rates</span>',
        services_page_sub: 'Clear pricing structured around deliverables. We operate in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement.',
        srv_book_link: 'Book a session →',
        srv_custom_box_title: 'Need a custom format, different video volume, or an on-location shoot in another city?',
        srv_custom_box_desc: 'In our booking form, select "Custom option" to describe your exact project requirements.',
        srv_custom_box_btn: 'Write custom request →',
        services_portfolio_note: 'Portfolio rate note (-30%): listed rates are introductory prices for projects open to being featured in our studio archive.',
        faq_heading: 'Frequently Asked Questions',
        faq_q1: 'Which cities do you cover?',
        faq_a1: 'We operate in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement with our full lighting, audio, and two-camera setup.',
        faq_q2: 'I have never spoken on camera before. How does the session work?',
        faq_a2: 'Your script or bullet points are displayed directly in front of the lens on a teleprompter while we guide your pacing and posture.',
        faq_q3: 'How does payment work and which languages do you support?',
        faq_a3: 'We accept bank transfers to Preduzetnik / D.O.O. accounts (in RSD), cards, or cash in EUR/RSD. We film and subtitle in Russian, Serbian, and English.',
        studio_page_title: 'Mobile production & <span class="font-serif italic font-normal">studios</span>',
        studio_page_lead: 'We work in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement. We bring our lighting and audio kit to your space or book a studio.',
        studio_img1_cap: 'On-location setup: studio lighting, sound, and teleprompter deployed in your office or clinic in 15 minutes',
        studio_img2_cap: 'For podcasts, we book studios in Belgrade, Novi Sad, and Subotica matched to your visual tone',
        studio_process_heading: 'Four-step workflow',
        step1_title: 'Scripts & Preparation',
        step1_desc: 'A focused 20–30 minute call to define topics and prepare clear scripts formatted for the teleprompter.',
        step2_title: 'On-Location or Studio Shoot',
        step2_desc: 'We arrive at your office or clinic in Belgrade, Novi Sad, or Subotica (other cities by arrangement) — or meet you at a studio.',
        step3_title: '48-Hour Post-Production',
        step3_desc: 'Two-camera editing, S-Log3 color grading, voice cleanup and mastering, and clean subtitle layout.',
        step4_title: 'Ready Archive',
        step4_desc: 'Within 48 hours you receive a cloud folder containing finished vertical videos or your full podcast episode.',
        studio_tech_heading: 'Equipment Specification',
        studio_tech_sub: 'A nimble, high-output kit engineered to deliver studio-grade depth and crisp audio on any location.',
        spec_cam_label: 'Cameras & Optics',
        spec_cam_val: '2× Sony ZV-E10 (4K S-Log3) / Fast prime 33mm f/1.4 + 16-50mm',
        spec_stab_label: 'Stabilization & Cooling',
        spec_stab_val: 'DJI RS 3 Mini 3-axis gimbal / Ulanzi active cooling + USB-C PD power',
        spec_light_label: 'Mobile Cinema Lighting',
        spec_light_val: 'Compact 100W COB monolight with 60cm gridded dome softbox / Ulanzi 40W Pro battery rim light / 2× Ulanzi VL119 RGB tubes',
        spec_audio_label: 'Audio Recording',
        spec_audio_val: 'Hollyland Lark M2 wireless system (for Reels) / 2× Fifine K688 dynamic mics + Zoom PodTrak P4 recorder (for podcasts)',
        spec_prompter_label: 'Teleprompter & Control',
        spec_prompter_val: 'Ulanzi on-camera teleprompter with Bluetooth remote control',
        contact_page_title: 'Book a <span class="font-serif italic font-normal">shoot</span>',
        contact_geo: 'We work in Belgrade, Novi Sad, and Subotica, and travel to other cities by arrangement.',
        contact_hours: 'Monday – Saturday, 10:00 – 21:00',
        form_intro: 'Leave your contact, choose your city and format (or write a custom request) — we will message you with relevant examples and schedule a filming date.',
        form_name_label: 'Name *',
        form_city_label: 'Filming city *',
        city_bg: 'Belgrade',
        city_ns: 'Novi Sad',
        city_su: 'Subotica',
        city_other: 'Other city (by arrangement)',
        ph_custom_city: 'Enter city or location (by arrangement) *',
        ph_custom_format: 'Describe your custom format, task, or number of videos *',
        ph_contact: '@username / +381...',
        form_contact_label: 'Telegram, WhatsApp or phone *',
        form_format_label: 'Format & scope *',
        form_custom_toggle: 'Write custom option',
        form_custom_format_label: 'Describe your custom format, idea, or number of videos *',
        opt_custom_service: 'Custom option (write your own task or format)',
        form_note_label: 'Comment or link to your project (optional)',
        form_submit: 'Send Inquiry',
        form_thanks_title: 'Thank you. Your inquiry and consent have been recorded.',
        form_thanks_body: 'We will reach out within two hours during business hours. You may withdraw consent anytime at privacy@kadar48.rs.',
        form_reset_btn: 'Send another message',
        chk_pd_prefix: 'I grant',
        chk_pd_link1: 'Explicit Consent to Personal Data Processing',
        chk_pd_mid: 'and agree to the',
        chk_pd_link2: 'Privacy & Cookie Policy',
        chk_msg_label: 'I agree to receive a response and estimate via my selected messenger (Telegram / WhatsApp), including cross-border message routing *',
        form_error_msg: 'Please complete required fields (including custom fields if selected) and check both consent boxes.',
        modal_req_title: 'Quick Shoot Inquiry',
        modal_close_btn: 'Close',
        cookie_banner_text: 'We only use strictly necessary cookies to remember your language and privacy choice. Analytics and marketing scripts are off by default unless you opt in. Read our',
        cookie_banner_link: 'Privacy Policy',
        cookie_btn_accept: 'Accept all',
        cookie_btn_reject: 'Reject all',
        cookie_btn_custom: 'Customize',
        cookie_modal_heading: 'Cookie Preferences',
        cookie_cat1_title: '1. Strictly Necessary (Technical)',
        cookie_cat1_desc: 'Required for navigation, language switching (RU/SR/EN), and storing your privacy decision in localStorage.',
        cookie_cat2_title: '2. Analytics & Statistics',
        cookie_cat2_desc: 'Help us understand which case studies and pages are visited most (off by default).',
        cookie_cat3_title: '3. Marketing & External Media',
        cookie_cat3_desc: 'Used for embedded external media players and campaign attribution (off by default).',
        cookie_save_custom: 'Save preferences',
        footer_cities: 'Belgrade · Novi Sad · Subotica (other cities by arrangement)',
        footer_privacy_link: 'Privacy & Cookie Policy (GDPR / ZZPL / 152-FZ)',
        footer_consent_link: 'Personal Data Consent',
        footer_cookie_btn: 'Cookie Settings',
        legal_back_btn: '← Back to booking form',
        privacy_page_title: 'Privacy & <span class="font-serif italic font-normal">Cookie Policy</span>',
        privacy_page_sub: 'This Policy is drafted in compliance with the EU General Data Protection Regulation (Regulation (EU) 2016/679 — GDPR), the Law on Personal Data Protection of the Republic of Serbia ("Official Gazette of RS", No. 87/2018 — ZZPL), and Federal Law No. 152-FZ "On Personal Data".',
        priv_s1_title: 'Data Controller',
        priv_s1_body: '<p class="text-ink font-medium">KADAR 48 Production (PR Studio za kinematografsku i video produkciju KADAR 48 Beograd)</p><p>Registered address: Vračar, 11000 Belgrade, Republic of Serbia.</p><p class="font-mono text-xs text-ink">PIB: 114289402 · Matični broj: 67419280 · Data Protection Contact (DPO): privacy@kadar48.rs</p><p>The Data Controller independently determines the purposes and means of processing personal data of website visitors and video production clients.</p>',
        priv_s2_title: 'Legal Basis for Processing',
        priv_s2_body: '<p>• <strong class="text-ink font-normal">European Union (GDPR, Art. 6(1)(a), 6(1)(b)):</strong> explicit, freely given consent of the data subject when submitting an inquiry form and pre-contractual steps to prepare a filming estimate.</p><p>• <strong class="text-ink font-normal">Republic of Serbia (ZZPL, Art. 12 & Art. 15):</strong> processing based on individual consent or contract performance in Serbia under the oversight of the Commissioner for Information of Public Importance and Personal Data Protection.</p><p>• <strong class="text-ink font-normal">Russian Federation (152-FZ, Art. 6, 9, 10.1, 12):</strong> processing based on a separate un-prechecked user consent without unauthorized public dissemination.</p>',
        priv_s3_title: 'Data Collected & Purposes of Processing',
        priv_s3_body: '<p>We follow the principle of Data Minimization and process only the information you voluntarily provide:</p><ul class="list-disc pl-5 space-y-1.5"><li>Your name (or project/company name);</li><li>Contact identifier (Telegram handle, WhatsApp number, phone number, or email address);</li><li>Selected filming city, service format, and project notes;</li><li>Technical timestamp of your consent and cookie preferences stored in your browser’s <code class="font-mono text-xs">localStorage</code>.</li></ul><p>Purposes are strictly limited to responding to your inquiry, calculating production estimates, scheduling filming dates, and contract execution.</p>',
        priv_s4_title: 'Cross-Border Processing & Messengers',
        priv_s4_body: '<p>1. <strong class="text-ink font-normal">Zero third-party trackers by default:</strong> we do not load third-party advertising or analytics scripts (Google Analytics, Meta Pixel, etc.) unless you explicitly opt in via Cookie Settings.</p><p>2. <strong class="text-ink font-normal">Cross-border notice (Art. 49 GDPR / Art. 12 152-FZ):</strong> because KADAR 48 operates in the Republic of Serbia (a signatory to Council of Europe Convention 108 ensuring adequate data protection), submitting an inquiry constitutes your informed consent to data processing in Serbia.</p><p>3. <strong class="text-ink font-normal">Messenger communication:</strong> when providing a Telegram or WhatsApp contact, we reach out via that messenger only when you check the dedicated messenger consent box.</p>',
        priv_s5_title: 'Cookie Policy (ePrivacy & GDPR)',
        priv_s5_intro: 'We do not use coercive Cookie Walls. All pages and features of this website remain fully accessible even if you reject all non-essential cookies.',
        priv_s5_table: '<div class="p-4 bg-surface/60 grid grid-cols-1 sm:grid-cols-12 gap-2 font-medium text-ink"><div class="sm:col-span-4">Category</div><div class="sm:col-span-5">Purpose & Retention</div><div class="sm:col-span-3 sm:text-right">Default Status</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">1. Strictly Necessary</div><div class="sm:col-span-5 text-muted">Stores your selected interface language (<code class="font-mono">kadar48_lang</code>) and cookie banner choice (<code class="font-mono">kadar48_cookie_consent</code>) for 180 days.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-ink">Always Active</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">2. Analytics</div><div class="sm:col-span-5 text-muted">Anonymized page view metrics without sharing IP addresses with ad networks.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Disabled (Opt-in)</div></div><div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline"><div class="sm:col-span-4 font-medium text-ink">3. Marketing & Media</div><div class="sm:col-span-5 text-muted">Embedded external video players and campaign attribution pixels.</div><div class="sm:col-span-3 sm:text-right font-mono text-xs text-muted">Disabled (Opt-in)</div></div>',
        priv_btn_open_cookies: 'Modify Cookie Preferences Now',
        priv_btn_to_consent: 'Read Personal Data Processing Consent →',
        priv_s6_title: 'Your Rights & 1-Click Consent Withdrawal',
        priv_s6_body: '<p>Under Articles 15–22 of the GDPR, the Serbian ZZPL, and Art. 14 of 152-FZ, you have the right to:</p><ul class="list-disc pl-5 space-y-1.5"><li>Request a copy of your personal data processed by the studio or request rectification;</li><li>Request complete deletion of your data ("Right to Erasure") within 72 hours;</li><li>Withdraw your consent at any time by emailing <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a>, or reset your cookie choices in one click below.</li></ul>',
        priv_btn_revoke: 'Withdraw & Reset All Cookie Consents in 1 Click',
        consent_doc_title: 'Consent to <span class="font-serif italic font-normal">Personal Data Processing</span>',
        consent_doc_intro: 'By completing the inquiry form on <span class="font-mono">kadar48.rs</span> and checking the consent box, the individual user, acting freely, willfully, and in their own interest, grants specific, informed, and unambiguous consent to the Data Controller:',
        consent_doc_operator: '<p class="font-medium">Data Controller: KADAR 48 Production (Belgrade, Republic of Serbia, PIB 114289402)</p><p>Privacy & Data Protection Contact: <span class="font-mono">privacy@kadar48.rs</span></p>',
        consent_doc_s1: '<h2 class="text-lg font-normal text-ink">1. Categories of Personal Data Processed</h2><p>Consent is granted for processing the following categories of personal data (excluding sensitive or biometric data):</p><ul class="list-disc pl-5 space-y-1"><li>Name (or project/company name provided by the user);</li><li>Phone number and/or messenger handle (Telegram / WhatsApp) and/or email address;</li><li>Selected filming city, service format, and project description;</li><li>Technical submission metadata (date, time, selected interface language).</li></ul>',
        consent_doc_s2: '<h2 class="text-lg font-normal text-ink">2. Purposes of Processing</h2><p>Personal data is processed strictly for the following purposes:</p><ul class="list-disc pl-5 space-y-1"><li>Contacting the user to consult on video filming and editing services;</li><li>Providing a production estimate, relevant portfolio examples, and scheduling a shoot date;</li><li>Preparing and concluding a video production service agreement.</li></ul>',
        consent_doc_s3: '<h2 class="text-lg font-normal text-ink">3. Processing Actions & Cross-Border Notice (GDPR / ZZPL / Art. 12 152-FZ)</h2><p>Processing actions include collection, recording, organization, storage, retrieval, use for client communication, and erasure.</p><p>The user acknowledges and agrees that the Data Controller is registered and operates in the Republic of Serbia. When selecting Telegram or WhatsApp as the preferred contact method, the user grants separate explicit consent to receive responses via that messenger.</p>',
        consent_doc_s4: '<h2 class="text-lg font-normal text-ink">4. Duration of Consent & Withdrawal Procedure</h2><p>This consent remains valid for 12 (twelve) months from the date of submission, or until the processing purpose is fulfilled or consent is withdrawn.</p><p>Consent may be withdrawn at any time by sending an email to <a href="mailto:privacy@kadar48.rs" class="text-ink underline">privacy@kadar48.rs</a>. Upon withdrawal, the Data Controller will cease processing and delete the personal data within 3 (three) business days.</p>',
        consent_to_priv_btn: 'View Privacy & Cookie Policy →',
        consent_to_contact_btn: 'Back to Contact →'
      }
    };

    /*__KADAR48_PROJECTS_START__*/
    let projects = [
      {
        id: 'vracar-clinic',
        index: '01 / 06',
        category: 'reels',
        colSpan: 'md:col-span-5',
        aspect: 'aspect-[4/5]',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
        img2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Vračar Aesthetic Clinic',
          niche: 'Эстетическая медицина · Белград (Врачар)',
          format: '15 вертикальных видео на выезде',
          metric: '+42 записи на консультацию',
          p1: 'Клинике эстетической медицины в Белграде требовалось познакомить аудиторию с врачами и спокойно, без рекламного шума объяснить протоколы процедур.',
          p2: 'Мы подготовили 15 сценариев для телесуфлера и приехали со своим мобильным светом (моноблок 100W с сотами и контровой свет на аккумуляторе) прямо в кабинет клиники. Съемка на две камеры с портретной оптикой 33mm f/1.4 заняла 3 часа.',
          p3: 'Через 48 часов клиника получила готовый архив роликов с двуязычными субтитрами (RU / SR). За первый месяц публикации принесли 42 целевые записи в Direct.'
        },
        sr: {
          title: 'Vračar Aesthetic Clinic',
          niche: 'Estetska medicina · Beograd (Vračar)',
          format: '15 vertikalnih videa na lokaciji',
          metric: '+42 zakazane konsultacije',
          p1: 'Klinici na Vračaru bilo je potrebno da predstavi lekare i mirnim, stručnim tonom objasni procedure pacijentima.',
          p2: 'Pripremili smo 15 scenarija za teleprompter i za 3 sata snimili kompletan materijal u ordinaciji uz našu mobilnu rasvetu sa saćem i dve kamere.',
          p3: 'Svi montirani klipovi sa dvojezičnim titlovima (SR / RU) isporučeni su za 48 sati i doneli 42 nove zakazane konsultacije.'
        },
        en: {
          title: 'Vračar Aesthetic Clinic',
          niche: 'Aesthetic Medicine · Belgrade (Vračar)',
          format: '15 vertical videos filmed on location',
          metric: '+42 consultation bookings',
          p1: 'A private clinic in Belgrade wanted to introduce its physicians and explain treatment protocols with calm clinical authority.',
          p2: 'We structured 15 scripts for the teleprompter and filmed inside the clinic over three hours using our mobile gridded softbox setup and fast 33mm f/1.4 optics.',
          p3: 'Delivered within 48 hours with bilingual subtitles (SR / RU), the series generated 42 consultation bookings in the first month.'
        }
      },
      {
        id: 'fintech-podcast',
        index: '02 / 06',
        category: 'podcast',
        colSpan: 'md:col-span-6 md:col-start-7 md:mt-24',
        aspect: 'aspect-[16/10]',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85',
        img2: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Novi Beograd Fintech Podcast',
          niche: 'Финтех и IT · Белград (Нови-Београд)',
          format: 'Запись подкаста в студии + вертикальные фрагменты',
          metric: '210 000 органических просмотров',
          p1: 'Основатели финтех-компании запустили разговорный подкаст на английском языке для привлечения европейских B2B-партнеров и инженеров в сербский офис.',
          p2: 'Мы подобрали интерьерную студию, выставили две камеры Sony в 4K S-Log3 и записали чистый поканальный звук на рекордер Zoom PodTrak P4 с динамическими микрофонами.',
          p3: 'Через 48 часов после каждой сессии команда получала смонтированный выпуск для YouTube и пачку вертикальных нарезок, которые набрали более 210 000 органических просмотров.'
        },
        sr: {
          title: 'Novi Beograd Fintech Podcast',
          niche: 'Fintech i IT · Beograd (Novi Beograd)',
          format: 'Snimanje podkasta u studiju + kratki isečci',
          metric: '210.000 organskih pregleda',
          p1: 'Osnivači IT kompanije pokrenuli su podkast na engleskom jeziku namenjen evropskim B2B partnerima.',
          p2: 'Odabrali smo enterijerski studio i snimili razgovor sa dve 4K kamere i višekanalnim rekorderom Zoom PodTrak P4.',
          p3: 'Uz cele YouTube epizode, vertikalni klipovi su ostvarili preko 210.000 organskih pregleda.'
        },
        en: {
          title: 'Novi Beograd Fintech Podcast',
          niche: 'Fintech & IT · Belgrade (Novi Beograd)',
          format: 'Studio podcast session + vertical cuts',
          metric: '210,000 organic views',
          p1: 'Founders of a fintech company launched an English-language video podcast to reach European B2B partners and engineers.',
          p2: 'We booked a curated studio, capturing two 4K camera angles and multi-track dynamic microphone audio via Zoom PodTrak P4.',
          p3: 'Alongside the full YouTube episodes, our vertical cuts achieved over 210,000 organic views.'
        }
      },
      {
        id: 'waterfront-residence',
        index: '03 / 06',
        category: 'brands',
        colSpan: 'md:col-span-6',
        aspect: 'aspect-[16/10]',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        img2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Belgrade Waterfront Real Estate',
          niche: 'Недвижимость · Белград',
          format: 'Серия интерьерных видеообзоров на локации',
          metric: '3 закрытые сделки с видео',
          p1: 'Агентству недвижимости требовалось показать естественный свет, планировки и вид из апартаментов с участием брокера в кадре без шаблонных риелторских приемов.',
          p2: 'Снимали на закате с использованием трехосевого стабилизатора DJI RS 3 Mini для плавных проходок, беспроводных микрофонов Hollyland Lark M2 и деликатной подсветки интерьеров.',
          p3: 'Ролики были смонтированы за 48 часов и стали основным инструментом для удаленных презентаций покупателям, приведя к 3 сделкам.'
        },
        sr: {
          title: 'Belgrade Waterfront Real Estate',
          niche: 'Nekretnine · Beograd',
          format: 'Serija video pregleda stanova na lokaciji',
          metric: '3 realizovane prodaje',
          p1: 'Za agenciju za nekretnine kreirali smo mirne, vizuelno čiste prikaze stanova sa agentom u kadru.',
          p2: 'Snimano u vreme zalaska sunca uz DJI RS 3 Mini stabilizaciju i Hollyland Lark M2 bežične mikrofone.',
          p3: 'Video serijal je direktno doprineo realizaciji 3 prodaje u roku od dva meseca.'
        },
        en: {
          title: 'Belgrade Waterfront Real Estate',
          niche: 'Real Estate · Belgrade',
          format: 'On-location architectural video walkthroughs',
          metric: '3 property sales closed',
          p1: 'For a property agency, we filmed natural light, layouts, and broker commentary without loud transitions.',
          p2: 'Shot at golden hour using our DJI RS 3 Mini gimbal for fluid movement and Hollyland Lark M2 wireless audio.',
          p3: 'Edited within 48 hours, the series directly contributed to 3 closed transactions.'
        }
      },
      {
        id: 'novi-sad-dental',
        index: '04 / 06',
        category: 'reels',
        colSpan: 'md:col-span-5 md:col-start-8 md:-mt-16',
        aspect: 'aspect-[4/5]',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
        img2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Novi Sad Dental Studio',
          niche: 'Стоматология · Нови-Сад (Выездная съемка)',
          format: '10 вертикальных видео в кабинете врача',
          metric: 'Запись на 1.5 месяца вперед',
          p1: 'Стоматологической клинике в центре Нови-Сада нужно было доступно и спокойно рассказывать пациентам об имплантации, прикусе и эстетической реставрации.',
          p2: 'Команда приехала в Нови-Сад с мобильным светом и двумя камерами. За двухчасовую смену прямо в клинике мы записали 10 роликов с главным врачом по телесуфлеру.',
          p3: 'Регулярный выход экспертных видео заполнил расписание ортопеда клиники на полтора месяца вперед.'
        },
        sr: {
          title: 'Novi Sad Dental Studio',
          niche: 'Stomatologija · Novi Sad',
          format: '10 vertikalnih videa u ordinaciji',
          metric: 'Popunjeni termini 1.5 mesec unapred',
          p1: 'Stomatološkoj ordinaciji u Novom Sadu bio je potreban stručan video sadržaj o implantologiji i protetici.',
          p2: 'Za dva sata u samoj ordinaciji u Novom Sadu snimili smo 10 videa sa glavnim lekarom uz teleprompter i dve kamere.',
          p3: 'Posle dva meseca objava, raspored ordinacije je popunjen mesec i po dana unapred.'
        },
        en: {
          title: 'Novi Sad Dental Studio',
          niche: 'Dentistry · Novi Sad (On-Location)',
          format: '10 vertical videos filmed in-clinic',
          metric: 'Booked out 6 weeks ahead',
          p1: 'A dental studio in Novi Sad needed a clear, reassuring way to explain implantology and veneers to prospective patients.',
          p2: 'In a two-hour on-location session at the Novi Sad clinic, we captured 10 videos with the lead clinician using our lens teleprompter.',
          p3: 'Consistent publishing booked the lead specialist six weeks in advance.'
        }
      },
      {
        id: 'novi-sad-ai-founder',
        index: '05 / 06',
        category: 'podcast',
        colSpan: 'md:col-span-5',
        aspect: 'aspect-[4/5]',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
        img2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Serbia AI SaaS Hub',
          niche: 'IT-продукт и личный бренд · Нови-Сад / Белград',
          format: '15 вертикальных видео и продуктовые разборы',
          metric: '4 200 регистраций в продукт',
          p1: 'Основательнице AI-стартапа в Сербии нужен был регулярный англоязычный видеоконтент для продвижения сервиса на западную аудиторию.',
          p2: 'Мы выстроили свет прямо в рабочем пространстве команды, записали серию коротких продуктовых разборов с телесуфлером и добавили чистую графику на монтаже.',
          p3: 'Ролики органически принесли стартапу 4 200 новых регистраций в веб-приложение за квартал.'
        },
        sr: {
          title: 'Serbia AI SaaS Hub',
          niche: 'IT proizvod i lični brend · Novi Sad / Beograd',
          format: '15 vertikalnih videa i analize proizvoda',
          metric: '4.200 registracija u aplikaciji',
          p1: 'Osnivačici AI startapa u Srbiji bio je potreban video sadržaj na engleskom jeziku za strano tržište.',
          p2: 'Postavili smo rasvetu u kancelariji tima i snimili seriju od 15 kratkih analiza uz teleprompter.',
          p3: 'Video serijal je doneo 4.200 organskih registracija korisnika u prvom kvartalu.'
        },
        en: {
          title: 'Serbia AI SaaS Hub',
          niche: 'SaaS & Founder Brand · Novi Sad / Belgrade',
          format: '15 vertical videos & product breakdowns',
          metric: '4,200 product sign-ups',
          p1: 'A Serbia-based AI startup founder needed English video content targeting US and UK product teams.',
          p2: 'We set up lighting inside the team’s office and filmed 15 structured product breakdowns using the teleprompter.',
          p3: 'Organic reach drove 4,200 new product sign-ups over one quarter.'
        }
      },
      {
        id: 'dedinje-villas',
        index: '06 / 06',
        category: 'brands',
        colSpan: 'md:col-span-6 md:col-start-7 md:mt-16',
        aspect: 'aspect-[16/10]',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        img2: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        img3: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
        ru: {
          title: 'Dedinje & Fruška Gora Residences',
          niche: 'Архитектура и загородные резиденции · Сербия',
          format: 'Выездное интервью с архитектором и вертикальные тизеры',
          metric: '€1.4M оборот по объектам',
          p1: 'Для презентации частных резиденций на Дединье и загородных вилл на Фрушка-Горе требовался спокойный, фактурный видеоматериал с участием архитектора проекта.',
          p2: 'Мы выехали на объекты, записали интервью на две камеры и сняли серию плавных деталей интерьера и участка со стабилизатором при естественном утреннем свете.',
          p3: 'Готовый материал был сдан за 48 часов и помог сформировать пул частных просмотров с последующей продажей объекта.'
        },
        sr: {
          title: 'Dedinje & Fruška Gora Residences',
          niche: 'Arhitektura i rezidencije · Srbija',
          format: 'Intervju sa arhitektom na lokaciji i vertikalni tizeri',
          metric: '€1.4M promet nekretnina',
          p1: 'Za prezentaciju rezidencija na Dedinju i Fruškoj Gori bio je potreban miran, urednički prikaz arhitekture uz razgovor sa autorom projekta.',
          p2: 'Snimili smo intervju sa dve kamere na samom objektu uz detalje enterijera u prirodnom jutarnjem svetlu.',
          p3: 'Materijal je isporučen za 48 sati i generisao privatne obilaske i prodaju.'
        },
        en: {
          title: 'Dedinje & Fruška Gora Residences',
          niche: 'Architecture & Residences · Serbia',
          format: 'On-location architect interview & vertical teasers',
          metric: '€1.4M in contracted sales',
          p1: 'To present private residences in Dedinje and Fruška Gora, we produced an understated architectural showcase featuring the lead architect.',
          p2: 'We recorded a two-camera on-site interview alongside stabilized morning light details of the interior and grounds.',
          p3: 'Delivered in 48 hours, the films generated private viewings resulting in €1.4M in contracted sales.'
        }
      }
    ];
    /*__KADAR48_PROJECTS_END__*/

    // =====================================================================
    // CMS STATE, IMMUTABLE FACTORY DEFAULTS, TEXT HISTORY & SECURITY HELPERS
    // =====================================================================
    const CMS_STORAGE_KEY = 'kadar48_cms_config_v3';
    const PROJECTS_STORAGE_KEY = 'kadar48_cms_projects_v3';
    const LEADS_STORAGE_KEY = 'kadar48_crm_leads_v2';
    const LOCKOUT_STORAGE_KEY = 'kadar48_admin_lockout_v2';
    const CUSTOM_PASS_STORAGE_KEY = 'kadar48_custom_pass_v4';
    const TEXT_HISTORY_STORAGE_KEY = 'kadar48_text_history_v3';
    const PAGE_SNAPSHOTS_STORAGE_KEY = 'kadar48_page_snapshots_v3';
    // ---- Brute-force lockout (5 wrong attempts -> 10 minute cooldown) ----
    const LOCKOUT_KEY = 'kadar48_admin_lockout_v3';
    const LOCKOUT_MAX_ATTEMPTS = 5;
    const LOCKOUT_COOLDOWN_MS = 10 * 60 * 1000;
    // Default admin password is stored ONLY as a SHA-256 hash (never plaintext in source).
    // Change it right after the first login in the "Защита и пароль" tab.
    const DEFAULT_ADMIN_PASS_HASH = '8104f8b4d49d8fbcaf11b2fe36c4bd19fd5cbcf163634cdfd1da230821bbe4f5';

    // Immutable Factory Defaults for 1-Click Per-Block & Full-Page Restore
    const FACTORY_DEFAULTS = JSON.parse(JSON.stringify(defaultSiteConfig));
    const FACTORY_PROJECTS = JSON.parse(JSON.stringify(projects));

    // Metadata for Structured 4-Column Typography & History Table
    const EDITABLE_TEXT_BLOCKS = [
      {
        key: 'heroBadge',
        label: '1. Верхняя строка городов (над заголовком H1)',
        multiline: false,
        defaultVariants: [
          'БЕЛГРАД · НОВИ-САД · СУБОТИЦА (ДРУГИЕ ГОРОДА — ПО ДОГОВОРЕННОСТИ)',
          'KADAR 48 · БЕЛГРАД · НОВИ-САД · СУБОТИЦА',
          'ВИДЕОПРОДАКШН · БЕЛГРАД, НОВИ-САД, СУБОТИЦА И ВЫЕЗД'
        ]
      },
      {
        key: 'heroTitleMain',
        label: '2. Главный заголовок H1 (основная часть без тегов)',
        multiline: true,
        defaultVariants: [
          'Снимаем и монтируем видео для бизнеса и экспертов. Готовый материал —',
          'Видеосъемка и монтаж под ключ для экспертов и компаний. Отдаем ролики —',
          'Контент-студия и мобильный продакшн. Готовые Reels и подкасты —'
        ]
      },
      {
        key: 'heroTitleAccent',
        label: '3. Акцентная концовка заголовка H1 (курсив)',
        multiline: false,
        defaultVariants: [
          'через 48 часов.',
          'за двое суток.',
          'точно в срок за 48ч.'
        ]
      },
      {
        key: 'heroLead',
        label: '4. Первый абзац (география работы)',
        multiline: true,
        defaultVariants: [
          'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
          'Выезжаем по Белграду, Нови-Саду и Суботице со своим светом и звуком. Остальные города — по договоренности.',
          'Снимаем на вашей локации или в интерьерных студиях Белграда, Нови-Сада и Суботицы.'
        ]
      },
      {
        key: 'heroNote',
        label: '5. Второй абзац (описание процесса на главной)',
        multiline: true,
        defaultVariants: [
          'Привозим мобильный кино-свет с сотами, микрофоны, телесуфлер и две 4K-камеры прямо к вам в клинику, офис или студию — и отдаем готовый монтаж ровно через двое суток.',
          'Разворачиваем студийную картинку и чистый звук прямо в вашем кабинете за 15 минут. Сценарии, телесуфлер и монтаж включены.',
          'Две камеры 4K S-Log3, портретная оптика f/1.4, петлички и накамерный суфлер — вам остается только спокойно озвучить мысли.'
        ]
      },
      {
        key: 'contactGeo',
        label: '6. Строка городов в разделе «Контакты»',
        multiline: true,
        defaultVariants: [
          'Работаем в Белграде, Нови-Саде и Суботице, в остальные города выезжаем по договоренности.',
          'Белград · Нови-Сад · Суботица. Выезд в другие города — по предварительному согласованию.'
        ]
      }
    ];

    let siteConfig = JSON.parse(JSON.stringify(defaultSiteConfig));
    let isAdminAuthenticated = false;
    let copyrightClicks = 0;
    let copyrightClickTimer = null;

    function escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function stripHtmlTags(str) {
      return String(str || '').replace(/<\/?[^>]+(>|$)/g, '').trim();
    }

    // Reliable runtime hashing that works both in HTTPS and local file/iframe contexts
    async function sha256Hex(message) {
      const normalized = String(message || '').trim();
      try {
        if (window.crypto && window.crypto.subtle) {
          const msgBuffer = new TextEncoder().encode(normalized);
          const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }
      } catch (e) {}
      let h1 = 0xdeadbeef ^ normalized.length;
      let h2 = 0x41c6ce57 ^ normalized.length;
      for (let i = 0, ch; i < normalized.length; i++) {
        ch = normalized.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0');
    }

    function clearLegacyLockoutStorage() {
      try {
        localStorage.removeItem('kadar48_admin_lockout');
        localStorage.removeItem('kadar48_lockout');
        localStorage.removeItem('kadar48_attempts');
        localStorage.removeItem(LOCKOUT_STORAGE_KEY);
      } catch (e) {}
    }

    function getTextHistoryStore() {
      try {
        const raw = localStorage.getItem(TEXT_HISTORY_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      const initialStore = {};
      EDITABLE_TEXT_BLOCKS.forEach(b => {
        initialStore[b.key] = b.defaultVariants.map((txt, i) => ({
          text: txt,
          label: i === 0 ? 'Изначальный вариант' : `Вариант #${i + 1}`
        }));
      });
      return initialStore;
    }

    function saveTextHistoryStore(store) {
      try {
        localStorage.setItem(TEXT_HISTORY_STORAGE_KEY, JSON.stringify(store));
      } catch (e) {}
    }

    function addTextToBlockHistory(blockKey, textVal, customTag) {
      const clean = String(textVal || '').trim();
      if (!clean) return;
      const store = getTextHistoryStore();
      if (!Array.isArray(store[blockKey])) store[blockKey] = [];
      const exists = store[blockKey].some(item => item.text === clean);
      if (!exists) {
        const timeStr = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        store[blockKey].unshift({
          text: clean,
          label: customTag || `Сохранено в ${timeStr}`
        });
        saveTextHistoryStore(store);
      }
    }

    function loadCMSData() {
      try {
        const savedCfg = localStorage.getItem(CMS_STORAGE_KEY);
        if (savedCfg) {
          const parsed = JSON.parse(savedCfg);
          delete parsed.adminPassHash;
          siteConfig = Object.assign({}, JSON.parse(JSON.stringify(defaultSiteConfig)), parsed);
          siteConfig.blockStyles = Object.assign(
            {},
            JSON.parse(JSON.stringify(defaultSiteConfig.blockStyles)),
            parsed.blockStyles || {}
          );
        }
        if (!siteConfig.tgChatId) {
          siteConfig.tgChatId = '6903692674';
        }
        const savedCustomHash = localStorage.getItem(CUSTOM_PASS_STORAGE_KEY);
        if (savedCustomHash) {
          siteConfig.customPassHash = savedCustomHash;
        }
        const savedProj = localStorage.getItem(PROJECTS_STORAGE_KEY);
        if (savedProj) {
          const parsedProj = JSON.parse(savedProj);
          if (Array.isArray(parsedProj) && parsedProj.length > 0) {
            projects = parsedProj;
          }
        }
      } catch (e) {}
    }

    function getFontFamilyCss(code) {
      if (code === 'serif') return "'Instrument Serif', Georgia, serif";
      if (code === 'mono') return "'JetBrains Mono', monospace";
      return "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    }

    function applyBlockStyleToElement(el, styleObj) {
      if (!el || !styleObj) return;
      const isMobile = window.innerWidth < 640;
      const px = isMobile ? (styleObj.sizeMobile || styleObj.sizeDesktop) : styleObj.sizeDesktop;
      el.style.fontFamily = getFontFamilyCss(styleObj.font);
      el.style.fontWeight = styleObj.weight || '400';
      el.style.fontStyle = styleObj.italic ? 'italic' : 'normal';
      if (px) el.style.fontSize = `${px}px`;
      if (styleObj.lineHeight) el.style.lineHeight = styleObj.lineHeight;
    }

    function applyCMSDataToDOM() {
      // Ensure clean split H1 parts exist without raw HTML tags
      if (!siteConfig.heroTitleMain) {
        siteConfig.heroTitleMain = FACTORY_DEFAULTS.heroTitleMain;
      }
      if (siteConfig.heroTitleAccent === undefined) {
        siteConfig.heroTitleAccent = FACTORY_DEFAULTS.heroTitleAccent;
      }

      const combinedH1Html = `${escapeHtml(siteConfig.heroTitleMain)} <span id="cms-hero-title-accent" class="font-serif italic font-normal">${escapeHtml(siteConfig.heroTitleAccent)}</span>`;
      siteConfig.heroTitle = combinedH1Html;

      i18n.ru.home_hero_badge = siteConfig.heroBadge;
      i18n.ru.home_hero_title = combinedH1Html;
      i18n.ru.home_hero_lead = siteConfig.heroLead;
      i18n.ru.home_hero_note = siteConfig.heroNote;
      i18n.ru.contact_geo = siteConfig.contactGeo || FACTORY_DEFAULTS.contactGeo;

      const badgeEl = document.getElementById('cms-hero-badge');
      const titleWrapEl = document.getElementById('cms-hero-title-wrap');
      const leadEl = document.getElementById('cms-hero-lead');
      const noteEl = document.getElementById('cms-hero-note');
      const geoEl = document.getElementById('cms-contact-geo');

      if (currentLang === 'ru') {
        if (badgeEl) badgeEl.textContent = siteConfig.heroBadge;
        if (titleWrapEl) {
          titleWrapEl.innerHTML = `<span id="cms-hero-title-main">${escapeHtml(siteConfig.heroTitleMain)}</span> <span id="cms-hero-title-accent" class="font-serif italic font-normal">${escapeHtml(siteConfig.heroTitleAccent)}</span>`;
        }
        if (leadEl) leadEl.textContent = siteConfig.heroLead;
        if (noteEl) noteEl.textContent = siteConfig.heroNote;
        if (geoEl) geoEl.textContent = siteConfig.contactGeo || FACTORY_DEFAULTS.contactGeo;
      } else {
        const dict = i18n[currentLang] || i18n.ru;
        if (badgeEl) badgeEl.textContent = dict.home_hero_badge;
        if (titleWrapEl) {
          titleWrapEl.innerHTML = `<span id="cms-hero-title-main">${escapeHtml(dict.home_hero_title_main)}</span> <span id="cms-hero-title-accent" class="font-serif italic font-normal">${escapeHtml(dict.home_hero_title_accent)}</span>`;
        }
        if (leadEl) leadEl.textContent = dict.home_hero_lead;
        if (noteEl) noteEl.textContent = dict.home_hero_note;
        if (geoEl) geoEl.textContent = dict.contact_geo;
      }

      // Apply per-block font family, weight, style, desktop/mobile size & line-height
      const styles = siteConfig.blockStyles || FACTORY_DEFAULTS.blockStyles;
      applyBlockStyleToElement(badgeEl, styles.heroBadge);
      applyBlockStyleToElement(document.getElementById('cms-hero-title-main'), styles.heroTitleMain);
      applyBlockStyleToElement(document.getElementById('cms-hero-title-accent'), styles.heroTitleAccent);
      applyBlockStyleToElement(leadEl, styles.heroLead);
      applyBlockStyleToElement(noteEl, styles.heroNote);
      applyBlockStyleToElement(geoEl, styles.contactGeo);

      const heroImgEl = document.getElementById('cms-hero-img');
      const stImg1El = document.getElementById('cms-studio-img1');
      const stImg2El = document.getElementById('cms-studio-img2');
      if (heroImgEl && siteConfig.heroImg) heroImgEl.src = siteConfig.heroImg;
      if (stImg1El && siteConfig.studioImg1) stImg1El.src = siteConfig.studioImg1;
      if (stImg2El && siteConfig.studioImg2) stImg2El.src = siteConfig.studioImg2;

      // Contacts
      const tgText = document.getElementById('cms-contact-tg-text');
      const waText = document.getElementById('cms-contact-wa-text');
      const emText = document.getElementById('cms-contact-email-text');
      const emLink = document.getElementById('cms-contact-email-link');
      if (tgText) tgText.textContent = siteConfig.telegramHandle;
      if (waText) waText.textContent = siteConfig.whatsappNumber;
      if (emText) emText.textContent = siteConfig.emailAddress;
      if (emLink) emLink.href = 'mailto:' + siteConfig.emailAddress;

      document.querySelectorAll('.cms-contact-summary').forEach(el => {
        el.textContent = `Telegram: ${siteConfig.telegramHandle} · WhatsApp: ${siteConfig.whatsappNumber}`;
      });

      renderServicesList();
      populateServiceSelectors();
      renderHomePreview();
      renderWorkArchive();
      updateLeadsCountBadges();
    }

    window.addEventListener('resize', () => {
      if (siteConfig && siteConfig.blockStyles) {
        const styles = siteConfig.blockStyles;
        applyBlockStyleToElement(document.getElementById('cms-hero-badge'), styles.heroBadge);
        applyBlockStyleToElement(document.getElementById('cms-hero-title-main'), styles.heroTitleMain);
        applyBlockStyleToElement(document.getElementById('cms-hero-title-accent'), styles.heroTitleAccent);
        applyBlockStyleToElement(document.getElementById('cms-hero-lead'), styles.heroLead);
        applyBlockStyleToElement(document.getElementById('cms-hero-note'), styles.heroNote);
        applyBlockStyleToElement(document.getElementById('cms-contact-geo'), styles.contactGeo);
      }
    });

    // Render Services List on "Услуги и цены" Page
    function renderServicesList() {
      const container = document.getElementById('services-list-container');
      if (!container) return;
      const bookLabel = i18n[currentLang].srv_book_link;

      container.innerHTML = siteConfig.services.map((srv, idx) => {
        const langObj = srv[currentLang] || srv.ru;
        const num = srv.num || String(idx + 1).padStart(2, '0');
        let displayPrice = srv.price;
        if (String(srv.price).toLowerCase().includes('договоренности')) {
          if (currentLang === 'sr') displayPrice = srv.price_sr || 'Po dogovoru';
          else if (currentLang === 'en') displayPrice = srv.price_en || 'Custom quote';
        }
        const fullOptionTitle = `${num} / ${langObj.title} — ${displayPrice}`;
        return `
          <div class="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div class="md:col-span-4">
              <span class="font-mono text-xs text-muted">${escapeHtml(num)}</span>
              <h2 class="mt-1 text-xl sm:text-2xl font-normal tracking-editorial text-ink">
                ${escapeHtml(langObj.title)}
              </h2>
            </div>
            <div class="md:col-span-5">
              <p class="text-sm sm:text-base text-muted leading-relaxed">
                ${escapeHtml(langObj.desc)}
              </p>
            </div>
            <div class="md:col-span-3 md:text-right flex md:flex-col justify-between items-baseline md:items-end gap-3">
              <span class="font-mono text-xl sm:text-2xl font-normal text-ink">${escapeHtml(displayPrice)}</span>
              <button
                type="button"
                onclick="selectServiceAndContact('${escapeHtml(fullOptionTitle).replace(/'/g, "\\'")}')"
                class="text-xs text-ink border-b border-ink pb-0.5 hover:text-muted hover:border-muted transition-colors cursor-pointer"
              >
                ${bookLabel}
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // Populate Form Service Selectors + Custom Option
    function populateServiceSelectors() {
      const customLabel = i18n[currentLang].opt_custom_service;
      const optionsHtml = siteConfig.services.map((srv, idx) => {
        const langObj = srv[currentLang] || srv.ru;
        const num = srv.num || String(idx + 1).padStart(2, '0');
        let displayPrice = srv.price;
        if (String(srv.price).toLowerCase().includes('договоренности')) {
          if (currentLang === 'sr') displayPrice = srv.price_sr || 'Po dogovoru';
          else if (currentLang === 'en') displayPrice = srv.price_en || 'Custom quote';
        }
        const val = `${num} / ${langObj.title} — ${displayPrice}`;
        return `<option value="${escapeHtml(val)}" ${idx === 1 ? 'selected' : ''}>${escapeHtml(val)}</option>`;
      }).join('') + `<option value="custom_option">✦ ${escapeHtml(customLabel)}</option>`;

      const mainSelect = document.getElementById('client-format');
      const modalSelect = document.getElementById('modal-client-format');
      if (mainSelect) mainSelect.innerHTML = optionsHtml;
      if (modalSelect) modalSelect.innerHTML = optionsHtml;
    }

    // Toggle Custom City Input
    function toggleCustomCityInput(mode) {
      const selectId = mode === 'modal' ? 'modal-client-city' : 'client-city';
      const wrapId = mode === 'modal' ? 'custom-city-wrap-modal' : 'custom-city-wrap-main';
      const inputId = mode === 'modal' ? 'modal-client-custom-city' : 'client-custom-city';

      const selectEl = document.getElementById(selectId);
      const wrapEl = document.getElementById(wrapId);
      const inputEl = document.getElementById(inputId);
      if (!selectEl || !wrapEl) return;

      if (selectEl.value === 'custom') {
        wrapEl.classList.remove('hidden');
        if (inputEl) setTimeout(() => inputEl.focus(), 50);
      } else {
        wrapEl.classList.add('hidden');
      }
    }

    // Toggle Custom Service Format Input
    function toggleCustomFormatInput(mode) {
      const selectId = mode === 'modal' ? 'modal-client-format' : 'client-format';
      const wrapId = mode === 'modal' ? 'custom-format-wrap-modal' : 'custom-format-wrap-main';
      const inputId = mode === 'modal' ? 'modal-client-custom-format' : 'client-custom-format';

      const selectEl = document.getElementById(selectId);
      const wrapEl = document.getElementById(wrapId);
      const inputEl = document.getElementById(inputId);
      if (!selectEl || !wrapEl) return;

      const val = selectEl.value || '';
      const isCustomOrTravel = val === 'custom_option' || val.includes('05 /') || val.toLowerCase().includes('другом городе');
      if (isCustomOrTravel) {
        wrapEl.classList.remove('hidden');
        if (inputEl) setTimeout(() => inputEl.focus(), 50);
      } else {
        wrapEl.classList.add('hidden');
      }
    }

    // 1-Click Button "Написать свой вариант"
    function enableCustomFormatMode(mode) {
      const selectId = mode === 'modal' ? 'modal-client-format' : 'client-format';
      const selectEl = document.getElementById(selectId);
      if (!selectEl) return;
      selectEl.value = 'custom_option';
      toggleCustomFormatInput(mode);
    }

    function selectCustomServiceAndContact() {
      navigateTo('contact');
      setTimeout(() => {
        enableCustomFormatMode('main');
      }, 250);
    }

    // Render Card Helper
    function createWorkCardHTML(item, customSpan) {
      const copy = item[currentLang];
      const spanClass = customSpan || item.colSpan;
      return `
        <article role="link" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProjectPage('${item.id}')}" onclick="openProjectPage('${item.id}')" class="work-card ${spanClass} cursor-pointer group focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-ink">
          <div class="w-full ${item.aspect} bg-surface overflow-hidden">
            <img
              src="${item.image}"
              alt="${copy.title}"
              onerror="this.src='https://placehold.co/900x1000/F1EFEA/6E6D68?text=KADAR+48'"
              class="w-full h-full object-cover work-image"
            />
          </div>
          <div class="mt-4 flex items-baseline justify-between gap-4">
            <div>
              <h3 class="text-base sm:text-lg font-normal text-ink group-hover:text-muted transition-colors">${copy.title}</h3>
              <p class="mt-0.5 text-xs text-muted">${copy.niche} — ${copy.format}</p>
            </div>
            <span class="font-mono text-xs text-ink shrink-0">${copy.metric}</span>
          </div>
        </article>
      `;
    }

    // Render Home Preview (First 3 Projects)
    function renderHomePreview() {
      const previewContainer = document.getElementById('home-work-preview');
      if (!previewContainer) return;
      const previewItems = projects.slice(0, 3);
      previewContainer.innerHTML = previewItems.map(item => createWorkCardHTML(item)).join('');
    }

    // Render Full Work Archive Grid (Filtered)
    function renderWorkArchive() {
      const grid = document.getElementById('work-archive-grid');
      if (!grid) return;

      const filtered = currentFilter === 'all'
        ? projects
        : projects.filter(p => p.category === currentFilter);

      grid.innerHTML = filtered.map((item, idx) => {
        const span = currentFilter === 'all'
          ? item.colSpan
          : (idx % 2 === 0 ? 'md:col-span-6' : 'md:col-span-6 md:mt-16');
        return createWorkCardHTML(item, span);
      }).join('');
    }

    // Filter Portfolio Categories
    function filterWork(category) {
      currentFilter = category;
      document.querySelectorAll('.work-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
          btn.classList.add('text-ink', 'font-medium', 'border-b', 'border-ink');
          btn.classList.remove('text-muted');
        } else {
          btn.classList.remove('text-ink', 'font-medium', 'border-b', 'border-ink');
          btn.classList.add('text-muted');
        }
      });
      renderWorkArchive();
    }

    // Open Dedicated Full-Page Project View
    function openProjectPage(projectId) {
      const index = projects.findIndex(p => p.id === projectId);
      if (index === -1) return;

      currentProjectId = projectId;
      const item = projects[index];
      const copy = item[currentLang];
      const nextItem = projects[(index + 1) % projects.length];
      const nextCopy = nextItem[currentLang];

      document.getElementById('proj-detail-index').textContent = item.index;
      document.getElementById('proj-detail-niche').textContent = copy.niche;
      document.getElementById('proj-detail-title').textContent = copy.title;
      document.getElementById('proj-detail-metric').textContent = copy.metric;
      document.getElementById('proj-detail-format').textContent = copy.format;

      const heroImg = document.getElementById('proj-detail-hero-img');
      heroImg.src = item.image;
      heroImg.alt = copy.title;

      document.getElementById('proj-detail-p1').textContent = copy.p1;
      document.getElementById('proj-detail-p2').textContent = copy.p2;
      document.getElementById('proj-detail-p3').textContent = copy.p3;

      const img2 = document.getElementById('proj-detail-img2');
      img2.src = item.img2;
      img2.alt = copy.title;

      const img3 = document.getElementById('proj-detail-img3');
      img3.src = item.img3;
      img3.alt = copy.title;

      const nextBtn = document.getElementById('proj-next-btn');
      const nextLabel = i18n[currentLang].proj_next_label;
      nextBtn.textContent = `${nextLabel} ${nextCopy.title} →`;
      nextBtn.onclick = () => openProjectPage(nextItem.id);

      navigateTo('project');
    }

    // Client-Side Multi-Page Router
    function navigateTo(pageId) {
      const normalizedId = pageId === 'work' ? 'works' : pageId;
      currentPage = normalizedId;

      document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
      });

      const target = document.getElementById(`page-${normalizedId}`);
      if (target) {
        target.classList.add('active');
      }

      const activeNavKey = normalizedId === 'project' ? 'works' : normalizedId;

      document.querySelectorAll('[data-nav]').forEach(link => {
        if (link.getAttribute('data-nav') === activeNavKey) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      document.querySelectorAll('[data-nav-mobile]').forEach(link => {
        if (link.getAttribute('data-nav-mobile') === activeNavKey) {
          link.classList.add('text-ink', 'font-medium');
          link.classList.remove('text-muted');
        } else {
          link.classList.remove('text-ink', 'font-medium');
          link.classList.add('text-muted');
        }
      });

      closeMobileDrawer();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mobile Navigation Drawer Controls with Body Scroll Lock
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobile-drawer');
      const btn = document.getElementById('mobile-menu-btn');
      const label = document.getElementById('mobile-menu-label');
      if (!drawer) return;
      const isHidden = drawer.classList.contains('hidden');
      if (isHidden) {
        drawer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', 'true');
        label.textContent = i18n[currentLang].menu_close;
      } else {
        closeMobileDrawer();
      }
    }

    function closeMobileDrawer() {
      const drawer = document.getElementById('mobile-drawer');
      const btn = document.getElementById('mobile-menu-btn');
      const label = document.getElementById('mobile-menu-label');
      if (!drawer) return;
      drawer.classList.add('hidden');
      document.body.style.overflow = '';
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (label) label.textContent = i18n[currentLang].menu_open;
    }

    function navigateFromMobile(pageId) {
      closeMobileDrawer();
      navigateTo(pageId);
    }

    // Quick Request Modal Controls
    function openQuickModal() {
      const modal = document.getElementById('quick-request-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const first = modal.querySelector('input, select, textarea, button');
      if (first) first.focus();
    }

    function closeQuickModal() {
      const modal = document.getElementById('quick-request-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      const trigger = document.querySelector('button[onclick="openQuickModal()"]');
      if (trigger) trigger.focus();
    }

    // Pre-fill service on Contact Page
    function selectServiceAndContact(serviceName) {
      navigateTo('contact');
      const formatSelect = document.getElementById('client-format');
      if (formatSelect) {
        let matched = false;
        for (let i = 0; i < formatSelect.options.length; i++) {
          if (formatSelect.options[i].value === serviceName) {
            formatSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          formatSelect.value = 'custom_option';
          const customInput = document.getElementById('client-custom-format');
          if (customInput) customInput.value = serviceName;
        }
        toggleCustomFormatInput('main');
      }
      setTimeout(() => {
        const nameInput = document.getElementById('client-name');
        if (nameInput) nameInput.focus();
      }, 350);
    }

    function inquireFromProject() {
      const item = projects.find(p => p.id === currentProjectId);
      const title = item ? item[currentLang].title : '';
      selectServiceAndContact(`По примеру проекта: ${title}`);
    }

    // Language Switcher
    function setLang(lang) {
      currentLang = lang;
      document.documentElement.lang = lang;
      try {
        localStorage.setItem('kadar48_lang', lang);
      } catch (e) {}

      ['ru', 'sr', 'en'].forEach(code => {
        const btn = document.getElementById(`btn-${code}`);
        if (code === lang) {
          btn.classList.add('text-ink', 'font-medium');
          btn.classList.remove('text-muted');
        } else {
          btn.classList.remove('text-ink', 'font-medium');
          btn.classList.add('text-muted');
        }
      });

      const dict = i18n[lang];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      applyCMSDataToDOM();
      updateFooterCookieBadge();

      if (currentPage === 'project') {
        openProjectPage(currentProjectId);
      }
    }

    function focusContactInput(channel) {
      const input = document.getElementById('client-contact');
      if (input) {
        input.placeholder = channel + ': @username / +381...';
        setTimeout(() => input.focus(), 300);
      }
    }

    // =====================================================================
    // LEAD CAPTURE, CRM STORAGE & TELEGRAM BOT / WEBHOOK DISPATCH
    // =====================================================================
    function getStoredLeads() {
      try {
        const raw = localStorage.getItem(LEADS_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function saveLeadsArray(leads) {
      try {
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
      } catch (e) {}
      updateLeadsCountBadges();
    }

    function updateLeadsCountBadges() {
      const count = getStoredLeads().length;
      const b2 = document.getElementById('adm-leads-badge');
      if (b2) b2.textContent = count;
    }

    async function recordAndDispatchLead(leadObj) {
      // Local-only CRM is not server storage: this record exists only in the submitter's browser.
      const leads = getStoredLeads();
      const newEntry = {
        id: 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        createdAt: new Date().toLocaleString('ru-RU'),
        status: 'Новая',
        name: leadObj.name,
        city: leadObj.city,
        service: leadObj.service,
        contact: leadObj.contact,
        note: leadObj.note || '',
        lang: currentLang
      };
      leads.unshift(newEntry);
      saveLeadsArray(leads);

      if (!siteConfig.webhookUrl) return { delivered: false, entry: newEntry };
      try {
        const response = await fetch(siteConfig.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(newEntry)
        });
        return { delivered: response.ok, entry: newEntry };
      } catch (err) {
        return { delivered: false, entry: newEntry };
      }
    }

    // Contact Form Submission with Custom City & Custom Service Validation
    function submitMinimalForm(event) {
      event.preventDefault();
      const nameVal = document.getElementById('client-name').value.trim();
      const citySelectVal = document.getElementById('client-city').value;
      const customCityVal = document.getElementById('client-custom-city').value.trim();
      const formatSelectVal = document.getElementById('client-format').value;
      const customFormatVal = document.getElementById('client-custom-format').value.trim();
      const contactVal = document.getElementById('client-contact').value.trim();
      const noteVal = document.getElementById('client-note').value.trim();

      const pdChecked = document.getElementById('consent-pd-main').checked;
      const msgChecked = document.getElementById('consent-msg-main').checked;
      const errorEl = document.getElementById('contact-form-error');

      const finalCity = citySelectVal === 'custom' ? customCityVal : citySelectVal;
      const needsCustomFormat = formatSelectVal === 'custom_option' || formatSelectVal.includes('05 /') || formatSelectVal.toLowerCase().includes('другом городе');
      const finalService = needsCustomFormat
        ? (customFormatVal ? `Свой вариант: ${customFormatVal}` : '')
        : formatSelectVal;

      if (!nameVal || !contactVal || !finalCity || !finalService || !pdChecked || !msgChecked) {
        if (errorEl) errorEl.classList.remove('hidden');
        return;
      }

      if (errorEl) errorEl.classList.add('hidden');
      document.getElementById('contact-form').classList.add('hidden');
      document.getElementById('form-confirmation').classList.remove('hidden');
      const statusEl = document.getElementById('form-delivery-status');
      if (statusEl) statusEl.textContent = 'Отправляем заявку…';
      recordAndDispatchLead({ name: nameVal, city: finalCity, service: finalService, contact: contactVal, note: noteVal })
        .then(result => {
          if (statusEl) statusEl.textContent = result.delivered
            ? 'Заявка отправлена. Мы свяжемся с вами в рабочее время.'
            : 'Заявка сохранена только в этом браузере. Для получения заявок владельцу нужно подключить webhook в админ-панели.';
        });
    }

    function resetMinimalForm() {
      const form = document.getElementById('contact-form');
      form.reset();
      document.getElementById('consent-pd-main').checked = false;
      document.getElementById('consent-msg-main').checked = false;
      document.getElementById('custom-city-wrap-main').classList.add('hidden');
      document.getElementById('custom-format-wrap-main').classList.add('hidden');
      form.classList.remove('hidden');
      document.getElementById('form-confirmation').classList.add('hidden');
    }

    function submitQuickModalForm(event) {
      event.preventDefault();
      const nameVal = document.getElementById('modal-client-name').value.trim();
      const citySelectVal = document.getElementById('modal-client-city').value;
      const customCityVal = document.getElementById('modal-client-custom-city').value.trim();
      const formatSelectVal = document.getElementById('modal-client-format').value;
      const customFormatVal = document.getElementById('modal-client-custom-format').value.trim();
      const contactVal = document.getElementById('modal-client-contact').value.trim();

      const pdChecked = document.getElementById('consent-pd-modal').checked;
      const msgChecked = document.getElementById('consent-msg-modal').checked;
      const errorEl = document.getElementById('modal-form-error');

      const finalCity = citySelectVal === 'custom' ? customCityVal : citySelectVal;
      const needsCustomFormat = formatSelectVal === 'custom_option' || formatSelectVal.includes('05 /') || formatSelectVal.toLowerCase().includes('другом городе');
      const finalService = needsCustomFormat
        ? (customFormatVal ? `Свой вариант: ${customFormatVal}` : '')
        : formatSelectVal;

      if (!nameVal || !contactVal || !finalCity || !finalService || !pdChecked || !msgChecked) {
        if (errorEl) errorEl.classList.remove('hidden');
        return;
      }

      if (errorEl) errorEl.classList.add('hidden');
      document.getElementById('quick-modal-form').classList.add('hidden');
      document.getElementById('quick-modal-success').classList.remove('hidden');
      const statusEl = document.getElementById('quick-modal-delivery-status');
      if (statusEl) statusEl.textContent = 'Отправляем заявку…';
      recordAndDispatchLead({ name: nameVal, city: finalCity, service: finalService, contact: contactVal, note: 'Быстрая заявка из шапки сайта' })
        .then(result => {
          if (statusEl) statusEl.textContent = result.delivered
            ? 'Заявка отправлена. Мы свяжемся с вами в рабочее время.'
            : 'Заявка сохранена только в этом браузере. Канал доставки владельцу пока не подключён.';
        });
    }

    // =====================================================================
    // ADMIN PANEL AUTHENTICATION (SHA-256 + BRUTE-FORCE PROTECTION) & CMS
    // =====================================================================
    function handleCopyrightClick() {
      copyrightClicks++;
      if (copyrightClickTimer) clearTimeout(copyrightClickTimer);
      if (copyrightClicks >= 3) {
        copyrightClicks = 0;
        openAdminGate();
      } else {
        copyrightClickTimer = setTimeout(() => { copyrightClicks = 0; }, 1200);
      }
    }

    function openAdminGate() {
      const modal = document.getElementById('admin-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      const errEl = document.getElementById('admin-login-error');
      if (errEl) errEl.classList.add('hidden');

      if (!isAdminAuthenticated && isAdminLockedOut()) {
        const mins = Math.max(1, Math.ceil((readLockoutState().lockUntil - Date.now()) / 60000));
        if (errEl) { errEl.textContent = 'Вход временно заблокирован. Повторите через ' + mins + ' мин.'; errEl.classList.remove('hidden'); }
      }

      if (isAdminAuthenticated) {
        showAdminDashboard();
      } else {
        document.getElementById('admin-login-box').classList.remove('hidden');
        document.getElementById('admin-dashboard-box').classList.add('hidden');
        setTimeout(() => {
          const passInput = document.getElementById('admin-pass-input');
          if (passInput) passInput.focus();
        }, 80);
      }
    }

    function closeAdminModal() {
      const modal = document.getElementById('admin-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function toggleAdminPassVisibility() {
      const inp = document.getElementById('admin-pass-input');
      const btn = document.getElementById('admin-pass-toggle-btn');
      if (!inp) return;
      if (inp.type === 'password') {
        inp.type = 'text';
        if (btn) btn.textContent = 'Скрыть';
      } else {
        inp.type = 'password';
        if (btn) btn.textContent = 'Показать';
      }
    }

    function readLockoutState() {
      try {
        const raw = localStorage.getItem(LOCKOUT_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { count: 0, lockUntil: 0 };
    }

    function isAdminLockedOut() {
      const until = readLockoutState().lockUntil || 0;
      return Date.now() < until;
    }

    function registerFailedAdminAttempt() {
      const state = readLockoutState();
      state.count = (state.count || 0) + 1;
      if (state.count >= LOCKOUT_MAX_ATTEMPTS) {
        state.lockUntil = Date.now() + LOCKOUT_COOLDOWN_MS;
        state.count = 0;
      }
      try { localStorage.setItem(LOCKOUT_KEY, JSON.stringify(state)); } catch (e) {}
      return state.lockUntil ? 0 : (LOCKOUT_MAX_ATTEMPTS - state.count);
    }

    async function submitAdminLogin(event) {
      event.preventDefault();
      const errEl = document.getElementById('admin-login-error');
      const rawPass = document.getElementById('admin-pass-input').value;
      const pass = String(rawPass || '').trim();

      if (!pass) {
        if (errEl) { errEl.textContent = 'Введите пароль администратора.'; errEl.classList.remove('hidden'); }
        return;
      }

      if (isAdminLockedOut()) {
        const mins = Math.max(1, Math.ceil((readLockoutState().lockUntil - Date.now()) / 60000));
        if (errEl) { errEl.textContent = 'Слишком много неверных попыток. Повторите через ' + mins + ' мин.'; errEl.classList.remove('hidden'); }
        return;
      }

      const enteredHash = await sha256Hex(pass);
      const expectedHash = siteConfig.customPassHash || DEFAULT_ADMIN_PASS_HASH;

      if (enteredHash === expectedHash) {
        resetBruteForceCounter();
        isAdminAuthenticated = true;
        if (errEl) errEl.classList.add('hidden');
        document.getElementById('admin-pass-input').value = '';
        showAdminDashboard();
      } else {
        const remaining = registerFailedAdminAttempt();
        if (errEl) {
          errEl.textContent = remaining > 0
            ? 'Неверный пароль. Осталось попыток: ' + remaining + '.'
            : 'Вход заблокирован на 10 минут из-за слишком многих неверных попыток.';
          errEl.classList.remove('hidden');
        }
      }
    }

    function logoutAdmin() {
      isAdminAuthenticated = false;
      closeAdminModal();
    }

    function showAdminDashboard() {
      document.getElementById('admin-login-box').classList.add('hidden');
      document.getElementById('admin-dashboard-box').classList.remove('hidden');
      renderAdminLeads();
      populateAdminFields();
    }

    // TAB 2, 3, 4: Populate & Save CMS Settings, Typography Columns & History
    function populateAdminFields() {
      document.getElementById('adm-tg-token').value = siteConfig.tgBotToken || '';
      document.getElementById('adm-tg-chatid').value = siteConfig.tgChatId || '6903692674';
      document.getElementById('adm-webhook-url').value = siteConfig.webhookUrl || '';

      document.getElementById('adm-edit-tg').value = siteConfig.telegramHandle || '';
      document.getElementById('adm-edit-wa').value = siteConfig.whatsappNumber || '';
      document.getElementById('adm-edit-email').value = siteConfig.emailAddress || '';

      document.getElementById('adm-img-hero').value = siteConfig.heroImg || '';
      document.getElementById('adm-img-studio1').value = siteConfig.studioImg1 || '';
      document.getElementById('adm-img-studio2').value = siteConfig.studioImg2 || '';

      renderAdminTypographyTable();
      renderSnapshotsDropdown();
      renderAdminServicesEditor();
      renderAdminProjectsEditor();
    }

    // Render 4-Column Structured Typography & History Table (No raw HTML tags)
    function renderAdminTypographyTable() {
      const tbody = document.getElementById('adm-typography-table-body');
      if (!tbody) return;
      const historyStore = getTextHistoryStore();
      const styles = siteConfig.blockStyles || FACTORY_DEFAULTS.blockStyles;

      tbody.innerHTML = EDITABLE_TEXT_BLOCKS.map(block => {
        const key = block.key;
        const cleanVal = stripHtmlTags(siteConfig[key] !== undefined ? siteConfig[key] : FACTORY_DEFAULTS[key]);
        const st = styles[key] || FACTORY_DEFAULTS.blockStyles[key];
        const historyList = historyStore[key] || [];

        const historyOptions = historyList.map((h, idx) => {
          const shortPreview = h.text.length > 52 ? h.text.slice(0, 52) + '…' : h.text;
          return `<option value="${idx}">[${escapeHtml(h.label)}] ${escapeHtml(shortPreview)}</option>`;
        }).join('');

        return `
          <tr class="hover:bg-surface/40 transition-colors">
            <!-- Column 1: Clean Text Input -->
            <td class="p-4 border-r border-line">
              <label for="adm-txt-${key}" class="block text-xs font-medium text-ink mb-1.5">${escapeHtml(block.label)}</label>
              ${block.multiline
                ? `<textarea id="adm-txt-${key}" rows="3" oninput="livePreviewBlock('${key}')" class="w-full bg-surface px-3 py-2 border border-line focus:border-ink text-sm text-ink focus:outline-none">${escapeHtml(cleanVal)}</textarea>`
                : `<input id="adm-txt-${key}" type="text" value="${escapeHtml(cleanVal)}" oninput="livePreviewBlock('${key}')" class="w-full bg-surface px-3 py-2 border border-line focus:border-ink text-sm text-ink focus:outline-none" />`
              }
            </td>

            <!-- Column 2: Font Family, Weight, Italic -->
            <td class="p-4 border-r border-line space-y-2.5">
              <div>
                <label class="block text-[11px] text-muted mb-1">Шрифт (Font Family)</label>
                <select id="adm-font-${key}" onchange="livePreviewBlock('${key}')" class="w-full bg-surface px-2.5 py-1.5 border border-line text-xs text-ink cursor-pointer">
                  <option value="sans" ${st.font === 'sans' ? 'selected' : ''}>Inter (Основной гротеск)</option>
                  <option value="serif" ${st.font === 'serif' ? 'selected' : ''}>Instrument Serif (Журнальный)</option>
                  <option value="mono" ${st.font === 'mono' ? 'selected' : ''}>JetBrains Mono (Технический)</option>
                </select>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-[11px] text-muted mb-1">Толщина</label>
                  <select id="adm-weight-${key}" onchange="livePreviewBlock('${key}')" class="w-full bg-surface px-2 py-1.5 border border-line text-xs text-ink cursor-pointer">
                    <option value="300" ${st.weight === '300' ? 'selected' : ''}>300 Light</option>
                    <option value="400" ${st.weight === '400' ? 'selected' : ''}>400 Regular</option>
                    <option value="500" ${st.weight === '500' ? 'selected' : ''}>500 Medium</option>
                    <option value="600" ${st.weight === '600' ? 'selected' : ''}>600 SemiBold</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] text-muted mb-1">Начертание</label>
                  <select id="adm-italic-${key}" onchange="livePreviewBlock('${key}')" class="w-full bg-surface px-2 py-1.5 border border-line text-xs text-ink cursor-pointer">
                    <option value="normal" ${!st.italic ? 'selected' : ''}>Обычный</option>
                    <option value="italic" ${st.italic ? 'selected' : ''}>Курсив (Italic)</option>
                  </select>
                </div>
              </div>
            </td>

            <!-- Column 3: Desktop Size, Mobile Size, Line Height -->
            <td class="p-4 border-r border-line space-y-2.5">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-[11px] text-muted mb-1">ПК размер (px)</label>
                  <input id="adm-sizedesk-${key}" type="number" min="10" max="96" value="${st.sizeDesktop}" oninput="livePreviewBlock('${key}')" class="w-full bg-surface px-2.5 py-1.5 border border-line font-mono text-xs text-ink" />
                </div>
                <div>
                  <label class="block text-[11px] text-muted mb-1">Моб. размер (px)</label>
                  <input id="adm-sizemob-${key}" type="number" min="10" max="64" value="${st.sizeMobile}" oninput="livePreviewBlock('${key}')" class="w-full bg-surface px-2.5 py-1.5 border border-line font-mono text-xs text-ink" />
                </div>
              </div>
              <div>
                <label class="block text-[11px] text-muted mb-1">Межстрочный интервал</label>
                <select id="adm-lh-${key}" onchange="livePreviewBlock('${key}')" class="w-full bg-surface px-2.5 py-1.5 border border-line font-mono text-xs text-ink cursor-pointer">
                  <option value="1.05" ${st.lineHeight === '1.05' ? 'selected' : ''}>1.05 (Плотный заголовок)</option>
                  <option value="1.08" ${st.lineHeight === '1.08' ? 'selected' : ''}>1.08 (Стандарт H1)</option>
                  <option value="1.25" ${st.lineHeight === '1.25' ? 'selected' : ''}>1.25 (Подзаголовок)</option>
                  <option value="1.4" ${st.lineHeight === '1.4' ? 'selected' : ''}>1.40 (Компактный текст)</option>
                  <option value="1.5" ${st.lineHeight === '1.5' ? 'selected' : ''}>1.50 (Средний)</option>
                  <option value="1.6" ${st.lineHeight === '1.6' ? 'selected' : ''}>1.60 (Воздушный абзац)</option>
                </select>
              </div>
            </td>

            <!-- Column 4: Per-Block Text History & 1-Click Factory Reset -->
            <td class="p-4 space-y-2.5">
              <div>
                <label class="block text-[11px] text-muted mb-1">История вариантов текста (выбор в 1 клик)</label>
                <select id="adm-hist-${key}" onchange="applyHistoryVariantToBlock('${key}', this.value)" class="w-full bg-surface px-2.5 py-1.5 border border-line text-xs text-ink cursor-pointer">
                  <option value="">— Выбрать из истории (${historyList.length}) —</option>
                  ${historyOptions}
                </select>
              </div>
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onclick="saveSingleBlockToHistory('${key}')"
                  class="px-3 py-1.5 border border-ink text-[11px] font-mono text-ink hover:bg-ink hover:text-bg transition-colors cursor-pointer"
                >
                  + Сохранить текст в историю
                </button>
                <button
                  type="button"
                  onclick="resetSingleBlockToFactory('${key}')"
                  class="px-3 py-1.5 border border-[#C83E2B] text-[11px] font-mono text-[#C83E2B] hover:bg-[#C83E2B] hover:text-bg transition-colors cursor-pointer"
                  title="Вернуть изначальный текст, шрифт и размер для этого блока"
                >
                  ↺ Сбросить блок
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }

    function readBlockFromAdminRow(key) {
      const txtEl = document.getElementById(`adm-txt-${key}`);
      const fontEl = document.getElementById(`adm-font-${key}`);
      const weightEl = document.getElementById(`adm-weight-${key}`);
      const italicEl = document.getElementById(`adm-italic-${key}`);
      const deskEl = document.getElementById(`adm-sizedesk-${key}`);
      const mobEl = document.getElementById(`adm-sizemob-${key}`);
      const lhEl = document.getElementById(`adm-lh-${key}`);

      if (txtEl) {
        siteConfig[key] = stripHtmlTags(txtEl.value);
      }
      if (!siteConfig.blockStyles) {
        siteConfig.blockStyles = JSON.parse(JSON.stringify(FACTORY_DEFAULTS.blockStyles));
      }
      if (fontEl && weightEl && italicEl && deskEl && mobEl && lhEl) {
        siteConfig.blockStyles[key] = {
          font: fontEl.value,
          weight: weightEl.value,
          italic: italicEl.value === 'italic',
          sizeDesktop: parseInt(deskEl.value, 10) || FACTORY_DEFAULTS.blockStyles[key].sizeDesktop,
          sizeMobile: parseInt(mobEl.value, 10) || FACTORY_DEFAULTS.blockStyles[key].sizeMobile,
          lineHeight: lhEl.value
        };
      }
    }

    function livePreviewBlock(key) {
      readBlockFromAdminRow(key);
      applyCMSDataToDOM();
    }

    function saveSingleBlockToHistory(key) {
      readBlockFromAdminRow(key);
      addTextToBlockHistory(key, siteConfig[key]);
      persistCMSConfig();
      renderAdminTypographyTable();
    }

    function applyHistoryVariantToBlock(key, idxStr) {
      if (idxStr === '' || idxStr === null) return;
      const store = getTextHistoryStore();
      const list = store[key] || [];
      const chosen = list[parseInt(idxStr, 10)];
      if (!chosen) return;
      siteConfig[key] = chosen.text;
      const txtEl = document.getElementById(`adm-txt-${key}`);
      if (txtEl) txtEl.value = chosen.text;
      persistCMSConfig();
      applyCMSDataToDOM();
    }

    function resetSingleBlockToFactory(key) {
      // Save current custom text into history before resetting so nothing is lost
      if (siteConfig[key] && siteConfig[key] !== FACTORY_DEFAULTS[key]) {
        addTextToBlockHistory(key, siteConfig[key], 'До сброса');
      }
      siteConfig[key] = FACTORY_DEFAULTS[key];
      if (!siteConfig.blockStyles) siteConfig.blockStyles = {};
      siteConfig.blockStyles[key] = JSON.parse(JSON.stringify(FACTORY_DEFAULTS.blockStyles[key]));
      persistCMSConfig();
      applyCMSDataToDOM();
      renderAdminTypographyTable();
    }

    function resetAllBlocksToFactoryDefaults() {
      // Keep user's text history intact, save current texts into history first
      EDITABLE_TEXT_BLOCKS.forEach(b => {
        const k = b.key;
        if (siteConfig[k] && siteConfig[k] !== FACTORY_DEFAULTS[k]) {
          addTextToBlockHistory(k, siteConfig[k], 'До полного сброса');
        }
      });

      const preservedToken = siteConfig.tgBotToken;
      const preservedChatId = siteConfig.tgChatId || '6903692674';
      const preservedWebhook = siteConfig.webhookUrl;
      const preservedPassHash = siteConfig.customPassHash;

      siteConfig = JSON.parse(JSON.stringify(FACTORY_DEFAULTS));
      siteConfig.tgBotToken = preservedToken;
      siteConfig.tgChatId = preservedChatId;
      siteConfig.webhookUrl = preservedWebhook;
      siteConfig.customPassHash = preservedPassHash;

      projects = JSON.parse(JSON.stringify(FACTORY_PROJECTS));
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
      } catch (e) {}

      persistCMSConfig();
      applyCMSDataToDOM();
      populateAdminFields();
    }

    function resetContactsToFactory() {
      siteConfig.telegramHandle = FACTORY_DEFAULTS.telegramHandle;
      siteConfig.whatsappNumber = FACTORY_DEFAULTS.whatsappNumber;
      siteConfig.emailAddress = FACTORY_DEFAULTS.emailAddress;
      persistCMSConfig();
      applyCMSDataToDOM();
      populateAdminFields();
    }

    function resetServicesToFactory() {
      siteConfig.services = JSON.parse(JSON.stringify(FACTORY_DEFAULTS.services));
      persistCMSConfig();
      applyCMSDataToDOM();
      renderAdminServicesEditor();
    }

    // Whole-Page Snapshots (Presets)
    function getPageSnapshots() {
      try {
        const raw = localStorage.getItem(PAGE_SNAPSHOTS_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return [
        {
          name: 'Изначальный стандарт KADAR 48',
          config: JSON.parse(JSON.stringify(FACTORY_DEFAULTS))
        }
      ];
    }

    function renderSnapshotsDropdown() {
      const sel = document.getElementById('adm-snapshots-select');
      if (!sel) return;
      const list = getPageSnapshots();
      sel.innerHTML = `<option value="">— Загрузить сохраненный снимок (${list.length}) —</option>` +
        list.map((snap, i) => `<option value="${i}">${escapeHtml(snap.name)}</option>`).join('');
    }

    function saveCurrentPageSnapshot() {
      saveTextsAndServicesFromAdmin();
      const nameInp = document.getElementById('adm-snapshot-name');
      const snapName = (nameInp && nameInp.value.trim()) || ('Снимок от ' + new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
      const list = getPageSnapshots();
      list.unshift({
        name: snapName,
        config: JSON.parse(JSON.stringify(siteConfig))
      });
      try {
        localStorage.setItem(PAGE_SNAPSHOTS_STORAGE_KEY, JSON.stringify(list));
      } catch (e) {}
      if (nameInp) nameInp.value = '';
      renderSnapshotsDropdown();
    }

    function applyPageSnapshot(idxStr) {
      if (idxStr === '' || idxStr === null) return;
      const list = getPageSnapshots();
      const chosen = list[parseInt(idxStr, 10)];
      if (!chosen || !chosen.config) return;
      siteConfig = JSON.parse(JSON.stringify(chosen.config));
      persistCMSConfig();
      applyCMSDataToDOM();
      populateAdminFields();
    }

    function switchAdminTab(tabName) {
      ['leads', 'tg', 'texts', 'photos', 'security'].forEach(t => {
        const pane = document.getElementById(`adm-tab-${t}`);
        const btn = document.getElementById(`adm-tab-btn-${t}`);
        if (t === tabName) {
          pane.classList.remove('hidden');
          btn.classList.add('border-ink', 'text-ink', 'font-medium');
          btn.classList.remove('border-transparent', 'text-muted');
        } else {
          pane.classList.add('hidden');
          btn.classList.remove('border-ink', 'text-ink', 'font-medium');
          btn.classList.add('border-transparent', 'text-muted');
        }
      });
    }

    // TAB 1: Render CRM Leads with 1-Click Telegram / WhatsApp Contact
    function renderAdminLeads() {
      const container = document.getElementById('adm-leads-list');
      if (!container) return;
      const leads = getStoredLeads();
      updateLeadsCountBadges();

      if (leads.length === 0) {
        container.innerHTML = `
          <div class="p-8 border border-line bg-surface/50 text-center space-y-2">
            <p class="text-sm text-ink">Пока нет сохраненных заявок.</p>
            <p class="text-xs text-muted">Отправьте заявку через форму на сайте или нажмите кнопку «+ Тестовая заявка» сверху, чтобы проверить работу CRM.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = leads.map(lead => {
        const cleanHandle = (lead.contact || '').replace(/^@/, '').trim();
        const digitsOnly = (lead.contact || '').replace(/[^0-9]/g, '');
        const tgLink = `https://t.me/${encodeURIComponent(cleanHandle)}`;
        const waLink = digitsOnly ? `https://wa.me/${digitsOnly}` : `https://wa.me/?text=${encodeURIComponent('Здравствуйте, ' + lead.name)}`;

        return `
          <div class="p-5 bg-surface border border-line flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div class="space-y-1.5 max-w-2xl">
              <div class="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span class="px-2 py-0.5 bg-ink text-bg">${escapeHtml(lead.status || 'Новая')}</span>
                <span class="text-muted">${escapeHtml(lead.createdAt)}</span>
                <span class="text-ink font-medium">📍 ${escapeHtml(lead.city)}</span>
              </div>
              <p class="text-base font-medium text-ink">
                ${escapeHtml(lead.name)} — <span class="font-mono text-sm">${escapeHtml(lead.contact)}</span>
              </p>
              <p class="text-xs sm:text-sm text-ink">
                <span class="text-muted">Услуга / Свой вариант:</span> ${escapeHtml(lead.service)}
              </p>
              ${lead.note ? `<p class="text-xs text-muted">Комментарий: ${escapeHtml(lead.note)}</p>` : ''}
            </div>

            <div class="flex flex-wrap items-center gap-2 shrink-0">
              <a href="${tgLink}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 border border-ink text-xs font-mono text-ink hover:bg-ink hover:text-bg transition-colors">
                Написать в Telegram ↗
              </a>
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 border border-ink text-xs font-mono text-ink hover:bg-ink hover:text-bg transition-colors">
                WhatsApp ↗
              </a>
              <button type="button" onclick="toggleLeadStatus('${escapeHtml(lead.id)}')" class="px-3 py-1.5 border border-line text-xs font-mono text-muted hover:text-ink cursor-pointer">
                Сменить статус
              </button>
              <button type="button" onclick="deleteLead('${escapeHtml(lead.id)}')" class="px-2.5 py-1.5 border border-line text-xs font-mono text-[#C83E2B] hover:border-[#C83E2B] cursor-pointer">
                Удалить
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    function toggleLeadStatus(id) {
      const leads = getStoredLeads();
      const statuses = ['Новая', 'В работе', 'Съемка назначена', 'Завершена'];
      const item = leads.find(l => l.id === id);
      if (item) {
        const nextIdx = (statuses.indexOf(item.status) + 1) % statuses.length;
        item.status = statuses[nextIdx];
        saveLeadsArray(leads);
        renderAdminLeads();
      }
    }

    function deleteLead(id) {
      const leads = getStoredLeads().filter(l => l.id !== id);
      saveLeadsArray(leads);
      renderAdminLeads();
    }

    function createDemoLead() {
      recordAndDispatchLead({
        name: 'Александра (Стоматология)',
        city: 'Нови-Сад',
        service: 'Свой вариант: Нужно 8 экспертных Reels для врачей + съемка клиники в Нови-Саде',
        contact: '@alexandra_ns_clinic',
        note: 'Хотим снять в следующую среду в первой половине дня'
      });
      renderAdminLeads();
    }

    function exportLeadsToCSV() {
      const leads = getStoredLeads();
      if (leads.length === 0) return;
      const headers = ['Дата', 'Статус', 'Имя', 'Город', 'Формат / Задача', 'Контакт', 'Комментарий'];
      const rows = leads.map(l => [
        l.createdAt, l.status, l.name, l.city, l.service, l.contact, l.note
      ].map(v => `"${String(v || '').replace(/"/g, '""')}"`).join(','));

      const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'kadar48-leads.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function renderAdminServicesEditor() {
      const container = document.getElementById('adm-services-editor');
      if (!container) return;
      container.innerHTML = siteConfig.services.map((srv, idx) => `
        <div class="p-4 bg-surface border border-line space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-xs text-muted">Услуга #${idx + 1}</span>
            <button type="button" onclick="removeServiceRow(${idx})" class="text-xs font-mono text-[#C83E2B] cursor-pointer">Удалить</button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            <div class="sm:col-span-8">
              <label class="block text-[11px] text-muted">Название услуги (RU)</label>
              <input id="adm-srv-title-${idx}" type="text" value="${escapeHtml(srv.ru.title)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs text-ink" />
            </div>
            <div class="sm:col-span-4">
              <label class="block text-[11px] text-muted">Цена (например: €180)</label>
              <input id="adm-srv-price-${idx}" type="text" value="${escapeHtml(srv.price)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs font-mono text-ink" />
            </div>
          </div>
          <div>
            <label class="block text-[11px] text-muted">Описание (RU)</label>
            <textarea id="adm-srv-desc-${idx}" rows="2" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs text-ink">${escapeHtml(srv.ru.desc)}</textarea>
          </div>
        </div>
      `).join('');
    }

    function addNewServiceRow() {
      const nextNum = String(siteConfig.services.length + 1).padStart(2, '0');
      siteConfig.services.push({
        num: nextNum,
        price: '€200',
        ru: { title: 'Новая услуга видеопродакшна', desc: 'Описание формата, длительности съемки и сроков монтажа.' },
        sr: { title: 'Nova usluga produkcije', desc: 'Opis formata i montaže za 48 sati.' },
        en: { title: 'New Production Service', desc: 'Description of deliverables and 48-hour editing turnaround.' }
      });
      renderAdminServicesEditor();
    }

    function removeServiceRow(idx) {
      if (siteConfig.services.length <= 1) return;
      siteConfig.services.splice(idx, 1);
      renderAdminServicesEditor();
    }

    function saveTextsAndServicesFromAdmin() {
      EDITABLE_TEXT_BLOCKS.forEach(b => {
        readBlockFromAdminRow(b.key);
        addTextToBlockHistory(b.key, siteConfig[b.key]);
      });

      siteConfig.telegramHandle = document.getElementById('adm-edit-tg').value.trim();
      siteConfig.whatsappNumber = document.getElementById('adm-edit-wa').value.trim();
      siteConfig.emailAddress = document.getElementById('adm-edit-email').value.trim();

      siteConfig.services.forEach((srv, idx) => {
        const tEl = document.getElementById(`adm-srv-title-${idx}`);
        const pEl = document.getElementById(`adm-srv-price-${idx}`);
        const dEl = document.getElementById(`adm-srv-desc-${idx}`);
        srv.num = String(idx + 1).padStart(2, '0');
        if (tEl) srv.ru.title = tEl.value.trim();
        if (pEl) srv.price = pEl.value.trim();
        if (dEl) srv.ru.desc = dEl.value.trim();
      });

      persistCMSConfig();
      applyCMSDataToDOM();
      renderAdminTypographyTable();
    }

    function showTelegramDiagnostic(message, isError) {
      const box = document.getElementById('adm-tg-diagnostic-box');
      if (!box) return;
      box.classList.remove('hidden');
      if (isError) {
        box.className = 'p-4 border border-[#C83E2B] bg-[#C83E2B]/10 text-[#C83E2B] text-xs font-mono leading-relaxed';
      } else {
        box.className = 'p-4 border border-ink bg-bg text-ink text-xs font-mono leading-relaxed';
      }
      box.innerHTML = message;
    }

    function saveIntegrationSettings() {
      siteConfig.tgBotToken = document.getElementById('adm-tg-token').value.trim();
      siteConfig.tgChatId = document.getElementById('adm-tg-chatid').value.trim() || '6903692674';
      siteConfig.webhookUrl = document.getElementById('adm-webhook-url').value.trim();
      persistCMSConfig();
      showTelegramDiagnostic('✓ Настройки сохранены. Теперь нажмите «Проверить связь (Тест в Telegram)».', false);
    }

    async function sendTestTelegramNotification() {
      const tokenEl = document.getElementById('adm-tg-token');
      const chatEl = document.getElementById('adm-tg-chatid');
      siteConfig.tgBotToken = tokenEl ? tokenEl.value.trim() : '';
      siteConfig.tgChatId = (chatEl && chatEl.value.trim()) ? chatEl.value.trim() : '6903692674';
      persistCMSConfig();

      if (!siteConfig.tgBotToken) {
        if (tokenEl) {
          tokenEl.classList.add('border-[#C83E2B]');
          tokenEl.focus();
        }
        showTelegramDiagnostic(
          '⚠ ПОЧЕМУ НЕ ОТПРАВЛЯЕТСЯ: Вы ввели свой Chat ID (' + escapeHtml(siteConfig.tgChatId) + '), но оставили пустым первое поле «TELEGRAM BOT TOKEN».\n' +
          'Без токена бота Telegram не знает, от чьего имени прислать вам сообщение. Создайте бота в @BotFather за 30 секунд, скопируйте токен в первое поле, нажмите /start в созданном боте и повторите тест.',
          true
        );
        return;
      }

      if (tokenEl) tokenEl.classList.remove('border-[#C83E2B]');
      showTelegramDiagnostic('Отправка тестового сообщения в Telegram на ID ' + escapeHtml(siteConfig.tgChatId) + '...', false);

      try {
        const res = await fetch(`https://api.telegram.org/bot${siteConfig.tgBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: siteConfig.tgChatId,
            text: '✅ KADAR 48: Связь с сайтом настроена! Сюда будут мгновенно приходить заявки клиентов.'
          })
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          showTelegramDiagnostic('✅ УСПЕШНО! Тестовое сообщение доставлено в ваш Telegram (ID ' + escapeHtml(siteConfig.tgChatId) + '). Сервер не требуется — все заявки с сайта теперь будут приходить вам мгновенно.', false);
        } else if (res.status === 401) {
          showTelegramDiagnostic('❌ ОШИБКА 401 (Неверный Bot Token): Проверьте правильность скопированного токена из @BotFather (он должен быть вида 7123456789:AAH...).', true);
        } else if (res.status === 400 && String(data.description || '').toLowerCase().includes('chat not found')) {
          showTelegramDiagnostic('❌ ОШИБКА 400 (Chat not found): Бот еще не может написать вам первым! Откройте созданного вами бота в Telegram и нажмите в нем кнопку «Запустить» (/start), затем снова нажмите «Проверить связь».', true);
        } else {
          showTelegramDiagnostic('❌ Ответ Telegram API: ' + escapeHtml(data.description || ('Код ' + res.status)), true);
        }
      } catch (e) {
        showTelegramDiagnostic('❌ Не удалось соединиться с api.telegram.org. Проверьте подключение к интернету или VPN.', true);
      }
    }

    // Image Upload with Client-Side Canvas Compression (so photos save cleanly in localStorage & Static HTML)
    function handleImageFileUpload(event, targetInputId) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const maxDim = 1400;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
          const inputEl = document.getElementById(targetInputId);
          if (inputEl) inputEl.value = dataUrl;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function saveMainPhotosFromAdmin() {
      siteConfig.heroImg = document.getElementById('adm-img-hero').value.trim();
      siteConfig.studioImg1 = document.getElementById('adm-img-studio1').value.trim();
      siteConfig.studioImg2 = document.getElementById('adm-img-studio2').value.trim();
      persistCMSConfig();
      applyCMSDataToDOM();
    }

    function renderAdminProjectsEditor() {
      const container = document.getElementById('adm-projects-editor');
      if (!container) return;
      container.innerHTML = projects.map((proj, idx) => `
        <div class="p-4 bg-surface border border-line space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs text-muted">Кейс ${escapeHtml(proj.index)}</span>
            <span class="font-mono text-xs text-ink">${escapeHtml(proj.ru.title)}</span>
          </div>
          <div>
            <label class="block text-[11px] text-muted">Название проекта</label>
            <input id="adm-proj-title-${idx}" type="text" value="${escapeHtml(proj.ru.title)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs text-ink" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-muted">Ниша и Город (например: Стоматология · Нови-Сад)</label>
              <input id="adm-proj-niche-${idx}" type="text" value="${escapeHtml(proj.ru.niche)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs text-ink" />
            </div>
            <div>
              <label class="block text-[11px] text-muted">Результат (цифра справа)</label>
              <input id="adm-proj-metric-${idx}" type="text" value="${escapeHtml(proj.ru.metric)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs font-mono text-ink" />
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="block text-[11px] text-muted">Главное фото кейса (URL или загрузка с компьютера)</label>
            <div class="flex gap-2">
              <input id="adm-proj-img-${idx}" type="text" value="${escapeHtml(proj.image)}" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs font-mono text-ink" />
              <label class="shrink-0 px-3 py-1.5 border border-ink text-xs font-mono cursor-pointer hover:bg-ink hover:text-bg transition-colors">
                Загрузить фото
                <input type="file" accept="image/*" class="hidden" onchange="handleImageFileUpload(event, 'adm-proj-img-${idx}')" />
              </label>
            </div>
          </div>
          <div>
            <label class="block text-[11px] text-muted">Описание задачи и съемки (RU)</label>
            <textarea id="adm-proj-p1-${idx}" rows="2" class="w-full bg-bg px-2.5 py-1.5 border border-line text-xs text-ink">${escapeHtml(proj.ru.p1)}</textarea>
          </div>
        </div>
      `).join('');
    }

    function savePortfolioFromAdmin() {
      projects.forEach((proj, idx) => {
        const t = document.getElementById(`adm-proj-title-${idx}`);
        const n = document.getElementById(`adm-proj-niche-${idx}`);
        const m = document.getElementById(`adm-proj-metric-${idx}`);
        const im = document.getElementById(`adm-proj-img-${idx}`);
        const p1 = document.getElementById(`adm-proj-p1-${idx}`);
        if (t) proj.ru.title = t.value.trim();
        if (n) proj.ru.niche = n.value.trim();
        if (m) proj.ru.metric = m.value.trim();
        if (im) proj.image = im.value.trim();
        if (p1) proj.ru.p1 = p1.value.trim();
      });
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
      } catch (e) {}
      applyCMSDataToDOM();
    }

    async function changeAdminPassword() {
      const newPass = document.getElementById('adm-new-pass').value.trim();
      const msgEl = document.getElementById('adm-pass-msg');
      if (!newPass || newPass.length < 6) {
        msgEl.textContent = 'Пароль должен содержать минимум 6 символов.';
        return;
      }
      const newHash = await sha256Hex(newPass);
      siteConfig.customPassHash = newHash;
      try {
        localStorage.setItem(CUSTOM_PASS_STORAGE_KEY, newHash);
      } catch (e) {}
      persistCMSConfig();
      clearLegacyLockoutStorage();
      document.getElementById('adm-new-pass').value = '';
      msgEl.textContent = '✓ Пароль успешно изменен и зашифрован. Скачайте обновленный index.html, чтобы вшить новый пароль в файл.';
    }

    function resetBruteForceCounter() {
      clearLegacyLockoutStorage();
      try { localStorage.removeItem(LOCKOUT_KEY); } catch (e) {}
      const msgEl = document.getElementById('adm-pass-msg');
      if (msgEl) msgEl.textContent = '✓ Счетчик попыток входа и блокировка сброшены.';
    }

    function persistCMSConfig() {
      try {
        localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(siteConfig));
      } catch (e) {}
    }

    function resetSiteDataToDefaults() {
      try {
        localStorage.removeItem(CMS_STORAGE_KEY);
        localStorage.removeItem(PROJECTS_STORAGE_KEY);
      } catch (e) {}
      window.location.reload();
    }

    // =====================================================================
    // STATIC HTML GENERATOR ("Скачать обновленный index.html")
    // Bakes current siteConfig and projects into the downloadable file!
    // =====================================================================
    function exportStaticHtmlFile() {
      saveTextsAndServicesFromAdmin();
      saveMainPhotosFromAdmin();
      savePortfolioFromAdmin();

      // Export a detached document with all private/editor-only surfaces removed.
      const exportDoc = document.documentElement.cloneNode(true);
      ['admin-modal', 'quick-request-modal', 'cookie-modal'].forEach(id => exportDoc.querySelector('#' + id)?.remove());
      exportDoc.querySelectorAll('[id^="adm-"]').forEach(el => el.remove());
      exportDoc.querySelectorAll('[onclick*="openAdminGate"], #stealth-copyright').forEach(el => el.removeAttribute('onclick'));
      const script = Array.from(exportDoc.querySelectorAll('script')).find(node => node.textContent.includes('__KADAR48_CMS_STATE_START__'));
      if (script) {
        let js = script.textContent;
        const publicConfig = JSON.parse(JSON.stringify(siteConfig));
        publicConfig.tgBotToken = '';
        publicConfig.webhookUrl = '';
        publicConfig.customPassHash = '';
        js = js.replace(/\/\*__KADAR48_CMS_STATE_START__\*\/[\s\S]*?\/\*__KADAR48_CMS_STATE_END__\*\//,
          `/*__KADAR48_CMS_STATE_START__*/\n    const defaultSiteConfig = ${JSON.stringify(publicConfig, null, 6)};\n    /*__KADAR48_CMS_STATE_END__*/`);
        js = js.replace(/\/\*__KADAR48_PROJECTS_START__\*\/[\s\S]*?\/\*__KADAR48_PROJECTS_END__\*\//,
          `/*__KADAR48_PROJECTS_START__*/\n    let projects = ${JSON.stringify(projects, null, 6)};\n    /*__KADAR48_PROJECTS_END__*/`);
        script.textContent = js;
      }
      let fullHtml = '<!DOCTYPE html>\n' + exportDoc.outerHTML;

      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'index.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // =====================================================================
    // COOKIE CONSENT ENGINE (GDPR / ePRIVACY / ZZPL / 152-FZ)
    // =====================================================================
    const COOKIE_STORAGE_KEY = 'kadar48_cookie_consent';

    function getStoredCookieConsent() {
      try {
        const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    function saveCookieChoice(mode) {
      const state = {
        necessary: true,
        analytics: mode === 'all',
        marketing: mode === 'all',
        timestamp: new Date().toISOString()
      };
      try {
        localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}

      document.getElementById('cookie-banner').classList.add('hidden');
      closeCookieModal();
      updateFooterCookieBadge();
    }

    function saveGranularCookies() {
      const analytics = document.getElementById('chk-cookie-analytics').checked;
      const marketing = document.getElementById('chk-cookie-marketing').checked;
      const state = {
        necessary: true,
        analytics: analytics,
        marketing: marketing,
        timestamp: new Date().toISOString()
      };
      try {
        localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}

      document.getElementById('cookie-banner').classList.add('hidden');
      closeCookieModal();
      updateFooterCookieBadge();
    }

    function openCookieModal() {
      const current = getStoredCookieConsent();
      document.getElementById('chk-cookie-analytics').checked = current ? !!current.analytics : false;
      document.getElementById('chk-cookie-marketing').checked = current ? !!current.marketing : false;
      document.getElementById('cookie-modal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeCookieModal() {
      document.getElementById('cookie-modal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    // Keyboard dismissal for all dialogs; keep the active dialog's close behavior centralized.
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const quick = document.getElementById('quick-request-modal');
      const cookies = document.getElementById('cookie-modal');
      const admin = document.getElementById('admin-modal');
      if (quick && !quick.classList.contains('hidden')) closeQuickModal();
      else if (cookies && !cookies.classList.contains('hidden')) closeCookieModal();
      else if (admin && !admin.classList.contains('hidden')) closeAdminModal();
    });

    function revokeAllConsentNow() {
      try {
        localStorage.removeItem(COOKIE_STORAGE_KEY);
      } catch (e) {}
      document.getElementById('chk-cookie-analytics').checked = false;
      document.getElementById('chk-cookie-marketing').checked = false;
      updateFooterCookieBadge();
      document.getElementById('cookie-banner').classList.remove('hidden');
    }

    function updateFooterCookieBadge() {
      const badge = document.getElementById('footer-cookie-status');
      if (!badge) return;
      const current = getStoredCookieConsent();
      const labels = {
        ru: {
          onlyTech: '[Только технические]',
          all: '[Все разрешены]',
          custom: '[Выборочные]'
        },
        sr: {
          onlyTech: '[Samo tehnički]',
          all: '[Svi dozvoljeni]',
          custom: '[Prilagođeno]'
        },
        en: {
          onlyTech: '[Necessary only]',
          all: '[All accepted]',
          custom: '[Custom]'
        }
      }[currentLang];

      if (!current || (!current.analytics && !current.marketing)) {
        badge.textContent = labels.onlyTech;
      } else if (current.analytics && current.marketing) {
        badge.textContent = labels.all;
      } else {
        badge.textContent = labels.custom;
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      // Preserve current lockout state; only obsolete lockout keys are cleared.
      clearLegacyLockoutStorage();
      loadCMSData();

      try {
        const savedLang = localStorage.getItem('kadar48_lang');
        if (savedLang && i18n[savedLang]) {
          setLang(savedLang);
        }
      } catch (e) {}

      applyCMSDataToDOM();
      updateFooterCookieBadge();

      const existingConsent = getStoredCookieConsent();
      if (!existingConsent) {
        const bannerEl = document.getElementById('cookie-banner');
        if (bannerEl) bannerEl.classList.remove('hidden');
      }

      // Stealth Keyboard Shortcut: Ctrl + Shift + A (or Cmd + Shift + A on Mac) in EN / RU layouts
      window.addEventListener('keydown', (e) => {
        const isCtrlOrCmd = e.ctrlKey || e.metaKey;
        const isKeyA = e.code === 'KeyA' || e.key === 'A' || e.key === 'a' || e.key === 'Ф' || e.key === 'ф';
        if (isCtrlOrCmd && e.shiftKey && isKeyA) {
          e.preventDefault();
          openAdminGate();
        }
      });

      // Admin is intentionally available only through the local keyboard shortcut or triple-click.
      // Never expose an URL/hash backdoor on a public GitHub Pages deployment.
    });
  
