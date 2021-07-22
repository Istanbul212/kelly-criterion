import { Link } from "react-router-dom";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <div>
      <div className={classes.instruction}>
        Welcome to Trader's Tavern! This tool will help you make decisions on
        the fly, with the intention of being reminisicent of a trader's
        environment. Build an intuition for probability distributions by
        competing against the Kelly Criterion. For now, the different
        distributions supported are Uniform, Discrete (sum of multiple dice
        rolls, approaches Gaussian), and Binomial (coin flipping). Select the
        difficulty below, where each successive level will add complication to
        the previous one. These complications will take the form of greater
        variability, and the necessity to make quicker estimates of the
        respective distributions. A live graph accompanies the game, comparing
        your score to the Kelly score, to mock the stress that might be involved
        in a live setting. For the best results, you should not let any biases
        w.r.t the Kelly Criterion score influence your decisions. Also,
        reminder: if the odds are that you lose less than 100% of your wager,
        the house is absorbing the risk, so you are free to overbet so long as
        you don't bust! Good luck!
      </div>
      <ul>
        <Link to="/kelly-criterion/casual/12">
          <li>Casual</li>
        </Link>
        <Link to="/kelly-criterion/practical/6">
          <li>Practical</li>
        </Link>
        <Link to="/kelly-criterion/masochist/3">
          <li>Masochist</li>
        </Link>
      </ul>
    </div>
  );
}

export default Landing;
