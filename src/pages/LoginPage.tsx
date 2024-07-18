import { useForm } from "react-hook-form";
import { Input } from "../components/common";
import { z } from "zod";
import { LoginFormSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    console.log(values);
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
      </form>
    </div>
  );
};
