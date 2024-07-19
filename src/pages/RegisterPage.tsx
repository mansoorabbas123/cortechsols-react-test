import { useForm } from "react-hook-form";
import { Input } from "../components/common";
import { z } from "zod";
import { RegisterFormSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
    console.log(values);
    // simulate register in db
    localStorage.setItem("creds", JSON.stringify(values));
    navigate("/login");
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
          label="First Name"
          type="text"
          register={register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          type="text"
          register={register("lastName")}
          error={errors.lastName?.message}
        />

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
          value="Create an account"
          className=" py-2 border w-full rounded-lg cursor-pointer "
        />
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="inline">
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};
