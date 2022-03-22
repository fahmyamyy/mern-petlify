import Loved from '../model/loved.js';

// Get all users
export const getLoveds = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    const username = request.params.lovedBy;
    // console.log(username);
    try {
        // finding something inside a model is time taking, so we need to add await
        // const loveds = await Loved.find({ lovedBy: username }).exec();
        const loveds = await Loved.aggregate([
            {
                $lookup: {
                    from: "pets",
                    localField: "petId",
                    foreignField: "_id",
                    // let: { username: "lovedBy" },
                    as: "pet",
                },

            },
            {
                $match: {
                    lovedBy: username
                },
            },
            {
                $unwind: "$pet",
            },
        ])
        // const keys = loveds.forEach(value);
        // console.log(loveds[0]);
        
        response.status(200).json(loveds);

        // const kocak = loveds
        // console.log(kocak.forEach(element => console.log(element._id)));

    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addLoved = async (request, response) => {
    // retreive the info of Pet from frontend
    const loved = request.body;
    console.log("inside")

    const newLoved = new Loved(loved);
    try {
        await newLoved.save();
        response.status(201).json(newLoved);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get a user by id
export const getLovedById = async (request, response) => {
    try {
        // const loved = await Loved.find(request.params.username);
        const username = request.params.username
        console.log(username)
        const loved = await Loved.aggregate([
            {
                $lookup: {
                    from: "pets",
                    localField: "petId",
                    foreignField: "_id",
                    as: "pet",
                },

            },
            {
                $match: {
                    lovedBy: "admin"
                },
            },
            {
                $unwind: "$pet",
            },
        ])
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
        response.status(200).json(loved);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
// export const editPet = async (request, response) => {
//     let pet = await Pet.findById(request.params.id);
//     pet = request.body;

//     const editPet = new Pet(pet);
//     try{
//         await Pet.updateOne({_id: request.params.id}, editPet);
//         response.status(201).json(editPet);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }

// deleting data of user from the database
export const deleteLoved = async (request, response) => {
    try {
        await Loved.deleteOne({ _id: request.params.id });
        response.status(201).json("Removed from 'Loved' list");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}