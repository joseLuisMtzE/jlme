function triplets(arr, n){
        arr.sort();
        var l = arr.length;
        for (var i = 0; i < l; i++) {
            var j = i + 1,
                k = l - 1;
            while (j < k) {
                if (arr[i] + arr[j] + arr[k] < n) {
                    j++;
                } else if (arr[i] + arr[j] + arr[k] > n) {
                    k--;
                } else {
                    console.log(arr[i] + "," + arr[j] + "," + arr[k]);
                    j++;
                    k--;
                }
            }
        }
        return true;
}
var arr = [30, -40, -20, -10, 40, 0, 10, 5];
    triplets(arr, 0);