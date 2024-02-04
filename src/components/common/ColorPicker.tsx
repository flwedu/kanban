import { Palette } from "lucide-react";
import React, { useRef, useState } from "react";
import { getContrastYIQ } from "../../utils/getContrastYIQ.ts";
import { Button } from "./Button.styles.tsx";

type ColorPickerProps = {
	defaultValue?: string;
	name: string;
};

export function ColorPicker({ defaultValue, name }: ColorPickerProps) {
	const [color, setColor] = useState(defaultValue);
	const ref = useRef<HTMLInputElement>(null);

	const textColor = getContrastYIQ(color ?? "#FFF");

	const onClickButton = () => {
		if (!ref.current) return;
		ref.current.click();
	};

	const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	return (
		<>
			<Button type="button" onClick={onClickButton} $shape="rounded" color={color}>
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
