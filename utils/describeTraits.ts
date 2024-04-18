// •┈••✦ ❤ ✦••┈• MFPURR API - PHYSICAL DESCRIPTIONS •┈••✦ ❤ ✦••┈•

import { Purr, MfpurrAttribute } from "./purrInterfaces";


function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export default function describe_traits(purr: Purr): string {
  const traits = purr.item_attributes.reduce((description, attribute) => {
    const { trait_type, value } = attribute;
    let traitDescription = '';
    
    switch (trait_type) {
      case 'eye color':
        traitDescription = `has captivating ${value} eyes`;
        break;
      case 'hat':
        traitDescription = `is wearing a stylish ${value}`;
        break;
      case 'eyewear':
        traitDescription = `sports a pair of ${value}`;
        break;
      // TODO: fill in, for testing only
      default:
        traitDescription = `has a distinct ${trait_type} of ${value}`;
        break;
    }

    return description.concat(traitDescription ? `${capitalizeFirstLetter(traitDescription)}. ` : '');
  }, '');

  return `This purr, known as ${purr.name}, ${traits}`;
}

