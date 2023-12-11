import { useState, onChange, input } from 'react'

function ProgramBuilder() {

const Exercises = [
	{
		"id": 1,
		"name": "Hip Flexion",
		"description": "Do this not that",
	},
	{
		"id": 2,
		"name": "Hip Extension",
		"description": "Do this not that",
	},
	{
		"id": 3,
		"name": "Arm Flexion",
		"description": "Do this not that",
	},
	{
		"id": 4,
		"name": "Arm Extension",
		"description": "Do this not that",
	},
	{
		"id": 5,
		"name": "Knee Flexion",
		"description": "Do this not that",
	},
	{
		"id": 6,
		"name": "Knee Extension",
		"description": "Do this not that",
	},
	{
		"id": 7,
		"name": "Shoulder Flexion",
		"description": "Do this not that",
	},
	{
		"id": 8,
		"name": "Shoulder Extension",
		"description": "Do this not that",
	},
]

	const [query, setQuery] = useState("")
	console.log(query)
	return(
		<>
			<h1>Program Builder</h1>
			<input 
				onChange={ (e) => setQuery(e.target.value)}
			/>
			{Exercises.map((exercise) => (
				<p key={exercise.id}>{exercise.name}</p>
			))}
		</>
	)
}


export default ProgramBuilder