"use client"
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Effect from "./components/Effect";
import { useState } from "react";
import UserProfile from "./components/UserProfile";


export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(userData)
  return (
   <Container maxW="container.lg">
    <Navbar/>
    <Text fontSize={"2xl"} textAlign={"center"} my={4}>
      Search user's  on Github
    </Text>
    <Search setUserData ={(res) => setUserData(res)} setLoading={setLoading}/>
    {userData && <UserProfile userData={userData}/> }
    <Effect/>
   </Container>
  );
}
