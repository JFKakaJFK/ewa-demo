module.exports = (req, res) => {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  
  res.end(JSON.stringify({ 
    x,
    y,
  }));
};
