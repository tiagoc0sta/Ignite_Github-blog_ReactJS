import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { api } from "../../../../lib/axios";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
interface ProfileData{
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData
);
  const [isLoading, setIsLoading] = useState(true);

    const getProfileData = useCallback(async () =>{
      try{
        setIsLoading(true);
        const response = await api.get(`/users/${username}`)

        setProfileData(response.data);
      }finally{
        setIsLoading(false);
      }
    }, [profileData]) ;

  useEffect(()=>{
    getProfileData();
  }, [])  

  return (
    <ProfileContainer>
     {isLoading ? (<Spinner/>) : (
      <>
         <ProfilePicture src="https://github.com/tiagoc0sta.png"/>
      <ProfileDetails>
        <header>
          <h1>Tiago Costa</h1>
          <ExternalLink 
            text="Github" 
            href="https://github.com/tiagoc0sta"
            target="_blank"
          />
        </header>
        <p>{profileData.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/> 
            tiagoc0sta 
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            TFC Invention & Technology 
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            99 seguidores
          </li>
        </ul>
      </ProfileDetails>
      </> 
     )};
    </ProfileContainer>
  );
}