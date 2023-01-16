import { VacancyModel } from "../db/model/vacancy.model";
import Telegraph from "telegraph-node";
import sharp from "sharp";
import translate from "translate";

const ph = new Telegraph()

///kerakli 
export async function addTextOnImage(data) {
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
        const image = await sharp(`./uploads/picutre.png`)
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
    } catch (error) {
        console.log(error);
    }
}

export async function ToUpperCase(string: string) {
    let st = string.charAt(0).toUpperCase() + string.slice(1)
    return st.toString()
}

export async function traslate(text, lang) {
    translate.engine = "google";
    let translates = await translate(text, `${lang}`)
    return translates;
}

/////////////my functions
export async function TelegrafApi(short_name, author_name, userId: number) {

    const vacancy = await VacancyModel.findOne({ userId: userId });

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

    const token = await ph.createAccount('hi', { short_name: short_name, author_name: author_name })

    const URL = await ph.createPage(token.access_token, vacancy.name, content, { return_content: true })

    return URL.url
}


export async function generateHashtag(str) {
    str = str.replace(/\s+/g, ' ')
        .replace(/[\'\".,\/#!$%\\^&\*;:{}=\-_`~()\[\]|+@?<>]/g, '')
        .replace(/\s{2,}/g, ' ');
    if (str === '') {
        return '';
    } else {
        let capEachWord = (str) => str
            .trim()
            .split(' ')
            .map(word => word.toLowerCase(0))
            .join(' #')

        let HashtagIt = (str) => '#' + str;

        return HashtagIt(capEachWord(str));
    }
}
