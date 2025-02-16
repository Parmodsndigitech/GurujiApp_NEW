import { StyleSheet, View } from 'react-native'
import React from 'react'
import HomeYoutubVideosInsideCom from '../../Components/HomeYoutubVideosInsideCom'
import AppWapper from '../../Components/AppWapper'

const HomeYoutubVideosInside = ({route}) => {
  const { data } = route?.params;
  return (
    <AppWapper>
      <HomeYoutubVideosInsideCom data={data}/>
    </AppWapper>
  )
}

export default HomeYoutubVideosInside

const styles = StyleSheet.create({})