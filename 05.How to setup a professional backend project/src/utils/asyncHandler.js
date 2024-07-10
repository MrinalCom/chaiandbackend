const asyncHandler=(responseHandler)=>{
    (req,res,next)=>{
        Promise.resolve(responseHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

import { response } from "express"





export {asyncHandler}


// const asyncHandler=()=>{}
// const asyncHandler=(func)=> {()=>{}}
// const asyncHandler=(func)=>async ()=>{}


// const asyncHandler=(fn) => async(req, res,  next)=> {
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message,
//         })
//     }
// }