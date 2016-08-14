module.exports = {
  index: function(req, res) {
    res.json([
      {
        name: 'Gerald',
        age: 33,
        email: 'mailto:geraldangw@gmail.com'
      },
      {
        name: 'Ben Yang',
        age: 31,
        email: 'mailto:benyang00@gmail.com'
      },
      {
        name: 'Weiyang',
        age: 81,
        email: 'mailto:thetaiwanese@gmail.com'
      },
      {
        name: 'Jen',
        age: 12,
        email: 'mailto:jen@gmail.com'
      },
      {
        name: 'Chong',
        age: 25,
        email: 'mailto:chong@gmail.com'
      },
    ]);
  }
};
