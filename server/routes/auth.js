exports.authInit = (prefix, app) => {
  app.get(`${prefix}/auth`, async (req, res) => {
    res.status(200).json({ success: true });
  });
};
