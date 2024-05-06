import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Image } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [snapshot, setSnapshot] = useState("");

  const handleSnapshot = () => {
    // This is a placeholder for the snapshot functionality
    // In a real application, you would have backend logic to capture a snapshot of the URL content
    setSnapshot(`https://images.unsplash.com/photo-1541887796712-054f4b0f8e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmFwc2hvdCUyMG9mJTIwJTI0JTdCdXJsJTdEfGVufDB8fHx8MTcxNTAxNzM3N3ww&ixlib=rb-4.0.3&q=80&w=1080`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb={4}>
          Google Shots Creator
        </Text>
        <Input placeholder="Enter URL here" value={url} onChange={(e) => setUrl(e.target.value)} size="md" />
        <Button leftIcon={<FaCamera />} colorScheme="blue" onClick={handleSnapshot}>
          Create Snapshot
        </Button>
        {snapshot && (
          <Box mt={4}>
            <Text>Snapshot for: {url}</Text>
            <Image src={snapshot} alt="Snapshot" />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
