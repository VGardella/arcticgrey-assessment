import { ProductFragment } from "storefrontapi.generated";

type ProductMetafields = {
    id: string;
    value: string;
    type: string;
  }
  
export type ExtendedProductFragment = ProductFragment & {
  metafields: ProductMetafields[];
  tags: string[];
}