import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getPets, editPet } from '../../Service/pet/api';

const initialValue = {
    name: '',
    age: '',
    color: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditPet = () => {
    const [pet, setPet] = useState(initialValue);
    const { name, age, color } = pet;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadPetDetails();
    }, []);

    const loadPetDetails = async() => {
        const response = await getPets(id);
        setPet(response.data);
    }

    const editPetDetails = async() => {
        const response = await editPet(id, pet);
        history.push('/pets/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setPet({...pet, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Pet</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Color</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='color' value={color} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editPetDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditPet;