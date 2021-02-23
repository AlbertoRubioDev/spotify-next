import { useToast } from "@chakra-ui/react"

const useBottomToast = () => {

  const toast = useToast();

  const triggerToast = (title, description, status) => {
    toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      })
  }


  return [triggerToast];
};

export default useBottomToast;