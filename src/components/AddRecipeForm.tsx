import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "./common/TextInput";
import Select from "./common/Select";
import Textarea from "./common/Textarea";

interface RecipeFormProps {
  setShowRecipeForm: (value: boolean) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ setShowRecipeForm }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    const values = {
      ...data,
      authenticity: data?.authenticity?.name,
      difficulty: data?.difficulty?.name,
      origin: data?.authenticity?.name,
    };
    console.log(values);
    alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center py-4 border-b-[1px] border-b-gray-600 mb-4">
        <img
          src="back.png"
          alt="back"
          className="cursor-pointer mr-4"
          onClick={() => setShowRecipeForm(false)}
        />
        <h2> Add new recipe </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-6">
          <TextInput
            label="Name"
            type="text"
            placeholder="Enter name"
            errors={errors}
            {...register("name", { required: "Name is required." })}
          />
        </div>
        <div className="col-span-6">
          <Controller
            name="origin"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                selected={getValues("origin")}
                options={[
                  { id: 1, name: "India" },
                  { id: 2, name: "Pakistan" },
                  { id: 3, name: "South Africa" },
                  { id: 4, name: "Spain" },
                  { id: 5, name: "Thailand" },
                ]}
                {...register("origin", {
                  required: "Origin is required",
                })}
                label="Origin"
                errors={errors}
                placeholder="Country Origin"
                setSelected={(value: any) => setValue("origin", value)}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="w-full mb-3">
        <Textarea
          {...register("description", {
            required: "Description is required.",
            maxLength: { value: 200, message: "Max Characters should be 200" },
          })}
          maxLength={200}
          placeholder="Describe your recipe"
          errors={errors}
          label="Description"
        />
      </div>
      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-6">
          <Controller
            name="difficulty"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                selected={getValues("difficulty")}
                options={[
                  { id: 1, name: "Hard" },
                  { id: 2, name: "Medium" },
                  { id: 2, name: "Easy" },
                ]}
                {...register("difficulty", {
                  required: "Difficulty is required",
                })}
                label="Difficulty"
                errors={errors}
                placeholder="Select Difficulty"
                setSelected={(value: any) => setValue("difficulty", value)}
                {...field}
              />
            )}
          />
        </div>
        <div className="col-span-6">
          <TextInput
            label="Protein"
            type="text"
            errors={errors}
            placeholder="Enter Protein"
            {...register("protein", { required: "Protein is required." })}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-6">
          <TextInput
            label="Produce"
            type="text"
            errors={errors}
            placeholder="Enter Produce"
            {...register("produce", { required: "Produce is required." })}
          />
        </div>
        <div className="col-span-6">
          <TextInput
            label="Spice"
            type="text"
            errors={errors}
            placeholder="Enter Spice"
            {...register("Spice", { required: "Spice is required." })}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-6">
          <TextInput
            label="Cooking Oil"
            type="text"
            errors={errors}
            placeholder="Enter Cooking Oil"
            {...register("cookingOil", {
              required: "Cooking Oil is required.",
            })}
          />
        </div>
        <div className="col-span-6">
          <TextInput
            label="Volume/Weight"
            type="text"
            errors={errors}
            placeholder="Enter Volume"
            {...register("volume", { required: "Volume is required." })}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-6">
          <TextInput
            label="Serves"
            type="text"
            errors={errors}
            placeholder="Enter Serves"
            {...register("produce", { required: "Serves is required." })}
          />
        </div>
        <div className="col-span-6">
          <Controller
            name="authenticity"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                selected={getValues("authenticity")}
                options={[
                  { id: 1, name: "Authentic" },
                  { id: 2, name: "Unauthentic" },
                ]}
                {...register("authenticity", {
                  required: "Authenticity is required",
                })}
                label="Authenticity"
                errors={errors}
                placeholder="Select Authenticity"
                setSelected={(value: any) => setValue("authenticity", value)}
                {...field}
              />
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full mb-3">
        <div className="col-span-12">
          <TextInput
            label="Stock"
            errors={errors}
            type="text"
            placeholder="Enter Stock"
            {...register("stock", { required: "Stock is required." })}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#764AF4] w-full py-3 justify-center rounded-sm"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
