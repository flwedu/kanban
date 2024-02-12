import { Palette } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "./Button.tsx";

type ColorPickerProps = {
	defaultValue?: string;
	name: string;
};

export function ColorPicker({ defaultValue, name }: ColorPickerProps) {
	const [bgColor, setBgColor] = useState(defaultValue);
	const hiddenInputRef = useRef<HTMLInputElement>(null);

	const onClickButton = () => {
		hiddenInputRef.current?.click();
	};

	const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBgColor(e.target.value);
	};

	return (
		<>
			<Button type="button" onClick={onClickButton} shape="rounded" buttonColor={bgColor}>
				<Palette />
			</Button>
			<input
				type="color"
				onChange={onChangeColor}
				name={name}
				defaultValue={defaultValue}
				ref={hiddenInputRef}
				style={{ display: "none" }}
			/>
		</>
	);
}
