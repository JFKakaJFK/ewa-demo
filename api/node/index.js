module.exports = (req, res) => {
  res.end(JSON.stringify({ 
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  }));
};
