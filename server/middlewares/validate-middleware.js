// await schema.parseAsync(req.body) is the line where you use Zod to validate the request body data against the defined schema. -- schemaAsync(req.body) ye check krta h user ne jo data data h vo schema ke data se match krta h ya nhi 

// `.parse(data: unknown): T`

// Give any Zod schema, you can call its `.parse` method to check `data` is valid. If if is, a value is returned with full type information! otherwise, an error is thrown

const validate = (schema) => async(req,res,next) => {  // schema -- signupSchema h
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        // # 15
        // const message = err.errors[0].message; 
        // console.log(message);
        //res.status(400).json({message});
        
        // #16
        const status = 422;
        const message = "Fill the input Properly";
        const extraDetails = err.errors[0].message;

        const error ={
            status,message,extraDetails
        };
        console.log(error);
        next(error);
    }
};

module.exports = validate ;