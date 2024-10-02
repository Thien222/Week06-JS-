import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/giacchuyen1.png'),
  },
  {
    id: '2',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/daynguon1.png'),
  },
  {
    id: '3',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/dauchuyendoipsps21.png'),
  },
  {
    id: '4',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/dauchuyendoi1.png'),
  },
  {
    id: '5',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/carbusbtops21.png'),
  },
  {
    id: '6',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️⭐️ (15)',
    price: '69.900 đ',
    discount: '-39%',
    imageUrl: require('../assets/daucam1.png'),
  },
];

const ProductItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productStars}>{item.star}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productDiscount}>{item.discount}</Text>
        </View>
      </View>
    </View>
  );
};

export default function Screen4b() {
  return (
    <View style={styles.container}>
      {/* Top Bar with Search */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Dây cáp usb"
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        numColumns={2} // Two columns
        columnWrapperStyle={styles.columnWrapper} // Style for columns
        contentContainerStyle={styles.flatListContent} // Adjusts overall padding
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="bars" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 35,
    color: '#000',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    width: '47%', // Ensure proper spacing between columns
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingVertical: 10, // Space between the top and bottom of the FlatList
  },
  itemImage: {
    width: '100%',
    height: 80,
    borderRadius: 4,
  },
  textContainer: {
    marginTop: 5,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  productStars: {
    fontSize: 12,
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  productDiscount: {
    fontSize: 12,
    color: '#ff0000',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingVertical: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
