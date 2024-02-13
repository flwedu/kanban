import { Palette, Square } from "lucide-react";
import React, { ReactElement, useRef, useState } from "react";
import { Button } from "./Button.tsx";

type ColorPickerProps = {
	defaultValue?: string;
	name: string;
};

/**
 * ColorPicker component used to pick a color
 *
 * @param {Object} props - The component props
 * @param {string} props.defaultValue - The default color value
 * @param {string} props.name - The name attribute for the input element
 * @returns {ReactElement} The color picker component
 */
export function ColorPicker({ defaultValue, name }: ColorPickerProps): ReactElement {
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
			<Button onClick={onClickButton}>
				<Palette />
				Update board color
				<Square fill={bgColor} color={bgColor} />
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
