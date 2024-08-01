import { ActionMeta, GroupBase, Options, OptionsOrGroups, SingleValue } from 'react-select';


export interface ISelectOption {
  label: string;
  value: string;
}

export type TOptions = OptionsOrGroups<string, GroupBase<string>> | Options<ISelectOption> | undefined;

export type TChange = ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void);