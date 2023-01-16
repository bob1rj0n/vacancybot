"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegrafApi = exports.traslate = exports.ToUpperCase = exports.addTextOnImage = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkRBQXlEO0FBQ3pELDRFQUF1QztBQUN2QywwREFBMEI7QUFDMUIsa0VBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFBO0FBRTFCLFdBQVc7QUFDSixLQUFLLFVBQVUsY0FBYyxDQUFDLElBQUk7SUFDckMsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsTUFBTSxRQUFRLEdBQUc7a0JBQ1AsS0FBSyxhQUFhLE1BQU07Ozs7Ozs7Ozs7O2tEQVdRLFNBQVM7O1dBRWhELENBQUM7UUFDSixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixJQUFJLE1BQU0sQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsZUFBSyxFQUFDLHVCQUF1QixDQUFDO2FBQzdDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLFNBQVMsQ0FBQztZQUNQO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUF2Q0Qsd0NBdUNDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN4QixDQUFDO0FBSEQsa0NBR0M7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ3JDLG1CQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFKRCw0QkFJQztBQUVELHlCQUF5QjtBQUNsQixLQUFLLFVBQVUsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBYztJQUVyRSxNQUFNLE9BQU8sR0FBRyxNQUFNLDRCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFL0QsTUFBTSxPQUFPLEdBQUc7UUFDWixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtRQUNoRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUM5RSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUM1RixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ3RHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1FBQ3RGLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUNiLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7UUFDdEcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQ2IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDakYsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQ2IseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6Qyw0RUFBNEU7UUFDNUUsaUJBQWlCO1FBQ2pCLHdDQUF3QztRQUN4Qyx5RkFBeUY7UUFDekYsc0ZBQXNGO1FBQ3RGLG1GQUFtRjtRQUNuRixrRkFBa0Y7UUFDbEYsaUJBQWlCO1FBQ2pCLG1HQUFtRztRQUNuRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtLQUN4RCxDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFFaEcsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUVwRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUE7QUFDbEIsQ0FBQztBQTNDRCxrQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbFwiO1xyXG5pbXBvcnQgVGVsZWdyYXBoIGZyb20gXCJ0ZWxlZ3JhcGgtbm9kZVwiO1xyXG5pbXBvcnQgc2hhcnAgZnJvbSBcInNoYXJwXCI7XHJcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSBcInRyYW5zbGF0ZVwiO1xyXG5cclxuY29uc3QgcGggPSBuZXcgVGVsZWdyYXBoKClcclxuXHJcbi8vL2tlcmFrbGkgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUZXh0T25JbWFnZShkYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMjUwMDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSAxNzAwO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGAke2RhdGEuZGlyZWN0aW9ufWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0ltYWdlID0gYFxyXG4gICAgPHN2ZyB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCI+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgLmRpcmVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCBNZWRpdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDx0ZXh0IHg9XCIxMyVcIiB5PVwiNjAlXCIgY2xhc3M9XCJkaXJlY3Rpb25cIj4ke2RpcmVjdGlvbn08L3RleHQ+XHJcbiAgICA8L3N2Zz5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgY29uc3Qgc3ZnQnVmZmVyID0gQnVmZmVyLmZyb20oc3ZnSW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgLi91cGxvYWRzL2ltYWdlcy9maWxlLSR7ZGF0ZX0ucG5nYDtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHNoYXJwKGAuL3VwbG9hZHMvcGljdXRyZS5wbmdgKVxyXG4gICAgICAgICAgICAucmVzaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgICAgICAgIC5jb21wb3NpdGUoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBzdmdCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudG9GaWxlKGAke25hbWV9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZSA6IFwiLCBpbWFnZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRvVXBwZXJDYXNlKHN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3QgPSBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcclxuICAgIHJldHVybiBzdC50b1N0cmluZygpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFzbGF0ZSh0ZXh0LCBsYW5nKSB7XHJcbiAgICB0cmFuc2xhdGUuZW5naW5lID0gXCJnb29nbGVcIjtcclxuICAgIGxldCB0cmFuc2xhdGVzID0gYXdhaXQgdHJhbnNsYXRlKHRleHQsIGAke2xhbmd9YClcclxuICAgIHJldHVybiB0cmFuc2xhdGVzO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vbXkgZnVuY3Rpb25zXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBUZWxlZ3JhZkFwaShzaG9ydF9uYW1lLCBhdXRob3JfbmFtZSwgdXNlcklkOiBudW1iZXIpIHtcclxuXHJcbiAgICBjb25zdCB2YWNhbmN5ID0gYXdhaXQgVmFjYW5jeU1vZGVsLmZpbmRPbmUoeyB1c2VySWQ6IHVzZXJJZCB9KTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gW1xyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIlhvZGltOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubmFtZX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJZb3NoOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuYWdlfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIlRleG5vbG9naXlhOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kudGVjaG5vbG9neX1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCJBbG9xYTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnBob25lfWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIkh1ZHVkOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kucGxhY2V9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW2BNYW9zaDogYF0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubWluU3VtfSAtICR7dmFjYW5jeS5tYXhTdW19YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiS2FzYmk6IFwiXSB9LCB7IHRhZzogXCJwXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5wcm9mZXNzaW9ufWBdIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJcIiwgY2hpbGRyZW46IFtcIk11cm9qYWF0IHFpbGlzaCB2YXF0aTogXCJdIH0sIHsgdGFnOiBcInBcIiwgY2hpbGRyZW46IFtgJHt2YWNhbmN5LnRpbWVUb0NhbGx9YF0gfSxcclxuICAgICAgICB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgeyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiTWFxc2FkOiBcIl0gfSwgeyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kuZ29hbH1gXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYE1pbmltdW06IGBdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiYlwiLCBjaGlsZHJlbjogW1wiTWF4aW11bTogXCJdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwicFwiLCBjaGlsZHJlbjogW2Ake3ZhY2FuY3kubWF4U2FsYXJ5fSAke3ZhY2FuY3kuc2FsYXJ5U3ltYm9sfWBdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiYnJcIiB9LFxyXG4gICAgICAgIC8vIHsgdGFnOiBcImgzXCIsIGNoaWxkcmVuOiBbXCJBbG9xYTogXCJdIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LnBob25lTnVtYmVyfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LnVzZXJOYW1lfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0LmdtYWlsfWBdIH1dIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwidWxcIiwgY2hpbGRyZW46IFt7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbYCR7dmFjYW5jeS5jb250YWN0Lmxpbmt9YF0gfV0gfSxcclxuICAgICAgICAvLyB7IHRhZzogXCJiclwiIH0sXHJcbiAgICAgICAgLy8geyB0YWc6IFwiaVwiLCBjaGlsZHJlbjogW1wiSmF2b2JkYSB1c2hidSBibydzaCBpc2ggam95aW5pIENsaWNrIEpvYnMgZGFuIHRvcGdhbmluZ2l6bmkgYXl0aW5nLlwiXSB9LFxyXG4gICAgICAgIHsgdGFnOiBcImJyXCIgfSxcclxuICAgICAgICB7IHRhZzogXCJiXCIsIGNoaWxkcmVuOiBbXCLinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpYg4p6WIOKeliDinpZcIl0gfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBwaC5jcmVhdGVBY2NvdW50KCdoaScsIHsgc2hvcnRfbmFtZTogc2hvcnRfbmFtZSwgYXV0aG9yX25hbWU6IGF1dGhvcl9uYW1lIH0pXHJcblxyXG4gICAgY29uc3QgVVJMID0gYXdhaXQgcGguY3JlYXRlUGFnZSh0b2tlbi5hY2Nlc3NfdG9rZW4sIHZhY2FuY3kubmFtZSwgY29udGVudCwgeyByZXR1cm5fY29udGVudDogdHJ1ZSB9KVxyXG5cclxuICAgIHJldHVybiBVUkwudXJsXHJcbn1cclxuIl19