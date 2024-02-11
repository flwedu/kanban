import { Palette } from "lucide-react";
import React, { useRef, useState } from "react";
import { getContrastYIQ } from "../../utils/getContrastYIQ.ts";
import { Button } from "./Button.styles.tsx";

type ColorPickerProps = {
	defaultValue?: string;
	name: string;
};

export function ColorPicker({ defaultValue, name }: ColorPickerProps) {
	const [bgColor, setBgColor] = useState(defaultValue);
	const ref = useRef<HTMLInputElement>(null);

	const textColor = getContrastYIQ(bgColor ?? "#ffffff");

	const onClickButton = () => {
		if (!ref.current) return;
		ref.current.click();
	};

	const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBgColor(e.target.value);
	};

	return (
		<>
			<Button type="button" onClick={onClickButton} $shape="rounded" bgColor={bgColor}>
				<Palette color={textColor} />
			</Button>
			<input
				type="color"
				onChange={onChangeColor}
				name={name}
				defaultValue={defaultValue}
				ref={ref}
				style={{ display: "none" }}
			/>
		</>
	);
}
