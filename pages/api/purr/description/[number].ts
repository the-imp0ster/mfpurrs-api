
import { NextApiRequest, NextApiResponse } from 'next';
import { readPurrData } from '@/lib/purrService';
import describe_traits from '@/utils/describeTraits';
import { Purr } from '@/utils/purrInterfaces';


export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const { number } = request.query;

    let purrNumber = parseInt(number as string, 10);
    if (isNaN(purrNumber)) {
        return response.status(400).send('Purr number must be a valid number');
    }

    let data: Purr[] = readPurrData('metadata-mfpurrs.json');
    let purr = data.find((purr: Purr) => {
        const match = purr.name.match(/#(\d+)$/);
        return match && parseInt(match[1], 10) === purrNumber;
    });

    if (purr) {
        let description = describe_traits(purr);
        response.send(description);
    } else {
        response.status(404).send('Purr not found');
    }
}
