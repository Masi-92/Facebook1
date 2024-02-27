import { useEffect, useState } from "react";

import { Button, Card, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { editProfileApi, getProfile } from "../../../Api/profile.api";
import InputImage from "./uplaud/inputImage";
import style from "./editProfile.module.scss";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    avatar: "",
    job: "",
    linkFaceBook: "",
    LinkTwitter: "",
    LinkInstagram: "",
    background: "",
  });

  useEffect(() => {
    getProfile()
      .then((res) => {
        setProfile({
          fullName: res.data.fullName,
          email: res.data.email,
          avatar: res.data.avatar,
          job: res.data.job,
          description: res.data.description,
          linkFaceBook: res.data.linkFaceBook,
          LinkTwitter: res.data.LinkTwitter,
          LinkInstagram: res.data.LinkInstagram,
          background: res.data.background,
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

  const handleChangeBackground = (value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      background: value,
    }));
  };

  const handleEditProfile = () => {
    editProfileApi(profile)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update profile. Please try again.");
      });
  };

  return (
    <div  className={style.container1}>
    <div className={style.container}>
     
      <Card >
        <div className={style.cardContent}>
          <div>
            <TextField
              name="fullName"
              label="Full Name"
              onChange={handleChangeEditProfileForm}
              value={profile.fullName}
              style={{marginTop:"1rem"}}
            />
            <TextField
              name="email"
              label="Email"
              onChange={handleChangeEditProfileForm}
              value={profile.email}
              style={{marginTop:"1rem"}}
            />
            <TextField
              name="job"
              label="Job"
              onChange={handleChangeEditProfileForm}
              value={profile.job}
              style={{marginTop:"1rem"}}
            />
             <TextField
              name="bio"
              label="bio"
              onChange={handleChangeEditProfileForm}
              value={profile.bio}
              style={{marginTop:"1rem"}}
            />

            <TextField
              name="description"
              label="description"
              onChange={handleChangeEditProfileForm}
              value={profile.description}
              style={{marginTop:"1rem"}}
            />
        
          </div>
          <div>
            <TextField
              name="LinkTwitter"
              label="LinkTwitter"
              onChange={handleChangeEditProfileForm}
              value={profile.LinkTwitter}
          
            />
                <TextField
              name="linkFaceBook"
              label="linkFaceBook"
              onChange={handleChangeEditProfileForm}
              value={profile.linkFaceBook}
              style={{marginTop:"1rem" }}
            />
            <TextField
              name="LinkInstagram"
              label="LinkInstagram"
              onChange={handleChangeEditProfileForm}
              value={profile.LinkInstagram}
              style={{marginTop:"1rem"}}
            />
           
            <InputImage    className={style.inputImage} setValue={handleChangeImage} value={profile.avatar} />

            <InputImage
              setValue={handleChangeBackground}
              value={profile.background}
              className={style.inputImage}
         
            />
          </div>
    
        </div>
        <div className={style.saveButtonContainer}>
            {" "}
            <Button variant="contained" onClick={handleEditProfile}>
              Save
            </Button>
          </div>
      </Card>
      </div>
    </div>
  );
};

export default EditProfile;
