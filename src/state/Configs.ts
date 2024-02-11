import { atom } from "recoil";

export interface ConfigsType {
	darkMode: boolean;
}

export const configsAtom = atom<ConfigsType>({
	key: "configs",
	default: {
		darkMode: true,
	},
});
