import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user object
        const createdUser = new User({
            fullname,
            email,
            password: hashedPassword, // Save the hashed password
        });

        // Save the user to the database
        await createdUser.save();

        // Respond with the newly created user information
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find the user by email
        const user = await User.findOne({ email });
        
        // If user doesn't exist or password doesn't match
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            // Successful login
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
