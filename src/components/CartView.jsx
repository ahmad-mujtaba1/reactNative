import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {addQuantity, subtractQuantity} from '../redux/actions/cartActions';
const CardView = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state =>
    state.cartReducer.cartItems.filter(product => product.selected === true),
  );
  const totalAmmount = () => {
    let sum = 0;
    cartItems.map(product => {
      sum = product.totalPrice + sum;
    });
    return sum;
  };
  const handleDecrement = id => {
    dispatch(subtractQuantity(id));
  };
  const handleIncreament = id => {
    dispatch(addQuantity(id));
  };
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderStyle: 'solid',
              padding: 8,

              borderColor: 'gray',
            }}>
            <Image source={item.image} style={{width: 100, height: 80}} />
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                color: 'black',
                paddingTop: 10,
                fontWeight: 'bold',
                fontSize: 19,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                marginTop: 10,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {item.totalPrice}
              {'rs'}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <TouchableOpacity onPress={() => handleIncreament(item.id)}>
              <FontAwesomeIcon
                icon={faCirclePlus}
                size={20}
                color={'purple'}
                style={{marginTop: 9, margin: 5}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {item.quantity}
            </Text>
            <TouchableOpacity onPress={() => handleDecrement(item.id)}>
              <FontAwesomeIcon
                icon={faCircleMinus}
                size={20}
                color={'purple'}
                style={{marginTop: 9, margin: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#ffffff', '#ffffff', '#BDB5D5']}
          style={styles.linearGradient}>
          <View
            style={{
              height: '75%',
            }}>
            <FlatList renderItem={renderItem} data={cartItems} numColumns={1} />
          </View>
          <View>
            <View
              style={{
                padding: 5,
                alignItems: 'center',
                borderColor: 'gray',
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Total Amount: {totalAmmount()}Rs
              </Text>
            </View>
            <TouchableOpacity style={styles.SignInButton}>
              <Text>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  SignInButton: {
    marginTop: 30,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#CBC3E3',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default CardView;
