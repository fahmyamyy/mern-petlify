import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    // position: {
    //     alignItems: ce 
    // },
    header: {
        // display: 'inline',
        position: 'static',
        background: '#34bdeb'
    },
    tabs: {
        position: 'static',
        textAlign: 'center',
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    },
    logo: {
        position: 'static'
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header}>
            <Toolbar className={classes.logo}>
                <NavLink className={classes.tabs} to="../" exact>Code for Interview</NavLink>
            </Toolbar>
            <Toolbar className={classes.menu}>
                <NavLink className={classes.tabs} to="../users/all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="../users/add" exact>Add User</NavLink>
                <NavLink className={classes.tabs} to="../pets/all" exact>All Pets</NavLink>
                <NavLink className={classes.tabs} to="../pets/add" exact>Add Pet</NavLink>
            </Toolbar>
            <Toolbar className={classes.settings}>
                <NavLink className={classes.tabs} to="../" exact>Code for Interview</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;