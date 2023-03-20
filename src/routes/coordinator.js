
export const goToPostPage = (navigate) => {
  navigate("/postpage");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};

export const goToSubPostPage = (navigate, idSubPost) => {
  navigate(`/postpage/${idSubPost}/subpost`);
};


