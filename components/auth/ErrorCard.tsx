import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import CardWrapper from "./CardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive w-8 h-8" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
