import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { BarLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';
import { Navigate, useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate()

  const handleRoleSelection=async(role)=> {
    await user.update({
      unsafeMetadata: { role },
    }).then(()=>{
        navigate(role === "recruiter" ? "/PostJobs" : "/jobs");
    })
    .catch((err) => {
      console.error("Error uploading role:", err);
    });
  };

   useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === "recruiter" ? "/PostJobs" : "/jobs"
      );
    }
  }, [user, navigate]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#3697b7" />;
  }

  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <h2 className='gradient-title font-extrabold text-7x1 sm:text-8x1 tracking-tighter'>
        I am a...
      </h2>
      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40'>
        <Button variant='blue' 
        className='h-36 text-2x1' 
        onClick={()=>handleRoleSelection("candidate")} > 
        Candidate
        </Button>
        <Button variant='destructive' 
        className='h-36 text-2x1'
        onClick={()=>handleRoleSelection("recruiter")}> 
        Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;