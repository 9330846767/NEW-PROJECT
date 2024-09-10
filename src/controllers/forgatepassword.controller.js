const forgatePassword= app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
       
    }
    catch{
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
    }
}
)

export {forgatePassword}