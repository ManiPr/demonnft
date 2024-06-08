import React from "react";
import "./Index.css";
import Header from '../../components/header/Header'
import StepSec from '../../components/step-sec/StepSec'
import TopSeller from '../../components/top-seller/TopSeller'
export default function Index() {

  return (
    <>
    <Header></Header>
    <StepSec></StepSec>
    <TopSeller></TopSeller>
    </>
  );
}
