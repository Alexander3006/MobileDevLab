import * as React from 'react';
import {
  FlatList,
} from 'react-native';
import {Header} from 'react-native-elements';
import {useState} from 'react';
import {ImagesGrid} from '../components/ImagesGrid';
import * as ImagePicker from 'react-native-image-picker';

const chooseImage = (addImage: (a: string) => void) => {
  const options = {
    noData: true,
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    if (!response.uri) return;
    addImage(response.uri);
  });
};

export const Images = () => {
  const [images, setImages] = useState<string[][]>([[]]);

  const addImage = (image: string) => {
    const lastImageSet = images.pop() ?? [];
    if (lastImageSet.length < 7) {
      const data = [...lastImageSet, image];
      setImages([...images, data]);
      return;
    }
    setImages([...images, lastImageSet, [image]]);
  };

  const renderItem = ({item, index}: any) => {
    return <ImagesGrid images={item} key={index} />;
  };
  return (
    <>
      <Header
        backgroundColor={'white'}
        rightComponent={{icon: 'add', onPress: () => chooseImage(addImage)}}
      />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );
};
