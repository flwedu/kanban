import { colorsRef } from "../theme/colorsRef.ts";

const colorsScales = ["400", "500", "600"] as const;
const colorValues = Object.values(colorsRef);

function getRandomColorScale() {
	return colorsScales[Math.floor(Math.random() * colorsScales.length)];
}

/**
 * Generates a random color.
 *
 * @returns {string} A random color value.
 */
export function getRandomColor(): string {
	const randomIndex = Math.floor(Math.random() * colorValues.length);
	const colorValue = colorValues[randomIndex];
	const scale = getRandomColorScale();
	return colorValue[scale];
}
