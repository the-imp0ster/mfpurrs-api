// •┈••✦ ❤ ✦••┈• MFPURRS API - TYPE INTERFACES •┈••✦ ❤ ✦••┈•

export interface MfpurrAttribute {
  trait_type: string;
  value: string | number;
}

export interface Purr {
  ethscription_id: string;
  name: string;
  description: string;
  external_url: string;
  background_color: string;
  item_index: number;
  item_attributes: MfpurrAttribute[];
}

