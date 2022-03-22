import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addPet } from '../../Service/pet/api';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

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

const AddPet = () => {
    const [pet, setPet] = useState(initialValue);
    const { name, age, color } = pet;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setPet({...pet, [e.target.name]: e.target.value})
    }

    const addPetDetails = async() => {
        let response = await addPet(pet);
        console.log(response);
        if (response.status == 201) {
            Swal.fire({
                title: 'Success!',
                text: 'Success',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            history.push('./all');
        } else {
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Pet</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Color</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='color' value={color} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addPetDetails()}>Add Pet</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddPet;