"use client"

import { actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = ({
  children,
  image,
  name,
  action,
  text,
}: ImageInputContainerProps) => {
  const [isUpdatedFormVisible, setIsUpdatedFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        priority
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-[200px] h-[200px]"
      />
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => setIsUpdatedFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdatedFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
};
export default ImageInputContainer;
