import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm";


const ImagesSection = () => {
    const {register , formState:{errors},watch,setValue} = useFormContext<HotelFormData>();
    const existingImageUrls = watch("imageUrls");
    const handleDelete =(event:React.MouseEvent<HTMLButtonElement,MouseEvent>,
        imageUrl:string)=>{
        event.preventDefault();
        setValue("imageUrls",existingImageUrls.filter((url)=>url !== imageUrl))

        }

  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Images</h2>
        <div className="flex flex-col border rounded p-4 gap-4">
         {existingImageUrls && (
  <div className="grid grid-cols-6 gap-4">
    {existingImageUrls.map((url, index) =>(

      <div key={index} className="relative group h-52">
        <img
          src={url}
          className="min-h-full object-cover"
          alt={`Image ${index}`}
        />
        <button
        onClick ={(event)=>handleDelete(event,url)}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
)}

            
           
            <input type="file" multiple accept="image/*" className="w-full text-gray-700 font-normal"  {...register('imageFiles',{
                validate:(imageFiles)=>{
                    const totalLength = imageFiles.length + (existingImageUrls?.length || 0);
                    if(totalLength===0){
                        return "at least one image should be uploaded"

                    }
                    if(totalLength>6){
                        return "Total number of images should not be greater than 6"
                    }
                    return true;

                }
            })}>
                

            </input>

        </div>
        {errors.imageFiles && (
            <span className="text-red-500 font-bold text-sm">
                {errors.imageFiles.message}
                </span>
        )}
    </div>
  )
}

export default ImagesSection