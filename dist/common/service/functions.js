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

${Msg.hashtegs}

© @bekobod_jobs_bot
        `);
    }
    return msg;
}
exports.getVacansyForChannel = getVacansyForChannel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkRBQXlEO0FBQ3pELDRFQUF1QztBQUN2QywwREFBMEI7QUFDMUIsa0VBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFBO0FBRTFCLFdBQVc7QUFDSixLQUFLLFVBQVUsY0FBYyxDQUFDLElBQUk7SUFDckMsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsTUFBTSxRQUFRLEdBQUc7a0JBQ1AsS0FBSyxhQUFhLE1BQU07Ozs7Ozs7Ozs7O2tEQVdRLFNBQVM7O1dBRWhELENBQUM7UUFDSixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixJQUFJLE1BQU0sQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsZUFBSyxFQUFDLHVCQUF1QixDQUFDO2FBQzdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLFNBQVMsQ0FBQztZQUNQO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUF2Q0Qsd0NBdUNDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN4QixDQUFDO0FBSEQsa0NBR0M7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ3JDLG1CQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFKRCw0QkFJQztBQUVELHlCQUF5QjtBQUNsQixLQUFLLFVBQVUsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBYztJQUVyRSxNQUFNLE9BQU8sR0FBRyxNQUFNLDRCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFL0QsTUFBTSxPQUFPLEdBQUc7UUFDWixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUM1RixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ3RHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FB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Q2YsQ0FBQztBQTdERCxvREE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbFwiO1xyXG5pbXBvcnQgVGVsZWdyYXBoIGZyb20gXCJ0ZWxlZ3JhcGgtbm9kZVwiO1xyXG5pbXBvcnQgc2hhcnAgZnJvbSBcInNoYXJwXCI7XHJcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSBcInRyYW5zbGF0ZVwiO1xyXG5cclxuY29uc3QgcGggPSBuZXcgVGVsZWdyYXBoKClcclxuXHJcbi8vL2tlcmFrbGkgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUZXh0T25JbWFnZShkYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMjUwMDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSAxNzAwO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGAke2RhdGEuZGlyZWN0aW9ufWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0ltYWdlID0gYFxyXG4gICAgPHN2ZyB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCI+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgLmRpcmVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCBNZWRpdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDx0ZXh0IHg9XCIxMyVcIiB5PVwiNjAlXCIgY2xhc3M9XCJkaXJlY3Rpb25cIj4ke2RpcmVjdGlvbn08L3RleHQ+XHJcbiAgICA8L3N2Zz5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgY29uc3Qgc3ZnQnVmZmVyID0gQnVmZmVyLmZyb20oc3ZnSW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgLi91cGxvYWRzL2ltYWdlcy9maWxlLSR7ZGF0ZX0ucG5nYDtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHNoYXJwKGAuL3VwbG9hZHMvcGljdXRyZS5wbmdgKVxyXG4gICAgICAgICAgICAucmVzaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIC5jb21wb3NpdGUoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBzdmdCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudG9GaWxlKGAke25hbWV9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSA6IFwiLCBpbWFnZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRvVXBwZXJDYXNlKHN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3QgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcclxuICAgIHJldHVybiBzdC50b1N0cmluZygpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFzbGF0ZSh0ZXh0LCBsYW5nKSB7XHJcbiAgICB0cmFuc2xhdGUuZW5naW5lID0gXCJnb29nbGVcIjtcclxuICAgIGxldCB0cmFuc2xhdGVzID0gYXdhaXQgdHJhbnNsYXRlKHRleHQsIGAke2xhbmd9YClcclxuICAgIHJldHVybiB0cmFuc2xhdGVzO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vbXkgZnVuY3Rpb25zXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBUZWxlZ3JhZkFwaShzaG9ydF9uYW1lLCBhdXRob3JfbmFtZSwgdXNlcklkOiBudW1iZXIpIHtcclxuXHJcbiAgICBjb25zdCB2YWNhbmN5ID0gYXdhaXQgVmFjYW5jeU1vZGVsLmZpbmRPbmUoeyB1c2VySWQ6IHVzZXJJZCB9KTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gW1xyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIlhvZGltOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubmFtZX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJZb3NoOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuYWdlfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIlRleG5vbG9naXlhOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kudGVjaG5vbG9neX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJBbG9xYTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnBob25lfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIkh1ZHVkOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kucGxhY2V9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW2BNYW9zaDogYF0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubWluU3VtfSAtICR7dmFjYW5jeS5tYXhTdW19YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiS2FzYmk6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5wcm9mZXNzaW9ufWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIk11cm9qYWF0IHFpbGlzaCB2YXF0aTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnRpbWVUb0NhbGx9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiTWFxc2FkOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuZ29hbH1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYE1pbmltdW06IGBdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiTWF4aW11bTogXCJdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubWF4U2FsYXJ5fSAke3ZhY2FuY3kuc2FsYXJ5U3ltYm9sfWBdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIC8vIHsgdGFnOiBcImgzXCIsIGNoaWxkcmVuOiBbXCJBbG9xYTogXCJdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LnBob25lTnVtYmVyfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LnVzZXJOYW1lfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LmdtYWlsfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0Lmxpbmt9YF0gfV0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiaVwiLCBjaGlsZHJlbjogW1wiSmF2b2JkYSB1c2hidSBibydzaCBpc2ggam95aW5pIENsaWNrIEpvYnMgZGFuIHRvcGdhbmluZ2l6bmkgYXl0aW5nLlwiXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCLinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpZcIl0gfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBwaC5jcmVhdGVBY2NvdW50KCdoaScsIHsgc2hvcnRfbmFtZTogc2hvcnRfbmFtZSwgYXV0aG9yX25hbWU6IGF1dGhvcl9uYW1lIH0pXHJcblxyXG4gICAgY29uc3QgVVJMID0gYXdhaXQgcGguY3JlYXRlUGFnZSh0b2tlbi5hY2Nlc3NfdG9rZW4sIHZhY2FuY3kubmFtZSwgY29udGVudCwgeyByZXR1cm5fY29udGVudDogdHJ1ZSB9KVxyXG5cclxuICAgIHJldHVybiBVUkwudXJsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVIYXNodGFnKHN0cikge1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywgJyAnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXFwnXFxcIi4sXFwvIyEkJVxcXFxeJlxcKjs6e309XFwtX2B+KClcXFtcXF18K0A/PD5dL2csICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XHJcbiAgICBpZiAoc3RyID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNhcEVhY2hXb3JkID0gKHN0cikgPT4gc3RyXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAgICAgLm1hcCh3b3JkID0+IHdvcmQudG9Mb3dlckNhc2UoMCkpXHJcbiAgICAgICAgICAgIC5qb2luKCcgIycpXHJcblxyXG4gICAgICAgIGxldCBIYXNodGFnSXQgPSAoc3RyKSA9PiAnIycgKyBzdHI7XHJcblxyXG4gICAgICAgIHJldHVybiBIYXNodGFnSXQoY2FwRWFjaFdvcmQoc3RyKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWYWNhbmN5KGRhdGEpIHtcclxuXHJcbiAgICBsZXQgbXNnO1xyXG4gICAgaWYgKGRhdGEudmFjYW5jeVR5cGUgPT0gXCJmaW5kV29ya1wiKSB7XHJcbiAgICAgICAgbXNnID0gKGBcclxuSXNoIGpveWkga2VyYWs6XHJcblxyXG7wn5Go4oCN8J+SvCBYb2RpbTogJHtkYXRhLm5hbWV9XHJcbvCflZEgWW9zaDogJHtkYXRhLmFnZX1cclxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke2RhdGEuZGlyZWN0aW9ufTwvYj5cclxu8J+TmiBUZXhub2xvZ2l5YTogJHtkYXRhLnRlY2hub2xvZ3l9XHJcbvCfk7EgQWxvcWE6ICR7ZGF0YS5waG9uZX1cclxu8J+TjSBIdWR1ZDogJHtkYXRhLnBsYWNlfVxyXG7wn5K4IE1hb3NoOiAke2RhdGEucHJpY2V9XHJcbvCfkaQgS2FzYmk6ICR7ZGF0YS5wcm9mZXNzaW9ufVxyXG7wn5WwIE11cm9qYWF0IHFpbGlzaCB2YXF0aTogJHtkYXRhLnRpbWVUb0NhbGx9XHJcbvCflI4gTWFxc2FkOiAke2RhdGEuZ29hbH1cclxuXHJcbiR7ZGF0YS5oYXNodGVnc31cclxuXHJcbsKpIEBiZWtvYm9kX2pvYnNfYm90XHJcbmApXHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS52YWNhbmN5VHlwZSA9PSBcImZpbmRIclwiICYmIGRhdGEubGluayAhPT0gbnVsbCkge1xyXG4gICAgICAgIG1zZyA9IChgXHJcblhvZGltIGtlcmFrOlxyXG5cclxu8J+PoiBJZG9yYTogJHtkYXRhLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtkYXRhLmRpcmVjdGlvbn08L2I+XHJcbvCfk5ogVGV4bm9sb2dpeWE6ICR7ZGF0YS50ZWNobm9sb2d5XzJ9XHJcbvCfk40gSHVkdWQ6ICR7ZGF0YS5wbGFjZV8yfVxyXG7wn5GkIE1hcyd1bDogJHtkYXRhLnJlc3BvbnNpYmxlfVxyXG7wn5WwIE11cm9qYWF0IHZhcXRpOiAke2RhdGEudGltZVRvQ2FsbF8yfVxyXG7ij7AgSXNoIHZhcXRpOiAke2RhdGEudGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtkYXRhLnByaWNlXzJ9XHJcbvCfk6UgQXJpemEgcW9sZGlyaXNoOiA8YSBocmVmPVwiJHtkYXRhLmxpbmt9XCI+TGluazwvYT5cclxuXHJcbiR7ZGF0YS5oYXNodGVnc31cclxuXHJcbsKpIEBiZWtvYm9kX2pvYnNfYm90XHJcbiAgICAgICAgYClcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnZhY2FuY3lUeXBlID09IFwiZmluZEhyXCIgJiYgZGF0YS5saW5rID09PSBudWxsKSB7XHJcbiAgICAgICAgbXNnID0gKGBcclxuWG9kaW0ga2VyYWs6XHJcblxyXG7wn4+iIElkb3JhOiAke2RhdGEub2ZmaWNlTmFtZX1cclxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke2RhdGEuZGlyZWN0aW9ufTwvYj5cclxu8J+TmiBUZXhub2xvZ2l5YTogJHtkYXRhLnRlY2hub2xvZ3lfMn1cclxu8J+TjSBIdWR1ZDogJHtkYXRhLnBsYWNlXzJ9XHJcbvCfkaQgTWFzJ3VsOiAke2RhdGEucmVzcG9uc2libGV9XHJcbvCflbAgTXVyb2phYXQgdmFxdGk6ICR7ZGF0YS50aW1lVG9DYWxsXzJ9XHJcbuKPsCBJc2ggdmFxdGk6ICR7ZGF0YS50aW1lT2ZXb3JrfVxyXG7wn5K4IE1hb3NoOiAke2RhdGEucHJpY2VfMn1cclxuXHJcbiR7ZGF0YS5oYXNodGVnc31cclxuXHJcbsKpIEBiZWtvYm9kX2pvYnNfYm90XHJcbiAgICAgICAgYClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbXNnO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmFjYW5zeUZvckNoYW5uZWwoTXNnKSB7XHJcbiAgICBsZXQgbXNnO1xyXG4gICAgaWYgKE1zZy52YWNhbmN5VHlwZSA9PSBcImZpbmRXb3JrXCIpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Jc2ggam95aSBrZXJhazpcclxuXHJcbvCfkajigI3wn5K8IFhvZGltOiAke01zZy5uYW1lfVxyXG7wn5WRIFlvc2g6ICR7TXNnLmFnZX1cclxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke01zZy5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke01zZy50ZWNobm9sb2d5fVxyXG7wn5OxIEFsb3FhOiAke01zZy5waG9uZX1cclxu8J+TjSBIdWR1ZDogJHtNc2cucGxhY2V9XHJcbvCfkrggTWFvc2g6ICR7TXNnLnByaWNlfVxyXG7wn5GkIEthc2JpOiAke01zZy5wcm9mZXNzaW9ufVxyXG7wn5WwIE11cm9qYWF0IHFpbGlzaCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cclxu8J+UjiBNYXFzYWQ6ICR7TXNnLmdvYWx9XHJcblxyXG4ke01zZy5oYXNodGVnc31cclxuXHJcbsKpIEBiZWtvYm9kX2pvYnNfYm90XHJcbmApXHJcbiAgICB9XHJcbiAgICBpZiAoTXNnLnZhY2FuY3lUeXBlID09IFwiZmluZEhyXCIgJiYgTXNnLmxpbmsgIT09IG51bGwpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Yb2RpbSBrZXJhazpcclxuXHJcbvCfj6IgSWRvcmE6ICR7TXNnLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtNc2cuZGlyZWN0aW9ufTwvYj5cclxu8J+TmiBUZXhub2xvZ2l5YTogJHtNc2cudGVjaG5vbG9neX1cclxu8J+TjSBIdWR1ZDogJHtNc2cucGxhY2V9XHJcbvCfkaQgTWFzJ3VsOiAke01zZy5yZXNwb25zaWJsZX1cclxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cclxu4o+wIElzaCB2YXF0aTogJHtNc2cudGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtNc2cucHJpY2V9XHJcbvCfk6UgQXJpemEgcW9sZGlyaXNoOiA8YSBocmVmPVwiJHtNc2cubGlua31cIj5MaW5rPC9hPlxyXG5cclxuJHtNc2cuaGFzaHRlZ3N9XHJcblxyXG7CqSBAYmVrb2JvZF9qb2JzX2JvdFxyXG4gICAgICAgIGApXHJcbiAgICB9XHJcbiAgICBpZiAoTXNnLnZhY2FuY3lUeXBlID09IFwiZmluZEhyXCIgJiYgTXNnLmxpbmsgPT09IG51bGwpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Yb2RpbSBrZXJhazpcclxuXHJcbvCfj6IgSWRvcmE6ICR7TXNnLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtNc2cuZGlyZWN0aW9ufTwvYj5cclxu8J+TmiBUZXhub2xvZ2l5YTogJHtNc2cudGVjaG5vbG9neX1cclxu8J+TjSBIdWR1ZDogJHtNc2cucGxhY2V9XHJcbvCfkaQgTWFzJ3VsOiAke01zZy5yZXNwb25zaWJsZX1cclxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cclxu4o+wIElzaCB2YXF0aTogJHtNc2cudGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtNc2cucHJpY2V9XHJcblxyXG4ke01zZy5oYXNodGVnc31cclxuXHJcbsKpIEBiZWtvYm9kX2pvYnNfYm90XHJcbiAgICAgICAgYClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbXNnO1xyXG59Il19