import User from '../model/user.js';

// Get all users
export const getUsers = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const signIn = async (request, response) => {
    // retreive the info of user from frontend
    const username = request.body.username;
    const password = request.body.password;
    // console.log(request.body.username)

    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.findOne({username: username, password: password}).exec();
        // console.log(users);
        if (users) {
            response.status(200).json(users);
        }
        else {
            response.status(404).json(users);
        }
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const signUp = async (request, response) => {
    // retreive the info of user from frontend
    const user = request.body;
    console.log("inside")

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getUserById = async (request, response) => {
    const username = request.body.username;
    try{
        const user = await User.findOne(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
// export const editUser = async (request, response) => {
//     // let user = await User.findOne({_id: request.params.id});
//     const user = request.body;
//     const editUser = new User(user);
//     // console.log(editUser);
//     try{
//         const update = await User.updateOne({_id: user.id}, editUser);
//         console.log(update)
//         response.status(201).json(update);
        
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }

export const editUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        console.log(editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}