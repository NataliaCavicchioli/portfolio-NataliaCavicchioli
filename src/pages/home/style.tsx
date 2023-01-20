import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { keyframes } from "@stitches/react";

import img from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$brand1",
  padding: "12rem 0 8rem 0",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom 1rem right 1rem",

  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
});

export const BannerContent = styled("div", {
  maxWidth: "100%",
  display: "flex",
  gap: "$2",

  "@mobile": {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "50%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  "@mobile": {
    maxWidth: "80%",
  },
});

const profileAnimation = keyframes({
  "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
  "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30%" },
  "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
});

export const LogoTipoImage = styled("img", {
  width: "15rem",
  height: "15rem",
  borderRadius: "50%",
  animation: `${profileAnimation} 8s ease-in-out 1s infinite normal none running`,
  boxShadow: "rgb(251 251 251) 0px 0px 6px 2px",
});

export const ImageContent = styled("div", {
  maxWidth: "50%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",

  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});

export const StackSection = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
});

export const ProjectsArea = styled("section", {
  padding: "4rem 0 8rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "60%",
  paddingLeft: "4rem",

  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectAreaWrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",

  "@mobile": {
    flexDirection: "column",
  },
});
