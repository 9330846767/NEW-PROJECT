import nodemailer from "nodemailer"

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const userHandler = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});
const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: 'Password Reset',
};

userHandler.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.status(500).json({ message: 'Error sending email' });
    }
    res.json({ message: 'Reset link sent to your email' });
});
try {
} catch (error) {
res.status(500).json({ message: 'Server error' });
}
export {userHandler}

