function ballCollector(detritus) {
  let sack = {
    weight: 0
  };
  let tennisBalls = detritus.filter((element) => {
    return element === 58;
  });
  let ballWeight = (tennisBalls.length)*58;
  sack.weight = ballWeight;
  return sack;
}