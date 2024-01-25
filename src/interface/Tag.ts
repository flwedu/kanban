export type TagsType = {
  id: string;
  options: TagsOptionType[];
  type: "select" | "multi-select";
};

export type TagsOptionType = {
  id: string;
  color: string;
  createdAt: Date;
  name: string;
  updatedAt: Date;
};
