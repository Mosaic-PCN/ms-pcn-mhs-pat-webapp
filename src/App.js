import logo from "./pcn.jpeg";
import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import Header from './components/Header';
import Form from './components/Form';
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
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default withAuthenticator(App);