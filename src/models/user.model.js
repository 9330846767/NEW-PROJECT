import mongoose from "mongoose";

import jwt from "jsonwebtoken"

import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: String,
    tokenExpiration: Date
});
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.resetToken = token;
        user.tokenExpiration = Date.now() + 3600000; // 1 hour expiration
        await user.save();

        const resetLink = `http://localhost:3000/reset-password/${token}`;
        
        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.tokenExpiration = undefined;
        await user.save();

       try { res.json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    };


    export const User = mongoose.model("User", userSchema)