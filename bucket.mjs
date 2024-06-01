import { createNode} from "./ListNode.mjs";
export const createBucket = (firstNodeKey ,firstNodeValue) => {
    let firstNode = createNode(null, firstNodeKey ,firstNodeValue);
    let _head = Object.assign({}, firstNode);
    let _tail = Object.assign({}, firstNode);
    let _size = 1;
    const append = (key, value) => {
        const newNode = createNode(null, key, value);
        (_size == 1)? _head.next = newNode : _tail.next = newNode;
        _tail = newNode;
        _size++;
    };

    
    const size = () => {return _size;};
    const toString = () => {
        if (_head == null) return null;
        let pointedAtNode = _head;
        let finalString = ""; 
        while(pointedAtNode != null){
            finalString += `[${pointedAtNode.key}, ${pointedAtNode.content}] --> `;
            pointedAtNode = pointedAtNode.next;
        };
        finalString += "null";
        return finalString;
    };

    const toArr = () => {
        if (_head == null) return null;
        let pointedAtNode = _head;
        let finalArray = []; 
        
        while(pointedAtNode != null){
            let smallArray = []
            smallArray.push(pointedAtNode.key);
            smallArray.push(pointedAtNode.content);
            finalArray.push(smallArray);
            pointedAtNode = pointedAtNode.next;
        };
        
        return finalArray;
    };

    const at = (index) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(i == index) return pointedAtNode;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        throw new Error("index out of bound");
    };

    const find = (key) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(key == pointedAtNode.key) return i;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        return null;
    };
    const contains = (key) => {
        let pointedAtNode = _head;
        while(pointedAtNode != null){
            if(key == pointedAtNode.key) return true;
            pointedAtNode = pointedAtNode.next;
        };
        return false;
    };

    const removeAt = (index) => {
        if(index>_size) throw new Error('Index out of range for inserting!');
        else if(index == _size-1) {pop(); return;}
        if(index != 0){
            let prevNode = at(index-1);
            let nextNode = at(index+1);
            prevNode.next = nextNode;
        }else {
            let nextNode = at(index+1);
            _head = nextNode;
        }
        _size--;
    };

    const remove = (key) => {
        const index = find(key);
        if(index == null) throw new Error("Not Found!")
        removeAt(index);
    };
    
    const pop = () => {
        const value = Object.assign({}, _tail);
        if(_size == 1) {_head = null; _tail = null; return;}
        let newTail = at(_size-2);
        newTail.next = null;
        _tail = newTail;
        _size--;
        return value;
    };

    return {remove, size, append, contains, toString, find, at, toArr};

};