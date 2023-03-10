import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons/faCircleMinus';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  addQuantity,
  addToCart,
  subtractQuantity,
} from '../redux/actions/cartActions';
const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const [quantity, setQuantity] = useState(0);
  const {item} = route.params;

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(subtractQuantity(item.id));
      setQuantity(quantity - 1);
    }
  };
  const handleIncreament = () => {
    if (quantity >= 0) {
      dispatch(addQuantity(item.id));
      setQuantity(quantity + 1);
    }
  };
  const handleAddToCart = () => {
    setQuantity(0);
    dispatch(addToCart(item.id));
    navigation.navigate('mainScreen');
  };
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['#ffffff', '#ffffff', '#BDB5D5']}
          style={styles.linearGradient}>
          <View
            style={{
              borderStyle: 'solid',
              height: '60%',
              borderBottomWidth: 1,
              borderColor: 'gray',
              padding: 3,
            }}>
            <Image source={item.image} style={{width: '100%', height: '90%'}} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'purple',
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingTop: 2,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: 'purple',
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingBottom: 4,
                }}>
                {item.price}
                {'rs'}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 60,
            }}>
            <Text style={{fontSize: 33, fontWeight: 'bold'}}>Quantity:</Text>
            <TouchableOpacity onPress={handleIncreament}>
              <FontAwesomeIcon
                icon={faCirclePlus}
                size={33}
                color={'purple'}
                style={{marginTop: 9, margin: 5}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 33, fontWeight: 'bold', color: 'black'}}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleDecrement}>
              <FontAwesomeIcon
                icon={faCircleMinus}
                size={33}
                color={'purple'}
                style={{marginTop: 9, margin: 5}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={[
                styles.buttons,
                {backgroundColor: 'yellow', marginRight: 20},
              ]}>
              <Text style={{color: 'black'}}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAddToCart}
              style={[styles.buttons, {backgroundColor: '#BDB5D5'}]}>
              <Text style={{color: 'black'}}>Add to Cart</Text>
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
  buttons: {
    width: '30%',
    height: Platform.OS === 'ios' ? '35%' : '45%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: '#000',
  },
});

export default ProductDetails;
