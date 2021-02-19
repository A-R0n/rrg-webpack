import React, {useEffect} from "react";
import axios from "axios";

const useParkingLotIdItem = (id) => {
    
    let [parkingLotData, setParkingLotData] = React.useState();
    const [isResponse200, setIsResponse200] = React.useState(false);
  
    useEffect(() => {
    if (typeof id === "number") {
      const source = axios.CancelToken.source();
      const fetchParkingLot = async () => {
        try {
          await axios
            .get(`http://localhost:8083/api/parkinglot/${id}`, {
              cancelToken: source.token,
            })
            .then((res) => {
                setParkingLotData(res.data);
                setIsResponse200(true);
            });
        } catch (error) {
          if (axios.isCancel(error)) {
          } else {
            throw error;
          }
        }
      };
      fetchParkingLot();

      return () => {
        source.cancel();
      };
    }
    }, [id]);
    
    return [parkingLotData, isResponse200]
}

export default useParkingLotIdItem;
