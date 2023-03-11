import {React, useEffect} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Product from './product';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {addProductsToStore} from '../redux/actions/cartActions';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import {products} from '../../assets/products';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout} from '../util/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MainComponent = ({navigation}) => {
  const state = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addProductsToStore(products));
  }, []);
  const renderItem = ({item}) => (
    <View
      style={{
        paddingHorizontal: Platform.OS === 'ios' ? 20 : 24,
        marginBottom: Platform.OS === 'ios' ? 40 : 35,
      }}>
      <Product item={item} />
    </View>
  );
  const handleCart = () => {
    return navigation.navigate('cartScreen');
  };

  return (
    <>
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#BDB5D5']}
        style={styles.linearGradient}>
        <View>
          <View style={styles.statusBar}>
            <TouchableOpacity onPress={handleCart}>
              <FontAwesomeIcon
                icon={faCartShopping}
                size={20}
                color={'purple'}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 20, color: 'purple', fontWeight: 'bold'}}>
              Products
            </Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => handleLogout(state)}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="logout" size={20} color="black" />
                <Text>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 50 : 30,
              marginBottom: Platform.OS === 'ios' ? 10 : 40,
            }}>
            <FlatList renderItem={renderItem} data={products} numColumns={2} />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  grid: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  products: {
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  buttons: {
    height: Platform.OS === 'ios' ? '18%' : '28%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDB5D5',
  },
});

export default MainComponent;
