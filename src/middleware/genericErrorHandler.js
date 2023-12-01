const genericErrorHandler = (err,req,res,next)=>{
   res.status(err.statuscode||500).send(err.message)
}

export default genericErrorHandler