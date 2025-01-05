import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/UseFetch";
import { useUser } from "@clerk/clerk-react";
import { Map } from "lucide-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobListing = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const { isLoaded } = useUser();
  
   const {

    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location, 
    company_id, 
    searchQuery,
  });

   useEffect(() => {
    if (isLoaded) fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    if (!isLoaded) {
      return <BarLoader className="mb-4" width={"100%"} color="#3697b7" />;
    }
 
  return <div>
    <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs </h1>

    {/* Add filters */}

    {loadingJobs && (
      <BarLoader className="mt-4" width={"100%"} color="#3697b7" />
    )}

    { loadingJobs === false && (
      <div>
        {jobs?.length ? (
            jobs.map((jobs)=>{
              return <span>{jobs.title} </span>
            })
        ): (
          <div>
            No Jobs Found
          </div>
        ) }
      </div>

      
    )}
  </div>;

};



export default JobListing;