import React from 'react'
import { Alert,AlertDescription,AlertTitle,AlertIcon } from '@chakra-ui/react'

const Success = () => {
  return (
    <div>
        
        <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
              background ="lightgreen"
              w='70%'
              margin='auto'
              mt='150px'
              
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="50px">
                Payment Successful!
              </AlertTitle>
              <AlertDescription  fontSize='30px'>
                Thanks for submitting your application. Our team will get back
                to you soon.
              </AlertDescription>
            </Alert>





    </div>
  )
}

export default Success