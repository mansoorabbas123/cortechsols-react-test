import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="bg-primary-background h-screen flex justify-center">
       <div className="text-foreground text-3xl">Ecommercia</div>
       {/* form card  */}
       <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" {...register("first_name",{ required: true })} />

      <input {...register("last_name", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.first_name && <span>This field is required</span>}

      <input type="submit" />
    </form>
    </div>
  );
};

export default LoginPage;
