import "tailwindcss/tailwind.css"; // 이것만 추가해주면됨 (create next app 으로 tailwind.css 적용한 경우)
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderNav from "@/components/template/HeaderNavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<HeaderNav/>
			<Component {...pageProps} />
		</>
	)
}
