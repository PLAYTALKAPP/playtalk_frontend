import router from "next/router";
import Button from "@/components/atom/Button";

const Login = () => {
  const pageRouter = () => {
    router.push("/");
  };

  return (
    <div>
      로그인페이지
      <Button text="done" routing={pageRouter} />
    </div>
  );
};

export default Login;
