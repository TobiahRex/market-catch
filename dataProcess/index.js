const buildSignals = require('./buildSignals');
const analyzeSignals = require('./analyzeSignals');

buildSignals((err, signals) => {
  if (err) throw new Error(err);

  analyzeSignals(signals);
});
