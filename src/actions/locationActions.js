import Axios from "axios";
import { useSelector } from "react-redux";
import { LOCATION_LIST_FAIL, LOCATION_LIST_REQUEST, LOCATION_LIST_SUCCESS, SAVE_LOCATION } from "../constants/locationConstants";

export const listLocations = () => async (dispatch) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  dispatch({
    type: LOCATION_LIST_REQUEST
  });
  try {
    const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/destinations/all', 
            { headers: {
                "x-access-token": `${userInfo.accesstoken}`,
            }});
    dispatch({ type: LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOCATION_LIST_FAIL, payload: error.message });
  }
}

export const saveLocation = (locationId) => async(dispatch) => {
    const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/destination/${locationId}`);
    dispatch({
        type: SAVE_LOCATION, payload: data
    });
}