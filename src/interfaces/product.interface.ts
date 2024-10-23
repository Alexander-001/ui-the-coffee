export interface DataProduct {
  id: number;
  name: string;
  title: { [key: string]: null | string };
  description: { [key: string]: null | string };
  label_custom: string;
  size: null | string;
  image: string;
  icon: string;
  products: Product[];
  subcategories: Subcategory[];
}

export interface Product {
  id: number;
  title: string;
  name: any[] | { [key: string]: null | string };
  default_code: string;
  jp_description: null | string;
  descriptions: any[] | { [key: string]: null | string };
  temperatures: any[] | { [key: string]: null | string };
  image: string;
  available_in_pos: null;
  is_stockable: number;
  quantity: null;
  nutritional_information: NutritionalInformation;
  slug: string;
  price_list: PriceList[];
  long_description: null | string;
  midia: any[] | null;
}

export interface NutritionalInformation {
  id: number;
  id_product: number;
  qtd_package: number | null;
  portion: number | null;
  portion_type: PortionType;
  portion_description: null | string;
  energetic_value: number | null;
  energetic_value_vd: number | null;
  carbohydrates: number | null;
  carbohydrates_vd: number | null;
  proteins: number | null;
  proteins_vd: number | null;
  total_fat: number | null;
  total_fat_vd: number | null;
  saturated_fat: number | null;
  saturated_fat_vd: number | null;
  trans_fat: number | null;
  trans_fat_vd: number | null;
  dietary_fiber: number | null;
  dietary_fiber_vd: number | null;
  sodium: number | null;
  sodium_vd: number | null;
  ingredients: null | string;
  diets: null | string;
  restrictions: null | string;
  vegan: number;
}

export enum PortionType {
  G = "g",
  Ml = "ml",
}

export interface PriceList {
  name: Name;
  price: number;
}

export enum Name {
  AmA = "AM - A",
  BrA = "BR-A",
  BrB = "BR-B",
  BrC = "BR-C",
  BrD = "BR-D",
  BrE = "BR-E",
  ClpA = "CLP - A",
  DxbA = "DXB-A",
  EuA = "EU-A",
  EuB = "EU-B",
  EuC = "EU-C",
  EuD = "EU-D",
  EuE = "EU-E",
  EuF = "EU-F",
  EuG = "EU-G",
  EuH = "EU-H",
  MexA = "MEX - A",
  MexB = "MEX - B",
  MexC = "MEX - C",
  My1 = "MY - 1",
  PRA = "PR-A",
  PenA = "PEN - A",
  Pl1Cop = "PL 1 - COP",
  PlDev = "PL - DEV",
  TesteMasterFra = "teste master fra",
  Th1 = "TH-1",
}

export interface Subcategory {
  id: number;
  name: string;
  title: { [key: string]: null | string };
  description: { [key: string]: null | string };
  label_custom: string;
  size: null | string;
  image: string;
  icon: string;
  products: Product[];
  subcategories: any[];
}
