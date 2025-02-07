import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {onAuthStateChanged} from '@react-native-firebase/auth';
import {firebaseAuth} from '../config/firebase';

export default function userAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsub;
  }, []);
  return {currentUser};
}
