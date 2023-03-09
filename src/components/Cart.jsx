// import React, {useState} from 'react';
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   Pressable,
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {products} from '../../assets/products';
// import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
// import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {useSelector} from 'react-redux';
// import CardView from './CartView';
// const Cart = ({navigation}) => {
//   const state = useSelector(state => state);
//   const renderItem = ({item}) => (
//     <View>
//       <CardView item={item} />
//     </View>
//   );
//   return (
//     <>
//       <View style={styles.statPPusBar}>
//         <FlatList renderItem={renderItem} data={products} numColumns={1} />
//       </View>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
// });

// export default Cart;
