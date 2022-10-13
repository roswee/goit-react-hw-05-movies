import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchCast } from "services/API";
import {CastLink, CastMember} from "./CastStyles"

export const Cast = () => {
    const [castTeam, setCastTeam] = useState([]);
    const { id } = useParams();

    const renderCast = async id => {
        try {
            const result = await fetchCast(id);
            setCastTeam(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        renderCast(id)
    }, [])
    
    return (
        <CastLink>
            {castTeam.map(({ id, original_name, character, profile_path }) => (
                <CastMember key={id}>
                    <img src={
                        profile_path?
                        `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png`} width="150px"/>
                    <p>{original_name}</p>
                    <p>Character: {character}</p>
                </CastMember>
            ))}
        </CastLink>
    )
}