import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import ExerciseCard from './ExerciseCard'
import ExerciseList from './ExerciseList'

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

	const [programName, setProgramName] = useState("")

	const [selectedExercises, setExercises] = useState([])

	const search = (Exercises) => {
		return Exercises.filter((item) => item.name.toLowerCase().includes(query))
	}

	return(
		<>		    
			<Divider/>
			<Container>
				<Grid container spacing={0} marginY={8}>
					<Grid item xs={9}>
						<Stack direction="row">
						<Grid item xs={9}>
							<TextField 
								fullWidth 
								onChange={ (e) => setQuery(e.target.value)}
								label="Search Query" 
								id="query"
								size="small"
								>
	    					</TextField>
    					</Grid>
    					<Grid item xs={2}>
    						<Button variant="outlined">Filter
    						</Button>
    					</Grid>
    					</Stack>
						{search(Exercises).map((exercise) => (
							<Card key={exercise.id} 
								  sx={{ width: 240,
						                height: 180,
						                display: 'inline-block',
						                margin: 3
						              }}>
						      <CardActionArea>
						        <CardMedia
						          component="img"
						          height="120"
						          image="data:image/png;base64,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"
						          alt="green iguana"
						        />
						        <CardContent>
						          <Typography gutterBottom variant="h5" component="div">
						            {exercise.name}
						          </Typography>
						        </CardContent>
						      </CardActionArea>
						      <CardActions>
						        <Fab 
						          size="small" 
						          color="secondary" 
						          aria-label="add"
						          sx={{position : 'relative',
						          bottom: 100,
						          right: -180}}>
						          <AddIcon 
						          	id={exercise.id} 
						          	onClick={() => {
						          		setExercises([
						          			...selectedExercises,
						          			{id: exercise.id, name: exercise.name}])
						          	}} />
						        </Fab>
						      </CardActions>
						    </Card>
						))}
					</Grid>
					<Grid item xs={3}>
						<Box
							sx={{
								display:'flex',
								flexWrap:'wrap',								
							}}>
						<TextField 
							fullWidth 
							label="Program Name" 
							id="programName"
							size="small"	
							onChange={ (e) => setProgramName(e.target.value)}
							>
    					</TextField>
    					<Paper
    						elevation={5} 
    						sx={{
    						height: 300,
    						width: 300	
    					}} >
    					<ul>
    						{selectedExercises.map(exercise => (
    							<li key={exercise.id}>{exercise.name}</li>))}
    					</ul>
    					<Button variant="outlined">Create Workout
    					</Button>
    					</Paper>
    					</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}


export default ProgramBuilder