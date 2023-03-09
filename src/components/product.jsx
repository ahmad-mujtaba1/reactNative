import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ProductDetails from './productDetailModal';
import {useNavigation} from '@react-navigation/native';
const Product = ({item}) => {
  const navigation = useNavigation();
  const handleProductModal = () => {
    navigation.navigate('productDetail', {item: item});
  };
  return (
    <>
      <TouchableOpacity onPress={handleProductModal}>
        <View
          style={{
            width: 150,
            height: 150,
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            shadowColor: '#000',
          }}>
          <View
            style={{
              height: 110,

              padding: 8,
            }}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', paddingTop: 2}}>{item.name}</Text>
            <Text style={{color: 'black', paddingBottom: 4}}>
              {item.price}
              {'rs'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Product;
