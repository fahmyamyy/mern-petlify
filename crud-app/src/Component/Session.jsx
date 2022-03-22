import { Typography } from '@material-ui/core';

const Session = () => {
    var userSession = {name: localStorage.getItem('Name')};
    if (localStorage.getItem('Name') == '') {
        window.location = "http://localhost:3000/login";
    }
    return(
        <Typography>{userSession.name}</Typography>
    );
}

export default Session;