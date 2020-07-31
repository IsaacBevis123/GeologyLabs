export default class Node {
	constructor(value, step, is_end, end) {
		this.value = value;
		this.next = [];
		this.step = step;
		this.is_end = is_end;
		this.end = end;
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

	isEnd() {
		return this.is_end;
	}

	getEnd() {
		return this.end;
	}
}