import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../../config/FirebaseConfig";

export default function SocialLoginButtons() {
  const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
  };

  const firebaseLogin = async (loginType) => {
    try {
      const provider = providers[loginType];
      const userData = await signInWithPopup(firebaseAuth, provider);
      console.log(userData);
    } catch (err) {
      console.error("Authentication error: ", err.message);
    }
  };

  return (
    <ButtonGroup spacing={4} width="100%" style={{ marginTop: 15 }}>
      <Button
        variant="solid"
        colorScheme="blue"
        leftIcon={<BsGoogle />}
        onClick={() => firebaseLogin("google")}
      >
        Google
      </Button>
      <Button
        variant="solid"
        colorScheme="blue"
        leftIcon={<BsGithub />}
        onClick={() => firebaseLogin("github")}
      >
        Github
      </Button>
    </ButtonGroup>
  );
}
