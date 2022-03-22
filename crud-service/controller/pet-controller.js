import Loved from '../model/loved.js';
import Pet from '../model/pet.js';

// Get all users
export const getPets = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try {
        // finding something inside a model is time taking, so we need to add await
        const pets = await Pet.find(
            // {
            //     "name": "test"
            // },
            // {
            //     "_id": "$_id"
            // }
        );

        // const pets = await Pet.find(
        //     { name: "test" },
        //     { _id: 1 }
        // )

        // const loved = await Loved.find(
        //     {
        //         "lovedBy": "Amyganz"
        //     },
        //     {
        //         "petId": "$petId",
        //         "_id": NumberInt(0)
        //     }
        // );
        // const kocak = []

        // for(let i = 0; i < pets.length; i++) {
        //     var tes = pets[i]._id
        //     kocak.push(tes)
        // }

        // const loveds = await Loveds.find({ _id: { $nin: [ 5, 15 ] } });

        console.log(pets)
        // console.log(loved)
        response.status(200).json(pets);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// //All pets without loved
// export const getPets = async (request, response) => {
//     // Step -1 // Test API
//     // response.send('Code for Interview');
//     try{
//         // finding something inside a model is time taking, so we need to add await
//         const pets = await Pet.find();
//         response.status(200).json(pets);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }


// Save data of the user in database
export const addPet = async (request, response) => {
    // retreive the info of Pet from frontend
    const pet = request.body;
    console.log("inside")

    const newPet = new Pet(pet);
    try {
        await newPet.save();
        response.status(201).json(newPet);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get a user by id
export const getPetById = async (request, response) => {
    try {
        const pet = await Pet.findById(request.params.id);
        response.status(200).json(pet);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editPet = async (request, response) => {
    let pet = await Pet.findById(request.params.id);
    pet = request.body;

    const editPet = new Pet(pet);
    try {
        await Pet.updateOne({ _id: request.params.id }, editPet);
        response.status(201).json(editPet);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// deleting data of user from the database
export const deletePet = async (request, response) => {
    try {
        await Pet.deleteOne({ _id: request.params.id });
        response.status(201).json("Pet deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}