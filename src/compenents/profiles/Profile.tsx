import React from "react";
import styled from "styled-components";
import { color } from "../utils/color";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage></ProfileImage>
      <small>John Doe</small>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${color.hoverGreyColor};
`;

export default Profile;
