import type { ProductInterface } from "@/interfaces";

export interface ProductCartInterface extends ProductInterface {
  quantity: number;
}
