// UserProfileContext.js

import React, { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const updateProfilePicture = (imageUrl) => {
    setProfilePictureUrl(imageUrl);
  };

  const contextValue = {
    profilePictureUrl,
    updateProfilePicture,
  };

  return (
    <UserProfileContext.Provider value={contextValue}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
