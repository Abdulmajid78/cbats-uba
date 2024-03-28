'use client'
import React from 'react'
import { motion } from 'framer-motion'

// Word wrapper
const Wrapper: React.FC<{ children: JSX.Element }> = props => {
	// We'll do this to prevent wrapping of words using CSS
	return <span className='word-wrapper'>{props.children}</span>
}

// Map API "type" vaules to JSX tag names
const tagMap: any = {
	paragraph: 'p',
	heading1: 'h1',
	heading2: 'h2',
}

// AnimatedText
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = (props: any) => {
	// Framer Motion variant object, for controlling animation
	const item = {
		hidden: {
			y: '200%',
			color: '#1F2937',
		},
		visible: {
			y: 0,
			color: props.color ? props.color : '#1F2937',
		},
	}

	//  Split each word of props.text into an array
	const splitWords = props.text.split(' ')

	// Create storage array
	const words: any = []

	// Push each word into words array
	for (const [, item] of splitWords.entries()) {
		words.push(item.split(''))
	}

	// Add a space ("\u00A0") to the end of each word
	words.map((word: any) => {
		return word.push('\u00A0')
	})

	// Get the tag name from tagMap
	const Tag = tagMap[props.type]

	return (
		<Tag className={props.className}>
			{words.map((word: any, index: any) => {
				return (
					// Wrap each word in the Wrapper component
					<Wrapper key={index}>
						{words[index].flat().map((element: any, index: any) => {
							return (
								<span key={index}
									style={{
										overflow: 'hidden',
										display: 'inline-block',
										transform: 'translateY(25%)',
									}}
								>
									<motion.span
										style={{ display: 'inline-block' }}
										variants={item}
										transition={{
											ease: [0.455, 0.03, 0.515, 0.955],
											duration: 0.2,
										}}
										// className={props.className}
									>
										{element}
									</motion.span>
								</span>
							)
						})}
					</Wrapper>
				)
			})}
			{/* {} */}
		</Tag>
	)
}

export default AnimatedText
