import { NextApiRequest, NextApiResponse } from "next";
import { readPurrData } from "@/lib/purrService";
import { Purr } from "@/utils/purrInterfaces";

// •┈••✦ ❤ ✦••┈• get mfpurr by "tokenId"
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    
    const { number } = request.query; 

    let purrNumber = parseInt(number as string, 10);
    if (isNaN(purrNumber)) {
        return response.status(400).send('Purr number must be a valid number');
    }

    let data: Purr[] = readPurrData('metadata-mfpurrs.json');
    let item = data.find((item: Purr) => {
        const match = item.name.match(/#(\d+)$/);
        return match && parseInt(match[1], 10) === purrNumber;
    });

    if (item) {
        response.json(item);
    } else {
        response.status(404).send('Purr not found');
    }
}
