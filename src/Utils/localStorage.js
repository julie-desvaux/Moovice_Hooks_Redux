const _ = require("lodash");

const localStorageKey = "myList";

const addItem = (myList = [], item) => {
	if (myList === null) {
		myList = [];
	}
	myList.push(item);
	localStorage.setItem(localStorageKey, JSON.stringify(myList));
};

const getItems = () => {
	const myListRaw = localStorage.getItem(localStorageKey);
	const myList = JSON.parse(myListRaw);
	return myList;
};

const removeItem = (myList, id, media_type) => {
	const index = _.remove(myList, (o) => {
		return o.id === id && o.media_type === media_type;
	});
	localStorage.setItem(localStorageKey, JSON.stringify(myList));
};

export { addItem, getItems, removeItem };
