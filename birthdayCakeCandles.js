function birthdayCakeCandles (candles) {
    //the maximum height on the candles are 4.
    //the person will only be able to blow out the tallest of the candles.
   
    //step 1:
    let maxHeight = 0;
    for (let index = 0; index < candles.length; index++) {
        if (candles[index] > maxHeight) {
            maxHeight = candles[index];
        } 
    }
    let tallestCandles = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            tallestCandles++;
        }
        
    }
return tallestCandles;
}