//Create a stopwatch object that has four properties and three methods

let watch = {};

watch.brand = 'nike';
watch.color = 'black';
watch.shape = 'round';
watch.size = 'large';

watch.start = function(){
    console.log('watch starting');
}

watch.stop = function(){
    console.log('stoping');
}

watch.sayBrand = function(){
    console.log(watch.brand)
}