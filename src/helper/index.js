function filtered(items, options, searchValue) {
  let keys = Object.keys(options);
  let count = 0;
  let result = [];
  let temp = [];
  let search_key;

  // if search
  if (searchValue) {
    search_key = Object.keys(searchValue)[0];
  }

  function filter_items(array) {
    return array.filter(item => {
      console.log(Object.values(options[keys[count]]));
      return (
        Object.values(options[keys[count]])
          .toString()
          .toLowerCase()
          .indexOf(item[keys[count]].toString().toLowerCase()) !== -1
      );
    });
  }

  function search(array) {
    let res = array.filter(item => {
      return (
        item[search_key]
          .toString()
          .toLowerCase()
          .indexOf(searchValue[search_key].toString().toLowerCase()) > -1
      );
    });
    return res;
  }

  if (
    Object.values(options)[0].length !== 0 ||
    Object.values(options)[1].length !== 0
  ) {
    console.log("keys", keys);
    if (keys.length == 1) {
      result = filter_items(items);
    } else {
      for (let i = 0; i < keys.length; i++) {
        if (i == 0) {
          if (Object.values(options)[i].length == 0) {
            result = items;
          } else {
            temp = filter_items(items);
          }
        } else {
          console.log("i is", i);
          if (Object.values(options)[i].length == 0) {
            result = temp;
          } else {
            result = filter_items(temp);
          }
        }
        count++;
      }
    }
  } else {
    if (searchValue) {
      return search(items);
    } else {
      return items;
    }
  }

  if (searchValue) {
    return search(result);
  } else {
    return result;
  }
}

export { filtered };
