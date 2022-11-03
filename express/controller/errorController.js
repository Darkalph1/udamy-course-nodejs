exports.get404Page = (req, res, next) =>{
    res.status(404);
    res.render('error', { pageTitle : 'page not found', path : ''});
};