import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountPrice: number;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title: string;
  titlePrice: number;
  varients: InputJsonValue;
};
