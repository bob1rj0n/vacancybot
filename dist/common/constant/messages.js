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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLGVBQWU7S0FDeEI7SUFFRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsa0RBQWtEO1FBQ3hELElBQUksRUFBRSxrRUFBa0U7UUFDeEUsSUFBSSxFQUFFLHNFQUFzRTtLQUMvRTtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxJQUFJLEVBQUUseUJBQXlCO0tBQ2xDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSxxQkFBcUI7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0ZBQW9GO1FBQzFGLElBQUksRUFBRSxzRkFBc0Y7UUFDNUYsSUFBSSxFQUFFLHVGQUF1RjtLQUNoRztJQUNELFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxxRUFBcUU7UUFDM0UsSUFBSSxFQUFFLHdFQUF3RTtRQUM5RSxJQUFJLEVBQUUscUVBQXFFO0tBQzlFO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLDRDQUE0QztRQUNsRCxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLElBQUksRUFBRSxrQ0FBa0M7S0FDM0M7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsSUFBSSxFQUFFLG9DQUFvQztLQUM3QztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2RkFBNkY7UUFD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WUFDRixPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsZUFBZTtTQUN4QjtRQUNELElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsSUFBSSxFQUFFLG1CQUFtQjtTQUM1QjtRQUNELElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsSUFBSSxFQUFFLGlCQUFpQjtTQUMxQjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsV0FBVztTQUNwQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxVQUFVO1NBQ25CO0tBQ0o7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1lc3NhZ2VzID0ge1xyXG4gICAgTGFuZ3VhZ2U6IHtcclxuICAgICAgICBcImVuXCI6IFwiQ2hvb3NlIGxhbmd1YWdlXCIsXHJcbiAgICAgICAgXCJ1elwiOiBcIlRpbG5pIHRhbmxhbmdcIixcclxuICAgICAgICBcInJ1XCI6IFwi0JLRi9Cx0LXRgNC40YLQtSDRj9C30YvQulwiXHJcbiAgICB9LFxyXG5cclxuICAgIFBob25lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+U2hhcmUgeW91ciBwaG9uZSBudW1iZXIgdG8gdXNlIHRoZSBib3QhISE8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5Cb3RkYW4gZm95ZGFsYW5pc2ggdWNodW4gdGVsZWZvbiByYXFhbWluZ2l6bmkgdWxhc2hpbmchISE8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LTQtdC70LjRgtC10YHRjCDRgdCy0L7QuNC8INC90L7QvNC10YDQvtC8INGC0LXQu9C10YTQvtC90LAsINGH0YLQvtCx0Ysg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCx0L7RgtCwISEhPC9iPmBcclxuICAgIH0sXHJcbiAgICBQaG9uZUJ1dHRvbjoge1xyXG4gICAgICAgIFwiZW5cIjogXCLwn5OeIENvbmZpcm0geW91ciBudW1iZXJcIixcclxuICAgICAgICBcInV6XCI6IFwi8J+TniBOb21lcmluZ2l6bmkgIHRhc2RpcWxhbmdcIixcclxuICAgICAgICBcInJ1XCI6IFwi8J+TniDQn9C+0LTRgtCy0LXRgNC00Lgg0YHQstC+0Lkg0L3QvtC80LXRgFwiXHJcbiAgICB9LFxyXG4gICAgTWVueToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPk1haW4gbWVudTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPkFzb3NpeSBtZW55dTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCT0LvQsNCy0L3QvtC1INC80LXQvdGOPC9iPmBcclxuICAgIH0sXHJcbiAgICBUZWNobm9sb2d5OiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHRoZSB0ZWNobm9sb2d5IShGb3IgZXhhbXBsZTogTm9kZS5qcywgSmF2YXNjcmlwdCwgRGF0YWJhc2UuLi4pPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgVGVjaG5vbG9naXlhbmkga2lyaXRpbmchKE1hc2FsYW46IE5vZGUuanMsIEphdmFzY3JpcHQsIERhdGFiYXNlIC4uLik8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YLQtdGF0L3QvtC70L7Qs9C40Y4hKNCd0LDQv9GA0LjQvNC10YA6IE5vZGUuanMsIEphdmFzY3JpcHQsINCx0LDQt9CwINC00LDQvdC90YvRhS4uLik8L2I+YFxyXG4gICAgfSxcclxuICAgIENvbm5lY3RQaG9uZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHRoZSBjb250YWN0IHBob25lIG51bWJlclxcbihGb3IgZXhhbXBsZTogKzk5ODkwMTIzNDU2Nyk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5BbG9xYSB1Y2h1biB0ZWxlZm9uIHJhcWFtbmkga2lyaXRpbmdcXG4oTWFzYWxhbiA6ICs5OTg5MDEyMzQ1NjcpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LrQvtC90YLQsNC60YLQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXFxuKNCd0LDQv9GA0LjQvNC10YA6ICs5OTg5MDEyMzQ1NjcpPC9iPmBcclxuICAgIH0sXHJcbiAgICBFcnJvclRvTnVtYmVyOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+VGhlIG51bWJlciB3YXMgZW50ZXJlZCBpbmNvcnJlY3RseSE8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5SYXFhbSBub3RvJ2cncmkga2lyaXRpbGRpITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCd0L7QvNC10YAg0LLQstC10LTQtdC9INC90LXQv9GA0LDQstC40LvRjNC90L4hPC9iPmBcclxuICAgIH0sXHJcbiAgICBFbnRlclBsYWNlOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHRoZSBhcmVhITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IGh1ZHVkbmkga2lyaXRpbmchPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0L7QudC00LjRgtC1INCyINC30L7QvdGDITwvYj5gXHJcbiAgICB9LFxyXG4gICAgRW50ZXJQcmljZToge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB5b3VyIHNhbGFyeSEgKEZvciBleGFtcGxlOiA0MDAtMTAwMCQgb3IgNDAwMDAwMC0xMDAwMDAwMCBzbydtIG9yIDIwMCQrKTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IG1hb3Nobmkga2lyaXRpbmchKE1hc2FsYW46IDQwMC0xMDAwJCB5b2tpIDQwMDAwMDAtMTAwMDAwMDAgc28nbSB5b2tpIDIwMCQrKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQstCw0YjRgyDQt9Cw0YDQv9C70LDRgtGDISjQndCw0L/RgNC40LzQtdGAOiA0MDAtMTAwMCQg0LjQu9C4IDQwMDAwMDAtMTAwMDAwMDAgc28nbSDQuNC70LggMjAwJCspPC9iPmBcclxuICAgIH0sXHJcbiAgICBFbnRlclByb2Zlc3Npb246IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgZW50ZXIgeW91ciBwcm9mZXNzaW9uIShGb3IgZXhhbXBsZTogU3R1ZGVudCk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCBrYXNiaW5naXpuaSBraXJpdGluZyEoTWFzYWxhbjogVGFsYWJhKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDRg9C60LDQttC40YLQtSDRgNC+0LQg0LfQsNC90Y/RgtC40LkhKNCd0LDQv9GA0LjQvNC10YA6INCh0YLRg9C00LXQvdGCKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgVGltZVRvQ2FsbDoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHlvdXIgY29udGFjdCB0aW1lIShGb3IgZXhhbXBsZTogMjQvNyBvciA5OjAwLTE1OjAwIG9yIGFueSB0aW1lKTwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk11cm9qYWF0IHFpbGlzaCB2YXF0aW5pIGtpcml0aW5nIShNYXNhbGFuOiAyNC83IHlva2kgOTowMC0xNTowMCB5b2tpIGlzdGFsZ2FuIHZhcXQpPC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JLQstC10LTQuNGC0LUg0LLRgNC10LzRjyDQutC+0L3RgtCw0LrRgtCwISAo0J3QsNC/0YDQuNC80LXRgDogMjQvNyDQuNC70LggOTowMC0xNTowMCDQuNC70Lgg0LIg0LvRjtCx0L7QtSDQstGA0LXQvNGPKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgVGltZU9mV29yazoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPkVudGVyIHdvcmtpbmcgaG91cnMhIChGb3IgZXhhbXBsZTogOTowMC0xODowMCk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5Jc2ggdmFxdGluaSBraXJpdGluZyEoTWFzYWxhbjogOTowMC0xODowMCk8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDRgNCw0LHQvtGH0LXQtSDQstGA0LXQvNGPISjQndCw0L/RgNC40LzQtdGAOiA5OjAwLTE4OjAwKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgR29hbDoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSB3cml0ZSBhIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHlvdXIgcHVycG9zZSE8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCBtYXFzYWRpbmdpeiBoYXFpZGEgcWlzcWFjaGEgeW96aW5nITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQvdCw0L/QuNGI0LjRgtC1INC60YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LUg0LLQsNGI0LXQuSDRhtC10LvQuCE8L2I+YFxyXG4gICAgfSxcclxuICAgIENoZWNrQW5kU2VuZFZhY2FuY3k6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5QbGVhc2UgY2hlY2sgYW5kIGNvbmZpcm0geW91ciB2YWNhbmN5ITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hcmhhbWF0IHZha2Fuc2l5YW5naXpuaSB0ZWtzaGlyaWIgY2hpcWluZyB2YSB0YXNkaXFsYW5nITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9GA0L7QstC10YDRjNGC0LUg0Lgg0L/QvtC00YLQstC10YDQtNC40YLQtSDRgdCy0L7RjiDQstCw0LrQsNC90YHQuNGOITwvYj5gXHJcbiAgICB9LFxyXG4gICAgU2VuZFRvQWRtaW46IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5UaGUgaW5mb3JtYXRpb24gaGFzIGJlZW4gc2VudCB0byB0aGUgYWRtaW4gYW5kIHdpbGwgYmUgcG9zdGVkIG9uIHRoZSBjaGFubmVsIGFmdGVyIGNvbmZpcm1hdGlvbiE8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYWx1bW90bGFyIGFkbWluZ2EgeXVib3JpbGRpIHRhc2RpcWxhbmdhbmRhbiBzbyduZyBrYW5hbGdhIGpveWxhbmFkaSE8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QmNC90YTQvtGA0LzQsNGG0LjRjyDQvtGC0L/RgNCw0LLQu9C10L3QsCDigIvigIvQsNC00LzQuNC90YMg0Lgg0LHRg9C00LXRgiDRgNCw0LfQvNC10YnQtdC90LAg0L3QsCDQutCw0L3QsNC70LUg0L/QvtGB0LvQtSDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyE8L2I+YFxyXG4gICAgfSxcclxuICAgIENhbmNlbGVkOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+VmFjYW5jeSBjYW5jZWxlZCE8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5WYWthbnNpeWEgYmVrb3IgcWlsaW5kaSE8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCw0LrQsNC90YHQuNGPINC+0YLQvNC10L3QtdC90LAhPC9iPmBcclxuICAgIH0sXHJcbiAgICBQb3N0ZWRCeUFkbWluOiB7XHJcbiAgICAgICAgXCJlblwiOiBgWW91ciB2YWNhbmN5IGhhcyBiZWVuIHBvc3RlZCBvbiB0aGUgY2hhbm5lbCFcXG5DbGljayB0aGUgPGI+TGluazwvYj4gYmVsb3cgdG8gdmlldyFgLFxyXG4gICAgICAgIFwidXpcIjogYFZha2Fuc2l5YW5naXoga2FuYWxnYSBqb3lsYW5kaSFcXG5LbydyaXNoIHVjaHVuIHF1eWlkYWdpIDxiPkxpbms8L2I+bmkgYm9zaW5nIWAsXHJcbiAgICAgICAgXCJydVwiOiBg0JLQsNGI0LAg0LLQsNC60LDQvdGB0LjRjyDQvtC/0YPQsdC70LjQutC+0LLQsNC90LAg0L3QsCDQutCw0L3QsNC70LUhXFxu0J3QsNC20LzQuNGC0LUgPGI+0KHRgdGL0LvQutGDPC9iPiDQvdC40LbQtSwg0YfRgtC+0LHRiyDQv9GA0L7RgdC80L7RgtGA0LXRgtGMIWBcclxuICAgIH0sXHJcbiAgICBPZmZpY2VOYW1lOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgb2ZmaWNlIG5hbWU8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCBpZG9yYSBub21pbmkga2lyaXRpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQstCw0YjQtdCz0L4g0L7RhNC40YHQsDwvYj5gXHJcbiAgICB9LFxyXG4gICAgUmVzcG9uc2libGU6IHtcclxuICAgICAgICBcImVuXCI6IGA8Yj5FbnRlciB0aGUgbmFtZSBvZiB0aGUgcmVzcG9uc2libGUgcGVyc29uITwvYj5gLFxyXG4gICAgICAgIFwidXpcIjogYDxiPk1hc3VsIHNoYXhzbmkgaXNtaW5pIGtpcml0aW5nITwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCS0LLQtdC00LjRgtC1INC40LzRjyDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90L7Qs9C+INC70LjRhtCwITwvYj5gXHJcbiAgICB9LFxyXG4gICAgRGlyZWN0aW9uOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+RW50ZXIgeW91ciBkZXN0aW5hdGlvbiEgKEZvciBleGFtcGxlOiBCdXhnYWx0ZXIpPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgeW8nbmFsaXNoaW5naXpuaSBraXJpdGluZyEgKE1hc2FsYW46IEJ1eGdhbHRlcik8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7QktCy0LXQtNC40YLQtSDQv9GD0L3QutGCINC90LDQt9C90LDRh9C10L3QuNGPISAo0J3QsNC/0YDQuNC80LXRgDog0JHRg9GF0LPQsNC70YLQtdGAKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgTGlua1F1ZXN0aW9uOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+Q2FuIHlvdSBwb3N0IGEgbGluayB0byBhcHBseT88L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5Bcml6YSBxb2xkaXJpc2ggdWNodW4gbGluayBxb2xkaXJhc2l6bWk/PC9iPmAsXHJcbiAgICAgICAgXCJydVwiOiBgPGI+0JzQvtC20LXRgtC1INGB0LrQuNC90YPRgtGMINGB0YHRi9C70LrRgyDQtNC70Y8g0L/QvtC00LDRh9C4INC30LDRj9Cy0LrQuD88L2I+YFxyXG4gICAgfSxcclxuICAgIEVudGVyTGluazoge1xyXG4gICAgICAgIFwiZW5cIjogYDxiPlBsZWFzZSBlbnRlciB0aGUgbGluayB0byBzdWJtaXQgYW4gYXBwbGljYXRpb24hKEZvciBleGFtcGxlOiBodHRwczovL3d3dy5nb29nbGUuY29tIG9yIGh0dHBzOi8vdC5tZS90ZWxlZ3JhbS11c2VybmFtZSk8L2I+YCxcclxuICAgICAgICBcInV6XCI6IGA8Yj5NYXJoYW1hdCBhcml6YSBxb2xkaXJpc2ggdWNodW4gbGlua25pIGtpcml0aW5nIShNYXNhbGFuOiBodHRwczovL3d3dy5nb29nbGUuY29tIHlva2kgaHR0cHM6Ly90Lm1lL3RlbGVncmFtLXVzZXJuYW1lKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgdGB0YvQu9C60YMsINGH0YLQvtCx0Ysg0L7RgtC/0YDQsNCy0LjRgtGMINC30LDRj9Cy0LrRgyEo0J3QsNC/0YDQuNC80LXRgDogaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbSDQuNC70LggaHR0cHM6Ly90Lm1lL3RlbGVncmFtLXVzZXJuYW1lKTwvYj5gXHJcbiAgICB9LFxyXG4gICAgRklPOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgZnVsbG5hbWVcXG4oRXhhbXBsZSA6IEVzaG1hdG92IFRhc2htYXRqb24pPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgdG8nbGlxIGtpcml0aW5nXFxuKE1hc2FsYW4gOiBFc2htYXRvdiBUb3NobWF0am9uKTwvYj5gLFxyXG4gICAgICAgIFwicnVcIjogYDxiPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgdCy0L7QuSDQpC7QmC7QnlxcbijQndCw0L/RgNC40LzQtdGAIDog0K3RiNC80LDRgtC+0LIg0KLQsNGI0LzQsNGC0LbQvtC9KTwvYj5gXHJcbiAgICB9LFxyXG4gICAgQUdFOiB7XHJcbiAgICAgICAgXCJlblwiOiBgPGI+UGxlYXNlIGVudGVyIHlvdXIgYWdlPC9iPmAsXHJcbiAgICAgICAgXCJ1elwiOiBgPGI+TWFyaGFtYXQgeW9zaGluZ2l6bmkga2lyaXRpbmc8L2I+YCxcclxuICAgICAgICBcInJ1XCI6IGA8Yj7Qn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YHQstC+0Lkg0LLQvtC30YDQsNGB0YI8L2I+YFxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25zID0ge1xyXG4gICAgTWFpbjoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIvCflIRcIjogXCLwn5SEIENoYW5nZSBsYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcIvCfk4lcIjogXCLwn5OJIEpvYiB1cGxvYWRcIixcclxuICAgICAgICAgICAgXCLwn5OdXCI6IFwi8J+TnSBUZXJtcyBvZiB1c2VcIixcclxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyBNeSB2YWNhbmNpZXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIvCflIRcIjogXCLwn5SEIFRpbG5pIG8nemdhcnRpcmlzaFwiLFxyXG4gICAgICAgICAgICBcIvCfk4lcIjogXCLwn5OJIFZha2Fuc2l5YSBqb3lsYXNoXCIsXHJcbiAgICAgICAgICAgIFwi8J+TnVwiOiBcIvCfk50gQm90IHFhbmRheSBpc2hsYXlkaT9cIixcclxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyBWYWthbnNpeWFsYXJpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+UhFwiOiBcIvCflIQg0JLRi9Cx0LXRgNC40YLQtSBcIixcclxuICAgICAgICAgICAgXCLwn5OJXCI6IFwi8J+TiSDQl9Cw0LPRgNGD0LfQutCwINCy0LDQutCw0L3RgdC40LlcIixcclxuICAgICAgICAgICAgXCLwn5OdXCI6IFwi8J+TnSDQo9GB0LvQvtCy0LjRjyDRjdC60YHQv9C70YPQsNGC0LDRhtC40LhcIixcclxuICAgICAgICAgICAgXCLwn5ODXCI6IFwi8J+TgyDQnNC+0Lgg0LLQsNC60LDQvdGB0LjQuFwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBDaG9vc2VWYWNhbnN5OiB7XHJcbiAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+RqOKAjfCfkrtcIjogXCLwn5Go4oCN8J+SuyBGaW5kIEhSXCIsXHJcbiAgICAgICAgICAgIFwi8J+PolwiOiBcIvCfj6IgSm9iIHNlYXJjaFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1elwiOiB7XHJcbiAgICAgICAgICAgIFwi8J+RqOKAjfCfkrtcIjogXCLwn5Go4oCN8J+SuyBIb2RpbSBrZXJha1wiLFxyXG4gICAgICAgICAgICBcIvCfj6JcIjogXCLwn4+iIElzaCBqb3lpIGtlcmFrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgXCLwn5Go4oCN8J+Su1wiOiBcIvCfkajigI3wn5K7INCY0YnRgyDRgdC+0YLRgNGD0LTQvdC40LrQsFwiLFxyXG4gICAgICAgICAgICBcIvCfj6JcIjogXCLwn4+iINCf0L7QuNGB0Log0YDQsNCx0L7RgtGLXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIEdvYmFjazoge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBCYWNrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXpcIjoge1xyXG4gICAgICAgICAgICBcIuKshe+4j1wiOiBcIuKshe+4jyBPcnFhZ2FcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIFwi4qyF77iPXCI6IFwi4qyF77iPINCd0LDQt9Cw0LRcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59Il19