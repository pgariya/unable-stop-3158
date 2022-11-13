import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  Image,
  Text,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Payment = () => {
  let params = useParams();
  console.log(params.id);

  let [data, setdata] = useState([]);
  let [loading, setloading] = useState(false);

  let value = useContext(AppContext);
  //  console.log(value)
  let { formdata } = value;
  console.log(formdata);

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://equal-tortoiseshell-submarine.glitch.me/user/${params.id}`)
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <Box display="flex" w="75%" margin="auto" textAlign="left" mt="20px">
      <Box
        w="65%"
        p={20}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Box display="flex" gap="20px">
          <Image
            src={data.banner}
            alt="pay"
            w="250px"
            h="200px"
            borderRadius="20px"
          />
          <Text fontSize="20px" fontWeight="bold" textAlign="center">
            {data.descTitle}
          </Text>
        </Box>

        <Box display="flex">
          <Box>
            <Image
              src={data.cirImage}
              pt={15}
              pr={20}
              borderRadius="50px"
              w="50px"
            ></Image>
          </Box>
          <Box>
            {" "}
            <Text fontSize="18px">{data.cirDesc}</Text>
          </Box>
        </Box>

        <hr></hr>

        <Box p={10}>
          <Text fontWeight="bold" fontSize="30px" textAlign="center">
            Details Provided
          </Text>

          <Box display="flex" justifyContent="space-around">
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Name
              </Text>
              <Text>{formdata.name}</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Email
              </Text>
              <Text>{formdata.email}</Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around">
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Contact
              </Text>
              <Text>{formdata.contact_no}</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Destination
              </Text>
              <Text>{data.location}</Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around">
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Departure City
              </Text>
              <Text>{formdata.departure_city}</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Check-in-date
              </Text>
              <Text>21 November, 2022 12:00 PM</Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around">
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Checkout-date
              </Text>
              <Text>23 November, 2022 12:00 PM</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Duration
              </Text>
              <Text>{data.days}</Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around">
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                Room Type
              </Text>
              <Text>Deluxe rooms on twin sharing basis</Text>
            </Box>
            <Box>
              <Text fontSize="20px" fontWeight="bold">
                No. of People
              </Text>
              <Text> 1 Adults </Text>
            </Box>
          </Box>

          <Box ml="160px">
            <Text fontSize="20px" fontWeight="bold">
              Amount
            </Text>
            <Text>{data.price}</Text>
          </Box>
        </Box>
      </Box>

      <Box
        p={20}
        h="400px"
        w="30%"
        textAlign="center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px " }}
      >
        <Text fontSize="25px" fontWeight="bold" ml={15}>
          Price Details
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="19px" fontWeight="bold" ml={15}>
            Total Amount
          </Text>
          <Text fontSize="19px" mr={15}>
            {data.price}
          </Text>
        </Box>
        <hr></hr>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="19px" ml={15} fontWeight="bold">
            Tax
          </Text>
          <Text fontSize="19px" mr={15}>
            {" "}
            ₹ 189
          </Text>
        </Box>

        <Box ml={15} display="flex" alignItems="center" justifyContent="start">
          <Checkbox border="2px solid black" size="lg"></Checkbox>
          <Text fontSize="17px"> I accept Tripoto</Text>
        </Box>


        <NavLink to={`/mindfulPage/${params.id}/payment/success`}>
        <Button
          size="xl"
          mt={15}
          p={15}
          fontSize="20px"
          fontWeight="bold"
          color="white"
          background="blue"
        
        >
          Proceed to Pay ₹ 3988.7{" "}
        </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Payment;
