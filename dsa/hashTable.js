class hashTable{
    constructor(size){
        this.items = {};
        this.size = size;
    }

    hash(key){
        let total;
        for(let i = 0; i < key.length; i++){
        total += key.charCodeAt(i)
        }
        return total % this.size;
    }
    insert(key, value){
        let index = this.hash(key);
        let bucket = this.items[index];

        if(bucket){
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push([key,value])
            }
        } else {
            this.items[index] = [[key, value]]
        }
    }

    
}