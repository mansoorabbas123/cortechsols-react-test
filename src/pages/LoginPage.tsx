import { useForm } from "react-hook-form";
import { Input } from "../components/common";
import { z } from "zod";
import { LoginFormSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    // simulate login
    const savedCreds = localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds") as any)
      : null;
    const token = "asjdfh;alkh983y4p8923yhf98h";
    if (
      savedCreds &&
      savedCreds.password === values.password &&
      savedCreds.email === values.email
    ) {
      savedCreds.token = token;
      localStorage.setItem("creds", JSON.stringify(savedCreds));
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="bg-primary-background h-screen pt-8  text-white">
      <h1 className="text-foreground text-3xl text-center mb-5">Ecommercia</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 mx-auto py-8 px-5 bg-secondary-background rounded-lg"
      >
        <h2 className="font-bold text-xl mb-5">Sign in to your Account</h2>

        <Input
          label="Your Email"
          type="text"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />

        <input
          type="submit"
          value="Sign in"
          className=" py-2 border w-full rounded-lg cursor-pointer "
        />
        <p className="mt-4 text-sm">
          Don't have an account yet?{" "}
          <Link to="/register" className="inline">
            Sign up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};
