import React from "react";
import { useSelector } from "react-redux";
const UserDetail = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <>
      <h1>{userData.name}</h1>
    </>
  );
};
export default UserDetail;
