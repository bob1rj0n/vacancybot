"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVacansyForChannel = exports.getVacancy = exports.generateHashtag = exports.TelegrafApi = exports.traslate = exports.ToUpperCase = exports.addTextOnImage = void 0;
const tslib_1 = require("tslib");
const vacancy_model_1 = require("../db/model/vacancy.model");
const telegraph_node_1 = tslib_1.__importDefault(require("telegraph-node"));
const sharp_1 = tslib_1.__importDefault(require("sharp"));
const translate_1 = tslib_1.__importDefault(require("translate"));
const ph = new telegraph_node_1.default();
///kerakli 
async function addTextOnImage(data) {
    try {
        const width = 2500;
        const height = 1700;
        const direction = `${data.direction}`;
        const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
            .direction {
                width: 100vw;
                text-align:center;
                fill: black;
                font-size: 400px;
                font-weight: 900;
                font-family: Montserrat Medium;
            }
        </style>
        <text x="13%" y="60%" class="direction">${direction}</text>
    </svg>
          `;
        const svgBuffer = Buffer.from(svgImage);
        const date = (new Date()).valueOf();
        const name = `./uploads/images/file-${date}.png`;
        const image = await (0, sharp_1.default)(`./uploads/picutre.png`)
            .resize(width, height)
            .composite([
            {
                input: svgBuffer,
                top: 0,
                left: 0,
            },
        ])
            .toFile(`${name}`);
        console.log("image : ", image);
        return name;
    }
    catch (error) {
        console.log(error);
    }
}
exports.addTextOnImage = addTextOnImage;
async function ToUpperCase(string) {
    let st = string.charAt(0).toUpperCase() + string.slice(1);
    return st.toString();
}
exports.ToUpperCase = ToUpperCase;
async function traslate(text, lang) {
    translate_1.default.engine = "google";
    let translates = await (0, translate_1.default)(text, `${lang}`);
    return translates;
}
exports.traslate = traslate;
/////////////my functions
async function TelegrafApi(short_name, author_name, userId) {
    const vacancy = await vacancy_model_1.VacancyModel.findOne({ userId: userId });
    const content = [
        { tag: "b", children: ["Xodim: "] }, { tag: "p", children: [`${vacancy.name}`] },
        { tag: "br" },
        { tag: "b", children: ["Yosh: "] }, { tag: "p", children: [`${vacancy.age}`] },
        { tag: "br" },
        { tag: "b", children: ["Texnologiya: "] }, { tag: "p", children: [`${vacancy.technology}`] },
        { tag: "br" },
        { tag: "b", children: ["Aloqa: "] }, { tag: "p", children: [`${vacancy.phone}`] },
        { tag: "br" },
        { tag: "b", children: ["Hudud: "] }, { tag: "p", children: [`${vacancy.place}`] },
        { tag: "br" },
        { tag: "b", children: [`Maosh: `] }, { tag: "p", children: [`${vacancy.minSum} - ${vacancy.maxSum}`] },
        { tag: "br" },
        { tag: "b", children: ["Kasbi: "] }, { tag: "p", children: [`${vacancy.profession}`] },
        { tag: "br" },
        { tag: "b", children: ["Murojaat qilish vaqti: "] }, { tag: "p", children: [`${vacancy.timeToCall}`] },
        { tag: "br" },
        { tag: "b", children: ["Maqsad: "] }, { tag: "p", children: [`${vacancy.goal}`] },
        { tag: "br" },
        // { tag: "b", children: [`Minimum: `] },
        // { tag: "b", children: ["Maximum: "] },
        // { tag: "p", children: [`${vacancy.maxSalary} ${vacancy.salarySymbol}`] },
        // { tag: "br" },
        // { tag: "h3", children: ["Aloqa: "] },
        // { tag: "ul", children: [{ tag: "b", children: [`${vacancy.contact.phoneNumber}`] }] },
        // { tag: "ul", children: [{ tag: "b", children: [`${vacancy.contact.userName}`] }] },
        // { tag: "ul", children: [{ tag: "b", children: [`${vacancy.contact.gmail}`] }] },
        // { tag: "ul", children: [{ tag: "b", children: [`${vacancy.contact.link}`] }] },
        // { tag: "br" },
        // { tag: "i", children: ["Javobda ushbu bo'sh ish joyini Click Jobs dan topganingizni ayting."] },
        { tag: "br" },
        { tag: "b", children: ["➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖"] },
    ];
    const token = await ph.createAccount('hi', { short_name: short_name, author_name: author_name });
    const URL = await ph.createPage(token.access_token, vacancy.name, content, { return_content: true });
    return URL.url;
}
exports.TelegrafApi = TelegrafApi;
async function generateHashtag(str) {
    str = str.replace(/\s+/g, ' ')
        .replace(/[\'\".,\/#!$%\\^&\*;:{}=\-_`~()\[\]|+@?<>]/g, '')
        .replace(/\s{2,}/g, ' ');
    if (str === '') {
        return '';
    }
    else {
        let capEachWord = (str) => str
            .trim()
            .split(' ')
            .map(word => word.toLowerCase(0))
            .join(' #');
        let HashtagIt = (str) => '#' + str;
        return HashtagIt(capEachWord(str));
    }
}
exports.generateHashtag = generateHashtag;
async function getVacancy(data) {
    let msg;
    if (data.vacancyType == "findWork") {
        msg = (`
Ish joyi kerak:

👨‍💼 Xodim: ${data.name}
🕑 Yosh: ${data.age}
👨‍💻 <b>Yo'nalish: ${data.direction}</b>
📚 Texnologiya: ${data.technology}
📱 Aloqa: ${data.phone}
📍 Hudud: ${data.place}
💸 Maosh: ${data.price}
👤 Kasbi: ${data.profession}
🕰 Murojaat qilish vaqti: ${data.timeToCall}
🔎 Maqsad: ${data.goal}

${data.hashtegs}

© @bekobod_jobs_bot
`);
    }
    if (data.vacancyType == "findHr" && data.link !== null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${data.officeName}
👨‍💻 <b>Yo'nalish: ${data.direction}</b>
📚 Texnologiya: ${data.technology_2}
📍 Hudud: ${data.place_2}
👤 Mas'ul: ${data.responsible}
🕰 Murojaat vaqti: ${data.timeToCall_2}
⏰ Ish vaqti: ${data.timeOfWork}
💸 Maosh: ${data.price_2}
📥 Ariza qoldirish: <a href="${data.link}">Link</a>
📝 Batafsil: ${data.addition}

${data.hashtegs}

© @bekobod_jobs_bot
        `);
    }
    if (data.vacancyType == "findHr" && data.link === null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${data.officeName}
👨‍💻 <b>Yo'nalish: ${data.direction}</b>
📚 Texnologiya: ${data.technology_2}
📍 Hudud: ${data.place_2}
👤 Mas'ul: ${data.responsible}
🕰 Murojaat vaqti: ${data.timeToCall_2}
⏰ Ish vaqti: ${data.timeOfWork}
💸 Maosh: ${data.price_2}
📝 Batafsil: ${data.addition}

${data.hashtegs}

© @bekobod_jobs_bot
        `);
    }
    return msg;
}
exports.getVacancy = getVacancy;
async function getVacansyForChannel(Msg) {
    let msg;
    if (Msg.vacancyType == "findWork") {
        msg = (`
Ish joyi kerak:

👨‍💼 Xodim: ${Msg.name}
🕑 Yosh: ${Msg.age}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
📱 Aloqa: ${Msg.phone}
📍 Hudud: ${Msg.place}
💸 Maosh: ${Msg.price}
👤 Kasbi: ${Msg.profession}
🕰 Murojaat qilish vaqti: ${Msg.timeToCall}
🔎 Maqsad: ${Msg.goal}

${Msg.hashtegs}

© @bekobod_jobs_bot
`);
    }
    if (Msg.vacancyType == "findHr" && Msg.link !== null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${Msg.officeName}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
📍 Hudud: ${Msg.place}
👤 Mas'ul: ${Msg.responsible}
🕰 Murojaat vaqti: ${Msg.timeToCall}
⏰ Ish vaqti: ${Msg.timeOfWork}
💸 Maosh: ${Msg.price}
📥 Ariza qoldirish: <a href="${Msg.link}">Link</a>
📝 Batafsil: ${Msg.addition}

${Msg.hashtegs}

© @bekobod_jobs_bot
        `);
    }
    if (Msg.vacancyType == "findHr" && Msg.link === null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${Msg.officeName}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
📍 Hudud: ${Msg.place}
👤 Mas'ul: ${Msg.responsible}
🕰 Murojaat vaqti: ${Msg.timeToCall}
⏰ Ish vaqti: ${Msg.timeOfWork}
💸 Maosh: ${Msg.price}
📝 Batafsil: ${Msg.addition}

${Msg.hashtegs}

© @bekobod_jobs_bot
        `);
    }
    return msg;
}
exports.getVacansyForChannel = getVacansyForChannel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkRBQXlEO0FBQ3pELDRFQUF1QztBQUN2QywwREFBMEI7QUFDMUIsa0VBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFBO0FBRTFCLFdBQVc7QUFDSixLQUFLLFVBQVUsY0FBYyxDQUFDLElBQUk7SUFDckMsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsTUFBTSxRQUFRLEdBQUc7a0JBQ1AsS0FBSyxhQUFhLE1BQU07Ozs7Ozs7Ozs7O2tEQVdRLFNBQVM7O1dBRWhELENBQUM7UUFDSixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixJQUFJLE1BQU0sQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsZUFBSyxFQUFDLHVCQUF1QixDQUFDO2FBQzdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLFNBQVMsQ0FBQztZQUNQO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUF2Q0Qsd0NBdUNDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN4QixDQUFDO0FBSEQsa0NBR0M7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ3JDLG1CQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFKRCw0QkFJQztBQUVELHlCQUF5QjtBQUNsQixLQUFLLFVBQVUsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBYztJQUVyRSxNQUFNLE9BQU8sR0FBRyxNQUFNLDRCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFL0QsTUFBTSxPQUFPLEdBQUc7UUFDWixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUM1RixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ3RHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FB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LEdBQUcsQ0FBQyxRQUFROztFQUV6QixHQUFHLENBQUMsUUFBUTs7O1NBR0wsQ0FBQyxDQUFBO0tBQ0w7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUEvREQsb0RBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFjYW5jeU1vZGVsIH0gZnJvbSBcIi4uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcbmltcG9ydCBUZWxlZ3JhcGggZnJvbSBcInRlbGVncmFwaC1ub2RlXCI7XG5pbXBvcnQgc2hhcnAgZnJvbSBcInNoYXJwXCI7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gXCJ0cmFuc2xhdGVcIjtcblxuY29uc3QgcGggPSBuZXcgVGVsZWdyYXBoKClcblxuLy8va2VyYWtsaSBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUZXh0T25JbWFnZShkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAyNTAwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxNzAwO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBgJHtkYXRhLmRpcmVjdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHN2Z0ltYWdlID0gYFxuICAgIDxzdmcgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgLmRpcmVjdGlvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCBNZWRpdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDx0ZXh0IHg9XCIxMyVcIiB5PVwiNjAlXCIgY2xhc3M9XCJkaXJlY3Rpb25cIj4ke2RpcmVjdGlvbn08L3RleHQ+XG4gICAgPC9zdmc+XG4gICAgICAgICAgYDtcbiAgICAgICAgY29uc3Qgc3ZnQnVmZmVyID0gQnVmZmVyLmZyb20oc3ZnSW1hZ2UpO1xuICAgICAgICBjb25zdCBkYXRlID0gKG5ldyBEYXRlKCkpLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGAuL3VwbG9hZHMvaW1hZ2VzL2ZpbGUtJHtkYXRlfS5wbmdgO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHNoYXJwKGAuL3VwbG9hZHMvcGljdXRyZS5wbmdgKVxuICAgICAgICAgICAgLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgLmNvbXBvc2l0ZShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogc3ZnQnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAudG9GaWxlKGAke25hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgOiBcIiwgaW1hZ2UpO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVG9VcHBlckNhc2Uoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgc3QgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcbiAgICByZXR1cm4gc3QudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhc2xhdGUodGV4dCwgbGFuZykge1xuICAgIHRyYW5zbGF0ZS5lbmdpbmUgPSBcImdvb2dsZVwiO1xuICAgIGxldCB0cmFuc2xhdGVzID0gYXdhaXQgdHJhbnNsYXRlKHRleHQsIGAke2xhbmd9YClcbiAgICByZXR1cm4gdHJhbnNsYXRlcztcbn1cblxuLy8vLy8vLy8vLy8vL215IGZ1bmN0aW9uc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRlbGVncmFmQXBpKHNob3J0X25hbWUsIGF1dGhvcl9uYW1lLCB1c2VySWQ6IG51bWJlcikge1xuXG4gICAgY29uc3QgdmFjYW5jeSA9IGF3YWl0IFZhY2FuY3lNb2RlbC5maW5kT25lKHsgdXNlcklkOiB1c2VySWQgfSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJYb2RpbTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5Lm5hbWV9YF0gfSxcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJZb3NoOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuYWdlfWBdIH0sXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiVGV4bm9sb2dpeWE6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS50ZWNobm9sb2d5fWBdIH0sXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiQWxvcWE6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5waG9uZX1gXSB9LFxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIkh1ZHVkOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kucGxhY2V9YF0gfSxcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYE1hb3NoOiBgXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5taW5TdW19IC0gJHt2YWNhbmN5Lm1heFN1bX1gXSB9LFxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIkthc2JpOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kucHJvZmVzc2lvbn1gXSB9LFxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIk11cm9qYWF0IHFpbGlzaCB2YXF0aTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnRpbWVUb0NhbGx9YF0gfSxcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJNYXFzYWQ6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5nb2FsfWBdIH0sXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcbiAgICAgICAgLy8geyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW2BNaW5pbXVtOiBgXSB9LFxuICAgICAgICAvLyB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJNYXhpbXVtOiBcIl0gfSxcbiAgICAgICAgLy8geyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubWF4U2FsYXJ5fSAke3ZhY2FuY3kuc2FsYXJ5U3ltYm9sfWBdIH0sXG4gICAgICAgIC8vIHsgdGFnOiBcImJyXCIgfSxcbiAgICAgICAgLy8geyB0YWc6IFwiaDNcIiwgY2hpbGRyZW46IFtcIkFsb3FhOiBcIl0gfSxcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LnBob25lTnVtYmVyfWBdIH1dIH0sXG4gICAgICAgIC8vIHsgdGFnOiBcInVsXCIsIGNoaWxkcmVuOiBbeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuY29udGFjdC51c2VyTmFtZX1gXSB9XSB9LFxuICAgICAgICAvLyB7IHRhZzogXCJ1bFwiLCBjaGlsZHJlbjogW3sgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LmNvbnRhY3QuZ21haWx9YF0gfV0gfSxcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0Lmxpbmt9YF0gfV0gfSxcbiAgICAgICAgLy8geyB0YWc6IFwiYnJcIiB9LFxuICAgICAgICAvLyB7IHRhZzogXCJpXCIsIGNoaWxkcmVuOiBbXCJKYXZvYmRhIHVzaGJ1IGJvJ3NoIGlzaCBqb3lpbmkgQ2xpY2sgSm9icyBkYW4gdG9wZ2FuaW5naXpuaSBheXRpbmcuXCJdIH0sXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wi4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WXCJdIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgcGguY3JlYXRlQWNjb3VudCgnaGknLCB7IHNob3J0X25hbWU6IHNob3J0X25hbWUsIGF1dGhvcl9uYW1lOiBhdXRob3JfbmFtZSB9KVxuXG4gICAgY29uc3QgVVJMID0gYXdhaXQgcGguY3JlYXRlUGFnZSh0b2tlbi5hY2Nlc3NfdG9rZW4sIHZhY2FuY3kubmFtZSwgY29udGVudCwgeyByZXR1cm5fY29udGVudDogdHJ1ZSB9KVxuXG4gICAgcmV0dXJuIFVSTC51cmxcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVIYXNodGFnKHN0cikge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoL1tcXCdcXFwiLixcXC8jISQlXFxcXF4mXFwqOzp7fT1cXC1fYH4oKVxcW1xcXXwrQD88Pl0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG4gICAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjYXBFYWNoV29yZCA9IChzdHIpID0+IHN0clxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkLnRvTG93ZXJDYXNlKDApKVxuICAgICAgICAgICAgLmpvaW4oJyAjJylcblxuICAgICAgICBsZXQgSGFzaHRhZ0l0ID0gKHN0cikgPT4gJyMnICsgc3RyO1xuXG4gICAgICAgIHJldHVybiBIYXNodGFnSXQoY2FwRWFjaFdvcmQoc3RyKSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmFjYW5jeShkYXRhKSB7XG5cbiAgICBsZXQgbXNnO1xuICAgIGlmIChkYXRhLnZhY2FuY3lUeXBlID09IFwiZmluZFdvcmtcIikge1xuICAgICAgICBtc2cgPSAoYFxuSXNoIGpveWkga2VyYWs6XG5cbvCfkajigI3wn5K8IFhvZGltOiAke2RhdGEubmFtZX1cbvCflZEgWW9zaDogJHtkYXRhLmFnZX1cbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtkYXRhLmRpcmVjdGlvbn08L2I+XG7wn5OaIFRleG5vbG9naXlhOiAke2RhdGEudGVjaG5vbG9neX1cbvCfk7EgQWxvcWE6ICR7ZGF0YS5waG9uZX1cbvCfk40gSHVkdWQ6ICR7ZGF0YS5wbGFjZX1cbvCfkrggTWFvc2g6ICR7ZGF0YS5wcmljZX1cbvCfkaQgS2FzYmk6ICR7ZGF0YS5wcm9mZXNzaW9ufVxu8J+VsCBNdXJvamFhdCBxaWxpc2ggdmFxdGk6ICR7ZGF0YS50aW1lVG9DYWxsfVxu8J+UjiBNYXFzYWQ6ICR7ZGF0YS5nb2FsfVxuXG4ke2RhdGEuaGFzaHRlZ3N9XG5cbsKpIEBiZWtvYm9kX2pvYnNfYm90XG5gKVxuICAgIH1cbiAgICBpZiAoZGF0YS52YWNhbmN5VHlwZSA9PSBcImZpbmRIclwiICYmIGRhdGEubGluayAhPT0gbnVsbCkge1xuICAgICAgICBtc2cgPSAoYFxuWG9kaW0ga2VyYWs6XG5cbvCfj6IgSWRvcmE6ICR7ZGF0YS5vZmZpY2VOYW1lfVxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke2RhdGEuZGlyZWN0aW9ufTwvYj5cbvCfk5ogVGV4bm9sb2dpeWE6ICR7ZGF0YS50ZWNobm9sb2d5XzJ9XG7wn5ONIEh1ZHVkOiAke2RhdGEucGxhY2VfMn1cbvCfkaQgTWFzJ3VsOiAke2RhdGEucmVzcG9uc2libGV9XG7wn5WwIE11cm9qYWF0IHZhcXRpOiAke2RhdGEudGltZVRvQ2FsbF8yfVxu4o+wIElzaCB2YXF0aTogJHtkYXRhLnRpbWVPZldvcmt9XG7wn5K4IE1hb3NoOiAke2RhdGEucHJpY2VfMn1cbvCfk6UgQXJpemEgcW9sZGlyaXNoOiA8YSBocmVmPVwiJHtkYXRhLmxpbmt9XCI+TGluazwvYT5cbvCfk50gQmF0YWZzaWw6ICR7ZGF0YS5hZGRpdGlvbn1cblxuJHtkYXRhLmhhc2h0ZWdzfVxuXG7CqSBAYmVrb2JvZF9qb2JzX2JvdFxuICAgICAgICBgKVxuICAgIH1cbiAgICBpZiAoZGF0YS52YWNhbmN5VHlwZSA9PSBcImZpbmRIclwiICYmIGRhdGEubGluayA9PT0gbnVsbCkge1xuICAgICAgICBtc2cgPSAoYFxuWG9kaW0ga2VyYWs6XG5cbvCfj6IgSWRvcmE6ICR7ZGF0YS5vZmZpY2VOYW1lfVxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke2RhdGEuZGlyZWN0aW9ufTwvYj5cbvCfk5ogVGV4bm9sb2dpeWE6ICR7ZGF0YS50ZWNobm9sb2d5XzJ9XG7wn5ONIEh1ZHVkOiAke2RhdGEucGxhY2VfMn1cbvCfkaQgTWFzJ3VsOiAke2RhdGEucmVzcG9uc2libGV9XG7wn5WwIE11cm9qYWF0IHZhcXRpOiAke2RhdGEudGltZVRvQ2FsbF8yfVxu4o+wIElzaCB2YXF0aTogJHtkYXRhLnRpbWVPZldvcmt9XG7wn5K4IE1hb3NoOiAke2RhdGEucHJpY2VfMn1cbvCfk50gQmF0YWZzaWw6ICR7ZGF0YS5hZGRpdGlvbn1cblxuJHtkYXRhLmhhc2h0ZWdzfVxuXG7CqSBAYmVrb2JvZF9qb2JzX2JvdFxuICAgICAgICBgKVxuICAgIH1cblxuICAgIHJldHVybiBtc2c7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWYWNhbnN5Rm9yQ2hhbm5lbChNc2cpIHtcbiAgICBsZXQgbXNnO1xuICAgIGlmIChNc2cudmFjYW5jeVR5cGUgPT0gXCJmaW5kV29ya1wiKSB7XG4gICAgICAgIG1zZyA9IChgXG5Jc2ggam95aSBrZXJhazpcblxu8J+RqOKAjfCfkrwgWG9kaW06ICR7TXNnLm5hbWV9XG7wn5WRIFlvc2g6ICR7TXNnLmFnZX1cbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtNc2cuZGlyZWN0aW9ufTwvYj5cbvCfk5ogVGV4bm9sb2dpeWE6ICR7TXNnLnRlY2hub2xvZ3l9XG7wn5OxIEFsb3FhOiAke01zZy5waG9uZX1cbvCfk40gSHVkdWQ6ICR7TXNnLnBsYWNlfVxu8J+SuCBNYW9zaDogJHtNc2cucHJpY2V9XG7wn5GkIEthc2JpOiAke01zZy5wcm9mZXNzaW9ufVxu8J+VsCBNdXJvamFhdCBxaWxpc2ggdmFxdGk6ICR7TXNnLnRpbWVUb0NhbGx9XG7wn5SOIE1hcXNhZDogJHtNc2cuZ29hbH1cblxuJHtNc2cuaGFzaHRlZ3N9XG5cbsKpIEBiZWtvYm9kX2pvYnNfYm90XG5gKVxuICAgIH1cbiAgICBpZiAoTXNnLnZhY2FuY3lUeXBlID09IFwiZmluZEhyXCIgJiYgTXNnLmxpbmsgIT09IG51bGwpIHtcbiAgICAgICAgbXNnID0gKGBcblhvZGltIGtlcmFrOlxuXG7wn4+iIElkb3JhOiAke01zZy5vZmZpY2VOYW1lfVxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke01zZy5kaXJlY3Rpb259PC9iPlxu8J+TmiBUZXhub2xvZ2l5YTogJHtNc2cudGVjaG5vbG9neX1cbvCfk40gSHVkdWQ6ICR7TXNnLnBsYWNlfVxu8J+RpCBNYXMndWw6ICR7TXNnLnJlc3BvbnNpYmxlfVxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cbuKPsCBJc2ggdmFxdGk6ICR7TXNnLnRpbWVPZldvcmt9XG7wn5K4IE1hb3NoOiAke01zZy5wcmljZX1cbvCfk6UgQXJpemEgcW9sZGlyaXNoOiA8YSBocmVmPVwiJHtNc2cubGlua31cIj5MaW5rPC9hPlxu8J+TnSBCYXRhZnNpbDogJHtNc2cuYWRkaXRpb259XG5cbiR7TXNnLmhhc2h0ZWdzfVxuXG7CqSBAYmVrb2JvZF9qb2JzX2JvdFxuICAgICAgICBgKVxuICAgIH1cbiAgICBpZiAoTXNnLnZhY2FuY3lUeXBlID09IFwiZmluZEhyXCIgJiYgTXNnLmxpbmsgPT09IG51bGwpIHtcbiAgICAgICAgbXNnID0gKGBcblhvZGltIGtlcmFrOlxuXG7wn4+iIElkb3JhOiAke01zZy5vZmZpY2VOYW1lfVxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke01zZy5kaXJlY3Rpb259PC9iPlxu8J+TmiBUZXhub2xvZ2l5YTogJHtNc2cudGVjaG5vbG9neX1cbvCfk40gSHVkdWQ6ICR7TXNnLnBsYWNlfVxu8J+RpCBNYXMndWw6ICR7TXNnLnJlc3BvbnNpYmxlfVxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cbuKPsCBJc2ggdmFxdGk6ICR7TXNnLnRpbWVPZldvcmt9XG7wn5K4IE1hb3NoOiAke01zZy5wcmljZX1cbvCfk50gQmF0YWZzaWw6ICR7TXNnLmFkZGl0aW9ufVxuXG4ke01zZy5oYXNodGVnc31cblxuwqkgQGJla29ib2Rfam9ic19ib3RcbiAgICAgICAgYClcbiAgICB9XG5cbiAgICByZXR1cm4gbXNnO1xufSJdfQ==