import { createBucket } from "./bucket.mjs";
export const createHashTable = () => {

    let _arr = Array(16).fill(null);
    let _length = 0;


    const _hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= _arr.length; // to avoid having very large numbers
        }
        return hashCode;
    };
    

    const _copyAllArrayElementsToDoubleSizedArray = () => {
        let newArr = Array(_arr.length*2).fill(null);
        let allEntries = entries();
        _arr = newArr;
        _length = 0;
        for(let i = 0; i<allEntries.length; i++){
            set(allEntries[i][0], allEntries[i][1]);
        }
    };

    const _doubleArraySize = () => {
        _copyAllArrayElementsToDoubleSizedArray();
    };
    const _handelTableGrowth = () => {
            _doubleArraySize();
    };

    const _calculateLoadFactor = () => {
        return _length/_arr.length 
    };


    const set = (key, value) => {
       
        let hash = _hash(key);
        if(_arr[hash] == null){
            _arr[hash] = createBucket(key, value);
            _length++;
        }else if(_arr[hash].contains(key) == true){
            let index = _arr[hash].find(key);
            _arr[hash].at(index).content = value; //overwrite it no modification on length
        }else {
            _arr[hash].append(key, value); // adding a node to the bucket in case of collision
            _length++;
        }
        if(_calculateLoadFactor() >= 0.75){
            _handelTableGrowth();
        }
        
    };

    const get = (key) => {
        let hash = _hash(key);
        let bucket = _arr[hash];
        if(bucket == null) return null;
        else if(bucket.size() == 1) return bucket.at(0).content;
        else {
            let index = bucket.find(key);
            if(index == null) return null;
            else return bucket.at(index).content;
        };
    };


    const printHashTableArray = () => {
        _arr.forEach((el) => { 
            if(el != null) console.log(el.toString());
            else console.log(el);
        });
    };

    const remove = (key) => {
        let hash = _hash(key);
        if(_arr[hash]){
            _arr[hash].remove(key);
        }else {
            throw new Error("no such key");
        }
        
    };
    const length = () => {return _length};
    const clear = () => {
        _arr = Array(16).fill(null) 
        _length = 0;
    };
    const keys = () => {
        let array = [];
        let myEntries = entries();
        for (let i = 0; i<myEntries.length; i++ ){
            array.push(myEntries[i][0]);
        }
        return array;
    };
    const values = () => {
        let array = [];
        let myEntries = entries();
        for (let i = 0; i<myEntries.length; i++ ){
            array.push(myEntries[i][1]);
        }
        return array;
    };
    const size = () => {return _arr.length};
    const entries = () => {
        let array = [];
        for (let i = 0; i<_arr.length; i++){
            if(_arr[i] != null){
                array = array.concat(_arr[i].toArr());
                
            }
        }
        return array;
    };

    return {set, get, remove, length, clear, keys, values, entries, printHashTableArray, size};
}