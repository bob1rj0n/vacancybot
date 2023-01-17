"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashtag = exports.TelegrafApi = exports.traslate = exports.ToUpperCase = exports.addTextOnImage = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkRBQXlEO0FBQ3pELDRFQUF1QztBQUN2QywwREFBMEI7QUFDMUIsa0VBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFBO0FBRTFCLFdBQVc7QUFDSixLQUFLLFVBQVUsY0FBYyxDQUFDLElBQUk7SUFDckMsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsTUFBTSxRQUFRLEdBQUc7a0JBQ1AsS0FBSyxhQUFhLE1BQU07Ozs7Ozs7Ozs7O2tEQVdRLFNBQVM7O1dBRWhELENBQUM7UUFDSixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixJQUFJLE1BQU0sQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsZUFBSyxFQUFDLHVCQUF1QixDQUFDO2FBQzdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLFNBQVMsQ0FBQztZQUNQO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUF2Q0Qsd0NBdUNDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN4QixDQUFDO0FBSEQsa0NBR0M7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ3JDLG1CQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFKRCw0QkFJQztBQUVELHlCQUF5QjtBQUNsQixLQUFLLFVBQVUsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBYztJQUVyRSxNQUFNLE9BQU8sR0FBRyxNQUFNLDRCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFL0QsTUFBTSxPQUFPLEdBQUc7UUFDWixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUM1RixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ3RHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1FBQ3RGLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7UUFDdEcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQ2IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDakYsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQ2IseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6Qyw0RUFBNEU7UUFDNUUsaUJBQWlCO1FBQ2pCLHdDQUF3QztRQUN4Qyx5RkFBeUY7UUFDekYsc0ZBQXNGO1FBQ3RGLG1GQUFtRjtRQUNuRixrRkFBa0Y7UUFDbEYsaUJBQWlCO1FBQ2pCLG1HQUFtRztRQUNuRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtLQUN4RCxDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFFaEcsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUVwRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUE7QUFDbEIsQ0FBQztBQTNDRCxrQ0EyQ0M7QUFHTSxLQUFLLFVBQVUsZUFBZSxDQUFDLEdBQUc7SUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUN6QixPQUFPLENBQUMsNkNBQTZDLEVBQUUsRUFBRSxDQUFDO1NBQzFELE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtTQUFNO1FBQ0gsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUc7YUFDekIsSUFBSSxFQUFFO2FBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWYsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFbkMsT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEM7QUFDTCxDQUFDO0FBakJELDBDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhY2FuY3lNb2RlbCB9IGZyb20gXCIuLi9kYi9tb2RlbC92YWNhbmN5Lm1vZGVsXCI7XHJcbmltcG9ydCBUZWxlZ3JhcGggZnJvbSBcInRlbGVncmFwaC1ub2RlXCI7XHJcbmltcG9ydCBzaGFycCBmcm9tIFwic2hhcnBcIjtcclxuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tIFwidHJhbnNsYXRlXCI7XHJcblxyXG5jb25zdCBwaCA9IG5ldyBUZWxlZ3JhcGgoKVxyXG5cclxuLy8va2VyYWtsaSBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRleHRPbkltYWdlKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAyNTAwO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDE3MDA7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gYCR7ZGF0YS5kaXJlY3Rpb259YDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBgXHJcbiAgICA8c3ZnIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIj5cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAuZGlyZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmlsbDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0IE1lZGl1bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPHRleHQgeD1cIjEzJVwiIHk9XCI2MCVcIiBjbGFzcz1cImRpcmVjdGlvblwiPiR7ZGlyZWN0aW9ufTwvdGV4dD5cclxuICAgIDwvc3ZnPlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBzdmdCdWZmZXIgPSBCdWZmZXIuZnJvbShzdmdJbWFnZSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IChuZXcgRGF0ZSgpKS52YWx1ZU9mKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGAuL3VwbG9hZHMvaW1hZ2VzL2ZpbGUtJHtkYXRlfS5wbmdgO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgc2hhcnAoYC4vdXBsb2Fkcy9waWN1dHJlLnBuZ2ApXHJcbiAgICAgICAgICAgIC5yZXNpemUod2lkdGgsIGhlaWdodClcclxuICAgICAgICAgICAgLmNvbXBvc2l0ZShbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHN2Z0J1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIC50b0ZpbGUoYCR7bmFtZX1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlIDogXCIsIGltYWdlKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVG9VcHBlckNhc2Uoc3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdCA9IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxyXG4gICAgcmV0dXJuIHN0LnRvU3RyaW5nKClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYXNsYXRlKHRleHQsIGxhbmcpIHtcclxuICAgIHRyYW5zbGF0ZS5lbmdpbmUgPSBcImdvb2dsZVwiO1xyXG4gICAgbGV0IHRyYW5zbGF0ZXMgPSBhd2FpdCB0cmFuc2xhdGUodGV4dCwgYCR7bGFuZ31gKVxyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZXM7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy9teSBmdW5jdGlvbnNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRlbGVncmFmQXBpKHNob3J0X25hbWUsIGF1dGhvcl9uYW1lLCB1c2VySWQ6IG51bWJlcikge1xyXG5cclxuICAgIGNvbnN0IHZhY2FuY3kgPSBhd2FpdCBWYWNhbmN5TW9kZWwuZmluZE9uZSh7IHVzZXJJZDogdXNlcklkIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiWG9kaW06IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5uYW1lfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIllvc2g6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5hZ2V9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiVGV4bm9sb2dpeWE6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS50ZWNobm9sb2d5fWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIkFsb3FhOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kucGhvbmV9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiSHVkdWQ6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5wbGFjZX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYE1hb3NoOiBgXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5taW5TdW19IC0gJHt2YWNhbmN5Lm1heFN1bX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJLYXNiaTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnByb2Zlc3Npb259YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiTXVyb2phYXQgcWlsaXNoIHZhcXRpOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kudGltZVRvQ2FsbH1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJNYXFzYWQ6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5nb2FsfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIC8vIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgTWluaW11bTogYF0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJNYXhpbXVtOiBcIl0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5tYXhTYWxhcnl9ICR7dmFjYW5jeS5zYWxhcnlTeW1ib2x9YF0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiaDNcIiwgY2hpbGRyZW46IFtcIkFsb3FhOiBcIl0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJ1bFwiLCBjaGlsZHJlbjogW3sgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LmNvbnRhY3QucGhvbmVOdW1iZXJ9YF0gfV0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJ1bFwiLCBjaGlsZHJlbjogW3sgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LmNvbnRhY3QudXNlck5hbWV9YF0gfV0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJ1bFwiLCBjaGlsZHJlbjogW3sgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LmNvbnRhY3QuZ21haWx9YF0gfV0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJ1bFwiLCBjaGlsZHJlbjogW3sgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LmNvbnRhY3QubGlua31gXSB9XSB9LFxyXG4gICAgICAgIC8vIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJpXCIsIGNoaWxkcmVuOiBbXCJKYXZvYmRhIHVzaGJ1IGJvJ3NoIGlzaCBqb3lpbmkgQ2xpY2sgSm9icyBkYW4gdG9wZ2FuaW5naXpuaSBheXRpbmcuXCJdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIuKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKellwiXSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHBoLmNyZWF0ZUFjY291bnQoJ2hpJywgeyBzaG9ydF9uYW1lOiBzaG9ydF9uYW1lLCBhdXRob3JfbmFtZTogYXV0aG9yX25hbWUgfSlcclxuXHJcbiAgICBjb25zdCBVUkwgPSBhd2FpdCBwaC5jcmVhdGVQYWdlKHRva2VuLmFjY2Vzc190b2tlbiwgdmFjYW5jeS5uYW1lLCBjb250ZW50LCB7IHJldHVybl9jb250ZW50OiB0cnVlIH0pXHJcblxyXG4gICAgcmV0dXJuIFVSTC51cmxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUhhc2h0YWcoc3RyKSB7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCAnICcpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXCdcXFwiLixcXC8jISQlXFxcXF4mXFwqOzp7fT1cXC1fYH4oKVxcW1xcXXwrQD88Pl0vZywgJycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcclxuICAgIGlmIChzdHIgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2FwRWFjaFdvcmQgPSAoc3RyKSA9PiBzdHJcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAgICAgICAubWFwKHdvcmQgPT4gd29yZC50b0xvd2VyQ2FzZSgwKSlcclxuICAgICAgICAgICAgLmpvaW4oJyAjJylcclxuXHJcbiAgICAgICAgbGV0IEhhc2h0YWdJdCA9IChzdHIpID0+ICcjJyArIHN0cjtcclxuXHJcbiAgICAgICAgcmV0dXJuIEhhc2h0YWdJdChjYXBFYWNoV29yZChzdHIpKTtcclxuICAgIH1cclxufVxyXG4iXX0=