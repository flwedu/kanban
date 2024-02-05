import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "kanban-boards",
});

export default persistAtom;
