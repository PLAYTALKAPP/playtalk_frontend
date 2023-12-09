import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import router from "next/router";
import Button from "@/components/atom/Button";
import Nav from "@/components/organism/Nav";
import Header from "@/components/organism/Header";
import HeaderNav from "@/components/template/HeaderNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const loginPageRouter = () => {
    router.push("/login");
  };

  return (
		<div>
			<Button text="regist"/>
			메인
		</div>

	)
}

// contextAPI 고려 _ CRUD 함수 및 전체 큰 공용 데이터 (redux or zustand)
