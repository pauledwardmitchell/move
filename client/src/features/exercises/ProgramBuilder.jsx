import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

import ExerciseCard from './ExerciseCard'

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

	const search = (Exercises) => {
		return Exercises.filter((item) => item.name.toLowerCase().includes(query))
	}

	console.log(query)
	return(
		<>		    
			<h1>Program Builder</h1>
			<input 
				onChange={ (e) => setQuery(e.target.value)}
			/>
			<Divider />
			<Container>
				<Grid container spacing={0}>
					<Grid item xs={9}>
						{search(Exercises).map((exercise) => (
							<ExerciseCard key={exercise.id} props={exercise}/>
						))}
					</Grid>
					<Grid item xs={3}>
					build program spot
					</Grid>
				</Grid>
			</Container>
		</>
	)
}


export default ProgramBuilder