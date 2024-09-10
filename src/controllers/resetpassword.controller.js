const resetPassword=app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
}
)

export {resetPassword}