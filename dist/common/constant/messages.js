"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = exports.Messages = void 0;
exports.Messages = {
    Language: {
        "en": "Choose language",
        "uz": "Tilni tanlang",
        "ru": "Выберите язык"
    },
    Phone: {
        "en": `<b>Share your phone number to use the bot!!!</b>`,
        "uz": `<b>Botdan foydalanish uchun telefon raqamingizni ulashing!!!</b>`,
        "ru": `<b>Поделитесь своим номером телефона, чтобы использовать бота!!!</b>`
    },
    PhoneButton: {
        "en": "📞 Confirm your number",
        "uz": "📞 Nomeringizni  tasdiqlang",
        "ru": "📞 Подтверди свой номер"
    },
    Meny: {
        "en": `<b>Main menu</b>`,
        "uz": `<b>Asosiy menyu</b>`,
        "ru": `<b>Главное меню</b>`
    },
    Technology: {
        "en": `<b>Please enter the technology!(For example: Node.js, Javascript, Database...)</b>`,
        "uz": `<b>Marhamat Technologiyani kiriting!(Masalan: Node.js, Javascript, Database ...)</b>`,
        "ru": `<b>Пожалуйста, введите технологию!(Например: Node.js, Javascript, база данных...)</b>`
    },
    ConnectPhone: {
        "en": `<b>Enter the contact phone number\n(For example: +998901234567)</b>`,
        "uz": `<b>Aloqa uchun telefon raqamni kiriting\n(Masalan : +998901234567)</b>`,
        "ru": `<b>Введите контактный номер телефона\n(Например: +998901234567)</b>`
    },
    ErrorToNumber: {
        "en": `<b>The number was entered incorrectly!</b>`,
        "uz": `<b>Raqam noto'g'ri kiritildi!</b>`,
        "ru": `<b>Номер введен неправильно!</b>`
    },
    EnterPlace: {
        "en": `<b>Please enter the area!</b>`,
        "uz": `<b>Marhamat hududni kiriting!</b>`,
        "ru": `<b>Пожалуйста, войдите в зону!</b>`
    },
    EnterPrice: {
        "en": `<b>Please enter your salary! (For example: 400-1000$ or 4000000-10000000 so'm or 200$+)</b>`,
        "uz": `<b>Marhamat maoshni kiriting!(Masalan: 400-1000$ yoki 4000000-10000000 so'm yoki 200$+)</b>`,
        "ru": `<b>Пожалуйста, введите вашу зарплату!(Например: 400-1000$ или 4000000-10000000 so'm или 200$+)</b>`
    },
    EnterProfession: {
        "en": `<b>Please enter your profession!(For example: Student)</b>`,
        "uz": `<b>Marhamat kasbingizni kiriting!(Masalan: Talaba)</b>`,
        "ru": `<b>Пожалуйста, укажите род занятий!(Например: Студент)</b>`
    },
    TimeToCall: {
        "en": `<b>Enter your contact time!(For example: 24/7 or 9:00-15:00 or any time)</b>`,
        "uz": `<b>Murojaat qilish vaqtini kiriting!(Masalan: 24/7 yoki 9:00-15:00 yoki istalgan vaqt)</b>`,
        "ru": `<b>Введите время контакта! (Например: 24/7 или 9:00-15:00 или в любое время)</b>`
    },
    TimeOfWork: {
        "en": `<b>Enter working hours! (For example: 9:00-18:00)</b>`,
        "uz": `<b>Ish vaqtini kiriting!(Masalan: 9:00-18:00)</b>`,
        "ru": `<b>Введите рабочее время!(Например: 9:00-18:00)</b>`
    },
    Goal: {
        "en": `<b>Please write a brief description of your purpose!</b>`,
        "uz": `<b>Marhamat maqsadingiz haqida qisqacha yozing!</b>`,
        "ru": `<b>Пожалуйста, напишите краткое описание вашей цели!</b>`
    },
    CheckAndSendVacancy: {
        "en": `<b>Please check and confirm your vacancy!</b>`,
        "uz": `<b>Marhamat vakansiyangizni tekshirib chiqing va tasdiqlang!</b>`,
        "ru": `<b>Пожалуйста, проверьте и подтвердите свою вакансию!</b>`
    },
    SendToAdmin: {
        "en": `<b>The information has been sent to the admin and will be posted on the channel after confirmation!</b>`,
        "uz": `<b>Malumotlar adminga yuborildi tasdiqlangandan so'ng kanalga joylanadi!</b>`,
        "ru": `<b>Информация отправлена ​​админу и будет размещена на канале после подтверждения!</b>`
    },
    Canceled: {
        "en": `<b>Vacancy canceled!</b>`,
        "uz": `<b>Vakansiya bekor qilindi!</b>`,
        "ru": `<b>Вакансия отменена!</b>`
    },
    PostedByAdmin: {
        "en": `Your vacancy has been posted on the channel!\nClick the <b>Link</b> below to view!`,
        "uz": `Vakansiyangiz kanalga joylandi!\nKo'rish uchun quyidagi <b>Link</b>ni bosing!`,
        "ru": `Ваша вакансия опубликована на канале!\nНажмите <b>Ссылку</b> ниже, чтобы просмотреть!`
    },
    OfficeName: {
        "en": `<b>Please enter your office name</b>`,
        "uz": `<b>Marhamat idora nomini kiriting</b>`,
        "ru": `<b>Пожалуйста, введите название вашего офиса</b>`
    },
    Responsible: {
        "en": `<b>Enter the name of the responsible person!</b>`,
        "uz": `<b>Masul shaxsni ismini kiriting!</b>`,
        "ru": `<b>Введите имя ответственного лица!</b>`
    },
    Direction: {
        "en": `<b>Enter your destination! (For example: Backend)</b>`,
        "uz": `<b>Marhamat yo'nalishingizni kiriting! (Masalan: Backend)</b>`,
        "ru": `<b>Введите пункт назначения! (Например: Backend)</b>`
    },
    LinkQuestion: {
        "en": `<b>Can you post a link to apply?</b>`,
        "uz": `<b>Ariza qoldirish uchun link qoldirasizmi?</b>`,
        "ru": `<b>Можете скинуть ссылку для подачи заявки?</b>`
    },
    EnterLink: {
        "en": `<b>Please enter the link to submit an application!(For example: https://www.google.com or https://t.me/username)</b>`,
        "uz": `<b>Marhamat ariza qoldirish uchun linkni kiriting!(Masalan: https://www.google.com yoki https://t.me/username)</b>`,
        "ru": `<b>Пожалуйста, введите ссылку, чтобы отправить заявку!(Например: https://www.google.com или https://t.me/username)</b>`
    },
    Member: {
        "en": `✅ I became a member`,
        "uz": `✅ A'zo boldim`,
        "ru": `✅ я стал членом`
    },
    Comment: {
        "en": `<b>Leave your comment</b>`,
        "uz": `<b>Fikringizni qoldiring</b>`,
        "ru": `<b>Оставьте свой комментарий</b>`
    },
    CommentSuccess: {
        "en": `<b>Thanks for your opinion</b>`,
        "uz": `<b>Fikringiz uchun raxmat</b>`,
        "ru": `<b>Спасибо за ваше мнение</b>`
    },
    CommentAfter: {
        "en": `<b>Thanks for your comment</b>`,
        "uz": `<b>Fikr qoldirganingiz uchun raxmat</b>`,
        "ru": `<b>Спасибо за ваш комментарий</b>`
    },
    MustDid: {
        "en": `<b>You can use a bot. Conditions are met</b>`,
        "uz": `<b>Siz botdan foydalanishingiz mumkin. Shartlar bajarilgan</b>`,
        "ru": `<b>Вы можете использовать бота. Условия выполнены</b>`
    },
    MustDo: {
        "en": `<b>You can use a bot. Conditions met</b>`,
        "uz": `<b>Siz botdan foydalanishingiz mumkin. Shartlar bajarildi</b>`,
        "ru": `<b>Вы можете использовать бота. Условия выполнены</b>`
    },
    MustNotDo: {
        "en": `<b>You cannot use the bot without complying with the terms</b>`,
        "uz": `<b>Shartlarni bajarmay botdan foydalana olmaysiz</b>`,
        "ru": `<b>Вы не можете использовать бота без соблюдения условий</b>`
    },
    Resume: {
        "en": `<b>Upload a pdf of your resume or CV</b>`,
        "uz": `<b>Resume yoki CVyingizni pdfini tashlang</b>`,
        "ru": `<b>Загрузите PDF-файл вашего резюме или CV</b>`
    },
    FIO: {
        "en": `<b>Please enter your fullname\n(Example : Eshmatov Tashmatjon)</b>`,
        "uz": `<b>Marhamat F.I.SH.ni kiriting\n(Masalan : Eshmatov Toshmatjon)</b>`,
        "ru": `<b>Пожалуйста, введите свой Ф.И.О\n(Например : Эшматов Ташматжон)</b>`
    },
    AGE: {
        "en": `<b>Please enter your age</b>`,
        "uz": `<b>Marhamat yoshingizni kiriting</b>`,
        "ru": `<b>Пожалуйста, введите свой возраст</b>`
    },
    Skills: {
        "en": `<b>Enter your skills\n(Example : java, Spring framework, ...)</b>`,
        "uz": `<b>Konikmalarni kiriting\n(Masalan : java, Spring framework, ...)</b>`,
        "ru": `<b>Введите свои навыки\n(Например : java, Spring framework, ...)</b>`
    },
    Specially: {
        "en": `<b>Choose your specialty</b>`,
        "uz": `<b>Mutaxassisligingizni tanlang</b>`,
        "ru": `<b>Выберите свою специальность</b>`
    },
    SpeciallyOther: {
        "en": `<b>Enter your specialty</b>`,
        "uz": `<b>Mutaxassisligingizni kiriting</b>`,
        "ru": `<b>Введите свою специальность</b>`
    },
    PhoneScene: {
        "en": `<b>Enter the phone number\n(For example: +998901234567)</b>`,
        "uz": `<b>Telefon raqamni kiriting\n(Masalan : +998901234567)</b>`,
        "ru": `<b>Введите номер телефона\n(Например: +998901234567)</b>`
    },
    Username: {
        "en": `<b>Enter your Telegram username</b>`,
        "uz": `<b>Telegram usernameni kiriting</b>`,
        "ru": `<b>Введите ваше имя пользователя Telegram</b>`
    },
    Region: {
        "en": `<b>Where do you want to work?</b>`,
        "uz": `<b>Qayerda ishlashni xohlaysiz?</b>`,
        "ru": `<b>Где вы хотите работать?</b>`
    },
    Yes: {
        "en": `👍 Yes`,
        "uz": `👍 Ha`,
        "ru": `👍 Да`
    },
    No: {
        "en": `👎 No`,
        "uz": `👎 Yo'q`,
        "ru": `👎 Нет`
    },
    send: {
        "en": `<b>Can the vacancy be sent to the admin?</b>`,
        "uz": `<b>Vakansiya adminga jo'natilsinmi?</b>`,
        "ru": `<b>Можно ли отправить вакансию админу?</b>`
    },
    sendSuccess: {
        "en": `<b>The vacancy has been assigned to admin</b>\n<b>You will get an answer soon</b>`,
        "uz": `<b>Vakansiya adminga jo'natildi</b>\n<b>Tez orada sizga javob keladi</b>`,
        "ru": `<b>Вакансия закреплена за администратором</b>\n<b>Вы получите ответ в ближайшее время</b>`,
    },
    sendNoSuccess: {
        "en": `<b>The vacancy has been cancelled</b>`,
        "uz": `<b>Vakansiya bekor qilindi</b>`,
        "ru": `<b>Вакансия была отменена</b>`
    },
    SpeciallyButton: {
        "en": `<b>👨🏻‍💻 Expertise</b>`,
        "uz": `<b>👨🏻‍💻 Mutaxassislik</b>`,
        "ru": `<b>👨🏻‍💻 Экспертиза`
    },
    PhoneButtons: {
        "en": `<b>📞 Phone number</b>`,
        "uz": `<b>📞 Telefon raqam</b>`,
        "ru": `<b>📞 Номер телефона</b>`
    },
    UserName: {
        "en": `<b>📨 Telegram username</b>`,
        "uz": `<b>📨 Telegramm username</b>`,
        "ru": `<b>📨 Имя пользователя Telegram</b>`
    },
    PhoneError: {
        "en": `<b>Phone error</b>`,
        "uz": `<b>Telefon raqam noto'g'ri kiritildi</b>`,
        "ru": `<b>Номер телефона был введен неправильно</b>`
    },
    TelegramUserNameError: {
        "en": `<b>Telegram username has been entered</b>`,
        "uz": `<b>Telegram username natogri kiritildi</b>`,
        "ru": `<b>Имя пользователя Telegram введено</b>`
    },
    SalaryError: {
        "en": `<b>The price was entered incorrectly</b>`,
        "uz": `<b>Narx nato'g'ri kiritildi</b>`,
        "ru": `<b>Цена введена неверно</b>`
    },
    RegionButton: {
        "en": `<b>📍 Region</b>`,
        "uz": `<b>📍 Viloyat</b>`,
        "ru": `<b>📍 Region</b>`
    },
    Vacancies: {
        "en": `<b>📃 My vacancies</b>`,
        "uz": `<b>📃 Vakansiyalarim</b>`,
        "ru": `<b>📃 Мои вакансии</b>`
    },
    SpeciallyButtons: {
        "en": {
            "1️⃣": "1️⃣ Backend",
            "2️⃣": "2️⃣ Frontend",
            "3️⃣": "3️⃣ Smm",
            "4️⃣": "4️⃣ Mobile",
            "5️⃣": "5️⃣ Design",
            "6️⃣": "6️⃣ Manager",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Backend",
            "2️⃣": "2️⃣ Frontend",
            "3️⃣": "3️⃣ Smm",
            "4️⃣": "4️⃣ Mobile",
            "5️⃣": "5️⃣ Dezayn",
            "6️⃣": "6️⃣ Menejer",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Бэкенд",
            "2️⃣": "2️⃣ Фронтенд",
            "3️⃣": "3️⃣ Сммм",
            "4️⃣": "4️⃣ Мобильный",
            "5️⃣": "5️⃣ Дизайн",
            "6️⃣": "6️⃣ Mенежер",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    BackendButtons: {
        "en": {
            "1️⃣": "1️⃣ Node.js",
            "2️⃣": "2️⃣ Java",
            "3️⃣": "3️⃣ Php",
            "4️⃣": "4️⃣ Python",
            "5️⃣": "5️⃣ Go",
            "6️⃣": "6️⃣ .Net",
            "7️⃣": "7️⃣ C#",
            "8️⃣": "8️⃣ Symfony",
            "9️⃣": "9️⃣ Laravel",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Node.js",
            "2️⃣": "2️⃣ Java",
            "3️⃣": "3️⃣ Php",
            "4️⃣": "4️⃣ Python",
            "5️⃣": "5️⃣ Go",
            "6️⃣": "6️⃣ .Net",
            "7️⃣": "7️⃣ C#",
            "8️⃣": "8️⃣ Symfony",
            "9️⃣": "9️⃣ Laravel",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Ноде.жс",
            "2️⃣": "2️⃣ Жава",
            "3️⃣": "3️⃣ Пхп",
            "4️⃣": "4️⃣ питон",
            "5️⃣": "5️⃣ Го",
            "6️⃣": "6️⃣ .нет",
            "7️⃣": "7️⃣ Ц#",
            "8️⃣": "8️⃣ симфони",
            "9️⃣": "9️⃣ Ларавель",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    Backend: {
        "en": `<b>What programming language do you code in?</b>`,
        "uz": `<b>Qaysi dasturlash tilida kod yozasiz?</b>`,
        "ru": `<b>На каком языке программирования вы пишете?</b>`
    },
    Employee: {
        "en": `<b>Select an employee</b>`,
        "uz": `<b>Hodimni tanlang</b>`,
        "ru": `<b>Выберите сотрудника</b>`
    },
    Smm: {
        "en": `<b>What direction do you work in?</b>`,
        "uz": `<b>Qaysi yo'nalishda ish olib borasiz?</b>`,
        "ru": `<b>В каком направлении вы работаете?</b>`
    },
    BackendLanguage: {
        "en": `<b>Backend</b>`,
        "uz": `<b>Backend</b>`,
        "ru": `<b>Бэкенд</b>`
    },
    Node: {
        "en": `<b>Node.js</b>`,
        "uz": `<b>Node.js</b>`,
        "ru": `<b>Ноде.жс</b>`
    },
    StatusOnline: {
        "en": {
            "🏡": "🏡 office",
            "🏢": "🏢 Remote",
            "🕐": "🕐 Optional"
        },
        "uz": {
            "🏡": "🏡 Ofis",
            "🏢": "🏢 Masofaviy",
            "🕐": "🕐 Ixtiyoriy"
        },
        "ru": {
            "🏡": "🏡 офис",
            "🏢": "🏢 Удаленный",
            "🕐": "🕐 По желанию"
        }
    },
    Status: {
        "en": `<b>What position do you want to work in?</b>`,
        "uz": `<b>Qanday xolatda ishlamoqchisiz?</b>`,
        "ru": `<b>На какой должности вы хотите работать?</b>`
    },
    RegionButtons: {
        "en": {
            "1️⃣": "1️⃣ Namangan",
            "2️⃣": "2️⃣ Tashkent",
            "3️⃣": "3️⃣ Andijan",
            "4️⃣": "4️⃣ Kashkadarya",
            "5️⃣": "5️⃣ Khorezm",
            "6️⃣": "6️⃣ Jizzakh",
            "7️⃣": "7️⃣ Syr Darya",
            "8️⃣": "8️⃣ Ferghana",
            "9️⃣": "9️⃣ Bukhara",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Namangan",
            "2️⃣": "2️⃣ Toshkent",
            "3️⃣": "3️⃣ Andijon",
            "4️⃣": "4️⃣ Qashqadaryo",
            "5️⃣": "5️⃣ Xorazm",
            "6️⃣": "6️⃣ Jizzax",
            "7️⃣": "7️⃣ Sirdaryo",
            "8️⃣": "8️⃣ Farg'ona",
            "9️⃣": "9️⃣ Buxoro",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Наманган",
            "2️⃣": "2️⃣ Ташкент",
            "3️⃣": "3️⃣ Андижан",
            "4️⃣": "4️⃣ Кашкадарья",
            "5️⃣": "5️⃣ Хорезм",
            "6️⃣": "6️⃣ Джизак",
            "7️⃣": "7️⃣ Сырдарья",
            "8️⃣": "8️⃣ Farg'ona",
            "9️⃣": "9️⃣ Бухара",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    RegionButtons2: {
        "en": {
            "1️⃣": "1️⃣ Samarkand",
            "2️⃣": "2️⃣ Surkhandarya",
            "3️⃣": "3️⃣ Navoi",
            "4️⃣": "4️⃣ Karakalpakstan",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Samarqand",
            "2️⃣": "2️⃣Surxandaryo",
            "3️⃣": "3️⃣Navoiy",
            "4️⃣": "4️⃣Qoraqalpog'iston",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Самарканд",
            "2️⃣": "2️⃣ Сурхандарьинская",
            "3️⃣": "3️⃣ Навои",
            "4️⃣": "4️⃣ Каракалпакстан'iston",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    SalaryButton: {
        "en": {
            "1️⃣": "1️⃣ EURO",
            "2️⃣": "2️⃣ USD",
            "3️⃣": "3️⃣ RUB",
            "4️⃣": "4️⃣ UZS",
            "🗣": "🗣 Based on the interview",
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "1️⃣": "1️⃣ EURO",
            "2️⃣": "2️⃣ USD",
            "3️⃣": "3️⃣ RUB",
            "4️⃣": "4️⃣ UZS",
            "🗣": "🗣 Suhbat asosida",
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "1️⃣": "1️⃣ евро",
            "2️⃣": "2️⃣ доллар",
            "3️⃣": "3️⃣ Рубль",
            "4️⃣": "4️⃣ сум",
            "🗣": "🗣 На основе интервью",
            "⬅️": "⬅️ Назад"
        }
    },
    ContactButton: {
        "en": {
            "1️⃣": "1️⃣ PhoneNumber",
            "2️⃣": "2️⃣ Telegram",
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "1️⃣": "1️⃣ Telefon raqam",
            "2️⃣": "2️⃣ Telegram",
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "1️⃣": "1️⃣ Номер телефона",
            "2️⃣": "2️⃣ Телеграмма",
            "⬅️": "⬅️ Назад"
        }
    },
    Contact: {
        "en": `<b>What type of communication should they contact you with?</b>`,
        "uz": `<b>Qaysi aloqa turi bilan sizga bog'lanishsin?</b>`,
        "ru": `<b>Какой тип связи они должны связаться с вами?</b>`
    },
    VacancyPhone: {
        "en": `<b>Enter the phone number</b>`,
        "uz": `<b>Telefon raqamni kiriting</b>`,
        "ru": `<b>Введите номер телефона</b>`
    },
    VacancyTelegramUsername: {
        "en": `<b>Enter your Telegram username</b>`,
        "uz": `<b>Telegram usernameni kiriting</b>`,
        "ru": `<b>Введите ваше имя пользователя Telegram</b>`
    },
    ContactButtonq: {
        "en": {
            "1️⃣": "1️⃣ Yes",
            "2️⃣": "2️⃣ No",
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "1️⃣": "1️⃣ Ha",
            "2️⃣": "2️⃣ Yoq",
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "1️⃣": "1️⃣ Да",
            "2️⃣": "2️⃣ Нет",
            "⬅️": "⬅️ Назад"
        }
    },
    ContactQ: {
        "en": `<b>Enter another contact type?</b>`,
        "uz": `<b>Yana boshqa aloqa turini kiritasizmi?</b>`,
        "ru": `<b>Введите другой тип контакта?</b>`
    },
    SalarySend: {
        "en": `<b>Enter the minimum and maximum salary</b>\n<b>Masalan</b> : 4000-6000 or 5000`,
        "uz": `<b>Minimal va maksimal maoshni kiriting</b>\n<b>For example</b> : 4000-6000 yoki 5000`,
        "ru": `<b>Введите минимальную и максимальную зарплату</b>\n<b>Например</b> : 4000-6000 или же 5000`
    },
    Salary: {
        "en": `<b>Maosh turini tanlang</b>`,
        "uz": `<b>Maosh turini tanlang</b>`,
        "ru": `<b>Maosh turini tanlang</b>`
    },
    Phone_name: {
        "en": {
            "3️⃣": "📲 PhoneNumber",
            "2️⃣": "📲 Telegram",
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "3️⃣": "📲 Telefon raqam",
            "2️⃣": "📲 Telegram",
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "3️⃣": "📲 Номер телефона",
            "2️⃣": "📲 Телеграмма",
            "⬅️": "⬅️ Назад"
        }
    },
    ContactB: {
        "en": "📞 Contact",
        "uz": "📞 Aloqa",
        "ru": "📞 Контакт"
    },
    More: {
        "en": `<b>Learn more</b>`,
        "uz": `<b>Batafsil malumot</b>`,
        "ru": `<b>Учить больше</b>`
    },
    SalaryS: {
        "en": `
        <b>Your vacancy is ready</b>`,
        "uz": `
        <b>Vakansiyangiz tayyor</b>`,
        "ru": `
        <b>Ваша вакансия готова</b>`
    },
    FrontendButtons: {
        "en": {
            "1️⃣": "1️⃣ Vue.js",
            "2️⃣": "2️⃣ React",
            "3️⃣": "3️⃣ WordPress",
            "4️⃣": "4️⃣ JavaScript",
            "5️⃣": "5️⃣ Angular",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Vue.js",
            "2️⃣": "2️⃣ React",
            "3️⃣": "3️⃣ WordPress",
            "4️⃣": "4️⃣ JavaScript",
            "5️⃣": "5️⃣ Angular",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Вуе.жс",
            "2️⃣": "2️⃣ Реакт",
            "3️⃣": "3️⃣ ВордПресс",
            "4️⃣": "4️⃣ Жаваскрипт",
            "5️⃣": "5️⃣ Ангулер",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    SmmButtons: {
        "en": {
            "1️⃣": "1️⃣ SMM specialist",
            "2️⃣": "2️⃣ SMM manager",
            "3️⃣": "3️⃣ Targetolog",
            "4️⃣": "4️⃣ Content manager",
            "5️⃣": "5️⃣ Instagram manager",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ SMM mutaxasis",
            "2️⃣": "2️⃣ SMM menejer",
            "3️⃣": "3️⃣ Targetolog",
            "4️⃣": "4️⃣ Kontent menejer",
            "5️⃣": "5️⃣ Instagram menejer",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ SMM  специалист",
            "2️⃣": "2️⃣ SMM Менежер",
            "3️⃣": "3️⃣ Таргетолог",
            "4️⃣": "4️⃣ Kontent Менежер",
            "5️⃣": "5️⃣ Инстаграм Менежер",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    MobileButtons: {
        "en": {
            "1️⃣": "1️⃣ IOS",
            "2️⃣": "2️⃣ Android",
            "3️⃣": "3️⃣ Flutter",
            "4️⃣": "4️⃣ Kotlin",
            "5️⃣": "5️⃣ Java",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ IOS",
            "2️⃣": "2️⃣ Android",
            "3️⃣": "3️⃣ Flutter",
            "4️⃣": "4️⃣ Kotlin",
            "5️⃣": "5️⃣ Java",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ ИОС",
            "2️⃣": "2️⃣ Андроид",
            "3️⃣": "3️⃣ Флаттер",
            "4️⃣": "4️⃣ Котлин",
            "5️⃣": "5️⃣ Жава",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    DesignButtons: {
        "en": {
            "1️⃣": "1️⃣ 3D Modeller",
            "2️⃣": "2️⃣ UI/UX",
            "3️⃣": "3️⃣ Web designer",
            "4️⃣": "4️⃣4️⃣ Grafik designer",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ 3D Modeller",
            "2️⃣": "2️⃣ UI/UX",
            "3️⃣": "3️⃣ Web dezayner",
            "4️⃣": "4️⃣ Grafik dizayner",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ 3D моделлер",
            "2️⃣": "2️⃣ УИ/УХ",
            "3️⃣": "3️⃣ веб-дизайнер",
            "4️⃣": "4️⃣ Графический дизайнер",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    ManagerButtons: {
        "en": {
            "1️⃣": "1️⃣ Administrator",
            "2️⃣": "2️⃣ Buxgalter",
            "3️⃣": "3️⃣ Copywriter",
            "4️⃣": "4️⃣ Office manager",
            "5️⃣": "5️⃣ Sales operator",
            "6️⃣": "6️⃣ Operator",
            "➡️": "➡️ Other",
            "⬅️": "⬅️ Back",
            "📋": "📋 Menu",
        },
        "uz": {
            "1️⃣": "1️⃣ Administrator",
            "2️⃣": "2️⃣ Buxgalter",
            "3️⃣": "3️⃣ Kopirayter",
            "4️⃣": "4️⃣ Ofis menejer",
            "5️⃣": "5️⃣ Sotuv operatori",
            "6️⃣": "6️⃣ Operator",
            "➡️": "➡️ Boshqa",
            "⬅️": "⬅️ Orqaga",
            "📋": "📋 Menyu",
        },
        "ru": {
            "1️⃣": "1️⃣ Администратор",
            "2️⃣": "2️⃣ Бухгалтер",
            "3️⃣": "3️⃣ Копирайтер",
            "4️⃣": "4️⃣ Офис-менеджер",
            "5️⃣": "5️⃣ Оператор продаж",
            "6️⃣": "6️⃣ Оператор",
            "➡️": "➡️ Другой",
            "⬅️": "⬅️ Назад",
            "📋": "📋 Меню",
        }
    },
    AdministratorButtons: {
        "en": {
            "🙎🏻‍♂️": "🙎🏻‍♂️ Boy",
            "🙍🏻‍♀️ ": "🙍🏻‍♀️ Girl",
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "🙎🏻‍♂️": "🙎🏻‍♂️ O'g'il bola",
            "🙍🏻‍♀️": "🙍🏻‍♀️ Qiz bola",
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "🙎🏻‍♂️": "🙎🏻‍♂️ Парень",
            "🙍🏻‍♀️": "🙍🏻‍♀️ девочка",
            "⬅️": "⬅️ Назад",
        }
    },
    adminSuccess: {
        "en": "<b>Vacancy accepted</b>",
        "uz": "<b>Vakansiya qabul qilindi</b>",
        "ru": "<b>Вакансия принята</b>"
    },
    adminNoSuccess: {
        "en": `<b>The vacancy has been cancelled</b>
        <b>Enter the reason for cancellation</b>`,
        "uz": `<b>Vakansiya  bekor qilindi</b>
        <b>Bekor qilish sababini kiriting</b>`,
        "ru": `<b>Вакансия была отменена</b>
        <b>Введите причину отмены</b>`
    },
    adminMesssage: {
        "en": "<b>The message has been sent to the user</b>",
        "uz": "<b>Xabar userga jo'natildi</b>",
        "ru": "<b>Сообщение отправлено пользователю</b>"
    },
    userSuccesSend: {
        "en": `<b>Your vacancy has been accepted\nIt will be thrown into the canal soon</b>`,
        "uz": `<b>Vakansiyangiz qabul qilindi\nTez orada kanalga tashlanadi</b>`,
        "ru": `<b>Ваша вакансия принята\nЕго скоро выбросят в канал</b>`,
    },
    Reason: {
        "en": "<b>Enter the reason for the vacancy cancellation</b>",
        "uz": "<b>Vakansiya bekor qilinish sababini kiriting</b>",
        "ru": "<b>Введите причину отмены вакансии</b>"
    },
    cancellation: {
        "en": "<b>The vacancy has been cancelled</b>",
        "uz": "<b>Vakansiya bekor qilindi</b>",
        "ru": "<b>Вакансия была отменена</b>"
    },
};
exports.Buttons = {
    Main: {
        "en": {
            "🔄": "🔄 Change language",
            "📉": "📉 Job upload",
            "📝": "📝 Terms of use",
            "📃": "📃 My vacancies",
        },
        "uz": {
            "🔄": "🔄 Tilni o'zgartirish",
            "📉": "📉 Vakansiya joylash",
            "📝": "📝 Bot qanday ishlaydi?",
            "📃": "📃 Vakansiyalarim",
        },
        "ru": {
            "🔄": "🔄 Выберите ",
            "📉": "📉 Загрузка вакансий",
            "📝": "📝 Условия эксплуатации",
            "📃": "📃 Мои вакансии",
        }
    },
    ChooseVacansy: {
        "en": {
            "👨‍💻": "👨‍💻 Find HR",
            "🏢": "🏢 Job search",
        },
        "uz": {
            "👨‍💻": "👨‍💻 Hodim kerak",
            "🏢": "🏢 Ish joyi kerak",
        },
        "ru": {
            "👨‍💻": "👨‍💻 Ищу сотрудника",
            "🏢": "🏢 Поиск работы",
        }
    },
    Goback: {
        "en": {
            "⬅️": "⬅️ Back"
        },
        "uz": {
            "⬅️": "⬅️ Orqaga"
        },
        "ru": {
            "⬅️": "⬅️ Назад",
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLGVBQWU7S0FDeEI7SUFFRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsa0RBQWtEO1FBQ3hELElBQUksRUFBRSxrRUFBa0U7UUFDeEUsSUFBSSxFQUFFLHNFQUFzRTtLQUMvRTtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxJQUFJLEVBQUUseUJBQXlCO0tBQ2xDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSxxQkFBcUI7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0ZBQW9GO1FBQzFGLElBQUksRUFBRSxzRkFBc0Y7UUFDNUYsSUFBSSxFQUFFLHVGQUF1RjtLQUNoRztJQUNELFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxxRUFBcUU7UUFDM0UsSUFBSSxFQUFFLHdFQUF3RTtRQUM5RSxJQUFJLEVBQUUscUVBQXFFO0tBQzlFO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLDRDQUE0QztRQUNsRCxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLElBQUksRUFBRSxrQ0FBa0M7S0FDM0M7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsSUFBSSxFQUFFLG9DQUFvQztLQUM3QztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2RkFBNkY7UUFD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QUUsbUJBQW1CO1NBQzVCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLElBQUksRUFBRSxpQkFBaUI7U0FDMUI7S0FDSjtJQUNELGFBQWEsRUFBRTtRQUNYLElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLElBQUksRUFBRSxlQUFlO1NBQ3hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixJQUFJLEVBQUUsbUJBQW1CO1NBQzVCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixJQUFJLEVBQUUsaUJBQWlCO1NBQzFCO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUztTQUNsQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxXQUFXO1NBQ3BCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFVBQVU7U0FDbkI7S0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTWVzc2FnZXMgPSB7XHJcbiAgICBMYW5ndWFnZToge1xyXG4gICAgICAgIFwiZW5cIjogXCJDaG9vc2UgbGFuZ3VhZ2VcIixcclxuICAgICAgICBcInV6XCI6IFwiVGlsbmkgdGFubGFuZ1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLQktGL0LHQtdGA0LjRgtC1INGP0LfRi9C6XCJcclxuICAgIH0sXHJcblxyXG4gICAgUGhvbmU6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5TaGFyZSB5b3VyIHBob25lIG51bWJlciB0byB1c2UgdGhlIGJvdCEhITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkJvdGRhbiBmb3lkYWxhbmlzaCB1Y2h1biB0ZWxlZm9uIHJhcWFtaW5naXpuaSB1bGFzaGluZyEhITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QtNC10LvQuNGC0LXRgdGMINGB0LLQvtC40Lwg0L3QvtC80LXRgNC+0Lwg0YLQtdC70LXRhNC+0L3QsCwg0YfRgtC+0LHRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LHQvtGC0LAhISE8L2I+YFxyXG4gICAgfSxcclxuICAgIFBob25lQnV0dG9uOiB7XHJcbiAgICAgICAgXCJlblwiOiBcIvCfk54gQ29uZmlybSB5b3VyIG51bWJlclwiLFxyXG4gICAgICAgIFwidXpcIjogXCLwn5OeIE5vbWVyaW5naXpuaSAgdGFzZGlxbGFuZ1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLwn5OeINCf0L7QtNGC0LLQtdGA0LTQuCDRgdCy0L7QuSDQvdC+0LzQtdGAXCJcclxuICAgIH0sXHJcbiAgICBNZW55OiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+TWFpbiBtZW51PC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+QXNvc2l5IG1lbnl1PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JPQu9Cw0LLQvdC+0LUg0LzQtdC90Y48L2I+YFxyXG4gICAgfSxcclxuICAgIFRlY2hub2xvZ3k6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgdGhlIHRlY2hub2xvZ3khKEZvciBleGFtcGxlOiBOb2RlLmpzLCBKYXZhc2NyaXB0LCBEYXRhYmFzZS4uLik8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCBUZWNobm9sb2dpeWFuaSBraXJpdGluZyEoTWFzYWxhbjogTm9kZS5qcywgSmF2YXNjcmlwdCwgRGF0YWJhc2UgLi4uKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgtC10YXQvdC+0LvQvtCz0LjRjiEo0J3QsNC/0YDQuNC80LXRgDogTm9kZS5qcywgSmF2YXNjcmlwdCwg0LHQsNC30LAg0LTQsNC90L3Ri9GFLi4uKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgQ29ubmVjdFBob25lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgdGhlIGNvbnRhY3QgcGhvbmUgbnVtYmVyXFxuKEZvciBleGFtcGxlOiArOTk4OTAxMjM0NTY3KTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkFsb3FhIHVjaHVuIHRlbGVmb24gcmFxYW1uaSBraXJpdGluZ1xcbihNYXNhbGFuIDogKzk5ODkwMTIzNDU2Nyk8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQutC+0L3RgtCw0LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcXG4o0J3QsNC/0YDQuNC80LXRgDogKzk5ODkwMTIzNDU2Nyk8L2I+YFxyXG4gICAgfSxcclxuICAgIEVycm9yVG9OdW1iZXI6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5UaGUgbnVtYmVyIHdhcyBlbnRlcmVkIGluY29ycmVjdGx5ITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlJhcWFtIG5vdG8nZydyaSBraXJpdGlsZGkhPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J3QvtC80LXRgCDQstCy0LXQtNC10L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QviE8L2I+YFxyXG4gICAgfSxcclxuICAgIEVudGVyUGxhY2U6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgdGhlIGFyZWEhPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgaHVkdWRuaSBraXJpdGluZyE8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQvtC50LTQuNGC0LUg0LIg0LfQvtC90YMhPC9iPmBcclxuICAgIH0sXHJcbiAgICBFbnRlclByaWNlOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgc2FsYXJ5ISAoRm9yIGV4YW1wbGU6IDQwMC0xMDAwJCBvciA0MDAwMDAwLTEwMDAwMDAwIHNvJ20gb3IgMjAwJCspPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgbWFvc2huaSBraXJpdGluZyEoTWFzYWxhbjogNDAwLTEwMDAkIHlva2kgNDAwMDAwMC0xMDAwMDAwMCBzbydtIHlva2kgMjAwJCspPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INCy0LDRiNGDINC30LDRgNC/0LvQsNGC0YMhKNCd0LDQv9GA0LjQvNC10YA6IDQwMC0xMDAwJCDQuNC70LggNDAwMDAwMC0xMDAwMDAwMCBzbydtINC40LvQuCAyMDAkKyk8L2I+YFxyXG4gICAgfSxcclxuICAgIEVudGVyUHJvZmVzc2lvbjoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB5b3VyIHByb2Zlc3Npb24hKEZvciBleGFtcGxlOiBTdHVkZW50KTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGthc2Jpbmdpem5pIGtpcml0aW5nIShNYXNhbGFuOiBUYWxhYmEpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LrQsNC20LjRgtC1INGA0L7QtCDQt9Cw0L3Rj9GC0LjQuSEo0J3QsNC/0YDQuNC80LXRgDog0KHRgtGD0LTQtdC90YIpPC9iPmBcclxuICAgIH0sXHJcbiAgICBUaW1lVG9DYWxsOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgeW91ciBjb250YWN0IHRpbWUhKEZvciBleGFtcGxlOiAyNC83IG9yIDk6MDAtMTU6MDAgb3IgYW55IHRpbWUpPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TXVyb2phYXQgcWlsaXNoIHZhcXRpbmkga2lyaXRpbmchKE1hc2FsYW46IDI0LzcgeW9raSA5OjAwLTE1OjAwIHlva2kgaXN0YWxnYW4gdmFxdCk8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQstGA0LXQvNGPINC60L7QvdGC0LDQutGC0LAhICjQndCw0L/RgNC40LzQtdGAOiAyNC83INC40LvQuCA5OjAwLTE1OjAwINC40LvQuCDQsiDQu9GO0LHQvtC1INCy0YDQtdC80Y8pPC9iPmBcclxuICAgIH0sXHJcbiAgICBUaW1lT2ZXb3JrOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgd29ya2luZyBob3VycyEgKEZvciBleGFtcGxlOiA5OjAwLTE4OjAwKTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPklzaCB2YXF0aW5pIGtpcml0aW5nIShNYXNhbGFuOiA5OjAwLTE4OjAwKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LLQtdC00LjRgtC1INGA0LDQsdC+0YfQtdC1INCy0YDQtdC80Y8hKNCd0LDQv9GA0LjQvNC10YA6IDk6MDAtMTg6MDApPC9iPmBcclxuICAgIH0sXHJcbiAgICBHb2FsOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIHdyaXRlIGEgYnJpZWYgZGVzY3JpcHRpb24gb2YgeW91ciBwdXJwb3NlITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IG1hcXNhZGluZ2l6IGhhcWlkYSBxaXNxYWNoYSB5b3ppbmchPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINC90LDQv9C40YjQuNGC0LUg0LrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtSDQstCw0YjQtdC5INGG0LXQu9C4ITwvYj5gXHJcbiAgICB9LFxyXG4gICAgQ2hlY2tBbmRTZW5kVmFjYW5jeToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBjaGVjayBhbmQgY29uZmlybSB5b3VyIHZhY2FuY3khPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgdmFrYW5zaXlhbmdpem5pIHRla3NoaXJpYiBjaGlxaW5nIHZhIHRhc2RpcWxhbmchPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0YDQvtCy0LXRgNGM0YLQtSDQuCDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INGB0LLQvtGOINCy0LDQutCw0L3RgdC40Y4hPC9iPmBcclxuICAgIH0sXHJcbiAgICBTZW5kVG9BZG1pbjoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlRoZSBpbmZvcm1hdGlvbiBoYXMgYmVlbiBzZW50IHRvIHRoZSBhZG1pbiBhbmQgd2lsbCBiZSBwb3N0ZWQgb24gdGhlIGNoYW5uZWwgYWZ0ZXIgY29uZmlybWF0aW9uITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hbHVtb3RsYXIgYWRtaW5nYSB5dWJvcmlsZGkgdGFzZGlxbGFuZ2FuZGFuIHNvJ25nIGthbmFsZ2Egam95bGFuYWRpITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCY0L3RhNC+0YDQvNCw0YbQuNGPINC+0YLQv9GA0LDQstC70LXQvdCwIOKAi+KAi9Cw0LTQvNC40L3RgyDQuCDQsdGD0LTQtdGCINGA0LDQt9C80LXRidC10L3QsCDQvdCwINC60LDQvdCw0LvQtSDQv9C+0YHQu9C1INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPITwvYj5gXHJcbiAgICB9LFxyXG4gICAgQ2FuY2VsZWQ6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5WYWNhbmN5IGNhbmNlbGVkITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlZha2Fuc2l5YSBiZWtvciBxaWxpbmRpITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LDQutCw0L3RgdC40Y8g0L7RgtC80LXQvdC10L3QsCE8L2I+YFxyXG4gICAgfSxcclxuICAgIFBvc3RlZEJ5QWRtaW46IHtcclxuICAgICAgICBcImVuXCI6IGBZb3VyIHZhY2FuY3kgaGFzIGJlZW4gcG9zdGVkIG9uIHRoZSBjaGFubmVsIVxcbkNsaWNrIHRoZSA8Yj5MaW5rPC9iPiBiZWxvdyB0byB2aWV3IWAsXHJcbiAgICAgICAgXCJ1elwiOiBgVmFrYW5zaXlhbmdpeiBrYW5hbGdhIGpveWxhbmRpIVxcbktvJ3Jpc2ggdWNodW4gcXV5aWRhZ2kgPGI+TGluazwvYj5uaSBib3NpbmchYCxcclxuICAgICAgICBcInJ1XCI6IGDQktCw0YjQsCDQstCw0LrQsNC90YHQuNGPINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3QsCDQvdCwINC60LDQvdCw0LvQtSFcXG7QndCw0LbQvNC40YLQtSA8Yj7QodGB0YvQu9C60YM8L2I+INC90LjQttC1LCDRh9GC0L7QsdGLINC/0YDQvtGB0LzQvtGC0YDQtdGC0YwhYFxyXG4gICAgfSxcclxuICAgIE9mZmljZU5hbWU6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgeW91ciBvZmZpY2UgbmFtZTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGlkb3JhIG5vbWluaSBraXJpdGluZzwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INCy0LDRiNC10LPQviDQvtGE0LjRgdCwPC9iPmBcclxuICAgIH0sXHJcbiAgICBSZXNwb25zaWJsZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHRoZSBuYW1lIG9mIHRoZSByZXNwb25zaWJsZSBwZXJzb24hPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFzdWwgc2hheHNuaSBpc21pbmkga2lyaXRpbmchPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LjQvNGPINC+0YLQstC10YLRgdGC0LLQtdC90L3QvtCz0L4g0LvQuNGG0LAhPC9iPmBcclxuICAgIH0sXHJcbiAgICBEaXJlY3Rpb246IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB5b3VyIGRlc3RpbmF0aW9uISAoRm9yIGV4YW1wbGU6IEJhY2tlbmQpPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgeW8nbmFsaXNoaW5naXpuaSBraXJpdGluZyEgKE1hc2FsYW46IEJhY2tlbmQpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0L/Rg9C90LrRgiDQvdCw0LfQvdCw0YfQtdC90LjRjyEgKNCd0LDQv9GA0LjQvNC10YA6IEJhY2tlbmQpPC9iPmBcclxuICAgIH0sXHJcbiAgICBMaW5rUXVlc3Rpb246IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5DYW4geW91IHBvc3QgYSBsaW5rIHRvIGFwcGx5PzwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkFyaXphIHFvbGRpcmlzaCB1Y2h1biBsaW5rIHFvbGRpcmFzaXptaT88L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QnNC+0LbQtdGC0LUg0YHQutC40L3Rg9GC0Ywg0YHRgdGL0LvQutGDINC00LvRjyDQv9C+0LTQsNGH0Lgg0LfQsNGP0LLQutC4PzwvYj5gXHJcbiAgICB9LFxyXG4gICAgRW50ZXJMaW5rOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHRoZSBsaW5rIHRvIHN1Ym1pdCBhbiBhcHBsaWNhdGlvbiEoRm9yIGV4YW1wbGU6IGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20gb3IgaHR0cHM6Ly90Lm1lL3VzZXJuYW1lKTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGFyaXphIHFvbGRpcmlzaCB1Y2h1biBsaW5rbmkga2lyaXRpbmchKE1hc2FsYW46IGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20geW9raSBodHRwczovL3QubWUvdXNlcm5hbWUpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGB0YHRi9C70LrRgywg0YfRgtC+0LHRiyDQvtGC0L/RgNCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDISjQndCw0L/RgNC40LzQtdGAOiBodHRwczovL3d3dy5nb29nbGUuY29tINC40LvQuCBodHRwczovL3QubWUvdXNlcm5hbWUpPC9iPmBcclxuICAgIH0sXHJcblxyXG5cclxuICAgIE1lbWJlcjoge1xyXG4gICAgICAgIFwiZW5cIjogYOKchSBJIGJlY2FtZSBhIG1lbWJlcmAsXHJcbiAgICAgICAgXCJ1elwiOiBg4pyFIEEnem8gYm9sZGltYCxcclxuICAgICAgICBcInJ1XCI6IGDinIUg0Y8g0YHRgtCw0Lsg0YfQu9C10L3QvtC8YFxyXG4gICAgfSxcclxuICAgIENvbW1lbnQ6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5MZWF2ZSB5b3VyIGNvbW1lbnQ8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5GaWtyaW5naXpuaSBxb2xkaXJpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QntGB0YLQsNCy0YzRgtC1INGB0LLQvtC5INC60L7QvNC80LXQvdGC0LDRgNC40Lk8L2I+YFxyXG4gICAgfSxcclxuICAgIENvbW1lbnRTdWNjZXNzOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+VGhhbmtzIGZvciB5b3VyIG9waW5pb248L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5GaWtyaW5naXogdWNodW4gcmF4bWF0PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0KHQv9Cw0YHQuNCx0L4g0LfQsCDQstCw0YjQtSDQvNC90LXQvdC40LU8L2I+YFxyXG4gICAgfSxcclxuICAgIENvbW1lbnRBZnRlcjoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlRoYW5rcyBmb3IgeW91ciBjb21tZW50PC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+RmlrciBxb2xkaXJnYW5pbmdpeiB1Y2h1biByYXhtYXQ8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QodC/0LDRgdC40LHQviDQt9CwINCy0LDRiCDQutC+0LzQvNC10L3RgtCw0YDQuNC5PC9iPmBcclxuICAgIH0sXHJcbiAgICBNdXN0RGlkOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+WW91IGNhbiB1c2UgYSBib3QuIENvbmRpdGlvbnMgYXJlIG1ldDwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlNpeiBib3RkYW4gZm95ZGFsYW5pc2hpbmdpeiBtdW1raW4uIFNoYXJ0bGFyIGJhamFyaWxnYW48L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LHQvtGC0LAuINCj0YHQu9C+0LLQuNGPINCy0YvQv9C+0LvQvdC10L3RizwvYj5gXHJcbiAgICB9LFxyXG4gICAgTXVzdERvOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+WW91IGNhbiB1c2UgYSBib3QuIENvbmRpdGlvbnMgbWV0PC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+U2l6IGJvdGRhbiBmb3lkYWxhbmlzaGluZ2l6IG11bWtpbi4gU2hhcnRsYXIgYmFqYXJpbGRpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCx0L7RgtCwLiDQo9GB0LvQvtCy0LjRjyDQstGL0L/QvtC70L3QtdC90Ys8L2I+YFxyXG4gICAgfSxcclxuICAgIE11c3ROb3REbzoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPllvdSBjYW5ub3QgdXNlIHRoZSBib3Qgd2l0aG91dCBjb21wbHlpbmcgd2l0aCB0aGUgdGVybXM8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5TaGFydGxhcm5pIGJhamFybWF5IGJvdGRhbiBmb3lkYWxhbmEgb2xtYXlzaXo8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktGLINC90LUg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsdC+0YLQsCDQsdC10Lcg0YHQvtCx0LvRjtC00LXQvdC40Y8g0YPRgdC70L7QstC40Lk8L2I+YFxyXG4gICAgfSxcclxuICAgIFJlc3VtZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlVwbG9hZCBhIHBkZiBvZiB5b3VyIHJlc3VtZSBvciBDVjwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlJlc3VtZSB5b2tpIENWeWluZ2l6bmkgcGRmaW5pIHRhc2hsYW5nPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JfQsNCz0YDRg9C30LjRgtC1IFBERi3RhNCw0LnQuyDQstCw0YjQtdCz0L4g0YDQtdC30Y7QvNC1INC40LvQuCBDVjwvYj5gXHJcbiAgICB9LFxyXG4gICAgRklPOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgZnVsbG5hbWVcXG4oRXhhbXBsZSA6IEVzaG1hdG92IFRhc2htYXRqb24pPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgRi5JLlNILm5pIGtpcml0aW5nXFxuKE1hc2FsYW4gOiBFc2htYXRvdiBUb3NobWF0am9uKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgdCy0L7QuSDQpC7QmC7QnlxcbijQndCw0L/RgNC40LzQtdGAIDog0K3RiNC80LDRgtC+0LIg0KLQsNGI0LzQsNGC0LbQvtC9KTwvYj5gXHJcbiAgICB9LFxyXG4gICAgQUdFOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgYWdlPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgeW9zaGluZ2l6bmkga2lyaXRpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YHQstC+0Lkg0LLQvtC30YDQsNGB0YI8L2I+YFxyXG4gICAgfSxcclxuICAgIFNraWxsczoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHlvdXIgc2tpbGxzXFxuKEV4YW1wbGUgOiBqYXZhLCBTcHJpbmcgZnJhbWV3b3JrLCAuLi4pPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+S29uaWttYWxhcm5pIGtpcml0aW5nXFxuKE1hc2FsYW4gOiBqYXZhLCBTcHJpbmcgZnJhbWV3b3JrLCAuLi4pPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0YHQstC+0Lgg0L3QsNCy0YvQutC4XFxuKNCd0LDQv9GA0LjQvNC10YAgOiBqYXZhLCBTcHJpbmcgZnJhbWV3b3JrLCAuLi4pPC9iPmBcclxuICAgIH0sXHJcbiAgICBTcGVjaWFsbHk6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5DaG9vc2UgeW91ciBzcGVjaWFsdHk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NdXRheGFzc2lzbGlnaW5naXpuaSB0YW5sYW5nPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLRi9Cx0LXRgNC40YLQtSDRgdCy0L7RjiDRgdC/0LXRhtC40LDQu9GM0L3QvtGB0YLRjDwvYj5gXHJcbiAgICB9LFxyXG4gICAgU3BlY2lhbGx5T3RoZXI6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB5b3VyIHNwZWNpYWx0eTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk11dGF4YXNzaXNsaWdpbmdpem5pIGtpcml0aW5nPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0YHQstC+0Y4g0YHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Yw8L2I+YFxyXG4gICAgfSxcclxuXHJcbiAgICBQaG9uZVNjZW5lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgdGhlIHBob25lIG51bWJlclxcbihGb3IgZXhhbXBsZTogKzk5ODkwMTIzNDU2Nyk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5UZWxlZm9uIHJhcWFtbmkga2lyaXRpbmdcXG4oTWFzYWxhbiA6ICs5OTg5MDEyMzQ1NjcpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXFxuKNCd0LDQv9GA0LjQvNC10YA6ICs5OTg5MDEyMzQ1NjcpPC9iPmBcclxuICAgIH0sXHJcbiAgICBVc2VybmFtZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHlvdXIgVGVsZWdyYW0gdXNlcm5hbWU8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5UZWxlZ3JhbSB1c2VybmFtZW5pIGtpcml0aW5nPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyBUZWxlZ3JhbTwvYj5gXHJcbiAgICB9LFxyXG4gICAgUmVnaW9uOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+V2hlcmUgZG8geW91IHdhbnQgdG8gd29yaz88L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5RYXllcmRhIGlzaGxhc2huaSB4b2hsYXlzaXo/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JPQtNC1INCy0Ysg0YXQvtGC0LjRgtC1INGA0LDQsdC+0YLQsNGC0Yw/PC9iPmBcclxuICAgIH0sXHJcbiAgICBZZXM6IHtcclxuICAgICAgICBcImVuXCI6IGDwn5GNIFllc2AsXHJcbiAgICAgICAgXCJ1elwiOiBg8J+RjSBIYWAsXHJcbiAgICAgICAgXCJydVwiOiBg8J+RjSDQlNCwYFxyXG4gICAgfSxcclxuICAgIE5vOiB7XHJcbiAgICAgICAgXCJlblwiOiBg8J+RjiBOb2AsXHJcbiAgICAgICAgXCJ1elwiOiBg8J+RjiBZbydxYCxcclxuICAgICAgICBcInJ1XCI6IGDwn5GOINCd0LXRgmBcclxuICAgIH0sXHJcbiAgICBzZW5kOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+Q2FuIHRoZSB2YWNhbmN5IGJlIHNlbnQgdG8gdGhlIGFkbWluPzwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlZha2Fuc2l5YSBhZG1pbmdhIGpvJ25hdGlsc2lubWk/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JzQvtC20L3QviDQu9C4INC+0YLQv9GA0LDQstC40YLRjCDQstCw0LrQsNC90YHQuNGOINCw0LTQvNC40L3Rgz88L2I+YFxyXG4gICAgfSxcclxuICAgIHNlbmRTdWNjZXNzOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+VGhlIHZhY2FuY3kgaGFzIGJlZW4gYXNzaWduZWQgdG8gYWRtaW48L2I+XFxuPGI+WW91IHdpbGwgZ2V0IGFuIGFuc3dlciBzb29uPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+VmFrYW5zaXlhIGFkbWluZ2Egam8nbmF0aWxkaTwvYj5cXG48Yj5UZXogb3JhZGEgc2l6Z2EgamF2b2Iga2VsYWRpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQsNC60LDQvdGB0LjRjyDQt9Cw0LrRgNC10L/Qu9C10L3QsCDQt9CwINCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7QvDwvYj5cXG48Yj7QktGLINC/0L7Qu9GD0YfQuNGC0LUg0L7RgtCy0LXRgiDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjzwvYj5gLFxyXG4gICAgfSxcclxuICAgIHNlbmROb1N1Y2Nlc3M6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5UaGUgdmFjYW5jeSBoYXMgYmVlbiBjYW5jZWxsZWQ8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5WYWthbnNpeWEgYmVrb3IgcWlsaW5kaTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LDQutCw0L3RgdC40Y8g0LHRi9C70LAg0L7RgtC80LXQvdC10L3QsDwvYj5gXHJcbiAgICB9LFxyXG4gICAgU3BlY2lhbGx5QnV0dG9uOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+8J+RqPCfj7vigI3wn5K7IEV4cGVydGlzZTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPvCfkajwn4+74oCN8J+SuyBNdXRheGFzc2lzbGlrPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+8J+RqPCfj7vigI3wn5K7INCt0LrRgdC/0LXRgNGC0LjQt9CwYFxyXG4gICAgfSxcclxuICAgIFBob25lQnV0dG9uczoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPvCfk54gUGhvbmUgbnVtYmVyPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+8J+TniBUZWxlZm9uIHJhcWFtPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+8J+TniDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA8L2I+YFxyXG4gICAgfSxcclxuICAgIFVzZXJOYW1lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+8J+TqCBUZWxlZ3JhbSB1c2VybmFtZTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPvCfk6ggVGVsZWdyYW1tIHVzZXJuYW1lPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+8J+TqCDQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIFRlbGVncmFtPC9iPmBcclxuICAgIH0sXHJcbiAgICBQaG9uZUVycm9yOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGhvbmUgZXJyb3I8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5UZWxlZm9uIHJhcWFtIG5vdG8nZydyaSBraXJpdGlsZGk8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LHRi9C7INCy0LLQtdC00LXQvSDQvdC10L/RgNCw0LLQuNC70YzQvdC+PC9iPmBcclxuICAgIH0sXHJcbiAgICBUZWxlZ3JhbVVzZXJOYW1lRXJyb3I6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5UZWxlZ3JhbSB1c2VybmFtZSBoYXMgYmVlbiBlbnRlcmVkPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+VGVsZWdyYW0gdXNlcm5hbWUgbmF0b2dyaSBraXJpdGlsZGk8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIFRlbGVncmFtINCy0LLQtdC00LXQvdC+PC9iPmBcclxuICAgIH0sXHJcbiAgICBTYWxhcnlFcnJvcjoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlRoZSBwcmljZSB3YXMgZW50ZXJlZCBpbmNvcnJlY3RseTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk5hcnggbmF0bydnJ3JpIGtpcml0aWxkaTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCm0LXQvdCwINCy0LLQtdC00LXQvdCwINC90LXQstC10YDQvdC+PC9iPmBcclxuICAgIH0sXHJcbiAgICBSZWdpb25CdXR0b246IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj7wn5ONIFJlZ2lvbjwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPvCfk40gVmlsb3lhdDwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPvCfk40gUmVnaW9uPC9iPmBcclxuICAgIH0sXHJcbiAgICBWYWNhbmNpZXM6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj7wn5ODIE15IHZhY2FuY2llczwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPvCfk4MgVmFrYW5zaXlhbGFyaW08L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7wn5ODINCc0L7QuCDQstCw0LrQsNC90YHQuNC4PC9iPmBcclxuICAgIH0sXHJcbiAgICBTcGVjaWFsbHlCdXR0b25zOiB7XHJcbiAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgQmFja2VuZFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIEZyb250ZW5kXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgU21tXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgRGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwiNu+4j+KDo1wiOiBcIjbvuI/ig6MgTWFuYWdlclwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBPdGhlclwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVudVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgQmFja2VuZFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIEZyb250ZW5kXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgU21tXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgRGV6YXluXCIsXHJcbiAgICAgICAgICAgIFwiNu+4j+KDo1wiOiBcIjbvuI/ig6MgTWVuZWplclwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBCb3NocWFcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVueXVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjINCR0Y3QutC10L3QtFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjINCk0YDQvtC90YLQtdC90LRcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyDQodC80LzQvFwiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjINCc0L7QsdC40LvRjNC90YvQuVwiLFxyXG4gICAgICAgICAgICBcIjXvuI/ig6NcIjogXCI177iP4oOjINCU0LjQt9Cw0LnQvVwiLFxyXG4gICAgICAgICAgICBcIjbvuI/ig6NcIjogXCI277iP4oOjIE3QtdC90LXQttC10YBcIixcclxuICAgICAgICAgICAgXCLinqHvuI9cIjogXCLinqHvuI8g0JTRgNGD0LPQvtC5XCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPINCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyDQnNC10L3RjlwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBCYWNrZW5kQnV0dG9uczoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIE5vZGUuanNcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyBKYXZhXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgUGhwXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgUHl0aG9uXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgR29cIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyAuTmV0XCIsXHJcbiAgICAgICAgICAgIFwiN++4j+KDo1wiOiBcIjfvuI/ig6MgQyNcIixcclxuICAgICAgICAgICAgXCI477iP4oOjXCI6IFwiOO+4j+KDoyBTeW1mb255XCIsXHJcbiAgICAgICAgICAgIFwiOe+4j+KDo1wiOiBcIjnvuI/ig6MgTGFyYXZlbFwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBPdGhlclwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVudVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgTm9kZS5qc1wiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIEphdmFcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBQaHBcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBQeXRob25cIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBHb1wiLFxyXG4gICAgICAgICAgICBcIjbvuI/ig6NcIjogXCI277iP4oOjIC5OZXRcIixcclxuICAgICAgICAgICAgXCI377iP4oOjXCI6IFwiN++4j+KDoyBDI1wiLFxyXG4gICAgICAgICAgICBcIjjvuI/ig6NcIjogXCI477iP4oOjIFN5bWZvbnlcIixcclxuICAgICAgICAgICAgXCI577iP4oOjXCI6IFwiOe+4j+KDoyBMYXJhdmVsXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIEJvc2hxYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW55dVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6Mg0J3QvtC00LUu0LbRgVwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjINCW0LDQstCwXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6Mg0J/RhdC/XCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6Mg0L/QuNGC0L7QvVwiLFxyXG4gICAgICAgICAgICBcIjXvuI/ig6NcIjogXCI177iP4oOjINCT0L5cIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyAu0L3QtdGCXCIsXHJcbiAgICAgICAgICAgIFwiN++4j+KDo1wiOiBcIjfvuI/ig6Mg0KYjXCIsXHJcbiAgICAgICAgICAgIFwiOO+4j+KDo1wiOiBcIjjvuI/ig6Mg0YHQuNC80YTQvtC90LhcIixcclxuICAgICAgICAgICAgXCI577iP4oOjXCI6IFwiOe+4j+KDoyDQm9Cw0YDQsNCy0LXQu9GMXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPINCU0YDRg9Cz0L7QuVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sg0JzQtdC90Y5cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQmFja2VuZDoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPldoYXQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgZG8geW91IGNvZGUgaW4/PC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+UWF5c2kgZGFzdHVybGFzaCB0aWxpZGEga29kIHlvemFzaXo/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J3QsCDQutCw0LrQvtC8INGP0LfRi9C60LUg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8g0LLRiyDQv9C40YjQtdGC0LU/PC9iPmBcclxuICAgIH0sXHJcbiAgICBFbXBsb3llZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlNlbGVjdCBhbiBlbXBsb3llZTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkhvZGltbmkgdGFubGFuZzwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0YvQsdC10YDQuNGC0LUg0YHQvtGC0YDRg9C00L3QuNC60LA8L2I+YFxyXG4gICAgfSxcclxuICAgIFNtbToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPldoYXQgZGlyZWN0aW9uIGRvIHlvdSB3b3JrIGluPzwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlFheXNpIHlvJ25hbGlzaGRhIGlzaCBvbGliIGJvcmFzaXo/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JIg0LrQsNC60L7QvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC4INCy0Ysg0YDQsNCx0L7RgtCw0LXRgtC1PzwvYj5gXHJcbiAgICB9LFxyXG4gICAgQmFja2VuZExhbmd1YWdlOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+QmFja2VuZDwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkJhY2tlbmQ8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QkdGN0LrQtdC90LQ8L2I+YFxyXG4gICAgfSxcclxuICAgIE5vZGU6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5Ob2RlLmpzPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+Tm9kZS5qczwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCd0L7QtNC1LtC20YE8L2I+YFxyXG4gICAgfSxcclxuICAgIFN0YXR1c09ubGluZToge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIvCfj6FcIjogXCLwn4+hIG9mZmljZVwiLFxyXG4gICAgICAgICAgICBcIvCfj6JcIjogXCLwn4+iIFJlbW90ZVwiLFxyXG4gICAgICAgICAgICBcIvCflZBcIjogXCLwn5WQIE9wdGlvbmFsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIvCfj6FcIjogXCLwn4+hIE9maXNcIixcclxuICAgICAgICAgICAgXCLwn4+iXCI6IFwi8J+PoiBNYXNvZmF2aXlcIixcclxuICAgICAgICAgICAgXCLwn5WQXCI6IFwi8J+VkCBJeHRpeW9yaXlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+PoVwiOiBcIvCfj6Eg0L7RhNC40YFcIixcclxuICAgICAgICAgICAgXCLwn4+iXCI6IFwi8J+PoiDQo9C00LDQu9C10L3QvdGL0LlcIixcclxuICAgICAgICAgICAgXCLwn5WQXCI6IFwi8J+VkCDQn9C+INC20LXQu9Cw0L3QuNGOXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgU3RhdHVzOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+V2hhdCBwb3NpdGlvbiBkbyB5b3Ugd2FudCB0byB3b3JrIGluPzwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlFhbmRheSB4b2xhdGRhIGlzaGxhbW9xY2hpc2l6PzwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCd0LAg0LrQsNC60L7QuSDQtNC+0LvQttC90L7RgdGC0Lgg0LLRiyDRhdC+0YLQuNGC0LUg0YDQsNCx0L7RgtCw0YLRjD88L2I+YFxyXG4gICAgfSxcclxuICAgIFJlZ2lvbkJ1dHRvbnM6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBOYW1hbmdhblwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIFRhc2hrZW50XCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgQW5kaWphblwiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjIEthc2hrYWRhcnlhXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgS2hvcmV6bVwiLFxyXG4gICAgICAgICAgICBcIjbvuI/ig6NcIjogXCI277iP4oOjIEppenpha2hcIixcclxuICAgICAgICAgICAgXCI377iP4oOjXCI6IFwiN++4j+KDoyBTeXIgRGFyeWFcIixcclxuICAgICAgICAgICAgXCI477iP4oOjXCI6IFwiOO+4j+KDoyBGZXJnaGFuYVwiLFxyXG4gICAgICAgICAgICBcIjnvuI/ig6NcIjogXCI577iP4oOjIEJ1a2hhcmFcIixcclxuICAgICAgICAgICAgXCLinqHvuI9cIjogXCLinqHvuI8gT3RoZXJcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gQmFja1wiLFxyXG4gICAgICAgICAgICBcIvCfk4tcIjogXCLwn5OLIE1lbnVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIE5hbWFuZ2FuXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgVG9zaGtlbnRcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBBbmRpam9uXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgUWFzaHFhZGFyeW9cIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBYb3Jhem1cIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyBKaXp6YXhcIixcclxuICAgICAgICAgICAgXCI377iP4oOjXCI6IFwiN++4j+KDoyBTaXJkYXJ5b1wiLFxyXG4gICAgICAgICAgICBcIjjvuI/ig6NcIjogXCI477iP4oOjIEZhcmcnb25hXCIsXHJcbiAgICAgICAgICAgIFwiOe+4j+KDo1wiOiBcIjnvuI/ig6MgQnV4b3JvXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIEJvc2hxYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW55dVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6Mg0J3QsNC80LDQvdCz0LDQvVwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjINCi0LDRiNC60LXQvdGCXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6Mg0JDQvdC00LjQttCw0L1cIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyDQmtCw0YjQutCw0LTQsNGA0YzRj1wiLFxyXG4gICAgICAgICAgICBcIjXvuI/ig6NcIjogXCI177iP4oOjINCl0L7RgNC10LfQvFwiLFxyXG4gICAgICAgICAgICBcIjbvuI/ig6NcIjogXCI277iP4oOjINCU0LbQuNC30LDQulwiLFxyXG4gICAgICAgICAgICBcIjfvuI/ig6NcIjogXCI377iP4oOjINCh0YvRgNC00LDRgNGM0Y9cIixcclxuICAgICAgICAgICAgXCI477iP4oOjXCI6IFwiOO+4j+KDoyBGYXJnJ29uYVwiLFxyXG4gICAgICAgICAgICBcIjnvuI/ig6NcIjogXCI577iP4oOjINCR0YPRhdCw0YDQsFwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyDQlNGA0YPQs9C+0LlcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8g0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBcIvCfk4tcIjogXCLwn5OLINCc0LXQvdGOXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFJlZ2lvbkJ1dHRvbnMyOiB7XHJcbiAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgU2FtYXJrYW5kXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgU3Vya2hhbmRhcnlhXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgTmF2b2lcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBLYXJha2FscGFrc3RhblwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVudVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgU2FtYXJxYW5kXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6NTdXJ4YW5kYXJ5b1wiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjTmF2b2l5XCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6NRb3JhcWFscG9nJ2lzdG9uXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIE9ycWFnYVwiLFxyXG4gICAgICAgICAgICBcIvCfk4tcIjogXCLwn5OLIE1lbnl1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyDQodCw0LzQsNGA0LrQsNC90LRcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyDQodGD0YDRhdCw0L3QtNCw0YDRjNC40L3RgdC60LDRj1wiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjINCd0LDQstC+0LhcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyDQmtCw0YDQsNC60LDQu9C/0LDQutGB0YLQsNC9J2lzdG9uXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPINCd0LDQt9Cw0LRcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyDQnNC10L3RjlwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBTYWxhcnlCdXR0b246IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBFVVJPXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgVVNEXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgUlVCXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgVVpTXCIsXHJcbiAgICAgICAgICAgIFwi8J+Xo1wiOiBcIvCfl6MgQmFzZWQgb24gdGhlIGludGVydmlld1wiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIEVVUk9cIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyBVU0RcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBSVUJcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBVWlNcIixcclxuICAgICAgICAgICAgXCLwn5ejXCI6IFwi8J+XoyBTdWhiYXQgYXNvc2lkYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6Mg0LXQstGA0L5cIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyDQoNGD0LHQu9GMXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6Mg0YHRg9C8XCIsXHJcbiAgICAgICAgICAgIFwi8J+Xo1wiOiBcIvCfl6Mg0J3QsCDQvtGB0L3QvtCy0LUg0LjQvdGC0LXRgNCy0YzRjlwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ29udGFjdEJ1dHRvbjoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIFBob25lTnVtYmVyXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgVGVsZWdyYW1cIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gQmFja1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBUZWxlZm9uIHJhcWFtXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgVGVsZWdyYW1cIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjINCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjINCi0LXQu9C10LPRgNCw0LzQvNCwXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPINCd0LDQt9Cw0LRcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBDb250YWN0OiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+V2hhdCB0eXBlIG9mIGNvbW11bmljYXRpb24gc2hvdWxkIHRoZXkgY29udGFjdCB5b3Ugd2l0aD88L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5RYXlzaSBhbG9xYSB0dXJpIGJpbGFuIHNpemdhIGJvZydsYW5pc2hzaW4/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JrQsNC60L7QuSDRgtC40L8g0YHQstGP0LfQuCDQvtC90Lgg0LTQvtC70LbQvdGLINGB0LLRj9C30LDRgtGM0YHRjyDRgSDQstCw0LzQuD88L2I+YFxyXG4gICAgfSxcclxuICAgIFZhY2FuY3lQaG9uZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHRoZSBwaG9uZSBudW1iZXI8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5UZWxlZm9uIHJhcWFtbmkga2lyaXRpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LA8L2I+YFxyXG4gICAgfSxcclxuICAgIFZhY2FuY3lUZWxlZ3JhbVVzZXJuYW1lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgeW91ciBUZWxlZ3JhbSB1c2VybmFtZTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPlRlbGVncmFtIHVzZXJuYW1lbmkga2lyaXRpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIFRlbGVncmFtPC9iPmBcclxuICAgIH0sXHJcbiAgICBDb250YWN0QnV0dG9ucToge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIFllc1wiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIE5vXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIEJhY2tcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgSGFcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyBZb3FcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjINCU0LBcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyDQndC10YJcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8g0J3QsNC30LDQtFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIENvbnRhY3RROiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgYW5vdGhlciBjb250YWN0IHR5cGU/PC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+WWFuYSBib3NocWEgYWxvcWEgdHVyaW5pIGtpcml0YXNpem1pPzwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LLQtdC00LjRgtC1INC00YDRg9Cz0L7QuSDRgtC40L8g0LrQvtC90YLQsNC60YLQsD88L2I+YFxyXG4gICAgfSxcclxuICAgIFNhbGFyeVNlbmQ6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBzYWxhcnk8L2I+XFxuPGI+TWFzYWxhbjwvYj4gOiA0MDAwLTYwMDAgb3IgNTAwMGAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWluaW1hbCB2YSBtYWtzaW1hbCBtYW9zaG5pIGtpcml0aW5nPC9iPlxcbjxiPkZvciBleGFtcGxlPC9iPiA6IDQwMDAtNjAwMCB5b2tpIDUwMDBgLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LLQtdC00LjRgtC1INC80LjQvdC40LzQsNC70YzQvdGD0Y4g0Lgg0LzQsNC60YHQuNC80LDQu9GM0L3Rg9GOINC30LDRgNC/0LvQsNGC0YM8L2I+XFxuPGI+0J3QsNC/0YDQuNC80LXRgDwvYj4gOiA0MDAwLTYwMDAg0LjQu9C4INC20LUgNTAwMGBcclxuICAgIH0sXHJcbiAgICBTYWxhcnk6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5NYW9zaCB0dXJpbmkgdGFubGFuZzwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hb3NoIHR1cmluaSB0YW5sYW5nPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+TWFvc2ggdHVyaW5pIHRhbmxhbmc8L2I+YFxyXG4gICAgfSxcclxuICAgIFBob25lX25hbWU6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwi8J+TsiBQaG9uZU51bWJlclwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCLwn5OyIFRlbGVncmFtXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIEJhY2tcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIvCfk7IgVGVsZWZvbiByYXFhbVwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCLwn5OyIFRlbGVncmFtXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIE9ycWFnYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwi8J+TsiDQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwi8J+TsiDQotC10LvQtdCz0YDQsNC80LzQsFwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ29udGFjdEI6IHtcclxuICAgICAgICBcImVuXCI6IFwi8J+TniBDb250YWN0XCIsXHJcbiAgICAgICAgXCJ1elwiOiBcIvCfk54gQWxvcWFcIixcclxuICAgICAgICBcInJ1XCI6IFwi8J+TniDQmtC+0L3RgtCw0LrRglwiXHJcbiAgICB9LFxyXG4gICAgTW9yZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkxlYXJuIG1vcmU8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5CYXRhZnNpbCBtYWx1bW90PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0KPRh9C40YLRjCDQsdC+0LvRjNGI0LU8L2I+YFxyXG4gICAgfSxcclxuICAgIFNhbGFyeVM6IHtcclxuICAgICAgICBcImVuXCI6IGBcclxuICAgICAgICA8Yj5Zb3VyIHZhY2FuY3kgaXMgcmVhZHk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGBcclxuICAgICAgICA8Yj5WYWthbnNpeWFuZ2l6IHRheXlvcjwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYFxyXG4gICAgICAgIDxiPtCS0LDRiNCwINCy0LDQutCw0L3RgdC40Y8g0LPQvtGC0L7QstCwPC9iPmBcclxuICAgIH0sXHJcbiAgICBGcm9udGVuZEJ1dHRvbnM6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBWdWUuanNcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyBSZWFjdFwiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjIFdvcmRQcmVzc1wiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjIEphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBBbmd1bGFyXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIE90aGVyXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIEJhY2tcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW51XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBWdWUuanNcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyBSZWFjdFwiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjIFdvcmRQcmVzc1wiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjIEphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBBbmd1bGFyXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIEJvc2hxYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW55dVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6Mg0JLRg9C1LtC20YFcIixcclxuICAgICAgICAgICAgXCIy77iP4oOjXCI6IFwiMu+4j+KDoyDQoNC10LDQutGCXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6Mg0JLQvtGA0LTQn9GA0LXRgdGBXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6Mg0JbQsNCy0LDRgdC60YDQuNC/0YJcIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyDQkNC90LPRg9C70LXRgFwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyDQlNGA0YPQs9C+0LlcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8g0J3QsNC30LDQtFwiLFxyXG4gICAgICAgICAgICBcIvCfk4tcIjogXCLwn5OLINCc0LXQvdGOXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFNtbUJ1dHRvbnM6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBTTU0gc3BlY2lhbGlzdFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIFNNTSBtYW5hZ2VyXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgVGFyZ2V0b2xvZ1wiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjIENvbnRlbnQgbWFuYWdlclwiLFxyXG4gICAgICAgICAgICBcIjXvuI/ig6NcIjogXCI177iP4oOjIEluc3RhZ3JhbSBtYW5hZ2VyXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIE90aGVyXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIEJhY2tcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW51XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBTTU0gbXV0YXhhc2lzXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgU01NIG1lbmVqZXJcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBUYXJnZXRvbG9nXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgS29udGVudCBtZW5lamVyXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgSW5zdGFncmFtIG1lbmVqZXJcIixcclxuICAgICAgICAgICAgXCLinqHvuI9cIjogXCLinqHvuI8gQm9zaHFhXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIE9ycWFnYVwiLFxyXG4gICAgICAgICAgICBcIvCfk4tcIjogXCLwn5OLIE1lbnl1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBTTU0gINGB0L/QtdGG0LjQsNC70LjRgdGCXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgU01NINCc0LXQvdC10LbQtdGAXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6Mg0KLQsNGA0LPQtdGC0L7Qu9C+0LNcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBLb250ZW50INCc0LXQvdC10LbQtdGAXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6Mg0JjQvdGB0YLQsNCz0YDQsNC8INCc0LXQvdC10LbQtdGAXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPINCU0YDRg9Cz0L7QuVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sg0JzQtdC90Y5cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgTW9iaWxlQnV0dG9uczoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIElPU1wiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIEFuZHJvaWRcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBGbHV0dGVyXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgS290bGluXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgSmF2YVwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBPdGhlclwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVudVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgSU9TXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgQW5kcm9pZFwiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjIEZsdXR0ZXJcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBLb3RsaW5cIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBKYXZhXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIEJvc2hxYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW55dVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6Mg0JjQntChXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6Mg0JDQvdC00YDQvtC40LRcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyDQpNC70LDRgtGC0LXRgFwiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjINCa0L7RgtC70LjQvVwiLFxyXG4gICAgICAgICAgICBcIjXvuI/ig6NcIjogXCI177iP4oOjINCW0LDQstCwXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPINCU0YDRg9Cz0L7QuVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sg0JzQtdC90Y5cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgRGVzaWduQnV0dG9uczoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjIDNEIE1vZGVsbGVyXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgVUkvVVhcIixcclxuICAgICAgICAgICAgXCIz77iP4oOjXCI6IFwiM++4j+KDoyBXZWIgZGVzaWduZXJcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDozTvuI/ig6MgR3JhZmlrIGRlc2lnbmVyXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIE90aGVyXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPIEJhY2tcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW51XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyAzRCBNb2RlbGxlclwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIFVJL1VYXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgV2ViIGRlemF5bmVyXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6MgR3JhZmlrIGRpemF5bmVyXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPIEJvc2hxYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIixcclxuICAgICAgICAgICAgXCLwn5OLXCI6IFwi8J+TiyBNZW55dVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgM0Qg0LzQvtC00LXQu9C70LXRgFwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjINCj0Jgv0KPQpVwiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjINCy0LXQsS3QtNC40LfQsNC50L3QtdGAXCIsXHJcbiAgICAgICAgICAgIFwiNO+4j+KDo1wiOiBcIjTvuI/ig6Mg0JPRgNCw0YTQuNGH0LXRgdC60LjQuSDQtNC40LfQsNC50L3QtdGAXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPINCU0YDRg9Cz0L7QuVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sg0JzQtdC90Y5cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgTWFuYWdlckJ1dHRvbnM6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCIx77iP4oOjXCI6IFwiMe+4j+KDoyBBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6MgQnV4Z2FsdGVyXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6MgQ29weXdyaXRlclwiLFxyXG4gICAgICAgICAgICBcIjTvuI/ig6NcIjogXCI077iP4oOjIE9mZmljZSBtYW5hZ2VyXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6MgU2FsZXMgb3BlcmF0b3JcIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyBPcGVyYXRvclwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBPdGhlclwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVudVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwiMe+4j+KDo1wiOiBcIjHvuI/ig6MgQWRtaW5pc3RyYXRvclwiLFxyXG4gICAgICAgICAgICBcIjLvuI/ig6NcIjogXCIy77iP4oOjIEJ1eGdhbHRlclwiLFxyXG4gICAgICAgICAgICBcIjPvuI/ig6NcIjogXCIz77iP4oOjIEtvcGlyYXl0ZXJcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyBPZmlzIG1lbmVqZXJcIixcclxuICAgICAgICAgICAgXCI177iP4oOjXCI6IFwiNe+4j+KDoyBTb3R1diBvcGVyYXRvcmlcIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyBPcGVyYXRvclwiLFxyXG4gICAgICAgICAgICBcIuKeoe+4j1wiOiBcIuKeoe+4jyBCb3NocWFcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sgTWVueXVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIjHvuI/ig6NcIjogXCIx77iP4oOjINCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAXCIsXHJcbiAgICAgICAgICAgIFwiMu+4j+KDo1wiOiBcIjLvuI/ig6Mg0JHRg9GF0LPQsNC70YLQtdGAXCIsXHJcbiAgICAgICAgICAgIFwiM++4j+KDo1wiOiBcIjPvuI/ig6Mg0JrQvtC/0LjRgNCw0LnRgtC10YBcIixcclxuICAgICAgICAgICAgXCI077iP4oOjXCI6IFwiNO+4j+KDoyDQntGE0LjRgS3QvNC10L3QtdC00LbQtdGAXCIsXHJcbiAgICAgICAgICAgIFwiNe+4j+KDo1wiOiBcIjXvuI/ig6Mg0J7Qv9C10YDQsNGC0L7RgCDQv9GA0L7QtNCw0LZcIixcclxuICAgICAgICAgICAgXCI277iP4oOjXCI6IFwiNu+4j+KDoyDQntC/0LXRgNCw0YLQvtGAXCIsXHJcbiAgICAgICAgICAgIFwi4p6h77iPXCI6IFwi4p6h77iPINCU0YDRg9Cz0L7QuVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgICAgIFwi8J+Ti1wiOiBcIvCfk4sg0JzQtdC90Y5cIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQWRtaW5pc3RyYXRvckJ1dHRvbnM6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCLwn5mO8J+Pu+KAjeKZgu+4j1wiOiBcIvCfmY7wn4+74oCN4pmC77iPIEJveVwiLFxyXG4gICAgICAgICAgICBcIvCfmY3wn4+74oCN4pmA77iPIFwiOiBcIvCfmY3wn4+74oCN4pmA77iPIEdpcmxcIixcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gQmFja1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCLwn5mO8J+Pu+KAjeKZgu+4j1wiOiBcIvCfmY7wn4+74oCN4pmC77iPIE8nZydpbCBib2xhXCIsXHJcbiAgICAgICAgICAgIFwi8J+ZjfCfj7vigI3imYDvuI9cIjogXCLwn5mN8J+Pu+KAjeKZgO+4jyBRaXogYm9sYVwiLFxyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+ZjvCfj7vigI3imYLvuI9cIjogXCLwn5mO8J+Pu+KAjeKZgu+4jyDQn9Cw0YDQtdC90YxcIixcclxuICAgICAgICAgICAgXCLwn5mN8J+Pu+KAjeKZgO+4j1wiOiBcIvCfmY3wn4+74oCN4pmA77iPINC00LXQstC+0YfQutCwXCIsXHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPINCd0LDQt9Cw0LRcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRtaW5TdWNjZXNzOiB7XHJcbiAgICAgICAgXCJlblwiOiBcIjxiPlZhY2FuY3kgYWNjZXB0ZWQ8L2I+XCIsXHJcbiAgICAgICAgXCJ1elwiOiBcIjxiPlZha2Fuc2l5YSBxYWJ1bCBxaWxpbmRpPC9iPlwiLFxyXG4gICAgICAgIFwicnVcIjogXCI8Yj7QktCw0LrQsNC90YHQuNGPINC/0YDQuNC90Y/RgtCwPC9iPlwiXHJcbiAgICB9LFxyXG4gICAgYWRtaW5Ob1N1Y2Nlc3M6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5UaGUgdmFjYW5jeSBoYXMgYmVlbiBjYW5jZWxsZWQ8L2I+XHJcbiAgICAgICAgPGI+RW50ZXIgdGhlIHJlYXNvbiBmb3IgY2FuY2VsbGF0aW9uPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+VmFrYW5zaXlhICBiZWtvciBxaWxpbmRpPC9iPlxyXG4gICAgICAgIDxiPkJla29yIHFpbGlzaCBzYWJhYmluaSBraXJpdGluZzwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LDQutCw0L3RgdC40Y8g0LHRi9C70LAg0L7RgtC80LXQvdC10L3QsDwvYj5cclxuICAgICAgICA8Yj7QktCy0LXQtNC40YLQtSDQv9GA0LjRh9C40L3RgyDQvtGC0LzQtdC90Ys8L2I+YFxyXG4gICAgfSxcclxuICAgIGFkbWluTWVzc3NhZ2U6IHtcclxuICAgICAgICBcImVuXCI6IFwiPGI+VGhlIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCB0byB0aGUgdXNlcjwvYj5cIixcclxuICAgICAgICBcInV6XCI6IFwiPGI+WGFiYXIgdXNlcmdhIGpvJ25hdGlsZGk8L2I+XCIsXHJcbiAgICAgICAgXCJydVwiOiBcIjxiPtCh0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3QviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y48L2I+XCJcclxuICAgIH0sXHJcbiAgICB1c2VyU3VjY2VzU2VuZDoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPllvdXIgdmFjYW5jeSBoYXMgYmVlbiBhY2NlcHRlZFxcbkl0IHdpbGwgYmUgdGhyb3duIGludG8gdGhlIGNhbmFsIHNvb248L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5WYWthbnNpeWFuZ2l6IHFhYnVsIHFpbGluZGlcXG5UZXogb3JhZGEga2FuYWxnYSB0YXNobGFuYWRpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQsNGI0LAg0LLQsNC60LDQvdGB0LjRjyDQv9GA0LjQvdGP0YLQsFxcbtCV0LPQviDRgdC60L7RgNC+INCy0YvQsdGA0L7RgdGP0YIg0LIg0LrQsNC90LDQuzwvYj5gLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgUmVhc29uOiB7XHJcbiAgICAgICAgXCJlblwiOiBcIjxiPkVudGVyIHRoZSByZWFzb24gZm9yIHRoZSB2YWNhbmN5IGNhbmNlbGxhdGlvbjwvYj5cIixcclxuICAgICAgICBcInV6XCI6IFwiPGI+VmFrYW5zaXlhIGJla29yIHFpbGluaXNoIHNhYmFiaW5pIGtpcml0aW5nPC9iPlwiLFxyXG4gICAgICAgIFwicnVcIjogXCI8Yj7QktCy0LXQtNC40YLQtSDQv9GA0LjRh9C40L3RgyDQvtGC0LzQtdC90Ysg0LLQsNC60LDQvdGB0LjQuDwvYj5cIlxyXG4gICAgfSxcclxuICAgIGNhbmNlbGxhdGlvbjoge1xyXG4gICAgICAgIFwiZW5cIjogXCI8Yj5UaGUgdmFjYW5jeSBoYXMgYmVlbiBjYW5jZWxsZWQ8L2I+XCIsXHJcbiAgICAgICAgXCJ1elwiOiBcIjxiPlZha2Fuc2l5YSBiZWtvciBxaWxpbmRpPC9iPlwiLFxyXG4gICAgICAgIFwicnVcIjogXCI8Yj7QktCw0LrQsNC90YHQuNGPINCx0YvQu9CwINC+0YLQvNC10L3QtdC90LA8L2I+XCJcclxuICAgIH0sXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHtcclxuICAgIE1haW46IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCLwn5SEXCI6IFwi8J+UhCBDaGFuZ2UgbGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCLwn5OJXCI6IFwi8J+TiSBKb2IgdXBsb2FkXCIsXHJcbiAgICAgICAgICAgIFwi8J+TnVwiOiBcIvCfk50gVGVybXMgb2YgdXNlXCIsXHJcbiAgICAgICAgICAgIFwi8J+Tg1wiOiBcIvCfk4MgTXkgdmFjYW5jaWVzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCLwn5SEXCI6IFwi8J+UhCBUaWxuaSBvJ3pnYXJ0aXJpc2hcIixcclxuICAgICAgICAgICAgXCLwn5OJXCI6IFwi8J+TiSBWYWthbnNpeWEgam95bGFzaFwiLFxyXG4gICAgICAgICAgICBcIvCfk51cIjogXCLwn5OdIEJvdCBxYW5kYXkgaXNobGF5ZGk/XCIsXHJcbiAgICAgICAgICAgIFwi8J+Tg1wiOiBcIvCfk4MgVmFrYW5zaXlhbGFyaW1cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIvCflIRcIjogXCLwn5SEINCS0YvQsdC10YDQuNGC0LUgXCIsXHJcbiAgICAgICAgICAgIFwi8J+TiVwiOiBcIvCfk4kg0JfQsNCz0YDRg9C30LrQsCDQstCw0LrQsNC90YHQuNC5XCIsXHJcbiAgICAgICAgICAgIFwi8J+TnVwiOiBcIvCfk50g0KPRgdC70L7QstC40Y8g0Y3QutGB0L/Qu9GD0LDRgtCw0YbQuNC4XCIsXHJcbiAgICAgICAgICAgIFwi8J+Tg1wiOiBcIvCfk4Mg0JzQvtC4INCy0LDQutCw0L3RgdC40LhcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ2hvb3NlVmFjYW5zeToge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIvCfkajigI3wn5K7XCI6IFwi8J+RqOKAjfCfkrsgRmluZCBIUlwiLFxyXG4gICAgICAgICAgICBcIvCfj6JcIjogXCLwn4+iIEpvYiBzZWFyY2hcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIvCfkajigI3wn5K7XCI6IFwi8J+RqOKAjfCfkrsgSG9kaW0ga2VyYWtcIixcclxuICAgICAgICAgICAgXCLwn4+iXCI6IFwi8J+PoiBJc2ggam95aSBrZXJha1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+RqOKAjfCfkrtcIjogXCLwn5Go4oCN8J+SuyDQmNGJ0YMg0YHQvtGC0YDRg9C00L3QuNC60LBcIixcclxuICAgICAgICAgICAgXCLwn4+iXCI6IFwi8J+PoiDQn9C+0LjRgdC6INGA0LDQsdC+0YLRi1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBHb2JhY2s6IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gQmFja1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInV6XCI6IHtcclxuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSJdfQ==