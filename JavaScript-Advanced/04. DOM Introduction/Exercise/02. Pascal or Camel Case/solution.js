function solve()
{
  let textElement=document.querySelector('#text');
  let namingConventionElement=document.querySelector('#naming-convention')
  
  let text=textElement.value;
  let namingConvention=namingConventionElement.value;

  let convertedText=convert(text, namingConvention);

  let resultElement=document.getElementById('result');
  resultElement.textContent=convertedText;

  function convert(text, namingConvention)
  {
    const currentCase={
      'Pascal Case': () =>
        text
        .toLowerCase()
        .split(' ')
        .map(x=>x[0].toUpperCase()+x.slice(1))
        .join(''),
      'Camel Case': () => 
        text
        .toLowerCase()
        .split(' ')
        .map((x, i)=>x=i!==0?x[0].toUpperCase()+x.slice(1):x)
        .join(''),
      default:()=>'Error!'
    };

    return (currentCase[namingConvention]||currentCase.default)();
  }
}