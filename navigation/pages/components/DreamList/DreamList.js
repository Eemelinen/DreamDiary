import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import SingleDream from './SingleDream/SingleDream';

const dreamList = ( props ) => {

  return (
    <FlatList           
      style={styles.listContainer}
      data={props.dreams}
    //   keyExtractor={}
      renderItem={(info) => (
        <SingleDream
          name={info.item.name}
          dreamsign={info.item.dreamsign}
          description={info.item.description}
          date={info.item.date}
          location={info.item.location}
          id={info.item.id}
          key={info.item.id}
          onDreamPressed={() => props.onDreamSelected(info.item.id)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    width: '100%',
  },
})

=======
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import SingleDream from './SingleDream/SingleDream';

const dreamList = ( props ) => {

  return (
    <FlatList           
      style={styles.listContainer}
      data={props.dreams}
    //   keyExtractor={}
      renderItem={(info) => (
        <SingleDream
          name={info.item.name}
          dreamsign={info.item.dreamsign}
          description={info.item.description}
          date={info.item.date}
          location={info.item.location}
          id={info.item.id}
          key={info.item.id}
          onDreamPressed={() => props.onDreamSelected(info.item.id)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    width: '100%',
  },
})

>>>>>>> af871cc0dc0309881efbb36aa83df4b85bda31c7
export default dreamList;