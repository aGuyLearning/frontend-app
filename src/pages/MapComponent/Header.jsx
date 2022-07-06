import React from "react";

import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";

import {BiSearch} from "@react-icons/all-files/bi/BiSearch"

import {Autocomplete} from "@react-google-maps/api";

const Header = ({setTypeOfPlaces, setRating, setCoordinates}) => {
    return <Flex position={"absolute"}
        top={0}
        left={0}
        width={"full"}
        px={4}
        py={2}
        zIndex={101}>
            <Flex>
                <Autocomplete>
                    <InputGroup width={"35vw"} shadow='lg'>
                        <InputRightElement 
                        pointerEvents={'none'}
                        children={<BiSearch color="gray" fontSize={20}/>}
                        />
                    </InputGroup>
                </Autocomplete>
            </Flex>
        </Flex>


}

export default Header;
