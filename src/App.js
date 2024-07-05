import logo from "./pcn.jpeg";

import "@aws-amplify/ui-react/styles.css";

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import { Flex, Text, Divider } from '@aws-amplify/ui-react';

export const VerticalDividerExample = () => (
  <Flex direction="row" justifyContent="space-around">
    <Text>Before</Text>
    <Divider orientation="vertical" />
    <Text>After</Text>
  </Flex>
);

function App({ signOut }) {
  return (
    <View className="App">
        <Header />
        <Card>

        <Image src={logo} className="App-logo" alt="logo" />
        {/* <Image
          alt="Amplify logo"
          src="/pcn.jpeg"
          objectFit="initial"
          objectPosition="50% 50%"
          backgroundColor="initial"
          height="75%"
          width="75%"
          opacity="100%"
          onClick={() => alert('📸 Say cheese!')}
        /> */}
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);