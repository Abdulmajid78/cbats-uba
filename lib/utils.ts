import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) {
		return text
	} else {
		// Find the last space within the maxLength limit
		const lastSpaceIndex = text.lastIndexOf(' ', maxLength)

		if (lastSpaceIndex > 0) {
			// Truncate the text and add an ellipsis
			return text.slice(0, lastSpaceIndex) + '...'
		} else {
			// If no space is found, simply truncate at maxLength and add an ellipsis
			return text.slice(0, maxLength) + '...'
		}
	}
}