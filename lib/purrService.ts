import { Purr } from '@/utils/purrInterfaces';
import fs from 'fs';
import path from 'path';

export function readPurrData(filename: string): Purr[] {
    let filePath = path.join(process.cwd(), 'public', filename);
    let rawData = fs.readFileSync(filePath, 'utf-8');
    let parsedData = JSON.parse(rawData);
    let collectionItems: Purr[] = parsedData.collection_items;
    return collectionItems;
}