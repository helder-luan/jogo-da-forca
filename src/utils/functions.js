function removeAcentos(str) {
  if (typeof str !== 'string') return str;
  str = str.toLowerCase();
  str = str.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
  str = str.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
  str = str.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
  str = str.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
  str = str.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
  str = str.replace(new RegExp('[Ç]','gi'), 'c');
  return str;
}


export {
  removeAcentos
}