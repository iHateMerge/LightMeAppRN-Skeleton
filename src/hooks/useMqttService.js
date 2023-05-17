import Paho from 'paho-mqtt';
import {useEffect, useState} from 'react';
import {broker, types} from '../constants/types';

const client = new Paho.Client(broker.host, broker.port, broker.clientId);

const useMqttService = () => {
  useEffect(() => {}, []);

  const connectToClient = ({
    successCallback = () => {},
    errorCallback = () => {},
    username,
    password,
  }) => {};

  const subscribeToTopic = async ({
    topic,
    successCallback = () => {},
    errorCallback = () => {},
  }) => {};

  const unsubscribeToTopic = ({
    topic,
    successCallback = () => {},
    errorCallback = () => {},
  }) => {};

  const publishToTopic = ({topic, message}) => {};

  const disconnect = () => {};

  const isConnected = () => {};

  return {};
};

export default useMqttService;
