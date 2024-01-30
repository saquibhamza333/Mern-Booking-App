import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import * as apiClient from "../api-client"
import MyHotelCard from "../components/MyHotelCard"


const MyHotels = () => {
    const {data : hotelData} = useQuery("fetchMyHotels",apiClient.fetchMyHotels,{
        onError : ()=>{}
    })

      if (!hotelData) {
    return <span>No Hotels found</span>;
  }
  return (
 <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {
            hotelData.map((hotel) =>(
                  <MyHotelCard key={hotel._id} hotel = {hotel}/>
            ))

        }

      
       
      </div>
    </div>
  );
}

export default MyHotels