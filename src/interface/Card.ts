export type CardType = {
	id: string;
	boardId: string;
	color?: string;
	tags: {
		[categoryId: string]: string[];
	};
	createdAt: Date;
	description: string;
	title: string;
	updatedAt: Date;
};
