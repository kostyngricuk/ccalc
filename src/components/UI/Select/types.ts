import { ActionMeta, GroupBase, OptionsOrGroups, SingleValue } from "react-select";

export type TOptions = OptionsOrGroups<string, GroupBase<string>> | undefined;

export type TChange = ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void);