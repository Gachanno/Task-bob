<script >
  import axios from 'axios';
const valueInput1 = document.querySelector('.input1');
const selection1 = document.querySelector('.selection1');

const valueInput2 = document.querySelector('.input2');
const selection2 = document.querySelector('.selection2');

  const Currency = {
    USD: 'USD',
    RUB: 'RUB',
    EUR: 'EUR',
    GBP: 'GBP',
  }

function convert1 (curr, inputC, ouptC){
    axios.get(`https://v6.exchangerate-api.com/v6/d66be1413f5f72c50cbc7c55/latest/${inputC}`)
.then((RenderCont) =>{
  let out = RenderCont.data.conversion_rates[ouptC] * curr
  
  valueInput2.value = `${out}`
})

}
function convert2 (curr, inputC, ouptC){
    axios.get(`https://v6.exchangerate-api.com/v6/d66be1413f5f72c50cbc7c55/latest/${inputC}`)
.then((RenderCont) =>{
  let out = RenderCont.data.conversion_rates[ouptC] * curr
  
  valueInput1.value = `${out}`
})
}

valueInput2?.addEventListener('input', function(){
  const val = Number(valueInput2.value);
  const currency1 = selection2.value;
  const currency2 = selection1.value

  const res = convert2(val, currency1, currency2)
})

selection2?.addEventListener('change', function(){
  const val = Number(valueInput1.value);
  const currency1 = selection1.value;
  const currency2 = selection2.value

  const res = convert1(val, currency1, currency2)

})




valueInput1?.addEventListener('input', function(){
  const val = Number(valueInput1.value);
  const currency1 = selection1.value;
  const currency2 = selection2.value

  const res = convert1(val, currency1, currency2)

})

selection1?.addEventListener('change', function(){
  const val = Number(valueInput2.value);
  const currency1 = selection2.value;
  const currency2 = selection1.value

  const res = convert2(val, currency1, currency2)
})
</script> 


<main>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

</style>
