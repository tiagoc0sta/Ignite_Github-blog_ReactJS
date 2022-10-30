import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/tiagoc0sta.png"/>
      <ProfileDetails>
        <header>
          <h1>Tiago Costa</h1>
          <ExternalLink text="Github" href=""/>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
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
    </ProfileContainer>
  )
}