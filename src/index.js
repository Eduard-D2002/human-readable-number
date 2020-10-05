module.exports = function toReadable (number) {
   const names1 = {
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six',
      7 : 'seven',
      8 : 'eight',
      9 : 'nine',
      0 : 'zero',
   }
   const names2 = {
      10 : 'ten',
      11 : 'eleven',
      12 : 'twelve',
      13 : 'thirteen',
      14 : 'fourteen',
      15 : 'fifteen',
      16 : 'sixteen',
      17 : 'seventeen',
      18 : 'eighteen',
      19 : 'nineteen',
      2 : 'twenty',
      3 : 'thirty',
      4 : 'forty',
      5 : 'fifty',
      6 : 'sixty',
      7 : 'seventy',
      8 : 'eighty',
      9 : 'ninety',
      0 : ``,
   }
   number = number.toString();
   let str = '';
   if (number.length === 1){
      str = names1[`${number}`];
   }
   if(number.length === 2){
      if(number[0] == 1){
         str = names2[`${number}`];
      } else if(number[1] == '0'){
         str = names2[`${number[0]}`];
      } else {
         str = names2[`${number[0]}`] + ' ' + names1[`${number[1]}`]
      }
   }
   if(number.length === 3){
      if(number[0] != '0' && number[1] != '0' && number[2] != '0' && number[1] != '1' ) {
         str = names1[`${number[0]}`] + ' hundred ' +  names2[`${number[1]}`] + ' ' + names1[`${number[2]}`];
      }else if (number[1] == '1') {
         str = names1[`${number[0]}`] + ' hundred ' + names2[`${number.slice(1)}`];
      } else if (number[2] == '0' && number[1] == '0') {
         str = names1[`${number[0]}`] + ' hundred';
      } else if (number[2] == '0') {
         str = names1[`${number[0]}`] + ' hundred ' + names2[`${number[1]}`];
      } else if (number[1] == '0') {
         str = names1[`${number[0]}`] + ' hundred ' + names1[`${number[2]}`];
      }
       
      
      
   }
   return str;
}
