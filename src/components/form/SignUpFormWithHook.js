import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

// using react hook form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormWithHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    // dirtyFields: tra ra 1 obj về các trường khi có sự thay đổi
    // isDirty: trả ra true nếu chạm vào or thay đổi bất kì 1 trường nào đó
    // isValid:
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const onSubmit = async (values) => {
    // console.log(values);

    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );

    return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 2000);
    // });
  };
  return (
    <form
      action=""
      className="p-10 w-full max-w-[500px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // name, onChange, onBlur, value
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          //   // pattern: regex
          // })}
        />
        {/* react-hook-form */}
        {/* {errors?.firstName?.type === "required" && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          id="email"
          placeholder="Enter your email address"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100"
          // name, onChange, onBlur, value
          {...register("email")}
        /> */}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};
export default SignUpFormWithHook;
