import axios from "axios";
import Link from "next/link";
import { useRef } from "react";
import SignUp from "./signup/page";
import SignIn from "./signin/page";

export default function Home() {
  return (
    <SignIn/>
  )
  }