export default class Node {
	constructor(value, step) {
		this.value = value;
		this.next = [];
		this.step = step;
	}

	setNext(newNode) {
		this.next.push(newNode);
		return this
	}

	getNext(i) {
		return this.next[i];
	}

	getAllNext(){
		return this.next;
	}

	get(){
		return this;
	}

	getValue(){
		return this.value;
	}

	getStep(){
		return this.step;
	}
}