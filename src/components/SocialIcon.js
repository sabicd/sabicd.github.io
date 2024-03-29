import React from "react";
import * as Icons from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
const SocialIcon = ({ name, link }) => {
  const Icon = Icons[name];
  return (
    <React.Fragment>
      <IconButton href={link} title={name}>
        <Icon />
      </IconButton>
    </React.Fragment>
  );
};

export default SocialIcon;
