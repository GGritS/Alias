import { FunctionComponent } from "react";

export type RequiredFC<T = {}> = FunctionComponent<
  T & {
    children: ReactNode;
  }
>;
