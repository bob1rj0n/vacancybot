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
        "en": `<b>Please enter the technology!(For example: Russian language knowledge or knowledge is higher or secondary special...)</b>`,
        "uz": `<b>Marhamat Technologiyani kiriting!(Masalan: Rus tilini bilish yoki malumoti oliy yoki o'rta maxsus ...)</b>`,
        "ru": `<b>Пожалуйста, введите технологию!(Например: Знание русского языка или знание высшее или среднее специальное...)</b>`
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
        "en": `<b>Enter your destination! (For example: Buxgalter)</b>`,
        "uz": `<b>Marhamat yo'nalishingizni kiriting! (Masalan: Buxgalter)</b>`,
        "ru": `<b>Введите пункт назначения! (Например: Бухгалтер)</b>`
    },
    LinkQuestion: {
        "en": `<b>Can you post a link to apply?</b>`,
        "uz": `<b>Ariza qoldirish uchun link qoldirasizmi?</b>`,
        "ru": `<b>Можете скинуть ссылку для подачи заявки?</b>`
    },
    EnterLink: {
        "en": `<b>Please enter the link to submit an application!(For example: https://www.google.com or https://t.me/telegram-username)</b>`,
        "uz": `<b>Marhamat ariza qoldirish uchun linkni kiriting!(Masalan: https://www.google.com yoki https://t.me/telegram-username)</b>`,
        "ru": `<b>Пожалуйста, введите ссылку, чтобы отправить заявку!(Например: https://www.google.com или https://t.me/telegram-username)</b>`
    },
    FIO: {
        "en": `<b>Please enter your fullname\n(Example : Eshmatov Tashmatjon)</b>`,
        "uz": `<b>Marhamat to'liq kiriting\n(Masalan : Eshmatov Toshmatjon)</b>`,
        "ru": `<b>Пожалуйста, введите свой Ф.И.О\n(Например : Эшматов Ташматжон)</b>`
    },
    AGE: {
        "en": `<b>Please enter your age</b>`,
        "uz": `<b>Marhamat yoshingizni kiriting</b>`,
        "ru": `<b>Пожалуйста, введите свой возраст</b>`
    },
    Addition: {
        "en": `<b>Enter details or omit</b>`,
        "uz": `<b>Batafsil malumot kiriting yoki o'tkazib yuboring</b>`,
        "ru": `<b>Введите данные или пропустите</b>`
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLGVBQWU7S0FDeEI7SUFFRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsa0RBQWtEO1FBQ3hELElBQUksRUFBRSxrRUFBa0U7UUFDeEUsSUFBSSxFQUFFLHNFQUFzRTtLQUMvRTtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxJQUFJLEVBQUUseUJBQXlCO0tBQ2xDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSxxQkFBcUI7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsNkhBQTZIO1FBQ25JLElBQUksRUFBRSwrR0FBK0c7UUFDckgsSUFBSSxFQUFFLHNIQUFzSDtLQUMvSDtJQUNELFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxxRUFBcUU7UUFDM0UsSUFBSSxFQUFFLHdFQUF3RTtRQUM5RSxJQUFJLEVBQUUscUVBQXFFO0tBQzlFO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLDRDQUE0QztRQUNsRCxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLElBQUksRUFBRSxrQ0FBa0M7S0FDM0M7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsSUFBSSxFQUFFLG9DQUFvQztLQUM3QztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2RkFBNkY7UUFD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QjtZQUM1QixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLElBQUksRUFBRSxpQkFBaUI7U0FDMUI7S0FDSjtJQUNELGFBQWEsRUFBRTtRQUNYLElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLElBQUksRUFBRSxlQUFlO1NBQ3hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixJQUFJLEVBQUUsbUJBQW1CO1NBQzVCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixJQUFJLEVBQUUsaUJBQWlCO1NBQzFCO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUztTQUNsQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxXQUFXO1NBQ3BCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFVBQVU7U0FDbkI7S0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTWVzc2FnZXMgPSB7XG4gICAgTGFuZ3VhZ2U6IHtcbiAgICAgICAgXCJlblwiOiBcIkNob29zZSBsYW5ndWFnZVwiLFxuICAgICAgICBcInV6XCI6IFwiVGlsbmkgdGFubGFuZ1wiLFxuICAgICAgICBcInJ1XCI6IFwi0JLRi9Cx0LXRgNC40YLQtSDRj9C30YvQulwiXG4gICAgfSxcblxuICAgIFBob25lOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlNoYXJlIHlvdXIgcGhvbmUgbnVtYmVyIHRvIHVzZSB0aGUgYm90ISEhPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPkJvdGRhbiBmb3lkYWxhbmlzaCB1Y2h1biB0ZWxlZm9uIHJhcWFtaW5naXpuaSB1bGFzaGluZyEhITwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LTQtdC70LjRgtC10YHRjCDRgdCy0L7QuNC8INC90L7QvNC10YDQvtC8INGC0LXQu9C10YTQvtC90LAsINGH0YLQvtCx0Ysg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCx0L7RgtCwISEhPC9iPmBcbiAgICB9LFxuICAgIFBob25lQnV0dG9uOiB7XG4gICAgICAgIFwiZW5cIjogXCLwn5OeIENvbmZpcm0geW91ciBudW1iZXJcIixcbiAgICAgICAgXCJ1elwiOiBcIvCfk54gTm9tZXJpbmdpem5pICB0YXNkaXFsYW5nXCIsXG4gICAgICAgIFwicnVcIjogXCLwn5OeINCf0L7QtNGC0LLQtdGA0LTQuCDRgdCy0L7QuSDQvdC+0LzQtdGAXCJcbiAgICB9LFxuICAgIE1lbnk6IHtcbiAgICAgICAgXCJlblwiOiBgPGI+TWFpbiBtZW51PC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPkFzb3NpeSBtZW55dTwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qk9C70LDQstC90L7QtSDQvNC10L3RjjwvYj5gXG4gICAgfSxcbiAgICBUZWNobm9sb2d5OiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB0aGUgdGVjaG5vbG9neSEoRm9yIGV4YW1wbGU6IFJ1c3NpYW4gbGFuZ3VhZ2Uga25vd2xlZGdlIG9yIGtub3dsZWRnZSBpcyBoaWdoZXIgb3Igc2Vjb25kYXJ5IHNwZWNpYWwuLi4pPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IFRlY2hub2xvZ2l5YW5pIGtpcml0aW5nIShNYXNhbGFuOiBSdXMgdGlsaW5pIGJpbGlzaCB5b2tpIG1hbHVtb3RpIG9saXkgeW9raSBvJ3J0YSBtYXhzdXMgLi4uKTwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YLQtdGF0L3QvtC70L7Qs9C40Y4hKNCd0LDQv9GA0LjQvNC10YA6INCX0L3QsNC90LjQtSDRgNGD0YHRgdC60L7Qs9C+INGP0LfRi9C60LAg0LjQu9C4INC30L3QsNC90LjQtSDQstGL0YHRiNC10LUg0LjQu9C4INGB0YDQtdC00L3QtdC1INGB0L/QtdGG0LjQsNC70YzQvdC+0LUuLi4pPC9iPmBcbiAgICB9LFxuICAgIENvbm5lY3RQaG9uZToge1xuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB0aGUgY29udGFjdCBwaG9uZSBudW1iZXJcXG4oRm9yIGV4YW1wbGU6ICs5OTg5MDEyMzQ1NjcpPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPkFsb3FhIHVjaHVuIHRlbGVmb24gcmFxYW1uaSBraXJpdGluZ1xcbihNYXNhbGFuIDogKzk5ODkwMTIzNDU2Nyk8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LrQvtC90YLQsNC60YLQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXFxuKNCd0LDQv9GA0LjQvNC10YA6ICs5OTg5MDEyMzQ1NjcpPC9iPmBcbiAgICB9LFxuICAgIEVycm9yVG9OdW1iZXI6IHtcbiAgICAgICAgXCJlblwiOiBgPGI+VGhlIG51bWJlciB3YXMgZW50ZXJlZCBpbmNvcnJlY3RseSE8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+UmFxYW0gbm90bydnJ3JpIGtpcml0aWxkaSE8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0J3QvtC80LXRgCDQstCy0LXQtNC10L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QviE8L2I+YFxuICAgIH0sXG4gICAgRW50ZXJQbGFjZToge1xuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgdGhlIGFyZWEhPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGh1ZHVkbmkga2lyaXRpbmchPC9iPmAsXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstC+0LnQtNC40YLQtSDQsiDQt9C+0L3RgyE8L2I+YFxuICAgIH0sXG4gICAgRW50ZXJQcmljZToge1xuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgeW91ciBzYWxhcnkhIChGb3IgZXhhbXBsZTogNDAwLTEwMDAkIG9yIDQwMDAwMDAtMTAwMDAwMDAgc28nbSBvciAyMDAkKyk8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgbWFvc2huaSBraXJpdGluZyEoTWFzYWxhbjogNDAwLTEwMDAkIHlva2kgNDAwMDAwMC0xMDAwMDAwMCBzbydtIHlva2kgMjAwJCspPC9iPmAsXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQstCw0YjRgyDQt9Cw0YDQv9C70LDRgtGDISjQndCw0L/RgNC40LzQtdGAOiA0MDAtMTAwMCQg0LjQu9C4IDQwMDAwMDAtMTAwMDAwMDAgc28nbSDQuNC70LggMjAwJCspPC9iPmBcbiAgICB9LFxuICAgIEVudGVyUHJvZmVzc2lvbjoge1xuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgeW91ciBwcm9mZXNzaW9uIShGb3IgZXhhbXBsZTogU3R1ZGVudCk8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQga2FzYmluZ2l6bmkga2lyaXRpbmchKE1hc2FsYW46IFRhbGFiYSk8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LrQsNC20LjRgtC1INGA0L7QtCDQt9Cw0L3Rj9GC0LjQuSEo0J3QsNC/0YDQuNC80LXRgDog0KHRgtGD0LTQtdC90YIpPC9iPmBcbiAgICB9LFxuICAgIFRpbWVUb0NhbGw6IHtcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgeW91ciBjb250YWN0IHRpbWUhKEZvciBleGFtcGxlOiAyNC83IG9yIDk6MDAtMTU6MDAgb3IgYW55IHRpbWUpPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk11cm9qYWF0IHFpbGlzaCB2YXF0aW5pIGtpcml0aW5nIShNYXNhbGFuOiAyNC83IHlva2kgOTowMC0xNTowMCB5b2tpIGlzdGFsZ2FuIHZhcXQpPC9iPmAsXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LLQtdC00LjRgtC1INCy0YDQtdC80Y8g0LrQvtC90YLQsNC60YLQsCEgKNCd0LDQv9GA0LjQvNC10YA6IDI0Lzcg0LjQu9C4IDk6MDAtMTU6MDAg0LjQu9C4INCyINC70Y7QsdC+0LUg0LLRgNC10LzRjyk8L2I+YFxuICAgIH0sXG4gICAgVGltZU9mV29yazoge1xuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB3b3JraW5nIGhvdXJzISAoRm9yIGV4YW1wbGU6IDk6MDAtMTg6MDApPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPklzaCB2YXF0aW5pIGtpcml0aW5nIShNYXNhbGFuOiA5OjAwLTE4OjAwKTwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDRgNCw0LHQvtGH0LXQtSDQstGA0LXQvNGPISjQndCw0L/RgNC40LzQtdGAOiA5OjAwLTE4OjAwKTwvYj5gXG4gICAgfSxcbiAgICBHb2FsOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSB3cml0ZSBhIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHlvdXIgcHVycG9zZSE8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgbWFxc2FkaW5naXogaGFxaWRhIHFpc3FhY2hhIHlvemluZyE8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINC90LDQv9C40YjQuNGC0LUg0LrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtSDQstCw0YjQtdC5INGG0LXQu9C4ITwvYj5gXG4gICAgfSxcbiAgICBDaGVja0FuZFNlbmRWYWNhbmN5OiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBjaGVjayBhbmQgY29uZmlybSB5b3VyIHZhY2FuY3khPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IHZha2Fuc2l5YW5naXpuaSB0ZWtzaGlyaWIgY2hpcWluZyB2YSB0YXNkaXFsYW5nITwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0L/RgNC+0LLQtdGA0YzRgtC1INC4INC/0L7QtNGC0LLQtdGA0LTQuNGC0LUg0YHQstC+0Y4g0LLQsNC60LDQvdGB0LjRjiE8L2I+YFxuICAgIH0sXG4gICAgU2VuZFRvQWRtaW46IHtcbiAgICAgICAgXCJlblwiOiBgPGI+VGhlIGluZm9ybWF0aW9uIGhhcyBiZWVuIHNlbnQgdG8gdGhlIGFkbWluIGFuZCB3aWxsIGJlIHBvc3RlZCBvbiB0aGUgY2hhbm5lbCBhZnRlciBjb25maXJtYXRpb24hPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk1hbHVtb3RsYXIgYWRtaW5nYSB5dWJvcmlsZGkgdGFzZGlxbGFuZ2FuZGFuIHNvJ25nIGthbmFsZ2Egam95bGFuYWRpITwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7QmNC90YTQvtGA0LzQsNGG0LjRjyDQvtGC0L/RgNCw0LLQu9C10L3QsCDigIvigIvQsNC00LzQuNC90YMg0Lgg0LHRg9C00LXRgiDRgNCw0LfQvNC10YnQtdC90LAg0L3QsCDQutCw0L3QsNC70LUg0L/QvtGB0LvQtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyE8L2I+YFxuICAgIH0sXG4gICAgQ2FuY2VsZWQ6IHtcbiAgICAgICAgXCJlblwiOiBgPGI+VmFjYW5jeSBjYW5jZWxlZCE8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+VmFrYW5zaXlhIGJla29yIHFpbGluZGkhPC9iPmAsXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LDQutCw0L3RgdC40Y8g0L7RgtC80LXQvdC10L3QsCE8L2I+YFxuICAgIH0sXG4gICAgUG9zdGVkQnlBZG1pbjoge1xuICAgICAgICBcImVuXCI6IGBZb3VyIHZhY2FuY3kgaGFzIGJlZW4gcG9zdGVkIG9uIHRoZSBjaGFubmVsIVxcbkNsaWNrIHRoZSA8Yj5MaW5rPC9iPiBiZWxvdyB0byB2aWV3IWAsXG4gICAgICAgIFwidXpcIjogYFZha2Fuc2l5YW5naXoga2FuYWxnYSBqb3lsYW5kaSFcXG5LbydyaXNoIHVjaHVuIHF1eWlkYWdpIDxiPkxpbms8L2I+bmkgYm9zaW5nIWAsXG4gICAgICAgIFwicnVcIjogYNCS0LDRiNCwINCy0LDQutCw0L3RgdC40Y8g0L7Qv9GD0LHQu9C40LrQvtCy0LDQvdCwINC90LAg0LrQsNC90LDQu9C1IVxcbtCd0LDQttC80LjRgtC1IDxiPtCh0YHRi9C70LrRgzwvYj4g0L3QuNC20LUsINGH0YLQvtCx0Ysg0L/RgNC+0YHQvNC+0YLRgNC10YLRjCFgXG4gICAgfSxcbiAgICBPZmZpY2VOYW1lOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB5b3VyIG9mZmljZSBuYW1lPC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGlkb3JhIG5vbWluaSBraXJpdGluZzwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQstCw0YjQtdCz0L4g0L7RhNC40YHQsDwvYj5gXG4gICAgfSxcbiAgICBSZXNwb25zaWJsZToge1xuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB0aGUgbmFtZSBvZiB0aGUgcmVzcG9uc2libGUgcGVyc29uITwvYj5gLFxuICAgICAgICBcInV6XCI6IGA8Yj5NYXN1bCBzaGF4c25pIGlzbWluaSBraXJpdGluZyE8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LjQvNGPINC+0YLQstC10YLRgdGC0LLQtdC90L3QvtCz0L4g0LvQuNGG0LAhPC9iPmBcbiAgICB9LFxuICAgIERpcmVjdGlvbjoge1xuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB5b3VyIGRlc3RpbmF0aW9uISAoRm9yIGV4YW1wbGU6IEJ1eGdhbHRlcik8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgeW8nbmFsaXNoaW5naXpuaSBraXJpdGluZyEgKE1hc2FsYW46IEJ1eGdhbHRlcik8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0L/Rg9C90LrRgiDQvdCw0LfQvdCw0YfQtdC90LjRjyEgKNCd0LDQv9GA0LjQvNC10YA6INCR0YPRhdCz0LDQu9GC0LXRgCk8L2I+YFxuICAgIH0sXG4gICAgTGlua1F1ZXN0aW9uOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPkNhbiB5b3UgcG9zdCBhIGxpbmsgdG8gYXBwbHk/PC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPkFyaXphIHFvbGRpcmlzaCB1Y2h1biBsaW5rIHFvbGRpcmFzaXptaT88L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0JzQvtC20LXRgtC1INGB0LrQuNC90YPRgtGMINGB0YHRi9C70LrRgyDQtNC70Y8g0L/QvtC00LDRh9C4INC30LDRj9Cy0LrQuD88L2I+YFxuICAgIH0sXG4gICAgRW50ZXJMaW5rOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB0aGUgbGluayB0byBzdWJtaXQgYW4gYXBwbGljYXRpb24hKEZvciBleGFtcGxlOiBodHRwczovL3d3dy5nb29nbGUuY29tIG9yIGh0dHBzOi8vdC5tZS90ZWxlZ3JhbS11c2VybmFtZSk8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgYXJpemEgcW9sZGlyaXNoIHVjaHVuIGxpbmtuaSBraXJpdGluZyEoTWFzYWxhbjogaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbSB5b2tpIGh0dHBzOi8vdC5tZS90ZWxlZ3JhbS11c2VybmFtZSk8L2I+YCxcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGB0YHRi9C70LrRgywg0YfRgtC+0LHRiyDQvtGC0L/RgNCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDISjQndCw0L/RgNC40LzQtdGAOiBodHRwczovL3d3dy5nb29nbGUuY29tINC40LvQuCBodHRwczovL3QubWUvdGVsZWdyYW0tdXNlcm5hbWUpPC9iPmBcbiAgICB9LFxuICAgIEZJTzoge1xuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgeW91ciBmdWxsbmFtZVxcbihFeGFtcGxlIDogRXNobWF0b3YgVGFzaG1hdGpvbik8L2I+YCxcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgdG8nbGlxIGtpcml0aW5nXFxuKE1hc2FsYW4gOiBFc2htYXRvdiBUb3NobWF0am9uKTwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YHQstC+0Lkg0KQu0Jgu0J5cXG4o0J3QsNC/0YDQuNC80LXRgCA6INCt0YjQvNCw0YLQvtCyINCi0LDRiNC80LDRgtC20L7QvSk8L2I+YFxuICAgIH0sXG4gICAgQUdFOiB7XG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB5b3VyIGFnZTwvYj5gLFxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCB5b3NoaW5naXpuaSBraXJpdGluZzwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YHQstC+0Lkg0LLQvtC30YDQsNGB0YI8L2I+YFxuICAgIH0sXG4gICAgQWRkaXRpb246IHtcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgZGV0YWlscyBvciBvbWl0PC9iPmAsXG4gICAgICAgIFwidXpcIjogYDxiPkJhdGFmc2lsIG1hbHVtb3Qga2lyaXRpbmcgeW9raSBvJ3RrYXppYiB5dWJvcmluZzwvYj5gLFxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQtNCw0L3QvdGL0LUg0LjQu9C4INC/0YDQvtC/0YPRgdGC0LjRgtC1PC9iPmBcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25zID0ge1xuICAgIE1haW46IHtcbiAgICAgICAgXCJlblwiOiB7XG4gICAgICAgICAgICBcIvCflIRcIjogXCLwn5SEIENoYW5nZSBsYW5ndWFnZVwiLFxuICAgICAgICAgICAgXCLwn5OJXCI6IFwi8J+TiSBKb2IgdXBsb2FkXCIsXG4gICAgICAgICAgICBcIvCfk51cIjogXCLwn5OdIFRlcm1zIG9mIHVzZVwiLFxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyBNeSB2YWNhbmNpZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1elwiOiB7XG4gICAgICAgICAgICBcIvCflIRcIjogXCLwn5SEIFRpbG5pIG8nemdhcnRpcmlzaFwiLFxuICAgICAgICAgICAgXCLwn5OJXCI6IFwi8J+TiSBWYWthbnNpeWEgam95bGFzaFwiLFxuICAgICAgICAgICAgXCLwn5OdXCI6IFwi8J+TnSBCb3QgcWFuZGF5IGlzaGxheWRpP1wiLFxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyBWYWthbnNpeWFsYXJpbVwiLFxuICAgICAgICB9LFxuICAgICAgICBcInJ1XCI6IHtcbiAgICAgICAgICAgIFwi8J+UhFwiOiBcIvCflIQg0JLRi9Cx0LXRgNC40YLQtSBcIixcbiAgICAgICAgICAgIFwi8J+TiVwiOiBcIvCfk4kg0JfQsNCz0YDRg9C30LrQsCDQstCw0LrQsNC90YHQuNC5XCIsXG4gICAgICAgICAgICBcIvCfk51cIjogXCLwn5OdINCj0YHQu9C+0LLQuNGPINGN0LrRgdC/0LvRg9Cw0YLQsNGG0LjQuFwiLFxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyDQnNC+0Lgg0LLQsNC60LDQvdGB0LjQuFwiLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBDaG9vc2VWYWNhbnN5OiB7XG4gICAgICAgIFwiZW5cIjoge1xuICAgICAgICAgICAgXCLwn5Go4oCN8J+Su1wiOiBcIvCfkajigI3wn5K7IEZpbmQgSFJcIixcbiAgICAgICAgICAgIFwi8J+PolwiOiBcIvCfj6IgSm9iIHNlYXJjaFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInV6XCI6IHtcbiAgICAgICAgICAgIFwi8J+RqOKAjfCfkrtcIjogXCLwn5Go4oCN8J+SuyBIb2RpbSBrZXJha1wiLFxuICAgICAgICAgICAgXCLwn4+iXCI6IFwi8J+PoiBJc2ggam95aSBrZXJha1wiLFxuICAgICAgICB9LFxuICAgICAgICBcInJ1XCI6IHtcbiAgICAgICAgICAgIFwi8J+RqOKAjfCfkrtcIjogXCLwn5Go4oCN8J+SuyDQmNGJ0YMg0YHQvtGC0YDRg9C00L3QuNC60LBcIixcbiAgICAgICAgICAgIFwi8J+PolwiOiBcIvCfj6Ig0J/QvtC40YHQuiDRgNCw0LHQvtGC0YtcIixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgR29iYWNrOiB7XG4gICAgICAgIFwiZW5cIjoge1xuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gQmFja1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidXpcIjoge1xuICAgICAgICAgICAgXCLirIXvuI9cIjogXCLirIXvuI8gT3JxYWdhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJydVwiOiB7XG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyDQndCw0LfQsNC0XCIsXG4gICAgICAgIH1cbiAgICB9LFxufSJdfQ==