import {React,useState,useEffect} from "react";


export const FormSection=()=>{
    const [toggleState,setToggleState]=useState("dog");

    const getSelectValue =(index)=>{
       
        setToggleState(index)
    }
    const intialValues = {username:'',email:'',mobile:''};
    const [formValues,setFormValues]=useState(intialValues);
    const [formErrors,setFormErrors]=useState({})
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){

        }
    },[formErrors])

    const validate = (values) =>{
        const errors = {};
        const regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexForMobile = /^[6-9]\d{9}$/;
        if(!values.username){
            errors.username="Name is required"
        }
        if(!values.email){
            errors.email="email is required"
        }else if(!regexForEmail.test(values.email)){
            errors.email="This is not a valid email"
        }
        if(!values.mobile){
            errors.mobile="Mobile is required"
        }else if(!regexForMobile.test(values.mobile)){
            errors.mobile="This is not a Valid Mobile Number"
        }

        return errors;
    }

    return(
        <>
        {Object.keys(formErrors).length === 0 && isSubmit ? alert('Thank You, Will Soon get in touch with you for further details'):null}
             <form action="#"className='formClass'id='formId' onSubmit={handleSubmit}>
                
                 {/* Pet Select field   */}
                <div className="row">
                    <div className="col-md-6 my-3">
                    <h6>Pet Type*</h6>
                    <select className="form-select" aria-label="Default select example"id='selectbox' onChange={e=>getSelectValue(e.target.value)}>
                    
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                       
                    </select>
                 
                    </div>
                </div>
                <div className={toggleState === "dog" ? "row" : "d-none"} id="dogBreed">
                    <div className="col-md-6 mt-2 mb-4 mb-lg-5">
                    <h6>Breed*</h6>
                    <select className="form-select" aria-label="Default select example"id='selectbox'>
                      
                        <option value="dog">Akita</option>
                        <option value="cat">Husky</option>
                        <option value="cat">Dobermann</option>
                    </select>
                   
                    </div>
                </div>
                <div className={toggleState === "cat" ? "row" : "row mt-3 d-none"} id="catBreed">
                    <div className="col-md-6 mt-2 mb-4 mb-lg-5">
                    <h6>Breed*</h6>
                    <select className="form-select" aria-label="Default select example"id='selectbox'>
                      
                        <option value="dog">Snowshoe</option>
                        <option value="cat">Calico</option>
                        <option value="cat">Siamese</option>
                    </select>
                   
                    </div>
                </div>
                <h5 className="mt-2 mb-4">Please fill your details </h5>
                {/* name field  */}
                <div className="row ">
                    <div className="col-md-6 ">
                    <h6 className='my-2 mt-lg-0'>Name*</h6>
                    <div className={formErrors.username?"form-group error":"form-group"}>
                       
                        <input 
                        type="text"
                        className='form-control'
                        id='regname'
                        placeholder='Enter your name'
                        value={formValues.name}    
                        onChange={handleChange}
                        name="username"
                        />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small id="smalls">{formErrors.username}</small>
                           
                            
                    </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6 mt-4">
                    <h6 className='mb-2'>Email address*</h6>
                        <div className={formErrors.email?"form-group error":"form-group"}>
                        
                            <input type="email"
                            className='form-control'
                            id='regemail'
                            placeholder='Enter your email'
                            value={formValues.email}   
                            onChange={handleChange}  
                            name="email" 
                            />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small id='smalls'>{formErrors.email}</small>
                        </div>
                    </div>
                </div>
                <div className="row ">
                        <div className="col-md-6 mt-4 mb-4 mb-lg-5">
                        <h6 className='mb-2'>Mobile*</h6>
                        <div className={formErrors.mobile?"form-group error":"form-group"}>
                            
                            <input type="text"
                            className='form-control'
                            id='regmobile'
                            placeholder='Enter your mobile number' 
                            value={formValues.mobile} 
                            onChange={handleChange}   
                            name="mobile"    
                            />
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                            <small id="smalls">{formErrors.mobile}</small>
                        </div>
                        </div>
                    </div>
                    <div className="text-center text-lg-end mt-2">
                    <button className="btn active-btn" type="submit" id="btns">REQUEST FOR ADOPTION</button>
                </div>
                </form>  
        </>
    )
}