import React from "react";
import styles from "./List.module.css";

// Standartabweichung, Ticker + Name, prozentuale Veränderung, Link zu Yahoo Finance

const data = [
  {
    ticker: "FACT",
    c_sigmas: -18.6542606736,
    clog_sigmas: -17.7611206445,
    c_0: 10.14,
    "c_-1": 10.54,
    samples: 456,
    c_0_date: "2023-07-06",
    mc: 217471802.7899999917,
    mc_wso: 205355810.0,
    mc_scso: 112400000.0,
    composite_mc: 217471802.7899999917,
    w_mc: 0.0000031944,
    clog_sigmas_w: 0.1776679429,
  },
  {
    ticker: "GLTA.U",
    c_sigmas: -10.8993270455,
    clog_sigmas: -11.5501647259,
    c_0: 9.11,
    "c_-1": 10.45,
    samples: 181,
    c_0_date: "2023-07-06",
    mc: 1000,
    mc_wso: null,
    mc_scso: 129420000.0,
    composite_mc: 129420000.0,
    w_mc: 0.000001901,
    clog_sigmas_w: 0.1155236045,
  },
  {
    ticker: "VBIV",
    c_sigmas: -0.4805886758,
    clog_sigmas: -10.0845643709,
    c_0: 1.18,
    "c_-1": 2.42,
    samples: 504,
    c_0_date: "2023-07-06",
    mc: 22726542.9600000009,
    mc_wso: 8608539.0,
    mc_scso: 8610000.0,
    composite_mc: 22726542.9600000009,
    w_mc: 0.0000003338,
    clog_sigmas_w: 0.1008490102,
  },
  {
    ticker: "SUAC",
    c_sigmas: -10.1719071064,
    clog_sigmas: -9.9530095586,
    c_0: 10.54,
    "c_-1": 10.98,
    samples: 209,
    c_0_date: "2023-07-06",
    mc: 437228000.0000000596,
    mc_wso: 418000000.0,
    mc_scso: 313500000.0,
    composite_mc: 437228000.0000000596,
    w_mc: 0.0000064224,
    clog_sigmas_w: 0.0995940177,
  },
  {
    ticker: "EDTX",
    c_sigmas: 7.7708053669,
    clog_sigmas: 9.663375837,
    c_0: 22.95,
    "c_-1": 11.8268,
    samples: 303,
    c_0_date: "2023-07-06",
    mc: 39182367.5199999958,
    mc_wso: 69293576.0,
    mc_scso: 69300000.0,
    composite_mc: 39182367.5199999958,
    w_mc: 0.0000005755,
    clog_sigmas_w: 0.0966393201,
  },
];

const List = () => {
  return (
    <>
      <div className={styles.theDate}>Yesterday</div>
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.lines}>
            <div className={styles.ticker}>{item["ticker"]}</div>
            <div>{item.mc}</div>
            <div>{item.samples}</div>
            <div>{item.c_sigmas}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
