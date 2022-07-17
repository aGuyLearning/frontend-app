import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";

  import { Autocomplete } from "@react-google-maps/api";
  import React, { useState } from "react";


  import {BiHotel} from "@react-icons/all-files/bi/BiHotel";
  import {BiMapAlt} from "@react-icons/all-files/bi/BiMapAlt";
  import {BiRestaurant} from "@react-icons/all-files/bi/BiRestaurant"
  import {BiSearch} from "@react-icons/all-files/bi/BiSearch"



  
  const Header = ({ setTypeOfPlaces, setRatings, setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null);
  
    const onLoad = (autoC) => setAutocomplete(autoC);
  
    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    };
  
    return (
      <Flex
        position={"absolute"}
        top={0}
        left={0}
        width={"full"}
        px={4}
        py={2}
        zIndex={101}
      >
        <Flex>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <InputGroup width={"35vw"} shadow="lg">
              <InputRightElement
                pointerEvents={"none"}
                children={<BiSearch color="gray" fontSize={20} />}
              />
  
              <Input
                type={"text"}
                placeholder="Search Google Map..."
                variant={"filled"}
                fontSize={18}
                bg={"white"}
                color={"gray.700"}
                _hover={{ bg: "whiteAlpha.800" }}
                _focus={{ bg: "whiteAlpha.800" }}
                _placeholder={{ color: "gray.700" }}
              />
            </InputGroup>
          </Autocomplete>
  
          <Flex alignItems={"center"} justifyContent={"center"}>
            
  
            {/* Restaurants */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              px={4}
              py={2}
              bg={"white"}
              rounded={"full"}
              ml={4}
              shadow="lg"
              cursor={"pointer"}
              _hover={{ bg: "gray.100" }}
              transition={"ease-in-out"}
              transitionDuration={"0.3s"}
              onClick={() => setTypeOfPlaces("restaurants")}
            >
              <BiRestaurant fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Restaurants
              </Text>
            </Flex>
  
            {/* Hotels */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              px={4}
              py={2}
              bg={"white"}
              rounded={"full"}
              ml={4}
              shadow="lg"
              cursor={"pointer"}
              _hover={{ bg: "gray.100" }}
              transition={"ease-in-out"}
              transitionDuration={"0.3s"}
              onClick={() => setTypeOfPlaces("lodging")}
            >
              <BiHotel fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Hotels
              </Text>
            </Flex>
  
            {/* Attractions */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              px={4}
              py={2}
              bg={"white"}
              rounded={"full"}
              ml={4}
              shadow="lg"
              cursor={"pointer"}
              _hover={{ bg: "gray.100" }}
              transition={"ease-in-out"}
              transitionDuration={"0.3s"}
              onClick={() => setTypeOfPlaces("tourist_attraction")}
            >
              <BiMapAlt fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                Attractions
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  
  export default Header;