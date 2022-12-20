import { BackGroundModal } from "./styles";

interface iAddModal {
    children: React.ReactNode;
  }

export const AddModal = ({ children }: iAddModal) => {
   
    return (
      <BackGroundModal>
        {children}
      </BackGroundModal>
    );
  };
  