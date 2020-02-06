const logMe = (req,res,next) => {

    console.log('hello logger')
    next();
    // next is necessary for this to run
    };
    
// app.use(logger);
// const logMe = logger

module.exports = logMe