import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Game.module.css";
import Graph from "../components/Graph";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function GetZPercent(z) {
  // z == number of standard deviations from the mean

  // if z is greater than 6.5 standard deviations from the mean the
  // number of significant digits will be outside of a reasonable range

  if (z < -6.5) {
    return 0.0;
  }

  if (z > 6.5) {
    return 1.0;
  }

  var factK = 1;
  var sum = 0;
  var term = 1;
  var k = 0;
  var loopStop = Math.exp(-23);

  while (Math.abs(term) > loopStop) {
    term =
      (((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) /
        (2 * k + 1) /
        Math.pow(2, k)) *
        Math.pow(z, k + 1)) /
      factK;
    sum += term;
    k++;
    factK *= k;
  }

  sum += 0.5;

  return sum;
}

function Game() {
  const [score, setScore] = useState(100);
  const [kellyScore, setKellyScore] = useState(100);
  const [text, setText] = useState("");
  const { difficulty, time } = useParams();

  const [lowerB, setLowerB] = useState(0);
  const [upperB, setUpperB] = useState(0);
  const [questionBounds, setQuestionBounds] = useState(0);
  const [questionType, setQuestionType] = useState(() => {
    let qT = getRandomInt(0, 3);
    if (qT === 0) {
      let lowQB;
      let upQB;
      if (difficulty === "casual") {
        lowQB = getRandomInt(1, 101);
        upQB = getRandomInt(1, 101);
      } else if (difficulty === "practical") {
        lowQB = getRandomInt(1, 501);
        upQB = getRandomInt(1, 501);
      } else {
        lowQB = getRandomInt(1, 1001);
        upQB = getRandomInt(1, 1001);
      }
      setQuestionBounds([Math.min(lowQB, upQB), Math.max(lowQB, upQB)]);
      let lowB = getRandomInt(lowQB, upQB + 1);
      let upB = getRandomInt(lowQB, upQB + 1);
      setLowerB(Math.min(lowB, upB));
      setUpperB(Math.max(lowB, upB));
    } else if (qT === 1) {
      let QB;
      if (difficulty === "casual") {
        QB = getRandomInt(1, 3);
      } else if (difficulty === "practical") {
        QB = getRandomInt(3, 6);
      } else {
        QB = getRandomInt(6, 101);
      }
      setQuestionBounds(QB);
      let lowB = getRandomInt(QB, 6 * QB + 1);
      let upB = getRandomInt(QB, 6 * QB + 1);
      setLowerB(Math.min(lowB, upB));
      setUpperB(Math.max(lowB, upB));
    } else {
      let QB;
      if (difficulty === "casual") {
        QB = getRandomInt(1, 3);
      } else if (difficulty === "practical") {
        QB = getRandomInt(3, 6);
      } else {
        QB = getRandomInt(6, 101);
      }
      setQuestionBounds(QB);
      let lowB = getRandomInt(0, QB + 1);
      let upB = getRandomInt(0, QB + 1);
      setLowerB(Math.min(lowB, upB));
      setUpperB(Math.max(lowB, upB));
    }
    return qT;
  });

  const [wO, setWO] = useState(() => {
    return 5 * getRandomInt(19, 31);
  });
  const [lO, setLO] = useState(() => {
    if (difficulty === "casual") {
      return 100;
    } else {
      return 5 * getRandomInt(16, 21);
    }
  });

  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(time);
  const [scoreHistory, setScoreHistory] = useState([[0, 100]]);
  const [kellyScoreHistory, setKellyScoreHistory] = useState([[0, 100]]);

  const [answer, setAnswer] = useState(0);
  const [delta, setDelta] = useState(0);
  const [kellyDelta, setKellyDelta] = useState(0);

  let DCDF = [
    [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1],
    [
      0, 0, 0.0278, 0.0833, 0.167, 0.2778, 0.4167, 0.583, 0.722, 0.833, 0.917,
      0.972, 1,
    ],
    [
      0, 0, 0, 0.00463, 0.0185, 0.0463, 0.0926, 0.162, 0.259, 0.375, 0.5, 0.625,
      0.741, 0.838, 0.907, 0.954, 0.981, 0.995, 1,
    ],
    [
      0,
      0,
      0,
      0,
      1 / 1296,
      5 / 1296,
      15 / 1296,
      35 / 1296,
      70 / 1296,
      126 / 1296,
      206 / 1296,
      310 / 1296,
      435 / 1296,
      575 / 1296,
      721 / 1296,
      861 / 1296,
      986 / 1296,
      1090 / 1296,
      1170 / 1296,
      1226 / 1296,
      1261 / 1296,
      1281 / 1296,
      1291 / 1296,
      1295 / 1296,
      1,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1 / 7776,
      6 / 7776,
      21 / 7776,
      56 / 7776,
      126 / 7776,
      252 / 7776,
      457 / 7776,
      762 / 7776,
      1182 / 7776,
      1722 / 7776,
      2373 / 7776,
      3108 / 7776,
      3888 / 7776,
      4668 / 7776,
      5403 / 7776,
      6054 / 7776,
      6594 / 7776,
      7014 / 7776,
      7319 / 7776,
      7524 / 7776,
      7650 / 7776,
      7720 / 7776,
      7755 / 7776,
      7770 / 7776,
      7775 / 7776,
      1,
    ],
  ];
  let CCDF = [
    [0, 0.5, 1],
    [0, 0.25, 0.75, 1],
    [0, 0.125, 0.5, 0.875, 1],
    [0, 0.0625, 0.3125, 0.6875, 0.9375, 1],
    [0, 0.03125, 0.1875, 0.5, 0.8125, 0.96875, 1],
  ];

  let roundInterval;
  useEffect(() => {
    roundInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        handleRound(0);
      }
    }, 1000);
    return () => {
      clearInterval(roundInterval);
    };
  }, [timer]);

  const redistributeWealth = (wager) => {
    let nAnswer = 0;
    let p = 0;
    if (questionType === 0) {
      p = (upperB - lowerB + 1) / (questionBounds[1] - questionBounds[0] + 1);
      nAnswer = getRandomInt(questionBounds[0], questionBounds[1] + 1);
    } else if (questionType === 1) {
      if (questionBounds <= 5) {
        p =
          DCDF[questionBounds - 1][upperB] -
          DCDF[questionBounds - 1][lowerB - 1];
      } else {
        p =
          GetZPercent(
            (upperB - 3.5 * questionBounds) /
              Math.sqrt((35 / 12) * questionBounds)
          ) -
          GetZPercent(
            (lowerB - 3.5 * questionBounds) /
              Math.sqrt((35 / 12) * questionBounds)
          );
      }
      for (var i = 0; i < questionBounds; i++) {
        nAnswer += getRandomInt(1, 7);
      }
    } else {
      if (questionBounds <= 5) {
        p =
          CCDF[questionBounds - 1][upperB + 1] -
          CCDF[questionBounds - 1][lowerB];
      } else {
        p =
          GetZPercent(
            (upperB - 0.5 * questionBounds) /
              Math.sqrt(0.5 * 0.5 * questionBounds)
          ) -
          GetZPercent(
            (lowerB - 0.5 * questionBounds) /
              Math.sqrt(0.5 * 0.5 * questionBounds)
          );
      }
      for (var i = 0; i < questionBounds; i++) {
        nAnswer += getRandomInt(0, 2);
      }
    }
    setAnswer(nAnswer);
    let kellyWager = Math.max(
      0,
      Math.floor((p / (lO / 100) - (1 - p) / (wO / 100)) * kellyScore)
    );
    if (nAnswer >= lowerB && nAnswer <= upperB) {
      setKellyDelta(kellyWager * wO);
      setKellyScore(() => {
        setKellyScoreHistory([
          ...kellyScoreHistory,
          [round, kellyScore + Math.round((kellyWager * wO) / 100)],
        ]);
        return kellyScore + Math.round((kellyWager * wO) / 100);
      });
      setDelta(wager * wO);
      setScore(() => {
        setScoreHistory([
          ...scoreHistory,
          [round, score + Math.round((wager * wO) / 100)],
        ]);
        return score + Math.round((wager * wO) / 100);
      });
    } else {
      setKellyDelta(-1 * kellyWager * lO);
      setKellyScore(() => {
        setKellyScoreHistory([
          ...kellyScoreHistory,
          [round, kellyScore - Math.round((kellyWager * lO) / 100)],
        ]);
        return kellyScore - Math.round((kellyWager * lO) / 100);
      });
      setDelta(-1 * wager * lO);
      setScore(() => {
        setScoreHistory([
          ...scoreHistory,
          [round, score - Math.round((wager * lO) / 100)],
        ]);
        if (score === Math.round((wager * lO) / 100)) {
          setRound(Math.floor(300 / time) + 1);
        }
        return score - Math.round((wager * lO) / 100);
      });
    }
  };
  const handleRound = (wager) => {
    if (round <= Math.floor(300 / time)) {
      setTimer(time);
      redistributeWealth(wager);
      setRound(round + 1);
      let qT = getRandomInt(0, 3);
      if (qT === 0) {
        let lowQB;
        let upQB;
        if (difficulty === "casual") {
          lowQB = getRandomInt(1, 101);
          upQB = getRandomInt(1, 101);
        } else if (difficulty === "practical") {
          lowQB = getRandomInt(1, 501);
          upQB = getRandomInt(1, 501);
        } else {
          lowQB = getRandomInt(1, 1001);
          upQB = getRandomInt(1, 1001);
        }
        let lowB = getRandomInt(lowQB, upQB + 1);
        let upB = getRandomInt(lowQB, upQB + 1);
        setQuestionBounds([Math.min(lowQB, upQB), Math.max(lowQB, upQB)]);
        setLowerB(Math.min(lowB, upB));
        setUpperB(Math.max(lowB, upB));
      } else if (qT === 1) {
        let QB;
        if (difficulty === "casual") {
          QB = getRandomInt(1, 3);
        } else if (difficulty === "practical") {
          QB = getRandomInt(3, 6);
        } else {
          QB = getRandomInt(6, 101);
        }
        let lowB = getRandomInt(QB, 6 * QB + 1);
        let upB = getRandomInt(QB, 6 * QB + 1);
        setQuestionBounds(QB);
        setLowerB(Math.min(lowB, upB));
        setUpperB(Math.max(lowB, upB));
      } else {
        let QB;
        if (difficulty === "casual") {
          QB = getRandomInt(1, 3);
        } else if (difficulty === "practical") {
          QB = getRandomInt(3, 6);
        } else {
          QB = getRandomInt(6, 101);
        }
        let lowB = getRandomInt(0, QB + 1);
        let upB = getRandomInt(0, QB + 1);
        setQuestionBounds(QB);
        setLowerB(Math.min(lowB, upB));
        setUpperB(Math.max(lowB, upB));
      }
      setQuestionType(qT);
      let wOP = getRandomInt(19, 31);
      let lOP = getRandomInt(16, 21);
      setWO(5 * wOP);
      setLO(() => {
        if (difficulty === "casual") {
          return 100;
        } else {
          return 5 * lOP;
        }
      });
      setText("");
    } else {
      setTimer(-1);
    }
  };

  const ensureValidInput = (e) => {
    const re = /^[0-9]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setText(e.target.value);
    }
  };

  const checkUserInput = (e) => {
    if (e.key === "Enter" && text !== "" && text >= 0 && text <= score) {
      handleRound(parseInt(text));
    }
  };

  return (
    <div>
      {(() => {
        if (round <= Math.floor(300 / time)) {
          return (
            <div className={classes.remaining}>
              <div className={classes.round}>Round: {round}</div>
              <div className={classes.timer}>Time: {timer}</div>
            </div>
          );
        }
        return (
          <div className={classes.remaining}>
            <div>Game Over</div>
          </div>
        );
      })()}
      <div className={classes.question}>
        <div className={classes.questionType}>
          {(() => {
            if (questionType === 0) {
              return (
                "Uniform Random Variable between " +
                questionBounds[0] +
                " and " +
                questionBounds[1]
              );
            } else if (questionType === 1) {
              return (
                "Rolling " +
                questionBounds +
                (questionBounds === 1 ? " die" : " dice")
              );
            } else {
              return (
                "Flipping " +
                questionBounds +
                (questionBounds === 1 ? " quarter" : " quarters")
              );
            }
          })()}
        </div>
        <div className={classes.odds}>
          W/L Odds: {wO}%, {lO}%
        </div>
        <div className={classes.questionText}>
          {(() => {
            if (questionType === 0) {
              return (
                "Landing between " + lowerB + " and " + upperB + " inclusive"
              );
            } else if (questionType === 1) {
              return (
                (questionBounds === 1
                  ? "Value between "
                  : "Sum of values between ") +
                lowerB +
                " and " +
                upperB +
                " inclusive"
              );
            } else {
              return "Landing between " + lowerB + " and " + upperB + " heads";
            }
          })()}
        </div>
        <div className={classes.delta}>
          <div>{delta >= 0 ? "+" + delta : delta}</div>
          <div>Landed Value: {answer}</div>
          <div>{kellyDelta >= 0 ? "+" + kellyDelta : kellyDelta}</div>
        </div>
      </div>
      <div className={classes.terminal}>
        <div className={classes.score}>{score}</div>
        <input
          value={text}
          onKeyDown={checkUserInput}
          onChange={ensureValidInput}
          placeholder="Bet amount"
        />
        <div className={classes.score}>{kellyScore}</div>
      </div>

      <div className={classes.results}>
        <Graph
          key={round}
          history={scoreHistory}
          kellyHistory={kellyScoreHistory}
        />
      </div>
    </div>
  );
}

export default Game;
