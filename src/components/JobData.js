import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import job from "../constants/job.json";
import { SHUFFLE_TIMEOUT_IN_MILLISECONDS } from "../constants/JobData.constants";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer";
const { skills, ...jobData } = job;
const jobDataKeys = Object.keys(jobData);
const jobDataParsed = jobDataKeys.map((key) => `${key}: ${jobData[key]}`);

const shuffle = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 120,
};
const useStyles = makeStyles((theme) => ({
  techChip: {
    margin: theme.spacing(0.5),
    justifyContent: "center",
  },
  jobChip: {
    color: "white",
    backgroundColor: "#bdbdbd",
    margin: theme.spacing(0.5),
  },
}));
const JobTitle = () => {
  const classes = useStyles();

  const [jobDataState, setJobData] = useState(jobDataParsed);

  useEffect(() => {
    setTimeout(
      () => setJobData(shuffle(jobDataState)),
      SHUFFLE_TIMEOUT_IN_MILLISECONDS
    );
  }, [jobDataState]);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        alignContent="center"
        key="jobTitleGrid"
        justify="center"
      >
        <Grid item container justify="center" key="jobTitleContentHolder">
          {jobDataState.map((element) => (
            <motion.div layoutTransition={spring} key={element}>
              <Chip key={element} label={element} className={classes.jobChip} />
            </motion.div>
          ))}
        </Grid>

        <Grid
          item
          container
          alignContent="center"
          alignItems="center"
          key="techs"
          justify="center"
        >
          {skills.map((tech) => (
            <motion.div
              height={35}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              drag={true}
              width={tech.length < 5 ? 35 : 45 + tech.length}
              whileHover={{ scale: 0.95 }}
              background={null}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              key={tech}
            >
              <Chip
                size="small"
                key={tech}
                label={tech}
                clickable
                className={classes.techChip}
              />
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default JobTitle;
