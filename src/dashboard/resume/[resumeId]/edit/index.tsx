import { useEffect } from "react";
import { useParams } from "react-router-dom"

const EditResume = () => {

    const params = useParams();

    useEffect(()=>{
        console.log(params)
    }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      Edit
      {params.resumeId}
    </div>
  )
}

export default EditResume
