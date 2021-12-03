// import { useEffect } from 'react';
import {useEffect, useState} from 'react';
import { saveLocation } from '../actions/locationActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Location(props){
    const [saved, setSaved] =  useState(false);
    const {location} = props;
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchImage = async() => {
          try{
            const data = await axios.get('https://ecobanjarabackend.herokuapp.com/api/image/05e4bc6a-e561-4a65-856d-1bae6f9eccb2.jpg');
            setImage(data);
        } catch(err){
            console.log(err);
          }
        };
        fetchImage();
    })

    const AddToSavedLocations = () => {
        setSaved(true);
        if(location._id){
            dispatch(saveLocation(location._id));
        }
    }

    const RemoveFromSavedLocations = () => {
        setSaved(false);
    }
    
    return(
    <div key={location._id} className="card">
              <div>
                <img src='https://ecobanjarabackend.herokuapp.com/api/image/05e4bc6a-e561-4a65-856d-1bae6f9eccb2.jpg' alt={location.name}></img>
                {!saved &&  <span className="overlay" onClick={AddToSavedLocations}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
                {saved &&  <span className="overlay2" onClick={RemoveFromSavedLocations}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
              </div>
              <p>{location.city}</p>
              <div className="card-text">
                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                {location.address}</div>
          </div>
)}
