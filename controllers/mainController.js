const path = require('path');

const mainController = {
    
    index: (req,res) => {
      
            res.render('home', { title: 'portfolio' });
    
    }

};

module.exports = mainController;