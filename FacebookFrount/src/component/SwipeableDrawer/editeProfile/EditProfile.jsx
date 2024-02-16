import  { useEffect, useState } from "react";


import { Button, Card, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { editProfileApi, getProfile } from "../../../Api/profile.api";
import InputImage from "./uplaud/inputImage";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    avatar: "",
    job: "",
    linkFaceBook:"",
    LinkTwitter:"",
    LinkInstagram:"",
  });

  useEffect(() => {
 
      getProfile() 
      .then((res) => {
       setProfile({
          fullName: res.data.fullName,
          email: res.data.email,
          avatar: res.data.avatar,
          job: res.data.job,
          description:res.data.description,
        });
      })
      .catch(() => {
        alert("Failed to fetch profile. Please try again.");
      });
  }, []);

  const handleChangeEditProfileForm = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleChangeImage = (value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      avatar: value,
    }));
  };

  const handleEditProfile = () => {
    editProfileApi(profile)
      
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error("Failed to update profile. Please try again.");
      });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <Card>
        <TextField
          name="fullName"
          label="Full Name"
          onChange={handleChangeEditProfileForm}
          value={profile.fullName}
        />
        <TextField
          name="email"
          label="Email"
          onChange={handleChangeEditProfileForm}
          value={profile.email}
        />
        <TextField
          name="job"
          label="Job"
          onChange={handleChangeEditProfileForm}
          value={profile.job}
        />
          <TextField
          name="description"
          label="description"
          onChange={handleChangeEditProfileForm}
          value={profile.description}
        />
            <TextField
          name="linkFaceBook"
          label="linkFaceBook"
          onChange={handleChangeEditProfileForm}
          value={profile.linkFaceBook}
        />

<TextField
          name="LinkTwitter"
          label="LinkTwitter"
          onChange={handleChangeEditProfileForm}
          value={profile.LinkTwitter}
        />
               <TextField
          name="LinkInstagram"
          label="LinkInstagram"
          onChange={handleChangeEditProfileForm}
          value={profile.LinkInstagram}
        />
<TextField
          name="bio"
          label="bio"
          onChange={handleChangeEditProfileForm}
          value={profile.bio}
        />

<InputImage  setValue={handleChangeEditProfileForm} value={profile.avatar}/>

        <Button variant="contained" onClick={handleEditProfile}>
          Save
        </Button>
      </Card>
    </div>
  );
};

export default EditProfile;
